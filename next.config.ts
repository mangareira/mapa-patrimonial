import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client"],
  webpack: (config) => {
    config.externals = [...config.externals, "@prisma/client", ".prisma"]
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**'
      }
    ],
  }
};

export default nextConfig;
