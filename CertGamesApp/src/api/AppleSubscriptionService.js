// src/api/AppleSubscriptionService.js
import {
  initConnection,
  getProducts,
  getSubscriptions,
  requestSubscription,
  getAvailablePurchases,
  finishTransaction,
  clearTransactionIOS,
  validateReceiptIos,
  getPurchaseHistory
} from 'react-native-iap';
import { Platform } from 'react-native';
import axios from 'axios';
import { API } from './apiConfig';
import * as SecureStore from 'expo-secure-store';

// Update this to match your Apple Connect configuration
export const SUBSCRIPTION_PRODUCT_ID = 'com.certgames.app.monthly_premium';

class AppleSubscriptionService {
  // Initialize the connection to the store
  async initializeConnection() {
    try {
      if (Platform.OS !== 'ios') return false;
      
      console.log('Initializing IAP connection...');
      const result = await initConnection();
      console.log("IAP connection initialized:", result);
      return true;
    } catch (error) {
      console.error('Failed to initialize IAP connection:', error);
      // Add more detailed error information
      if (error.code) {
        console.error('Error code:', error.code);
      }
      if (error.message) {
        console.error('Error message:', error.message);
      }
      return false;
    }
  }

  // Get available subscriptions
  async getAvailableSubscriptions() {
    try {
      if (Platform.OS !== 'ios') return [];
      
      // Ensure connection is initialized
      await this.initializeConnection();
      
      console.log("Requesting subscriptions for product ID:", SUBSCRIPTION_PRODUCT_ID);
      
      // Fetch available subscriptions - corrected method call with proper parameter format
      const subscriptions = await getSubscriptions({
        skus: [SUBSCRIPTION_PRODUCT_ID]
      });
      
      console.log("Available subscriptions:", subscriptions);
      return subscriptions;
    } catch (error) {
      console.error('Failed to get subscriptions:', error);
      // Return error info instead of throwing
      return { error: error.message, code: error.code };
    }
  }

  // Purchase a subscription
  async purchaseSubscription(userId) {
    try {
      if (Platform.OS !== 'ios') throw new Error('Only available on iOS');
      
      // Ensure connection is initialized
      await this.initializeConnection();
      
      // Check if subscription is available
      const subscriptions = await this.getAvailableSubscriptions();
      if (subscriptions.error) {
        throw new Error(subscriptions.error);
      }
      
      if (!subscriptions || subscriptions.length === 0) {
        throw new Error('No subscription products are available');
      }
      
      console.log("Requesting subscription purchase for:", SUBSCRIPTION_PRODUCT_ID);
      
      // Request the subscription purchase
      const result = await requestSubscription({
        sku: SUBSCRIPTION_PRODUCT_ID,
        andDangerouslyFinishTransactionAutomaticallyIOS: false
      });
      
      console.log("Purchase result:", result);
      
      // Validate receipt with Apple and our backend
      if (result && result.transactionReceipt) {
        await this.verifyReceiptWithBackend(userId, result.transactionReceipt);
        
        // Finish the transaction
        if (result.transactionId) {
          await finishTransaction({ 
            transactionId: result.transactionId,
            isConsumable: false
          });
        }
        
        return {
          success: true,
          transactionId: result.transactionId,
          productId: result.productId
        };
      }
      
      return { success: false, error: 'No transaction receipt found' };
    } catch (error) {
      console.error('Failed to purchase subscription:', error);
      return { success: false, error: error.message };
    }
  }

  // Verify purchase receipt with our backend
  async verifyReceiptWithBackend(userId, receiptData) {
    try {
      console.log("Verifying receipt with backend for user:", userId);
      
      const response = await axios.post(API.SUBSCRIPTION.VERIFY_RECEIPT, {
        userId: userId,
        receiptData: receiptData,
        platform: 'apple',
        productId: SUBSCRIPTION_PRODUCT_ID
      });
      
      console.log("Receipt verification response:", response.data);
      return response.data;
    } catch (error) {
      console.error('Failed to verify receipt with backend:', error);
      return { success: false, error: error.message };
    }
  }

  // Check subscription status
  async checkSubscriptionStatus(userId) {
    try {
      console.log("Checking subscription status for userId:", userId);
      
      // First try to get cached subscription status
      let cachedSubscriptionStatus = null;
      try {
        const cachedStatusString = await SecureStore.getItemAsync(`subscription_status_${userId}`);
        if (cachedStatusString) {
          cachedSubscriptionStatus = JSON.parse(cachedStatusString);
          console.log("Found cached subscription status:", cachedSubscriptionStatus);
          
          // Check if cache is fresh (less than 1 hour old)
          const cacheTime = cachedSubscriptionStatus.timestamp || 0;
          const now = Date.now();
          const cacheAge = now - cacheTime;
          const CACHE_MAX_AGE = 60 * 60 * 1000; // 1 hour in milliseconds
          
          if (cacheAge > CACHE_MAX_AGE) {
            console.log("Cached subscription status is stale, will try to refresh");
            // Continue to backend check, but don't return immediately
          } else if (cachedSubscriptionStatus.subscriptionActive) {
            console.log("Using fresh cached subscription status (active subscription)");
            // Return immediately if cache is fresh and indicates active subscription
            return cachedSubscriptionStatus;
          }
        }
      } catch (cacheError) {
        console.error("Error reading cached subscription status:", cacheError);
        // Continue without cache
      }
      
      // Then try to get the status from the backend
      let backendStatus;
      let backendAvailable = true;
      try {
        const response = await axios.get(
          `${API.SUBSCRIPTION.CHECK_STATUS}?userId=${userId}`
        );
        backendStatus = response.data;
        console.log("Backend subscription status:", backendStatus);
        
        // Cache the backend status for future use
        try {
          await SecureStore.setItemAsync(
            `subscription_status_${userId}`,
            JSON.stringify({
              ...backendStatus,
              timestamp: Date.now()
            })
          );
        } catch (cacheSetError) {
          console.error("Error saving subscription status to cache:", cacheSetError);
        }
      } catch (error) {
        console.warn('Backend subscription check failed:', error.message);
        console.log('Falling back to local receipt check');
        backendStatus = cachedSubscriptionStatus || { subscriptionActive: false };
        backendAvailable = false;
        
        // If it's a 404, we should alert developers during testing
        if (error.response && error.response.status === 404) {
          console.error('❌ API ENDPOINT NOT FOUND: Please check that your backend routes match the API config');
        }
      }
      
      // If backend confirms active subscription or we're offline but have a cached active status, return that
      if (backendStatus.subscriptionActive) {
        return backendStatus;
      }
      
      // If backend is unavailable and we have cached status, rely on that more heavily
      if (!backendAvailable && cachedSubscriptionStatus && cachedSubscriptionStatus.subscriptionActive) {
        console.log("Backend unavailable but cached status indicates active subscription");
        return cachedSubscriptionStatus;
      }
      
      // If backend says no subscription or is unavailable, check local receipts as fallback
      if (Platform.OS === 'ios') {
        try {
          console.log("Checking local App Store receipts");
          const purchases = await getAvailablePurchases();
          console.log(`Found ${purchases.length} local purchases`);
          
          // Filter for our subscription product
          const activeSubscriptions = purchases.filter(
            purchase => purchase.productId === SUBSCRIPTION_PRODUCT_ID
          );
          
          if (activeSubscriptions.length > 0) {
            console.log("Found active subscription in local receipts");
            
            // We found an active subscription receipt on the device
            const localActiveStatus = { 
              subscriptionActive: true, 
              subscriptionStatus: 'active',
              subscriptionPlatform: 'apple',
              source: 'local_receipt'
            };
            
            // Cache this status
            try {
              await SecureStore.setItemAsync(
                `subscription_status_${userId}`,
                JSON.stringify({
                  ...localActiveStatus,
                  timestamp: Date.now()
                })
              );
            } catch (cacheError) {
              console.error("Error caching local receipt status:", cacheError);
            }
            
            // If backend is available, try to sync this receipt
            if (backendAvailable) {
              // We found an active subscription receipt on the device
              // Verify with backend to reconcile any discrepancy
              const latestPurchase = activeSubscriptions[0];
              
              try {
                await this.verifyReceiptWithBackend(userId, latestPurchase.transactionReceipt);
                
                // Check status again after verification
                const refreshedStatus = await this.getSubscriptionStatusFromBackend(userId);
                return refreshedStatus;
              } catch (verifyError) {
                console.error("Error verifying receipt with backend:", verifyError);
                // Still return active based on local receipt
                return localActiveStatus;
              }
            } else {
              // Backend unavailable, trust the local receipt
              return localActiveStatus;
            }
          } else {
            console.log("No active subscriptions found in local receipts");
          }
        } catch (purchasesError) {
          console.error("Error checking local purchases:", purchasesError);
        }
      }
      
      // If we get here, no active subscription was found
      return backendStatus;
    } catch (error) {
      console.error('Failed to check subscription status:', error);
      return { 
        subscriptionActive: false, 
        error: error.message,
        errorCode: error.code
      };
    }
  }
  // Get subscription status from backend
  async getSubscriptionStatusFromBackend(userId) {
    try {
      const response = await axios.get(
        `${API.SUBSCRIPTION.CHECK_STATUS}?userId=${userId}`
      );
      return response.data;
    } catch (error) {
      console.error('Failed to get subscription status from backend:', error);
      return { subscriptionActive: false, error: error.message };
    }
  }

  // Restore purchases
  async restorePurchases(userId) {
    try {
      if (Platform.OS !== 'ios') throw new Error('Only available on iOS');
      
      // Ensure connection is initialized
      await this.initializeConnection();
      
      // Get available purchases (past and current)
      const purchases = await getAvailablePurchases();
      
      // Filter for our subscription product
      const subscriptionPurchases = purchases.filter(
        purchase => purchase.productId === SUBSCRIPTION_PRODUCT_ID
      );
      
      if (subscriptionPurchases.length > 0) {
        // Found previous purchases, verify with backend
        const latestPurchase = subscriptionPurchases[0];
        await this.verifyReceiptWithBackend(userId, latestPurchase.transactionReceipt);
        
        return {
          success: true,
          message: 'Subscription restored successfully',
          purchase: latestPurchase
        };
      }
      
      return {
        success: false,
        message: 'No previous subscriptions found to restore'
      };
    } catch (error) {
      console.error('Failed to restore purchases:', error);
      return { success: false, error: error.message };
    }
  }

  // Clean up transaction history
  async clearTransactions() {
    try {
      if (Platform.OS === 'ios') {
        await clearTransactionIOS();
      }
    } catch (error) {
      console.error('Failed to clear transactions:', error);
    }
  }
}

export default new AppleSubscriptionService();
