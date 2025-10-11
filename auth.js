// Google Sign-In Configuration
// Replace 'YOUR_GOOGLE_CLIENT_ID' with your actual Google OAuth Client ID
// Get it from: https://console.cloud.google.com/apis/credentials

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

// DOM Elements
const loginPrompt = document.getElementById('loginPrompt');
const userProfile = document.getElementById('userProfile');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userAvatar = document.getElementById('userAvatar');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');

// Initialize Google Sign-In
function initializeGoogleSignIn() {
    if (typeof google !== 'undefined' && google.accounts) {
        google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse,
            auto_select: false,
            cancel_on_tap_outside: true
        });
    }
}

// Handle Google credential response
function handleCredentialResponse(response) {
    try {
        // Decode JWT token from Google
        const userData = parseJwt(response.credential);
        
        const user = {
            name: userData.name,
            email: userData.email,
            avatar: userData.picture,
            sub: userData.sub
        };

        saveUserData(user);
        showUserProfile(user);
        showNotification('Successfully signed in with Google!');
    } catch (error) {
        console.error('Error handling Google sign-in:', error);
        showNotification('Sign-in failed. Please try again.');
    }
}

// Parse JWT token
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
    );
    return JSON.parse(jsonPayload);
}

// Trigger Google Sign-In popup (Demo Mode)
function handleGoogleLogin() {
    // Simple demo mode - works directly without server
    const demoUser = {
        name: 'Demo User',
        email: 'demo@example.com',
        avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=667eea&color=fff&size=128',
        sub: 'demo123'
    };
    
    saveUserData(demoUser);
    showUserProfile(demoUser);
    showNotification('Successfully signed in!');
    
    // Note: For real Google Sign-In, you'll need:
    // 1. A web server (not file://)
    // 2. Google Client ID configured
    // 3. See SETUP.md for instructions
}

// Check for existing user session
function checkUserSession() {
    const userData = localStorage.getItem('userData');
    if (userData) {
        try {
            const user = JSON.parse(userData);
            showUserProfile(user);
        } catch (error) {
            console.error('Error parsing user data:', error);
            localStorage.removeItem('userData');
        }
    }
}

// Save user data to localStorage
function saveUserData(user) {
    localStorage.setItem('userData', JSON.stringify(user));
}

// Show user profile
function showUserProfile(user) {
    userName.textContent = user.name;
    userEmail.textContent = user.email;
    userAvatar.src = user.avatar;
    userAvatar.onerror = function() {
        this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=667eea&color=fff&size=128`;
    };
    
    loginPrompt.style.display = 'none';
    userProfile.style.display = 'flex';
}

// Handle logout
function handleLogout() {
    // Sign out from Google
    if (typeof google !== 'undefined' && google.accounts) {
        google.accounts.id.disableAutoSelect();
    }
    
    // Clear local data
    localStorage.removeItem('userData');
    
    // Reset UI
    userProfile.style.display = 'none';
    loginPrompt.style.display = 'flex';
    
    // Clear user data
    userName.textContent = '';
    userEmail.textContent = '';
    userAvatar.src = '';
    
    showNotification('Successfully logged out');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Event Listeners
if (loginBtn) {
    loginBtn.addEventListener('click', handleGoogleLogin);
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
}

// Initialize on page load
window.addEventListener('load', function() {
    initializeGoogleSignIn();
    checkUserSession();
});

// Also try to initialize when Google API loads
window.onGoogleScriptLoad = initializeGoogleSignIn;

