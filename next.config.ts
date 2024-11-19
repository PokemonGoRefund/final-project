import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    OPENAI_API_KEY: 'sk-proj-6y1TB3LNvzmyGnntt3yFT3BlbkFJzPIpy6E2sbENBXnGd76L',
  },
};

export default nextConfig;
