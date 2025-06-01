import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['img-cdn.hltv.org'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img-cdn.hltv.org",
        pathname: "/teamlogo/**",
      },
    ],
  },
};

export default nextConfig;
