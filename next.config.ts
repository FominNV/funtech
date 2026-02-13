import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  outputFileTracingRoot: __dirname,
  sassOptions: {
    silenceDeprecations: ["import", "legacy-js-api"],
    additionalData: `@import '@styles/modules';`,
  },
};

export default nextConfig;
