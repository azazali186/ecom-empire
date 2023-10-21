/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "fakestoreapi.com",
      },
      {
        hostname: "i.dummyjson.com",
      },
    ],
  },
};

module.exports = nextConfig;
