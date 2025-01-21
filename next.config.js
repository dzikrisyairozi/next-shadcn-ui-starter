/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src/'],
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
