import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import '@styles/modules';`,
  },
};

export default nextConfig;
