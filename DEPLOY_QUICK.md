# Quick Deployment Reference

## 🚀 Quick Start

### 1. Build & Package (Local)
```bash
./deploy.sh
```

### 2. Upload to Server
```bash
scp deploy.tar.gz user@your-server:/tmp/
```

### 3. Deploy on Server
```bash
ssh user@your-server
cd /var/www/doctor-blog
tar -xzf /tmp/deploy.tar.gz
npm ci --production
pm2 start ecosystem.config.js
pm2 save
sudo systemctl reload nginx
```

## 📁 Key Files

- `deploy.sh` - Local build and package script
- `deploy-server.sh` - Server deployment script (optional)
- `ecosystem.config.js` - PM2 configuration
- `nginx.conf` - Nginx reverse proxy configuration
- `DEPLOYMENT.md` - Full deployment guide

## ⚙️ Configuration

### Update Before Deployment

1. **`.env.production`** - Production environment variables
2. **`ecosystem.config.js`** - PM2 settings and API URL
3. **`nginx.conf`** - Domain name and SSL certificates

## 🔍 Quick Checks

```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs doctor-blog-nextjs

# Test nginx
sudo nginx -t

# Check if app is responding
curl http://localhost:3000
```

## 🔄 Update Process

```bash
# 1. Local: Build
./deploy.sh

# 2. Upload
scp deploy.tar.gz user@server:/tmp/

# 3. Server: Deploy
cd /var/www/doctor-blog
pm2 stop doctor-blog-nextjs
tar -xzf /tmp/deploy.tar.gz
npm ci --production
pm2 restart doctor-blog-nextjs
```

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)






