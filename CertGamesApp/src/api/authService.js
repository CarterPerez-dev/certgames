// src/api/authService.js
import apiClient from './apiClient';
import { API } from './apiConfig';
import * as SecureStore from 'expo-secure-store';

export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post(API.AUTH.LOGIN, credentials);
    
    if (response.data && response.data.user_id) {
      // Store user ID securely
      await SecureStore.setItemAsync('userId', response.data.user_id);
    }
    
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post(API.AUTH.REGISTER, userData);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
    throw error;
  }
};

export const fetchUserData = async (userId) => {
  try {
    const response = await apiClient.get(API.USER.DETAILS(userId));
    return response.data;
  } catch (error) {
    console.error('Fetch user error:', error.response?.data || error.message);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await SecureStore.deleteItemAsync('userId');
    // No need to call backend logout endpoint if you're using stateless JWT auth
    // If you want to invalidate server-side session, uncomment:
    // await apiClient.post('/api/logout');
    return { success: true };
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

export const claimDailyBonus = async (userId) => {
  try {
    const response = await apiClient.post(API.USER.DAILY_BONUS(userId));
    return response.data;
  } catch (error) {
    console.error('Daily bonus error:', error.response?.data || error.message);
    throw error;
  }
};
