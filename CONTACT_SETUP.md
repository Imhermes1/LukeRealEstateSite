# Contact Form Setup Guide

Your contact form is now configured to integrate with **Notion** (for lead management) and **email notifications**. Follow these steps to complete the setup:

## 1. Notion Database Setup

### Create Database
1. Go to [Notion](https://notion.so) and create a new database
2. Name it "Website Leads" or similar
3. Create these columns with exact names:
   - **Name** (Title)
   - **Email** (Email)
   - **Phone** (Phone)
   - **Contact Method** (Select: email, phone)
   - **Message** (Text)
   - **Status** (Select: New, Contacted, Qualified, Closed)
   - **Submitted** (Date)

### Get API Credentials
1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name: "Luke Fornieri Website"
4. Copy the **Integration Token** (starts with `secret_`)
5. Go to your database → Share → Add your integration
6. Copy the **Database ID** from URL: `notion.so/DATABASE_ID?v=...`

## 2. Email Setup (Resend)

### Create Account
1. Go to [Resend](https://resend.com)
2. Sign up for free account
3. Go to API Keys → Create API Key
4. Copy the **API Key** (starts with `re_`)

### Domain Setup (Optional but Recommended)
1. Add your domain `lukefornieri.com.au` in Resend
2. Add DNS records they provide
3. Once verified, emails will come from `website@lukefornieri.com.au`

## 3. Environment Variables

Add these to your **Vercel Environment Variables**:

```bash
# Notion Integration
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Email Notifications  
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 4. Testing

1. Deploy to Vercel with environment variables
2. Submit a test form on your website
3. Check:
   - ✅ New entry appears in Notion database
   - ✅ Email notification received at luke@makrealty.com.au
   - ✅ Form shows success message

## Features

### What Happens When Someone Submits:
1. **Immediate**: Email notification sent to you
2. **Organized**: Lead added to Notion database with status "New"
3. **User Experience**: Success/error messages shown
4. **Validation**: Email format and required fields checked

### Notion Database Benefits:
- Track lead status (New → Contacted → Qualified → Closed)
- Add notes and follow-up dates
- Filter by contact method, date, status
- Export data for analysis
- Share with team members

### Email Notifications:
- Instant alerts when leads come in
- All form details included
- Timestamped with Melbourne time
- Professional HTML formatting

## Troubleshooting

- **No Notion entries**: Check NOTION_TOKEN and DATABASE_ID
- **No emails**: Check RESEND_API_KEY and domain setup  
- **Form errors**: Check browser console for API errors
- **Database errors**: Ensure column names match exactly

## Future Enhancements

- Lead scoring based on message content
- Automated follow-up sequences
- Integration with CRM systems
- SMS notifications for urgent leads 