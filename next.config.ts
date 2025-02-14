import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_AIML_KEY: process.env.NEXT_PUBLIC_AIML_KEY,
  },
};

export default nextConfig;
