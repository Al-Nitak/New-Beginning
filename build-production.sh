#!/bin/bash

# Script to build with production API URL
# This ensures NEXT_PUBLIC_API_URL is set correctly even if .env.local has localhost

set -e

echo "🔨 Building with production API URL..."

# Override NEXT_PUBLIC_API_URL to use production
export NEXT_PUBLIC_API_URL=https://new-beginning-admin.alnitak.app/api/v1
export NODE_ENV=production

# Run the build
yarn build

echo ""
echo "✅ Build complete with production API URL!"
echo "   Run './setup-standalone.sh' to set up for local testing"
echo ""


