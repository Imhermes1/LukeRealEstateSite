'use client';

import { useState, useEffect } from 'react';
import { 
  fetchYouTubeVideos, 
  FALLBACK_YOUTUBE_VIDEOS
} from '../lib/api';

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  channelTitle: string;
}

interface InstagramPost {
  id: number;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  location?: string;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

// Instagram feed data
const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&h=400&q=80",
    caption: "Just closed another record-breaking sale in Melbourne's luxury market! 🏠✨ #RealEstate #Melbourne #LuxuryHomes",
    likes: 247,
    comments: 18,
    timestamp: "2 hours ago",
    location: "Melbourne, Victoria"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&h=400&q=80",
    caption: "Beautiful sunset view from one of our premium listings. Melbourne's property market never disappoints! 🌅 #MelbourneRealEstate",
    likes: 189,
    comments: 12,
    timestamp: "1 day ago",
    location: "South Yarra, Melbourne"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&h=400&q=80",
    caption: "Luxury living at its finest. This stunning penthouse features panoramic city views and world-class amenities. #LuxuryRealEstate #Melbourne",
    likes: 312,
    comments: 24,
    timestamp: "3 days ago",
    location: "Melbourne CBD"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&h=400&q=80",
    caption: "Chef's kitchen dreams come true! This gourmet kitchen is perfect for entertaining. #KitchenGoals #LuxuryHomes",
    likes: 156,
    comments: 8,
    timestamp: "5 days ago"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=400&h=400&q=80",
    caption: "Private garden oasis in the heart of the city. Perfect for morning coffee or evening entertaining. #GardenDesign #MelbourneHomes",
    likes: 203,
    comments: 15,
    timestamp: "1 week ago",
    location: "Toorak, Melbourne"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&h=400&q=80",
    caption: "Infinity pool with city skyline views. This is what luxury living is all about! 🏊‍♂️ #InfinityPool #LuxuryRealEstate",
    likes: 278,
    comments: 21,
    timestamp: "1 week ago"
  }
];

export default function Social() {
  const [mediumPosts, setMediumPosts] = useState<MediumPost[]>([]);
  const [youtubeVideos, setYoutubeVideos] = useState<YouTubeVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        // Fetch Medium posts
        const mediumResponse = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lukeforn"
        );
        if (mediumResponse.ok) {
          const mediumData = await mediumResponse.json();
          setMediumPosts(mediumData.items.slice(0, 3));
        }

        // Fetch YouTube videos
        const youtubeData = await fetchYouTubeVideos();
        setYoutubeVideos(youtubeData.length > 0 ? youtubeData : FALLBACK_YOUTUBE_VIDEOS);

      } catch (err) {
        console.error(err);
        setError("Unable to load content at this time.");
        // Set fallback data
        setYoutubeVideos(FALLBACK_YOUTUBE_VIDEOS);
      } finally {
        setIsLoading(false);
      }
    }

    fetchContent();
  }, []);

  return (
    <section id="social" className="section bg-light" aria-label="Social Media">
      <div className="container">
        <h2 className="section-title">Stay Connected</h2>
        <div className="social-grid">
          <div className="social-column">
            <h3 className="social-subtitle">Instagram Feed</h3>
            <div className="instagram-feed">
              {INSTAGRAM_POSTS.map((post) => (
                <div key={post.id} className="instagram-post">
                  <div className="instagram-post-header">
                    <div className="instagram-user">
                      <img 
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=40&h=40&q=80" 
                        alt="@lukefornieri"
                        className="instagram-avatar"
                      />
                      <div className="instagram-user-info">
                        <span className="instagram-username">lukefornieri</span>
                        {post.location && <span className="instagram-location">{post.location}</span>}
                      </div>
                    </div>
                    <span className="instagram-timestamp">{post.timestamp}</span>
                  </div>
                  
                  <div className="instagram-image">
                    <img src={post.image} alt="Instagram post" />
                  </div>
                  
                  <div className="instagram-actions">
                    <div className="instagram-actions-left">
                      <button className="instagram-action-btn">❤️</button>
                      <button className="instagram-action-btn">💬</button>
                      <button className="instagram-action-btn">📤</button>
                    </div>
                    <button className="instagram-action-btn">🔖</button>
                  </div>
                  
                  <div className="instagram-likes">
                    {post.likes} likes
                  </div>
                  
                  <div className="instagram-caption">
                    <span className="instagram-username">lukefornieri</span> {post.caption}
                  </div>
                  
                  {post.comments > 0 && (
                    <div className="instagram-comments">
                      View all {post.comments} comments
                    </div>
                  )}
                </div>
              ))}
              
              <div className="instagram-cta">
                <a 
                  href="https://instagram.com/lukefornieri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="instagram-follow-button"
                >
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
          
          <div className="social-column">
            <h3 className="social-subtitle">Latest YouTube Videos</h3>
            <div className="youtube-videos" role="region" aria-live="polite" aria-label="YouTube videos">
              {isLoading && <p className="loading-message">Loading latest videos...</p>}
              {error && <p className="error-message">{error}</p>}
              {!isLoading && !error && youtubeVideos.map((video, index) => (
                <a 
                  key={index} 
                  href={`https://www.youtube.com/watch?v=${video.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="youtube-video"
                >
                  <div className="youtube-thumbnail">
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="youtube-play-button">▶</div>
                  </div>
                  <div className="youtube-info">
                    <h4 className="youtube-title">{video.title}</h4>
                    <time className="youtube-date" dateTime={video.publishedAt}>
                      {formatDate(video.publishedAt)}
                    </time>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="social-column">
            <h3 className="social-subtitle">Latest Articles</h3>
            <div className="medium-posts" role="region" aria-live="polite" aria-label="Medium articles">
              {isLoading && <p className="loading-message">Loading latest articles...</p>}
              {error && <p className="error-message">{error}</p>}
              {!isLoading && !error && mediumPosts.map((post, index) => (
                <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" className="medium-post">
                  <h4 className="medium-post-title">{post.title}</h4>
                  <time className="medium-post-date" dateTime={post.pubDate}>
                    {formatDate(post.pubDate)}
                  </time>
                  <p className="medium-post-excerpt">
                    {post.description.replace(/<[^>]*>/g, '').substring(0, 120)}…
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 