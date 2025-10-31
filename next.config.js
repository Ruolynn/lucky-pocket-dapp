/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['figma.com'],
    unoptimized: true
  }
}

module.exports = nextConfig

