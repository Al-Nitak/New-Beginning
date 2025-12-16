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
  // Memory optimizations for low-RAM servers
  experimental: {
    // Reduce memory usage during build
    webpackBuildWorker: false,
    // Disable memory-intensive features
    optimizeCss: false,
  },
  // Reduce build parallelism to save memory
  webpack: (config, { isServer }) => {
    // Limit webpack parallelism for low-memory environments
    if (process.env.LOW_MEMORY === 'true') {
      config.parallelism = 1;
      config.optimization = {
        ...config.optimization,
        minimize: true,
      };
    }
    return config;
  },
}

module.exports = nextConfig
