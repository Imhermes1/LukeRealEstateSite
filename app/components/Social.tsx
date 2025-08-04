'use client';

import { useState, useEffect } from 'react';
import { 
  fetchYouTubeVideos, 
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

        // Fetch Instagram posts via API route (with proxy for images)
        try {
          const instagramResponse = await fetch('/api/instagram');
          if (instagramResponse.ok) {
            const instagramData = await instagramResponse.json();
            if (instagramData.data && instagramData.data.length > 0) {
              setInstagramPosts(instagramData.data);
              console.log('✅ Instagram posts loaded from API (with proxy):', instagramData.data.length);
            } else {
              // Try basic display API as fallback
              const basicResponse = await fetch('/api/instagram/basic');
              if (basicResponse.ok) {
                const basicData = await basicResponse.json();
                if (basicData.data && basicData.data.length > 0) {
                  setInstagramPosts(basicData.data);
                  console.log('✅ Instagram posts loaded from Basic Display API:', basicData.data.length);
                } else {
                  setInstagramPosts(FALLBACK_INSTAGRAM_POSTS);
                  console.log('⚠️ Using fallback Instagram posts');
                }
              } else {
                setInstagramPosts(FALLBACK_INSTAGRAM_POSTS);
                console.log('⚠️ Using fallback Instagram posts');
              }
            }
          } else {
            throw new Error('Instagram API request failed');
          }
        } catch (instagramError) {
          console.error('❌ Instagram API error:', instagramError);
          setInstagramPosts(FALLBACK_INSTAGRAM_POSTS);
        }

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
            
            <div className="instagram-grid">
              {instagramPosts.map((post) => (
                <a 
                  key={post.id} 
                  href={post.permalink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="instagram-grid-item"
                >
                  <div className="instagram-grid-image">
                    <img 
                      src={post.mediaUrl} 
                      alt={post.caption ? `Instagram post: ${post.caption.substring(0, 50)}...` : "Instagram post"}
                      loading="lazy"
                      className="insta-img"
                      onError={(e) => {
                        // Fallback to a placeholder image if Instagram image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80';
                        target.alt = 'Instagram post (image unavailable)';
                      }}
                    />
                    <div className="instagram-gradient-overlay"></div>
                  </div>
                </a>
              ))}
            </div>
            
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
                  className="youtube-video glass-card gold-glass-border"
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
                <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" className="medium-post glass-card gold-glass-border">
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