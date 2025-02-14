import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    AIML_KEY: process.env.AIML_KEY,
  },
};

export default nextConfig;
