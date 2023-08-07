/** @type {import('next').NextConfig} */
const nextConfig = {
  //   experimental: {
  //     appDir: true,
  //   },
  images: {
    domains: [
      "cdn.sanity.io",
      "images.unsplash.com",
      "i.ibb.co",
      "api.dicebear.com",
      "via.placeholder.com",
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;
