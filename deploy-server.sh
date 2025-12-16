#!/bin/bash

# Server-side deployment script
# Run this on your server after uploading the deployment package

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="doctor-blog"
APP_DIR="/var/www/doctor-blog"
DEPLOY_FILE="deploy.tar.gz"
BACKUP_DIR="/var/www/backups"

echo "🚀 Starting server deployment..."

# Check if running as root or with sudo
if [ "$EUID" -ne 0 ]; then
    echo -e "${YELLOW}⚠️  Running without sudo. Some commands may require elevated privileges.${NC}"
fi

# Create app directory if it doesn't exist
if [ ! -d "$APP_DIR" ]; then
    echo "📁 Creating application directory..."
    mkdir -p $APP_DIR
fi

# Create backup
if [ -d "$APP_DIR/.next" ]; then
    echo "💾 Creating backup..."
    mkdir -p $BACKUP_DIR
    BACKUP_FILE="$BACKUP_DIR/${APP_NAME}-$(date +%Y%m%d-%H%M%S).tar.gz"
    tar -czf $BACKUP_FILE -C $APP_DIR .next standalone package.json 2>/dev/null || true
    echo -e "${GREEN}✅ Backup created: $BACKUP_FILE${NC}"
fi

# Check if deploy file exists
if [ ! -f "$DEPLOY_FILE" ]; then
    echo -e "${RED}❌ Error: $DEPLOY_FILE not found in current directory${NC}"
    echo "Please upload the deployment package first."
    exit 1
fi

# Stop PM2 app if running
echo "🛑 Stopping PM2 application..."
pm2 stop $APP_NAME 2>/dev/null || true
pm2 delete $APP_NAME 2>/dev/null || true

# Extract deployment package
echo "📦 Extracting deployment package..."
cd $APP_DIR
tar -xzf /tmp/$DEPLOY_FILE || tar -xzf ~/$DEPLOY_FILE || tar -xzf ./$DEPLOY_FILE

# Install production dependencies
echo "📦 Installing production dependencies..."
npm ci --production

# Set proper permissions
echo "🔐 Setting permissions..."
chown -R www-data:www-data $APP_DIR
chmod -R 755 $APP_DIR

# Start PM2 application
echo "🚀 Starting PM2 application..."
cd $APP_DIR
pm2 start ecosystem.config.js
pm2 save

# Show PM2 status
echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
pm2 status
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Test nginx configuration
echo ""
echo "🔍 Testing nginx configuration..."
nginx -t && echo -e "${GREEN}✅ Nginx configuration is valid${NC}" || echo -e "${RED}❌ Nginx configuration has errors${NC}"

echo ""
echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo ""
echo "📋 Next steps:"
echo "1. Reload nginx: sudo systemctl reload nginx"
echo "2. Check PM2 logs: pm2 logs $APP_NAME"
echo "3. Monitor app: pm2 monit"
echo ""






