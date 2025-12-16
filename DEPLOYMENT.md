# Deployment Guide: Next.js App to Server with Nginx & PM2

This guide walks you through deploying your Next.js Doctor Blog application to a server using PM2 and Nginx.

## 📋 Prerequisites

### Local Machine
- Node.js 18+ installed
- npm or yarn
- SSH access to your server

### Server Requirements
- Ubuntu/Debian server (or similar Linux distribution)
- Node.js 18+ installed
- PM2 installed globally: `npm install -g pm2`
- Nginx installed: `sudo apt-get install nginx`
- SSL certificate (optional, for HTTPS)

## 🚀 Step-by-Step Deployment

### Step 1: Prepare Production Environment File

Create `.env.production` file in your project root:

```bash
cp .env.local.example .env.production
```

Edit `.env.production` with your production values:

```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api/v1
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME="Dr. Sarah Ahmed - Menopause Coach & Islamic Educator"
NEXT_PUBLIC_CONTACT_EMAIL=dr.sarah@example.com
NEXT_PUBLIC_CONTACT_PHONE="+1 (555) 123-4567"
```

### Step 2: Build and Package Locally

Run the deployment script to build and package your application:

```bash
./deploy.sh
```

Or manually:

```bash
# Install dependencies
npm ci

# Build for production
NODE_ENV=production npm run build

# The build will create:
# - .next/ directory (build output)
# - standalone/ directory (standalone server)
```

The script will create a `deploy.tar.gz` file containing all necessary files.

### Step 3: Upload to Server

Upload the deployment package to your server:

```bash
scp deploy.tar.gz user@your-server:/tmp/
```

Or use SFTP, rsync, or any file transfer method.

### Step 4: Server Setup

SSH into your server:

```bash
ssh user@your-server
```

#### 4.1 Create Application Directory

```bash
sudo mkdir -p /var/www/doctor-blog
sudo chown -R $USER:$USER /var/www/doctor-blog
```

#### 4.2 Extract Deployment Package

```bash
cd /var/www/doctor-blog
tar -xzf /tmp/deploy.tar.gz
```

#### 4.3 Install Production Dependencies

```bash
npm ci --production
```

#### 4.4 Update PM2 Configuration

Edit `ecosystem.config.js` and update:
- `NEXT_PUBLIC_API_URL` with your actual API URL
- Any other environment variables

#### 4.5 Start Application with PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # Run the command it outputs to enable PM2 on boot
```

Check status:

```bash
pm2 status
pm2 logs doctor-blog-nextjs
```

### Step 5: Configure Nginx

#### 5.1 Copy Nginx Configuration

```bash
sudo cp nginx.conf /etc/nginx/sites-available/doctor-blog
```

#### 5.2 Edit Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/doctor-blog
```

Update the following:
- `server_name` with your domain
- SSL certificate paths (if using HTTPS)
- Any other domain-specific settings

#### 5.3 Enable Site

```bash
sudo ln -s /etc/nginx/sites-available/doctor-blog /etc/nginx/sites-enabled/
```

#### 5.4 Test and Reload Nginx

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### Step 6: Configure Firewall (if needed)

If using UFW:

```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow 3000/tcp  # For PM2 (optional, only if not using reverse proxy)
```

### Step 7: SSL Certificate (Optional but Recommended)

If using Let's Encrypt:

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Then update the nginx configuration to use the SSL server block.

## 🔧 Configuration Files

### PM2 Ecosystem (`ecosystem.config.js`)

Key settings:
- **instances**: Number of cluster instances (adjust based on CPU cores)
- **PORT**: Internal port (default: 3000)
- **max_memory_restart**: Restart if memory exceeds this limit

### Nginx Configuration (`nginx.conf`)

Key settings:
- **upstream**: Points to PM2 app on port 3000
- **server_name**: Your domain name
- **Static file caching**: Optimized for performance
- **Gzip compression**: Enabled for better performance

## 📊 Monitoring & Maintenance

### PM2 Commands

```bash
# View logs
pm2 logs doctor-blog-nextjs

# Monitor resources
pm2 monit

# Restart application
pm2 restart doctor-blog-nextjs

# Stop application
pm2 stop doctor-blog-nextjs

# View status
pm2 status

# View detailed info
pm2 show doctor-blog-nextjs
```

### Nginx Commands

```bash
# Test configuration
sudo nginx -t

# Reload configuration
sudo systemctl reload nginx

# Restart nginx
sudo systemctl restart nginx

# View logs
sudo tail -f /var/log/nginx/doctor-blog-access.log
sudo tail -f /var/log/nginx/doctor-blog-error.log
```

## 🔄 Updating the Application

### Quick Update Process

1. **Local**: Build and package
   ```bash
   ./deploy.sh
   ```

2. **Upload**: Transfer to server
   ```bash
   scp deploy.tar.gz user@server:/tmp/
   ```

3. **Server**: Deploy
   ```bash
   ssh user@server
   cd /var/www/doctor-blog
   pm2 stop doctor-blog-nextjs
   tar -xzf /tmp/deploy.tar.gz
   npm ci --production
   pm2 restart doctor-blog-nextjs
   ```

Or use the automated server script:

```bash
# On server
./deploy-server.sh
```

## 🐛 Troubleshooting

### Application Not Starting

1. Check PM2 logs:
   ```bash
   pm2 logs doctor-blog-nextjs --lines 50
   ```

2. Check if port is in use:
   ```bash
   sudo lsof -i :3000
   ```

3. Verify environment variables:
   ```bash
   pm2 env doctor-blog-nextjs
   ```

### Nginx 502 Bad Gateway

1. Check if PM2 app is running:
   ```bash
   pm2 status
   ```

2. Check nginx error logs:
   ```bash
   sudo tail -f /var/log/nginx/doctor-blog-error.log
   ```

3. Verify upstream connection:
   ```bash
   curl http://localhost:3000
   ```

### Static Files Not Loading

1. Check file permissions:
   ```bash
   sudo chown -R www-data:www-data /var/www/doctor-blog
   sudo chmod -R 755 /var/www/doctor-blog
   ```

2. Verify static file paths in nginx config

### High Memory Usage

1. Reduce PM2 instances:
   ```bash
   # Edit ecosystem.config.js
   instances: 1  # Instead of 2
   ```

2. Adjust max_memory_restart:
   ```bash
   max_memory_restart: '500M'  # Lower limit
   ```

## 📝 File Structure on Server

```
/var/www/doctor-blog/
├── .next/              # Next.js build output
├── standalone/         # Standalone server files
├── public/             # Static assets
├── node_modules/      # Production dependencies
├── package.json
├── package-lock.json
├── .env.production
└── ecosystem.config.js
```

## 🔒 Security Best Practices

1. **Keep dependencies updated**:
   ```bash
   npm audit
   npm audit fix
   ```

2. **Use environment variables** for sensitive data

3. **Enable firewall** and only open necessary ports

4. **Use HTTPS** with valid SSL certificates

5. **Regular backups** of application and database

6. **Monitor logs** for suspicious activity

## 📈 Performance Optimization

1. **Enable gzip compression** (already in nginx config)

2. **Cache static assets** (already configured)

3. **Use CDN** for images and large assets

4. **Monitor PM2** memory usage and adjust instances

5. **Enable HTTP/2** in nginx (if using SSL)

## 🆘 Support

If you encounter issues:

1. Check PM2 logs: `pm2 logs doctor-blog-nextjs`
2. Check Nginx logs: `sudo tail -f /var/log/nginx/doctor-blog-error.log`
3. Verify all environment variables are set correctly
4. Ensure Node.js version matches (18+)
5. Check server resources (CPU, memory, disk space)

---

**Note**: Remember to update domain names, API URLs, and other configuration values specific to your deployment environment.






