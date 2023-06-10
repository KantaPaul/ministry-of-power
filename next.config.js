/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFileTracing: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.absolutionit.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig
