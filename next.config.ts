import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/ai-greener-livestock',
  assetPrefix: '/ai-greener-livestock/',
};

export default nextConfig;
