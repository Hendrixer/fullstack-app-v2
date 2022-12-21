/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'],
  },
}

module.exports = nextConfig
