/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**",
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather"],
      },
    },
  },
};

module.exports = nextConfig;
