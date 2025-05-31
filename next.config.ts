import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "https://rrrrrrrrrrr-tqe5.vercel.app/"
    ],
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
