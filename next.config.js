/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src/'],
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;