# Environment Files Setup Guide

## Available Environment Files

1. **env.local.template** - Template for local development
2. **env.production.template** - Template for production deployment

## Setup Instructions

### For Local Development

1. Copy the local template:
   ```bash
   cp env.local.template .env.local
   ```

2. Edit `.env.local` with your local settings:
   ```bash
   nano .env.local
   ```

3. Update the API URL if your Rails backend is running on a different port

### For Production Deployment

1. Copy the production template:
   ```bash
   cp env.production.template .env.production
   ```

2. Edit `.env.production` with your production settings:
   ```bash
   nano .env.production
   ```

3. **Important**: Update these values:
   - `NEXT_PUBLIC_API_URL` - Your production API URL
   - `NEXT_PUBLIC_SITE_URL` - Your production domain
   - `NEXT_PUBLIC_CONTACT_EMAIL` - Your actual contact email
   - `NEXT_PUBLIC_CONTACT_PHONE` - Your actual contact phone
   - Social media URLs - Your actual social media links

## Environment Variables Reference

### Required Variables

- `NEXT_PUBLIC_API_URL` - Backend API base URL
- `NEXT_PUBLIC_SITE_URL` - Frontend site URL
- `NEXT_PUBLIC_SITE_NAME` - Site name/title

### Optional Variables

- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email address
- `NEXT_PUBLIC_CONTACT_PHONE` - Contact phone number
- `NEXT_PUBLIC_LINKEDIN_URL` - LinkedIn profile URL
- `NEXT_PUBLIC_TWITTER_URL` - Twitter profile URL
- `NEXT_PUBLIC_INSTAGRAM_URL` - Instagram profile URL
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID

## Notes

- All `NEXT_PUBLIC_*` variables are exposed to the browser
- Never put sensitive data (API keys, secrets) in these files
- `.env.local` is for development (gitignored)
- `.env.production` is used during build (gitignored)
- Template files are tracked in git for reference

## Quick Setup Commands

```bash
# Development
cp env.local.template .env.local

# Production
cp env.production.template .env.production
```






