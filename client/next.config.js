/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  env: {
    GRAPHQL_URI: process.env.GRAPHQL_URI
  }
}

module.exports = nextConfig
