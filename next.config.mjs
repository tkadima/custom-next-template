// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Example of modifying the webpack config
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
  // Other custom configurations
  images: {
    domains: ['example.com'], // Replace with your allowed image domains
  },
  env: {
    CUSTOM_ENV_VAR: process.env.CUSTOM_ENV_VAR, // Example of passing environment variables
  },
}

export default nextConfig
