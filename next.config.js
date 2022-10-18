/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.pexels.com"],
  },
  //`redirects` from[redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects)

};

module.exports = nextConfig;
