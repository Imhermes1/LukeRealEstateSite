// API Configuration for social media integrations

// YouTube API Configuration
export const YOUTUBE_CONFIG = {
  API_KEY: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || 'AIzaSyB91cyaxCpOEzolVTCDdzDwiJ3J76zH0nI',
  CHANNEL_ID: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || 'UCc5ffGbB4crnOzNAHF5cjBA',
  MAX_RESULTS: 2
};

// Instagram Configuration (manual feed)
export const INSTAGRAM_CONFIG = {
  USERNAME: 'lukefornieri',
  MAX_RESULTS: 6
};

// Manual Instagram feed - you can update this with your real posts
export const MANUAL_INSTAGRAM_POSTS = [
  {
    id: "1",
    caption: "Just closed another record-breaking sale in Melbourne's luxury market! 🏠✨ #RealEstate #Melbourne #LuxuryHomes",
    mediaUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
    permalink: "https://www.instagram.com/p/example1/",
    timestamp: "2024-01-15T10:00:00Z",
    mediaType: "IMAGE"
  },
  {
    id: "2",
    caption: "Beautiful sunset view from one of our premium listings. Melbourne's property market never disappoints! 🌅 #MelbourneRealEstate",
    mediaUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
    permalink: "https://www.instagram.com/p/example2/",
    timestamp: "2024-01-12T10:00:00Z",
    mediaType: "IMAGE"
  },
  {
    id: "3",
    caption: "Behind the scenes of our latest property shoot. Attention to detail is everything in luxury real estate! 📸 #LuxuryHomes",
    mediaUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
    permalink: "https://www.instagram.com/p/example3/",
    timestamp: "2024-01-10T10:00:00Z",
    mediaType: "IMAGE"
  },
  {
    id: "4",
    caption: "New listing alert! This stunning property in Melbourne's most prestigious neighborhood is now available. DM for private viewings! 🏡",
    mediaUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
    permalink: "https://www.instagram.com/p/example4/",
    timestamp: "2024-01-08T10:00:00Z",
    mediaType: "IMAGE"
  },
  {
    id: "5",
    caption: "Market insights: Melbourne's luxury property sector continues to show strong growth. Here's what buyers are looking for in 2024! 📊",
    mediaUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
    permalink: "https://www.instagram.com/p/example5/",
    timestamp: "2024-01-05T10:00:00Z",
    mediaType: "IMAGE"
  },
  {
    id: "6",
    caption: "Thank you to all our amazing clients who trusted us with their real estate journey in 2023! Here's to an even better 2024! 🎉",
    mediaUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
    permalink: "https://www.instagram.com/p/example6/",
    timestamp: "2024-01-01T10:00:00Z",
    mediaType: "IMAGE"
  }
];

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

// Instagram Functions (using manual feed)
export async function fetchInstagramPosts() {
  // Return manual Instagram posts for now
  // You can update MANUAL_INSTAGRAM_POSTS with your real posts
  return MANUAL_INSTAGRAM_POSTS.slice(0, INSTAGRAM_CONFIG.MAX_RESULTS);
}

// Alternative Instagram scraping using a different proxy service
export async function fetchInstagramPostsAlternative() {
  // For now, return manual posts
  // In the future, you can implement a more reliable scraping solution
  return MANUAL_INSTAGRAM_POSTS.slice(0, INSTAGRAM_CONFIG.MAX_RESULTS);
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