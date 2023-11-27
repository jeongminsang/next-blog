/** @type {import('next').NextConfig} */
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
      "velog.velcdn.com",
    ],
    format: ["image/png", "image/webp", "image/jpeg", "image/gif"],
  },
};

module.exports = nextConfig;
