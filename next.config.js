/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.pexels.com"],
  },
  //`redirects` from[redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects)
  async redirects() {
    return [
      {
        source: '/account',
        destination: '/login',
        permanent: false, // CHG TO TRUE 308 STATUS TO CACHE THE client.search to cache the redirect forever
      },
    ]
  },
};

module.exports = nextConfig;
