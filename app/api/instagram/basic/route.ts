import { NextResponse } from 'next/server';

export async function GET() {
  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_BASIC_TOKEN;
  const USER_ID = process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID;

  if (!ACCESS_TOKEN || !USER_ID) {
    console.error('Instagram Basic Display API credentials not configured');
    return NextResponse.json({ error: 'Instagram API not configured' }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${ACCESS_TOKEN}&limit=6`
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Instagram Basic Display API error:', errorText);
      throw new Error(`Instagram API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.data || !Array.isArray(data.data)) {
      throw new Error('Invalid Instagram API response');
    }

    // Transform the data to match our component interface
    const posts = data.data.map((post: any) => ({
      id: post.id,
      caption: post.caption || '',
      mediaUrl: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
      permalink: post.permalink,
      timestamp: post.timestamp,
      mediaType: post.media_type
    }));

    return NextResponse.json({ data: posts });
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return NextResponse.json({ error: 'Failed to fetch Instagram posts' }, { status: 500 });
  }
} 