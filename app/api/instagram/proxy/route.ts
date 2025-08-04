import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return NextResponse.json({ error: 'Image URL is required' }, { status: 400 });
  }

  try {
    // Fetch the image from Instagram
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Instagram-Proxy/1.0)',
        'Referer': 'https://www.instagram.com/'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`);
    }

    // Get the image data
    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    // Return the image with appropriate headers
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('Error proxying Instagram image:', error);
    return NextResponse.json({ error: 'Failed to load image' }, { status: 500 });
  }
} 