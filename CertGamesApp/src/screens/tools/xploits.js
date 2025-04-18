// src/screens/tools/xploits.js
export const VULNERABILITIES = [
  "SQL Injection",
  "Blind SQL Injection",
  "Union-based SQL Injection",
  "Error-based SQL Injection",
  "Time-based SQL Injection",
  "Stored XSS",
  "Reflected XSS",
  "DOM-based XSS",
  "CSRF (Cross-Site Request Forgery)",
  "LFI (Local File Inclusion)",
  "RFI (Remote File Inclusion)",
  "Command Injection",
  "LDAP Injection",
  "XML External Entity (XXE)",
  "Server-Side Request Forgery (SSRF)",
  "Open Redirect",
  "Directory Traversal",
  "Buffer Overflow",
  "Format String Vulnerability",
  "Insecure Deserialization",
  "Clickjacking",
  "Cross-Site Scripting via JSONP",
  "Header Injection",
  "HTTP Response Splitting",
  "Path Traversal",
  "Host Header Injection",
  "SMTP Injection",
  "XPath Injection",
  "FTP Bounce Vulnerability",
  "PHP Object Injection",
  "Race Conditions",
  "Session Fixation",
  "HTTP Parameter Pollution",
  "Subdomain Takeover",
  "XXE with DTD",
  "Template Injection",
  "CRLF Injection",
  "Unvalidated Redirects and Forwards",
  "Padding Oracle Vulnerability",
  "Insecure Cryptographic Storage",
  "Information Disclosure",
  "Broken Access Control",
  "Insecure Direct Object References",
  "Cross-Site Script Inclusion",
  "Memory Corruption",
  "Integer Overflow",
  "Heap Overflow",
  "Stack Overflow",
  "Use-After-Free",
  "Privilege Escalation",
  "XML Injection",
  "SSJS Injection",
  "Command Injection via RCE",
  "Server-Side Template Injection",
  "Prototype Pollution",
  "Cross-Origin Resource Sharing Misconfigurations",
  "Clickjacking via Frame Injection",
  "Cache Poisoning",
  "HTTP Request Smuggling",
  "DNS Rebinding",
  "Man-in-the-Middle Vulnerability",
  "JQuery Prototype Pollution",
  "Remote Code Execution via Deserialization",
  "HTTP Host Header Vulnerability",
  "Broken Session Management",
  "Weak Password Recovery Mechanisms",
  "Insufficient SSL/TLS Validation",
  "Misconfigured S3 Buckets",
  "Misconfigured CORS leading to data exfiltration",
  "Stored CSRF",
  "Cross-Site Flashing",
  "Authentication Bypass via SQLi",
  "Race Condition in File Upload",
  "Object Injection in PHP apps",
  "Deserialization in Java apps",
  "Log4Shell (CVE-2021-44228)",
  "Shellshock (CVE-2014-6271)",
  "Heartbleed (CVE-2014-0160)",
  "SambaCry",
  "BlueKeep (CVE-2019-0708)",
  "EternalBlue (MS17-010)",
  "Spectre",
  "Meltdown",
  "ZombieLoad",
  "L1 Terminal Fault",
  "Foreshadow",
  "Rowhammer",
  "Cache Side-Channel Vulnerabilities",
  "Timing Vulnerabilities on Crypto",
  "BREACH Vulnerability",
  "CRIME Vulnerability",
  "POODLE Vulnerability",
  "DROWN Vulnerability",
  "FREAK Vulnerability",
  "Reflection Vulnerability on Cryptosystems",
  "DES Weak Key Vulnerability",
  "Insecure YAML Deserialization",
  "Cross-Site WebSocket Hijacking",
  "Shattered Vulnerability on SHA-1",
  "MD5 Collision Adversarial Tests",
  "MD5 Collision Vulnerabilities",
  "Resource Exhaustion (DoS Vulnerabilities)",
  "Zip Slip Vulnerability",
  "HQL Injection",
  "CSV Injection",
  "SSRF via DNS Pinning",
  "SSTI in Django Templates",
  "Injection via .htaccess Misconfigurations",
  "Insecure File Permissions",
  "Unencrypted Sensitive Data at Rest",
  "Exposed AWS Keys in Code",
  "Exposed GCP Credentials in Git Repos",
  "Privilege Escalation via SUID Binaries",
  "Kernel Demonstrations (DirtyCow)",
  "Symbolic Link (Symlink) Vulnerabilities",
  "DNS Cache Poisoning",
  "DNS Amplification Vulnerabilities",
  "Rogue Access Point Vulnerabilities",
  "ARP Spoofing Vulnerability",
  "SMB Relay Vulnerabilities",
  "NTLM Relay Vulnerabilities",
  "Kerberoasting (Windows Kerberos Vulnerability)",
  "ASREP Roasting",
  "Pass-the-Hash Vulnerabilities",
  "Pass-the-Ticket Vulnerabilities",
  "Golden Ticket Vulnerabilities",
  "Silver Ticket Vulnerabilities",
  "Skeleton Key Vulnerabilities",
  "Insecure JWT Implementations",
  "Signature Stripping Vulnerability on JWT",
  "Cross-Tenant Data Leakage in SaaS",
  "Pivoting via Compromised Hosts",
  "ICMP Tunneling",
  "SSH Tunneling for Data Exfiltration",
  "SSL Stripping Vulnerability",
  "SSL Renegotiation Vulnerability",
  "Insecure FTP Configurations",
  "Telnet-based Vulnerabilities",
  "RDP Demonstration Scenario (CVE-based RCEs)",
  "Insecure SNMP Configurations",
  "Deserialization in .NET",
  "XXE with Parameter Entities",
  "Broken Authentication in SAML",
  "OpenSAMLSIG Vulnerability",
  "Key-Reinstallation Vulnerabilities (KRACK) on WPA2",
  "Evil Twin AP Vulnerabilities",
  "Watering Hole Vulnerabilities",
  "Supply Chain Vulnerabilities",
  "Malicious Dependency Injection (e.g. npm packages)",
  "Exposed Docker Daemon",
  "Insecure Kubernetes Configurations",
  "Kubernetes API Server Demonstration",
  "Etcd Database Exposure",
  "Container Breakout Demonstrations",
  "Runtime Injection in Serverless Environments",
  "Insecure Serverless Functions Permissions",
  "SSRF via Cloud Metadata",
  "Poison Null Byte in File Paths",
  "Insecure Handling of `/proc` filesystem",
  "Directory Indexing Vulnerability",
  "Hidden Form Field Tampering",
  "Session Puzzling Vulnerabilities",
  "Reflected File Download Vulnerability",
  "Backdoor in Web Application",
  "MITM via WPAD",
  "Exposed Redis Instances",
  "MongoDB No-Auth Access",
  "Insecure Elasticsearch Cluster",
  "Insecure Memcached Servers",
  "Clickjacking via Flash Embeds",
  "Insecure Deserialization in Ruby YAML",
  "Insecure Deserialization in Python pickle",
  "Insecure Deserialization in Java Hessian",
  "Billion Laughs Vulnerability (XXE expansion)",
  "Parameter Pollution in SOAP",
  "Malicious SVG Injection",
  "XSLT Injection",
  "Insecure WSDL Exposure",
  "CSRF with JSON-based Requests",
  "Deserialization in AMF",
  "Deserialization in PHP unserialize()",
  "Covert Timing Channels",
  "Chained Demonstrations (Multi-step Vulnerabilities)",
  "Shiro Authentication Bypass",
  "Apache Struts RCE (CVE-2017-5638)",
  "PhpMyAdmin RCE",
  "MySQL UDF Demonstration",
  "MSSQL xp_cmdshell Demonstrations",
  "Oracle TNS Poisoning",
  "Postgres Copy Demonstrations",
  "Misconfigured WP REST APIs",
  "Exposed Jenkins Consoles",
  "Exposed JMX Interfaces",
  "JNDI Injection (Log4Shell Type)",
  "PHP ZipArchive Deserialization",
  "Spring4Shell (CVE-2022-22965)",
  "Expression Language Injection",
  "SSRF via PDF Generation Tools",
  "SSRF via Image Libraries",
  "Blind SSRF via DNS Timing",
  "Email Header Injection",
  "LDAP Injection via Search Filters",
  "Serialization Vulnerabilities on IoT Devices",
  "Buffer Overflows in Firmware",
  "Hardcoded Credentials in IoT",
  "Command Injection in Router Web Interfaces",
  "UPnP Demonstration Scenario on Home Routers",
  "ICS/SCADA Modbus Vulnerabilities",
  "DNP3 Protocol Vulnerabilities",
  "OPC UA Demonstrations",
  "BACnet Vulnerabilities",
  "VxWorks OS Vulnerabilities",
  "Wind River TCP/IP Stack Flaws",
  "Ripple20 (Treck TCP/IP Stack) Vulnerabilities",
  "Uncontrolled Format String in C Applications",
  "Stack Canary Bypass",
  "SafeSEH Bypass",
  "ASLR Bypass",
  "DEP Bypass with ROP Chains",
  "Web Cache Poisoning",
  "CRLF Injection in Redis",
  "CRLF Injection in InfluxDB",
  "Insecure Cross-Domain JSONP endpoints",
  "DNS TXT Record Injection",
  "Exposed Management Interfaces",
  "SMTP Open Relay",
  "MTA Command Injection",
  "IMAP/POP3 Injection",
  "XSRF in SOAP Services",
  "Insecure CSR Generation",
  "Insecure Key Storage in Source Control",
  "Side-Channel via CPU Cache",
  "Rowhammer-induced Bitflips to Escalate Privileges",
  "Thunderbolt DMA Vulnerabilities",
  "Firewire DMA Vulnerabilities",
  "PCI-based Vulnerabilities",
  "Bluetooth Replay Vulnerabilities",
  "Wi-Fi Deauthentication Vulnerability",
  "LTE Network Vulnerabilities",
  "5G Core Network Misconfigurations",
  "VoIP SIP Injection",
  "H.323 Injection",
  "SS7 Vulnerabilities on Telecom Networks",
  "Insecure Industrial Protocol Gateways",
  "Spear Phishing Code Injection",
  "Social Engineering-based Credential Harvesting",
  "Rogue DHCP Server Vulnerabilities",
  "Network Time Protocol Manipulation",
  "GSM Base Station Spoofing",
  "Rogue DNS Server Vulnerabilities",
  "WLAN Krack Vulnerabilities",
  "Supply Chain Vulnerabilities via Dependencies",
  "Resource Injection in Web Framework",
  "Abusing JWT Algorithms (e.g. 'none')",
  "Re-submission of Nonces",
  "Signature Forging in OAuth",
  "Cookie Forcing Vulnerability",
  "Marlinspike Vulnerability",
  "Traffic Injection in TOR",
  "RepoJacking on GitHub",
  "Typosquatting Package Demonstrations",
  "Malicious Browser Extensions",
  "Demonstration Scenario of Data URI",
  "Exploitation of \"javascript:\" URLs",
  "Path-based SSRF",
  "Insecure Handling of 3XX Redirects",
  "Fragment Identifier Injection",
  "IDOR via Secondary Keys",
  "IDOR in GraphQL Queries",
  "GraphQL Query Injection",
  "GraphQL Introspection Abuse",
  "Binary Planting",
  "DLL Hijacking",
  "Abusing PATH Environment Variable",
  "Insecure Shell Escape in Scripts",
  "CSV Formula Injection",
  "Insecure Rancher Configurations",
  "Command Injection in Helm Charts",
  "Insecure Istio Config",
  "HTTP/2 Demonstrations (HPACK Bomb)",
  "ACME Protocol Demonstration",
  "SAML Response Tampering",
  "SPNEGO/Kerberos Downgrade Vulnerabilities",
  "OAuth Implicit Flow Vulnerabilities",
  "Confused Deputy Problem",
  "SSRF via SSRF Blacklist Bypass",
  "BGP Route Injection",
  "Locating Hidden Admin Panels",
  "Demonstration Scenario Unquoted Service Paths on Windows",
  "Malicious Link in Intranet",
  "Cookie Tossing Vulnerability",
  "Abusing WebDAV Methods",
  "Abusing OPTIONS Method",
  "Cross-Site Script Inclusion with JSONP",
  "File Upload Bypass via Content-Type",
  "Filename Obfuscation in Upload",
  "Storing Code in EXIF Data",
  "RCE via ImageMagick (ImageTragick)",
  "SSRF via Redis/HTTP",
  "Misinformed JSON Parsing Demonstration",
  "Insecure Handling of Null Characters",
  "Abusing ASCII Control Characters",
  "Stenographic Channels in Images",
  "Exfiltration via DNS Tunneling",
  "Exfiltration via ICMP Tunneling",
  "Exfiltration via Covert TCP Channels",
  "Insecure Handling of Signals in UNIX",
  "Renegotiation Vulnerability in TLS",
  "SNI Injection Vulnerability",
  "X.509 Parsing Vulnerabilities",
  "Compromising Weak Ciphersuites",
  "Cross-Host Vulnerabilities via Shared Hosting",
  "Misuse of .git/.svn/.hg Folders on Web Servers",
  "Reverse Proxy Misdirection",
  "WAF Bypass Vulnerabilities",
  "Forced Browsing Vulnerabilities",
  "JSON Injection via callback parameters",
  "Insecure Handling of JWT Kid Parameter",
  "HTTP Desync Vulnerabilities",
  "Abusing Vary Headers in HTTP",
  "WebSocket Injection",
  "Exposed DEBUG endpoints",
  "API Key Leakage via Referer Headers",
  "SSRF via File:// Protocol",
  "Insecure Access to .env Files",
  "Insecure Access to Backup Files (.bak)",
  "Insecure Handling of .DS_Store Files",
  "DNS Reverse Lookup Vulnerability",
  "Abusing HEAD Method",
  "Cross-Site Request Forgery with Flash",
  "JSON Hijacking",
  "Reverse Tabnabbing",
  "Mousejacking Vulnerabilities",
  "Physical Vulnerabilities: USB Drops",
  "Rogue Charging Stations Vulnerabilities",
  "Browser Extension CSRF",
  "DOM Clobbering Vulnerabilities",
  "Mutation XSS",
  "Insecure Filter Regex",
  "Script Gadget Injection in Templates",
  "Insecure Handling of Window.opener",
  "Reflected File Download",
  "Pharming Vulnerability",
  "Man-in-the-Browser Vulnerability",
  "Drive-by Download Demonstrations",
  "Insecure Content Security Policy",
  "Insecure CORS Configuration",
  "Unrestricted File Upload",
  "Malicious Zip Bomb",
  "Abusing Flaws in PDF Renderers",
  "Abusing Flaws in OCR Tools",
  "SVG Files as Test Vectors",
  "XSLT Server-Side Injection",
  "SSRF via Headless Browser",
  "Abusing Serverless Billing with Demonstration",
  "Insecure SSRF via Cloud Functions",
  "Lateral Movement via Compromised Instances",
  "Abusing Code Comments for Injection",
  "CSS Injection (exfiltrating data through CSS)",
  "Data Exfiltration via Email Protocols",
  "Insecure TLS Certificate Validation",
  "Insecure Cipher Negotiation",
  "Click Event Hijacking on Mobile",
  "Compromising IoT Medical Devices",
  "Vulnerabilities on Automotive CAN Bus",
  "SCADA PLC Command Injection",
  "Insecure BACnet Config",
  "Fake Mobile App Updates",
  "Demonstrations in Industrial Protocol Converters",
  "Drone/Robot Telemetry Injection",
  "Rogue Firmware Updates",
  "BleedingTooth Bluetooth Demonstration",
  "WPS PIN Brute Force",
  "Vulnerabilities on WPA3 (Dragonblood)"
];

export const EVASION_TECHNIQUES = [
  "URL Encoding",
  "Double URL Encoding",
  "Base64 Encoding",
  "Hex Encoding",
  "HTML Entity Encoding",
  "Case Variation",
  "Mixed Case Evasion",
  "UTF-8 Encoding",
  "URL Parameter Pollution",
  "Obfuscated JavaScript",
  "Reverse String Encoding",
  "Polyglot Codes",
  "Whitespace Obfuscation",
  "Comment Insertion",
  "String Concatenation",
  "Character Padding",
  "Null Byte Injection",
  "Mixed Protocol Injection",
  "Fake Parameter Injection",
  "Redundant Path Segments",
  "IP Address Obfuscation",
  "Octal/Decimal IP Encoding",
  "Reverse DNS Lookup",
  "DNS CNAME Chaining",
  "Long URL Obfuscation",
  "Fragmentation of Code",
  "Excessive URL Length",
  "Confusing Similar Characters",
  "Homoglyph Vulnerabilities",
  "Unicode Normalization Forms",
  "Double Decoding",
  "ROT13 Encoding",
  "Quoted Printable Encoding",
  "Ambiguous Grammar Injection",
  "Fake Content-Type Headers",
  "Fake Content-Length Headers",
  "HTTP Verb Tunneling",
  "Parameter Hiding in JSON",
  "Parameter Hiding in XML",
  "Base36/Base32 Encoding",
  "Hexify ASCII Characters",
  "Using Non-Standard Ports",
  "Chunked Transfer Evasion",
  "Multiple Encodings Combined",
  "Command Spacing Evasion",
  "Command Comments Evasion",
  "Split Vulnerabilities into Two Requests",
  "URLEncode + Double Decode",
  "Nested Encoded Codes",
  "Invisible Character Injection",
  "Zero-Width Spaces Injection",
  "Encoded Slashes in URL",
  "Path Normalization Tricks",
  "Double Compression Encoding",
  "Browser Parsing Differences",
  "Case Randomization in Keywords",
  "Macro-based Encoding",
  "Hash-based Obfuscation",
  "Leetspeak Substitution",
  "Non-ASCII Homoglyph Replacement",
  "Base85 Encoding",
  "UTF-7 Encoding",
  "Multibyte Character Confusion",
  "Misleading File Extensions",
  "JavaScript Unicode Escapes",
  "IP Fragmentation Evasion",
  "TLS Fingerprint Spoofing",
  "HTTP Header Randomization",
  "Duck Typing Codes",
  "Non-Printable Character Injection",
  "Base91 Encoding",
  "Base92 Encoding",
  "Base122 Encoding",
  "Emoji-based Encoding",
  "Custom Hash-based Encoding",
  "Compression + Encryption Hybrid",
  "Encrypted Code Delivery via HTTPS",
  "CDN-based Delivery Evasion",
  "DOM Property Overwriting",
  "Steganographic Codes in Images",
  "Steganographic Codes in Audio",
  "Steganographic Codes in Video",
  "Chunked Encoding Mixup",
  "Misleading Parameter Names",
  "Browser Quirks",
  "Escaping Through Double Quotes",
  "Escaping Through Backticks",
  "Triple Encoding",
  "Recursive Encoding Loops",
  "URL Path Confusion",
  "Hiding Code in CSS Content",
  "Data URI Schemes",
  "RFC-Compliant but Unexpected Headers",
  "Exotic Unicode Normalization",
  "IDN Homograph Vulnerabilities",
  "Injecting Zero-Width Joiners",
  "Zero-Width Non-Joiner Injection",
  "Obfuscation via CSS Selectors",
  "Malicious DOM Events",
  "Shifting Code between GET and POST",
  "Polyglot PDFs",
  "Polyglot Images (JPEG + HTML)",
  "Header Confusion with MIME Boundaries",
  "Breaking Signatures with Extra Whitespace",
  "Hiding Code in PDF Comments",
  "Invisible iframes for Code Delivery",
  "Hiding Code in DNS Queries",
  "Hiding Code in NTP Traffic",
  "Obfuscation via Morse Code",
  "Obfuscation via Bacon's Cipher",
  "Obfuscation with Braille Patterns",
  "Confusing Whitespaces (Tabs vs Spaces)",
  "Replacing Characters with Similar Unicode",
  "Base58 Encoding",
  "Base32hex Encoding",
  "UUEncoding Codes",
  "xxencoding Codes",
  "yEncoding Codes",
  "Quoted-Printable + Double URL Encoding",
  "Invisible Div Layers",
  "Multi-stage Code Delivery",
  "Code in HTTP Trailer Fields",
  "Confusing Content-Length with Transfer-Encoding",
  "Malicious SVG Filters",
  "Abusing XML Namespaces",
  "Nested Iframes from Multiple Domains",
  "Code Delivery via Flash Variables",
  "Obfuscation via Redundant DNS lookups",
  "Code in TLS Extensions",
  "Abusing SSL Session Resumption",
  "TLS Record Layer Obfuscation",
  "Fragmenting JSON Codes",
  "Obfuscation via HTML5 Polyfills",
  "Data Smuggling in WebSockets",
  "Binary-to-Text Shuffling",
  "Obfuscation via RLE Encoding",
  "Inserting Fake Unicode BOM",
  "Escaping through Double Encoded Slashes",
  "Redirection through multiple Shortened URLs",
  "Abusing LFI for Evading Signatures",
  "Using Alternate Data Streams (ADS) on Windows",
  "Storing Code in Windows Registry",
  "Command Obfuscation via PowerShell Aliases",
  "Command Obfuscation in Bash using eval",
  "Abusing WAF Whitelists",
  "Modifying Case in Shell Commands",
  "Inserting Line Feeds in Keywords",
  "Combining CRLF with URL Encoding",
  "Obfuscating SQL Code with Comments",
  "Using Stored Procedures Instead of Raw SQL",
  "Reordering SQL Keywords",
  "Command Obfuscation via Environmental Variables",
  "Encoding code in base64 multiple times",
  "Chunked XSS Codes",
  "Obfuscation via Excessive URL Parameters",
  "Utilizing Browser Autocomplete",
  "Utilizing Browser Bugs for Code Execution",
  "Abusing Tab Characters in JSON",
  "HTML Polyglot (HTML + JS)",
  "XSS Code in SVG OnLoad",
  "Open Redirect Chains",
  "Stealth Code in DNS TXT Records",
  "Header Injection via Non-ASCII separators",
  "Padding Code with Zero-Length Chars",
  "Abusing Proxy Configurations",
  "Obfuscation with External Entity Injections",
  "Hiding Code in Image EXIF",
  "Hiding Code in PDF Metadata",
  "Hiding Code in ZIP Comment",
  "Inserting Code into ICC Profiles",
  "Base104 Encoding (emoji, special chars)",
  "Abusing Quoted Strings in HTTP",
  "Misusing Cache-Control Headers",
  "Encoding with punycode",
  "Using Rare Encodings like EBCDIC",
  "Inserting Code in Hostname parts",
  "Using IPv6 short notation",
  "Hex-encoded slashes for path evasion",
  "UTF-16 Encoding",
  "UTF-32 Encoding",
  "Double Rotations (ROT13+ROT47)",
  "Deflate then Base64",
  "Gzip then Hex",
  "Chaining Multiple Compressors (Zlib, LZMA...)",
  "Spacing Out Code with Non-breaking spaces",
  "Zero-Breadth Joiners between Characters",
  "Overlong UTF-8 sequences",
  "Non-UTF encodings (Shift-JIS, Big5)",
  "Inserting Code inside a harmless GIF",
  "Hiding Code in WOFF font files",
  "Renaming Parameters to look safe",
  "Spelling Keywords Backwards",
  "Splitting Vulnerability across multiple requests",
  "Using PATH_INFO in URLs",
  "Appending random query strings ignored by server",
  "Hiding code in rarely used HTML tags",
  "Obfuscating JavaScript code with arrays",
  "Encoding JavaScript strings char by char",
  "Mixing character sets",
  "Reordering JSON keys to bypass signatures",
  "Combining multiple small codes client-side",
  "Inserting Code in CSS pseudo-selectors",
  "Abusing CSS escapes for ASCII chars",
  "Inserting Code in an XPI or CRX file",
  "Using multipart/form-data cleverly",
  "Abusing boundary strings in multipart requests",
  "Code in Protocol Downgrade",
  "Code in WebDAV PROPFIND request",
  "Abusing Range headers to evade scanning",
  "Inserting Code in the ETag header",
  "Misleading via overly long TTL in DNS",
  "Injecting Code in OData queries",
  "Smuggling Code in GraphQL Query Variables",
  "Chained Encodings (Base64+URL+Hex)",
  "Using obscure cipher methods",
  "Encrypting code with a known key",
  "Stenographically hiding code in whitespace patterns",
  "Base32768 Encoding",
  "Faux Cyrillic Substitution",
  "Reordering code points in Unicode",
  "Using confusable Unicode characters for keywords",
  "Injecting Code in CSS calc()",
  "Using CSS url() imports",
  "Dynamic imports in JavaScript",
  "Obfuscation via WebAssembly Encoded Code",
  "Hosting Code on a Trusted CDN",
  "Abusing Document.write() in HTML",
  "Injecting code in Data Binding Expressions",
  "Abusing user agent-based code paths",
  "Obfuscation via delayed execution",
  "Splitting strings into multiple variables and recombining",
  "Requiring multiple conditions to trigger code",
  "Breaking signatures by inserting random tokens",
  "Inserting Null bytes in keywords",
  "Encoding code in base45",
  "Encoding code in base62",
  "Abusing JSONP call to fetch code",
  "Timing-based delivery (only after delay)",
  "Fragmenting Code across DNS queries",
  "Inserting Non-Latin alphabets that look similar",
  "Switching between GET and POST randomly",
  "Faking known safe parameters to distract WAF",
  "Using a known good domain as decoy",
  "Abusing template engines for code injection",
  "Inserting code in JWT kid field and forging signature",
  "Chaining multiple WAF bypass techniques",
  "Misreporting Content-Length to confuse parsers",
  "Sending partial code in HEAD then finishing in GET",
  "Combining upper/lower case at random",
  "Abusing chunk extensions in HTTP/1.1",
  "Encoding commands inside environment variables",
  "Using a proxy hop to re-encode code",
  "Inserting code in XLSX metadata",
  "Inserting code in docx metadata",
  "Inserting code in rar comments",
  "Encoding code as Morse code then decoding client-side",
  "Utilizing EICAR test string as a decoy",
  "Inlining JavaScript in unusual HTML attributes",
  "UTF-7 encoded XSS code",
  "Custom Base conversion (Base100 ASCII codes)",
  "Inserting code in CSS keyframes",
  "Padding code with random unicode emoticons",
  "Decomposing words into char codes and reassembling",
  "Aliasing dangerous functions to safe names",
  "Redefining built-in functions at runtime",
  "Hiding code in user-supplied language translations",
  "Abusing password fields to store code",
  "Injecting code into logs and re-reading them",
  "HTTP Method Override (X-HTTP-Method-Override)",
  "Inserting commands in SSH banners",
  "LZMA compression then hex encoding",
  "Zstandard compression + base64",
  "Inserting code in a TLS SNI field",
  "Confusing analyzers with overly long domain names",
  "Using parent directory references to appear harmless",
  "Storing code in DNS CAA records",
  "Encoding code in IPv6 literal",
  "Hiding code in data:application/octet-stream URL",
  "Differences in URL parsing client/server",
  "Inserting code in a JSON array expecting object",
  "Misleading WAF by using multiple Host headers",
  "Inserting Code in Accept-Language header",
  "Leveraging incomplete UTF-8 sequences",
  "Breaking code into multiple code points that combine",
  "Base122 encoding with obscure alphabets",
  "Inserting code in a CSS animation name",
  "Double Gzip encoding",
  "Using HTML entities for all characters",
  "Substitute chars with fullwidth forms",
  "Inserting control characters like BEL or BS",
  "Pausing code execution until certain time"
];
