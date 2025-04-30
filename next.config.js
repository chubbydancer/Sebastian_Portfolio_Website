/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Optional: Remove if not using App Directory
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    // Disable cache for both client and server in dev mode
    config.cache = false;
    return config;
  },
  swcMinify: true,  // Enabling SWC minification for better performance
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'], // Allow images from GitHub
  },
};

module.exports = nextConfig;
