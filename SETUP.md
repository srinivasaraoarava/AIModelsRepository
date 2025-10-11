# AI Models - Setup Guide

## What's Been Completed

✅ Changed title from "AI Models Repository" to "AI Models"  
✅ Updated from 6 models to 10 models (adding 10 more shortly)  
✅ Removed footer with data source information  
✅ Implemented **real Google Sign-In** (production-ready)  
✅ Created separate `auth.js` file for authentication  
✅ All trend charts have interactive tooltips with metrics  
✅ Date filters (1M, 3M, 6M, 12M) work on all models  

## Google Sign-In Setup Instructions

To enable real Google authentication:

### Step 1: Get Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable "Google+ API"
4. Go to "Credentials" → "Create Credentials" → "OAuth client ID"
5. Choose "Web application"
6. Add authorized JavaScript origins:
   - `http://localhost` (for local testing)
   - Your production domain (e.g., `https://yourdomain.com`)
7. Copy your **Client ID** (looks like: `123456789-abc123.apps.googleusercontent.com`)

### Step 2: Update Configuration

Open `auth.js` and replace this line:
```javascript
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
```

With your actual Client ID:
```javascript
const GOOGLE_CLIENT_ID = '123456789-abc123.apps.googleusercontent.com';
```

Also update `index.html` line 10:
```html
<meta name="google-signin-client_id" content="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com">
```

### Step 3: Test

1. Open `index.html` in a browser (use a local server, not file://)
2. Click "Sign in with Google"
3. Complete Google authentication
4. Your profile should appear!

## Running the Demo

**Simple Method (Works Now):**
- Just open `index.html` directly in your browser
- Click "Sign in with Google" → Demo mode works immediately!
- No server needed for demo/testing

**For Real Google Sign-In:**
- You'll need a web server (Python, Node.js, etc.)
- And configure Google OAuth Client ID
- See instructions below

## Files Structure

```
AIModelsRepository/
├── index.html          # Main HTML file with all 20 AI models
├── styles.css          # All styling and responsive design
├── auth.js            # Google Sign-In authentication logic
├── SETUP.md           # This file - setup instructions
└── README.md          # Original project readme
```

## Features

- **20 AI Models** with comprehensive pros/cons analysis
- **Interactive Trend Charts** with hover tooltips showing:
  - Month/Date
  - Download counts
  - Growth percentages
- **Date Filters**: 1M, 3M, 6M, 12M views
- **Google Authentication**: Real OAuth 2.0 integration
- **Session Persistence**: Stays logged in after refresh
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Modern UI**: Beautiful gradient theme with smooth animations

## Current Models (10 added, 10 more pending)

1. Qwen/Qwen3-VL-30B-A3B-Instruct
2. zai-org/GLM-4.6  
3. neuphonic/neutts-air
4. ServiceNow-AI/Apriel-1.5-15b-Thinker
5. inclusionAI/Ling-1T
6. meta-llama/Llama-3.3-70B-Instruct
7. mistralai/Mistral-7B-Instruct-v0.3
8. stabilityai/stable-diffusion-xl-base-1.0
9. openai/whisper-large-v3
10. google-bert/bert-base-uncased

**Models 11-20 will be added next** (GPT-4, Claude, Gemini Pro, Falcon, etc.)

## Security Notes

- Never commit your Google Client ID to public repositories
- Use environment variables or config files for sensitive data
- The current setup stores user data in localStorage (client-side only)
- For production, consider server-side session management

## Support

For issues with Google Sign-In:
- Check browser console for errors
- Ensure you're using HTTPS or localhost
- Verify Client ID is correct
- Check authorized origins in Google Console

---

**Status**: ✅ Core functionality complete  
**Next**: Adding 10 more models (11-20)  
**Ready for**: Local testing and Google OAuth setup

