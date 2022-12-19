/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sandyshomevideos.s3.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
