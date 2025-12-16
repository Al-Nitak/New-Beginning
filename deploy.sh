#!/bin/bash

# Deployment script for Doctor Blog Next.js App
# This script builds the app locally and prepares it for deployment

set -e

echo "🚀 Starting deployment preparation..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="doctor-blog"
BUILD_DIR=".next"
STANDALONE_DIR="standalone"
DEPLOY_DIR="deploy"
TAR_FILE="deploy.tar.gz"

# Check if .env.production exists
if [ ! -f ".env.production" ]; then
    echo -e "${YELLOW}⚠️  Warning: .env.production not found. Creating from .env.local.example...${NC}"
    if [ -f ".env.local.example" ]; then
        cp .env.local.example .env.production
        echo -e "${YELLOW}⚠️  Please update .env.production with your production values!${NC}"
    else
        echo -e "${RED}❌ Error: .env.production not found and no .env.local.example to copy from${NC}"
        exit 1
    fi
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf $BUILD_DIR $STANDALONE_DIR $DEPLOY_DIR $TAR_FILE

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production=false

# Build the application
echo "🔨 Building Next.js application..."
NODE_ENV=production npm run build

# Verify build
if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}❌ Build failed: .next directory not found${NC}"
    exit 1
fi

if [ ! -d "$STANDALONE_DIR" ]; then
    echo -e "${RED}❌ Build failed: standalone directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully!${NC}"

# Create deployment directory structure
echo "📁 Creating deployment package..."
mkdir -p $DEPLOY_DIR

# Copy necessary files
echo "📋 Copying files..."
cp -r $BUILD_DIR $DEPLOY_DIR/
cp -r $STANDALONE_DIR $DEPLOY_DIR/
cp -r public $DEPLOY_DIR/
cp package.json $DEPLOY_DIR/
cp package-lock.json $DEPLOY_DIR/ 2>/dev/null || cp yarn.lock $DEPLOY_DIR/ 2>/dev/null || true
cp .env.production $DEPLOY_DIR/.env.production
cp ecosystem.config.js $DEPLOY_DIR/

# Create deployment archive
echo "📦 Creating deployment archive..."
tar -czf $TAR_FILE -C $DEPLOY_DIR .

# Calculate file size
FILE_SIZE=$(du -h $TAR_FILE | cut -f1)
echo -e "${GREEN}✅ Deployment package created: $TAR_FILE (${FILE_SIZE})${NC}"

# Display next steps
echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Deployment package ready!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "📤 Next steps:"
echo "1. Upload $TAR_FILE to your server:"
echo "   scp $TAR_FILE user@your-server:/var/www/"
echo ""
echo "2. SSH into your server and extract:"
echo "   cd /var/www"
echo "   tar -xzf $TAR_FILE -C doctor-blog"
echo ""
echo "3. Install production dependencies:"
echo "   cd /var/www/doctor-blog"
echo "   npm ci --production"
echo ""
echo "4. Start with PM2:"
echo "   pm2 start ecosystem.config.js"
echo "   pm2 save"
echo ""
echo "5. Configure nginx (see nginx.conf file)"
echo ""






