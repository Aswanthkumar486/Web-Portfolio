// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // ✅ move this here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.intelliscence.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
