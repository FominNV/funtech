import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ["import", "legacy-js-api"],
    additionalData: `@import '@styles/modules';`,
  },
};

export default nextConfig;
