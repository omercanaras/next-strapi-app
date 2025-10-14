/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, 
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
