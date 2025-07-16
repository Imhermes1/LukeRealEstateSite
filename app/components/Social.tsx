'use client';

import { useState, useEffect } from 'react';
import { 
  fetchYouTubeVideos, 
  fetchInstagramPosts,
  FALLBACK_YOUTUBE_VIDEOS,
  FALLBACK_INSTAGRAM_POSTS
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
  id: string;
  caption: string;
  mediaUrl: string;
  permalink: string;
  timestamp: string;
  mediaType: string;
  likes: number;
  comments: number;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

// Instagram posts - using Instagram Graph API (requires Business/Creator account)
// Falls back to manual feed if API not configured
// To enable real API: Set NEXT_PUBLIC_INSTAGRAM_GRAPH_TOKEN in environment variables

export default function Social() {
  const [mediumPosts, setMediumPosts] = useState<MediumPost[]>([]);
  const [youtubeVideos, setYoutubeVideos] = useState<YouTubeVideo[]>([]);
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
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

        // Fetch Instagram posts with debugging
        console.log('🔍 Starting Instagram API fetch...');
        console.log('🔍 Environment variables check:');
        console.log('🔍 NEXT_PUBLIC_INSTAGRAM_GRAPH_TOKEN:', process.env.NEXT_PUBLIC_INSTAGRAM_GRAPH_TOKEN ? 'Set' : 'Not set');
        console.log('🔍 NEXT_PUBLIC_INSTAGRAM_USER_ID:', process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID ? 'Set' : 'Not set');
        
        const instagramData = await fetchInstagramPosts();
        console.log('🔍 Instagram API result:', instagramData);
        console.log('🔍 First post details:', instagramData[0]);
        console.log('🔍 Number of posts:', instagramData.length);
        console.log('🔍 Using real data or fallback:', instagramData.length > 0 ? 'REAL DATA' : 'FALLBACK');
        
        setInstagramPosts(instagramData.length > 0 ? instagramData : FALLBACK_INSTAGRAM_POSTS);

      } catch (err) {
        console.error('❌ Error in fetchContent:', err);
        setError("Unable to load content at this time.");
        // Set fallback data
        setYoutubeVideos(FALLBACK_YOUTUBE_VIDEOS);
        setInstagramPosts(FALLBACK_INSTAGRAM_POSTS);
      } finally {
        setIsLoading(false);
      }
    }

    fetchContent();
  }, []);

  return (
    <section id="social" className="section" aria-label="Social Media">
      <div className="container">
        <h2 className="section-title">Stay Connected</h2>
        <div className="social-grid">
          <div className="social-column">
            <h3 className="social-subtitle">Instagram Feed</h3>
            <div className="instagram-feed">
              {instagramPosts.map((post) => (
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
                      </div>
                    </div>
                    <span className="instagram-timestamp">{formatDate(post.timestamp)}</span>
                  </div>
                  
                  <div className="instagram-image">
                    <img src={post.mediaUrl} alt="Instagram post" />
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
                    {post.likes > 0 ? `${post.likes} likes` : 'No likes yet'}
                  </div>
                  
                  <div className="instagram-caption">
                    <span className="instagram-username">@lukefornieri</span> {post.caption}
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
                  Follow @lukefornieri on Instagram
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