/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'img.shields.io', 'camo.githubusercontent.com', 'www.devluar.com', 'upload.wikimedia.org', 'github.com'],
  },
}

module.exports = nextConfig
