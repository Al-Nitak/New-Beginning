#!/bin/bash

# Script to set up standalone build for local testing
# This copies the necessary static assets that Next.js standalone doesn't include

set -e

STANDALONE_DIR=".next/standalone"
PUBLIC_DIR="public"
STATIC_DIR=".next/static"

echo "🔧 Setting up standalone build for local testing..."

# Check if standalone directory exists
if [ ! -d "$STANDALONE_DIR" ]; then
    echo "❌ Error: Standalone directory not found. Please run 'yarn build' first."
    exit 1
fi

# Copy public folder
if [ -d "$PUBLIC_DIR" ]; then
    echo "📁 Copying public folder..."
    cp -r "$PUBLIC_DIR" "$STANDALONE_DIR/"
    echo "✅ Public folder copied"
else
    echo "⚠️  Warning: Public folder not found"
fi

# Copy static folder
if [ -d "$STATIC_DIR" ]; then
    echo "📁 Copying static assets..."
    mkdir -p "$STANDALONE_DIR/.next"
    cp -r "$STATIC_DIR" "$STANDALONE_DIR/.next/"
    echo "✅ Static assets copied"
else
    echo "⚠️  Warning: Static folder not found"
fi

# Copy .env.production to standalone directory if it exists
if [ -f ".env.production" ]; then
    echo "📁 Copying production environment file..."
    cp ".env.production" "$STANDALONE_DIR/.env.production"
    echo "✅ Production environment file copied"
fi

echo ""
echo "✅ Setup complete! You can now run:"
echo "   NODE_ENV=production node .next/standalone/server.js"
echo ""
echo "⚠️  Note: If API calls are going to localhost, rebuild with:"
echo "   NEXT_PUBLIC_API_URL=https://new-beginning-admin.alnitak.app/api/v1 yarn build"
echo ""

