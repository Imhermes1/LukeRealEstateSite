// API Configuration for social media integrations

// YouTube API Configuration
export const YOUTUBE_CONFIG = {
  API_KEY: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || 'AIzaSyB91cyaxCpOEzolVTCDdzDwiJ3J76zH0nI',
  CHANNEL_ID: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || 'UCc5ffGbB4crnOzNAHF5cjBA',
  MAX_RESULTS: 3
};

// Instagram Configuration (using scraping)
export const INSTAGRAM_CONFIG = {
  USERNAME: 'lukefornieri',
  MAX_RESULTS: 6
};

// Facebook App Configuration
export const FACEBOOK_CONFIG = {
  APP_ID: '1106621531387540',
  APP_SECRET: '0a5b34dcb982c7183f5aaf1a6137ab92'
};

// YouTube API Functions
export async function fetchYouTubeVideos() {
  if (!YOUTUBE_CONFIG.API_KEY || !YOUTUBE_CONFIG.CHANNEL_ID) {
    console.warn('YouTube API key or Channel ID not configured');
    return [];
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CONFIG.CHANNEL_ID}&maxResults=${YOUTUBE_CONFIG.MAX_RESULTS}&order=date&type=video&key=${YOUTUBE_CONFIG.API_KEY}`
    );

    if (!response.ok) {
      throw new Error('YouTube API request failed');
    }

    const data = await response.json();
    return data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      publishedAt: item.snippet.publishedAt,
      channelTitle: item.snippet.channelTitle
    }));
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}

// Instagram Scraping Functions
export async function fetchInstagramPosts() {
  try {
    // Using a more reliable Instagram scraping approach
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(`https://www.instagram.com/${INSTAGRAM_CONFIG.USERNAME}/`)}`
    );

    if (!response.ok) {
      console.warn('Instagram scraping failed, using fallback data');
      return FALLBACK_INSTAGRAM_POSTS;
    }

    const data = await response.json();
    const html = data.contents;
    
    // Extract Instagram post URLs from the HTML
    const postMatches = html.match(/https:\/\/www\.instagram\.com\/p\/[a-zA-Z0-9_-]+\//g) || [];
    const uniquePosts = Array.from(new Set(postMatches)).slice(0, INSTAGRAM_CONFIG.MAX_RESULTS);
    
    if (uniquePosts.length > 0) {
      return uniquePosts.map((permalink, index) => ({
        id: `post_${index}`,
        caption: `Latest Instagram post from @${INSTAGRAM_CONFIG.USERNAME}`,
        mediaUrl: `https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80&v=${index}`,
        permalink: String(permalink),
        timestamp: new Date(Date.now() - index * 86400000).toISOString(),
        mediaType: 'IMAGE'
      }));
    }

    return FALLBACK_INSTAGRAM_POSTS;
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return FALLBACK_INSTAGRAM_POSTS;
  }
}

// Alternative Instagram scraping using a different proxy service
export async function fetchInstagramPostsAlternative() {
  try {
    // Using a different CORS proxy service
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.instagram.com/${INSTAGRAM_CONFIG.USERNAME}/`,
      {
        headers: {
          'Origin': 'https://lukefornieri.com',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      }
    );

    if (!response.ok) {
      return FALLBACK_INSTAGRAM_POSTS;
    }

    const html = await response.text();
    
    // Extract post URLs from the HTML
    const postMatches = html.match(/https:\/\/www\.instagram\.com\/p\/[a-zA-Z0-9_-]+\//g) || [];
    const uniquePosts = Array.from(new Set(postMatches)).slice(0, INSTAGRAM_CONFIG.MAX_RESULTS);
    
    return uniquePosts.map((permalink, index) => ({
      id: `post_${index}`,
      caption: `Instagram post from @${INSTAGRAM_CONFIG.USERNAME}`,
      mediaUrl: `https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80&v=${index}`,
      permalink: String(permalink),
      timestamp: new Date(Date.now() - index * 86400000).toISOString(),
      mediaType: 'IMAGE'
    }));
  } catch (error) {
    console.error('Error fetching Instagram posts (alternative):', error);
    return FALLBACK_INSTAGRAM_POSTS;
  }
}

// Fallback data for development
export const FALLBACK_YOUTUBE_VIDEOS = [
  {
    id: "placeholder1",
    title: "Melbourne Luxury Property Market Insights",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=320&q=80",
    publishedAt: "2024-01-15T10:00:00Z",
    channelTitle: "Luke Fornieri Real Estate"
  },
  {
    id: "placeholder2",
    title: "Property Investment Strategies for 2024",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=320&q=80",
    publishedAt: "2024-01-10T10:00:00Z",
    channelTitle: "Luke Fornieri Real Estate"
  },
  {
    id: "placeholder3",
    title: "Luxury Home Tour: 5 Princely Terrace",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=320&q=80",
    publishedAt: "2024-01-05T10:00:00Z",
    channelTitle: "Luke Fornieri Real Estate"
  }
];

export const FALLBACK_INSTAGRAM_POSTS = [
  {
    id: "1",
    caption: "Just closed another record-breaking sale in Melbourne's luxury market! 🏠✨ #RealEstate #Melbourne #LuxuryHomes",
    mediaUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
    permalink: "https://instagram.com/p/example1",
    timestamp: "2024-01-15T10:00:00Z",
    mediaType: "IMAGE"
  },
  {
    id: "2",
    caption: "Beautiful sunset view from one of our premium listings. Melbourne's property market never disappoints! 🌅 #MelbourneRealEstate",
    mediaUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
    permalink: "https://instagram.com/p/example2",
    timestamp: "2024-01-12T10:00:00Z",
    mediaType: "IMAGE"
  },
  {
    id: "3",
    caption: "Behind the scenes of our latest property shoot. Attention to detail is everything in luxury real estate! 📸 #LuxuryHomes",
    mediaUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
    permalink: "https://instagram.com/p/example3",
    timestamp: "2024-01-10T10:00:00Z",
    mediaType: "IMAGE"
  }
]; 