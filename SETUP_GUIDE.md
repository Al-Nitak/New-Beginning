# Doctor Blog Setup Guide

## Environment Configuration

### Backend (Rails) - Create `.env` file in server directory:
```env
RAILS_ENV=development
DATABASE_URL=postgresql://localhost/doctor_blog_development
SECRET_KEY_BASE=your_secret_key_here
API_BASE_URL=http://localhost:3000/api/v1
FRONTEND_URL=http://localhost:3001
LETTER_OPENER=true
```

### Frontend (Next.js) - Create `.env.local` file in new-beginning directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
NEXT_PUBLIC_SITE_URL=http://localhost:3001
NEXT_PUBLIC_SITE_NAME="Dr. Sarah Ahmed - Menopause Coach & Islamic Educator"
NEXT_PUBLIC_CONTACT_EMAIL=dr.sarah@example.com
NEXT_PUBLIC_CONTACT_PHONE="+1 (555) 123-4567"
```

## Installation & Setup

### 1. Backend Setup (Rails)
```bash
cd /Users/albiruni/Alnitak/AlnitakBlogTemplate/server
bundle install
rails db:create
rails db:migrate
rails server -p 3000
```

### 2. Frontend Setup (Next.js)
```bash
cd /Users/albiruni/Alnitak/themeforest-Jmo6v5MI-new-beginning-react-startups-digital-agency-templates/new-beginning
npm install
npm run dev
```

## API Testing

### Test Doctor Profile Endpoint
```bash
curl http://localhost:3000/api/v1/doctor_profile
```

### Test Services Endpoint
```bash
curl http://localhost:3000/api/v1/services
```

### Test Articles Endpoint
```bash
curl http://localhost:3000/api/v1/articles
```

## Available API Endpoints

- `GET /api/v1/doctor_profile` - Doctor profile information
- `GET /api/v1/services` - List of services
- `GET /api/v1/services/:id` - Specific service details
- `GET /api/v1/articles` - Blog articles
- `GET /api/v1/articles/:id` - Specific article
- `GET /api/v1/testimonials` - Client testimonials
- `POST /api/v1/testimonials` - Create testimonial
- `GET /api/v1/appointments` - List appointments
- `POST /api/v1/appointments` - Create appointment
- `POST /api/v1/contact_messages` - Send contact message

## Next Steps

1. **Start both servers** (Rails on port 3000, Next.js on port 3001)
2. **Test API endpoints** using curl or Postman
3. **Update component content** with real doctor information
4. **Add real images** for doctor profile and services
5. **Implement booking functionality** in the frontend
6. **Add blog post pages** for individual articles

## Troubleshooting

### CORS Issues
- Ensure CORS is configured in `config/initializers/cors.rb`
- Check that frontend URL is allowed in CORS configuration

### API Connection Issues
- Verify Rails server is running on port 3000
- Check that `NEXT_PUBLIC_API_URL` is set correctly
- Ensure no firewall blocking localhost connections

### Database Issues
- Run `rails db:create` if database doesn't exist
- Run `rails db:migrate` to apply migrations
- Check PostgreSQL is running
