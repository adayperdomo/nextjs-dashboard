/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    // …any other flags you had in TS
  },
  // …your other Next.js config options
};

module.exports = nextConfig;
