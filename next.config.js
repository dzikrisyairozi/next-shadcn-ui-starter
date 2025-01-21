/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['app', 'components', 'lib', 'hooks'], // Directories to lint, add upon adding more files
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;