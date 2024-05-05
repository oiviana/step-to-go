import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port:"",
        pathname:"/eweflu7ot79u/AObspviUKxuYOO54eQfvQ/e62a65d5b5d716cb0d98390a6b4fddce/**"
      },
    ],
  },
};
 
export default withNextIntl(nextConfig);