import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client"],
  webpack: (config) => {
    config.externals = [...config.externals, "@prisma/client", ".prisma"]
    return config
  }
};

export default nextConfig;
