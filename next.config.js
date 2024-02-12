/** @type {import('next').NextConfig} */
const stylexPlugin = require("@stylexjs/nextjs-plugin");
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "www.notion.so",
      "images.unsplash.com",
      "s3.us-west-2.amazonaws.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "i.ibb.co",
    ],
    format: ["image/png", "image/webp", "image/jpeg", "image/gif"],
  },
};
module.exports = stylexPlugin({
  rootDir: __dirname,
})(nextConfig);

// module.exports = nextConfig;
