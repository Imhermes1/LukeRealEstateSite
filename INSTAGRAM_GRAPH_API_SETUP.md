# Instagram Graph API Setup Guide (2025)

This guide will help you set up a dynamic Instagram feed using the official Instagram Graph API.

## Prerequisites

1. **Instagram Business or Creator Account**
   - Your Instagram account (@lukefornieri) must be converted to Business or Creator type
   - Personal accounts are not supported for API access

2. **Facebook Business Page**
   - Must be connected to your Instagram Business/Creator account
   - Required for API authentication

## Step-by-Step Setup

### 1. Convert Instagram Account to Business/Creator

1. Go to Instagram Settings
2. Select "Account" → "Switch to Professional Account"
3. Choose "Business" or "Creator" (Business recommended for real estate)
4. Connect to your Facebook Business Page

### 2. Create Facebook App

1. Go to [Meta Developers](https://developers.facebook.com/)
2. Click "Create App" → Select "Business" type
3. Fill in app details and create

### 3. Add Instagram Graph API

1. In your Facebook App Dashboard
2. Go to "Add Product" → "Instagram Graph API"
3. Follow the setup wizard

### 4. Connect Instagram Account

1. In Instagram Graph API settings
2. Click "Connect Instagram Account"
3. Authorize your Instagram Business account (@lukefornieri)
4. Note your Instagram User ID

### 5. Generate Access Token

1. Go to "Tools" → "Graph API Explorer"
2. Select your app and Instagram Graph API
3. Add permissions: `instagram_basic`, `pages_show_list`
4. Generate access token
5. **Important**: This token expires - you'll need to refresh it

### 6. Configure Environment Variables

Add these to your Vercel environment variables:

```
NEXT_PUBLIC_INSTAGRAM_GRAPH_TOKEN=your_access_token_here
NEXT_PUBLIC_INSTAGRAM_USER_ID=your_instagram_user_id_here
```

## API Endpoint

The app will use this endpoint to fetch posts:
```
GET https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=YOUR_TOKEN&limit=6
```

## Fallback System

If the Instagram Graph API is not configured:
- The app will use the manual feed in `app/lib/api.ts`
- You can update `MANUAL_INSTAGRAM_POSTS` with your real posts
- No API credentials required for manual feed

## Alternative: Third-Party Widgets

If you prefer not to code the API integration:

### Recommended Services:
- **EmbedSocial** - Easy setup, good free tier
- **Elfsight** - Professional widgets
- **Taggbox** - Enterprise solutions
- **Onstipe** - Simple integration

### Setup Process:
1. Connect your Instagram Business account
2. Customize widget appearance
3. Copy embed code to your website
4. No coding required

## Troubleshooting

### Common Issues:
1. **"Invalid access token"** - Token expired, regenerate
2. **"Permission denied"** - Check Instagram account type
3. **"No posts returned"** - Verify account connection
4. **CORS errors** - Use server-side API calls

### Token Refresh:
- Instagram Graph API tokens expire
- Set up automatic token refresh
- Or manually regenerate tokens

## Security Notes

- Never commit access tokens to git
- Use environment variables
- Regularly rotate tokens
- Monitor API usage limits

## Support

For API issues:
- [Meta Developers Documentation](https://developers.facebook.com/docs/instagram-api/)
- [Instagram Graph API Reference](https://developers.facebook.com/docs/instagram-basic-display-api/reference)

For website integration help:
- Check the app's console logs
- Verify environment variables
- Test API endpoint directly 