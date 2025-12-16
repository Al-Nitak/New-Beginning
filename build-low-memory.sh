#!/bin/bash

# Low-memory build script for servers with limited RAM (1GB)
# This script optimizes Node.js and Next.js for minimal memory usage

set -e

echo "🔨 Building with low-memory optimizations (1GB RAM)..."
echo ""

# Set Node.js memory limits
# Use max-old-space-size to limit Node.js heap to 700MB (leaving ~300MB for system)
export NODE_OPTIONS="--max-old-space-size=700 --max-semi-space-size=64"

# Enable low-memory mode
export LOW_MEMORY=true

# Disable unnecessary features
export NEXT_TELEMETRY_DISABLED=1
export NODE_ENV=production

# Clear any existing build cache to free memory
if [ -d ".next/cache" ]; then
  echo "🧹 Clearing build cache..."
  rm -rf .next/cache
fi

# Build with optimizations
echo "📦 Starting build with memory optimizations..."
echo "   - Node.js heap limit: 700MB"
echo "   - Low memory mode: enabled"
echo "   - Parallelism: reduced"
echo ""

# Run the build
yarn build

echo ""
echo "✅ Build complete!"
echo ""

