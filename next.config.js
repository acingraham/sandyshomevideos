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
  /*
  async rewrites() {
    return [
      {
        source: '/amplitude',
        destination: 'https://api.amplitude.com/',
      },
    ];
  },
  */
};

module.exports = nextConfig;
