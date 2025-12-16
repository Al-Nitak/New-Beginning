/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Standalone output for production deployment
  output: 'standalone',
  // Skip TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build (optional)
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
