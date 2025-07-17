import { NextRequest, NextResponse } from 'next/server';

// Notion API integration
async function addToNotionDatabase(formData: any) {
  const notionToken = process.env.NOTION_TOKEN;
  const notionDatabaseId = process.env.NOTION_DATABASE_ID;

  if (!notionToken || !notionDatabaseId) {
    console.warn('Notion credentials not configured - NOTION_TOKEN or NOTION_DATABASE_ID missing');
    return null;
  }

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${notionToken}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: { database_id: notionDatabaseId },
        properties: {
          'Name': {
            title: [{ text: { content: formData.name } }]
          },
          'Email': {
            email: formData.email
          },
          'Phone': {
            phone_number: formData.phone || ''
          },
          'Contact Method': {
            select: { name: formData.contactMethod || 'email' }
          },
          'Message': {
            rich_text: [{ text: { content: formData.message } }]
          },
          'Status': {
            select: { name: 'New' }
          },
          'Submitted': {
            date: { start: new Date().toISOString() }
          }
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Notion API error:', response.status, errorText);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Error adding to Notion:', error);
    return null;
  }
}

// Email notification using Resend
async function sendEmailNotification(formData: any) {
  const resendApiKey = process.env.RESEND_API_KEY;
  
  if (!resendApiKey) {
    console.warn('Resend API key not configured - RESEND_API_KEY missing');
    return null;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'website@lukefornieri.com.au',
        to: ['luke.f@makrealty.com.au'],
        subject: `New Lead: ${formData.name} - Luke Fornieri Website`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Preferred Contact:</strong> ${formData.contactMethod}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Submitted: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}</small></p>
        `
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend API error:', response.status, errorText);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending email:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Log environment variable status
    console.log('Environment variables status:', {
      hasNotionToken: !!process.env.NOTION_TOKEN,
      hasNotionDatabaseId: !!process.env.NOTION_DATABASE_ID,
      hasResendApiKey: !!process.env.RESEND_API_KEY
    });

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Add to Notion database
    const notionResult = await addToNotionDatabase(formData);
    
    // Send email notification
    const emailResult = await sendEmailNotification(formData);

    // Log results
    console.log('Contact form submission processed:', {
      name: formData.name,
      email: formData.email,
      notionSuccess: !!notionResult,
      emailSuccess: !!emailResult,
      timestamp: new Date().toISOString()
    });

    // Check if any integrations are configured
    const hasAnyIntegration = process.env.NOTION_TOKEN || process.env.RESEND_API_KEY;
    
    if (!hasAnyIntegration) {
      console.warn('No integrations configured - form will only show success message');
      return NextResponse.json({
        success: true,
        message: 'Thank you! Your message has been received. (Note: Integrations not configured)',
        integrations: {
          notion: false,
          email: false
        }
      });
    }

    // Return success even if some integrations failed
    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been received.',
      integrations: {
        notion: !!notionResult,
        email: !!emailResult
      }
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 