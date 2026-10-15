/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    // Enable PPR if you are using Next.js 14/15 experimental PPR features
    ppr: 'incremental', 
  },
  // Ensure Next.js allows loading client packets from public/
  reactStrictMode: true,
};

module.exports = nextConfig;