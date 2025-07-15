# Social Media API Setup Guide

This guide will help you set up Instagram and YouTube API integrations for your real estate website at **lukefornieri.com**.

## YouTube API Setup

### 1. Get YouTube API Key
1. Go to [Google Cloud Console](https://console.developers.google.com/)
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3
4. Go to "Credentials" and create an API key
5. Copy the API key

### 2. Get Your YouTube Channel ID
1. Go to your YouTube channel
2. Look at the URL: `https://www.youtube.com/channel/CHANNEL_ID_HERE`
3. Copy the channel ID (the long string after `/channel/`)

### 3. Configure Environment Variables
Create a `.env.local` file in your project root and add:
```
NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key_here
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=your_youtube_channel_id_here
```

## Instagram API Setup

### Option 1: Instagram Basic Display API (Recommended)

#### 1. Create Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add "Instagram Basic Display" product to your app

#### 2. Connect Instagram Account
1. In your app, go to "Instagram Basic Display" > "Basic Display"
2. Add your Instagram account as a test user
3. Generate a long-lived access token

#### 3. Get User ID
1. Use the Graph API Explorer to get your user ID:
   ```
   https://graph.instagram.com/me?fields=id&access_token=YOUR_ACCESS_TOKEN
   ```

#### 4. Configure Environment Variables
Add to your `.env.local` file:
```
NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token_here
NEXT_PUBLIC_INSTAGRAM_USER_ID=your_instagram_user_id_here
```

### Option 2: Instagram Scraping (Alternative)

If you prefer not to use the official API, you can use a scraping service like:
- [Instagram Scraper](https://github.com/arc298/instagram-scraper)
- [Instaloader](https://github.com/instaloader/instaloader)

## Environment Variables Template

Create a `.env.local` file with this structure:

```env
# YouTube API Configuration
NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key_here
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=your_youtube_channel_id_here

# Instagram API Configuration
NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token_here
NEXT_PUBLIC_INSTAGRAM_USER_ID=your_instagram_user_id_here
```

## Vercel Deployment

When deploying to Vercel, add these environment variables in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add each variable with the same names as above

## Privacy Policy URL

For Instagram API setup, use this privacy policy URL:
```
https://lukefornieri.com/privacy
```

## Testing

1. Start your development server: `npm run dev`
2. Navigate to the "Stay Connected" section
3. You should see real content from your social media accounts
4. If API keys are not configured, fallback content will be displayed

## Troubleshooting

### YouTube API Issues
- Ensure your API key is correct
- Check that YouTube Data API v3 is enabled
- Verify your channel ID is correct
- Check API quota limits

### Instagram API Issues
- Ensure your access token is valid and not expired
- Verify your user ID is correct
- Check that your Instagram account is connected to the Facebook app
- Ensure you have the necessary permissions

### General Issues
- Check browser console for error messages
- Verify environment variables are loaded correctly
- Ensure you're using `NEXT_PUBLIC_` prefix for client-side variables

## Security Notes

- Never commit your `.env.local` file to version control
- Use environment variables for all API keys
- Consider implementing rate limiting for production
- Monitor API usage to stay within limits 