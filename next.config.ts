// next.config.js (or next.config.ts)
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com", // for pokemon sprites
      },
      {
        protocol: "https",
        hostname: "pokeapi.co",
      },
    ],
  },
};

export default nextConfig;
