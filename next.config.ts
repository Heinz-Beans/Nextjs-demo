import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img-cdn.hltv.org",
        port: "",
        pathname: "/teamlogo/**",
      },
    ],
  },
};

export default nextConfig;
