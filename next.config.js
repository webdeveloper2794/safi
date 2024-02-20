/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',        
      },
      {
        protocol: 'https',
        hostname: 'assets.nicepagecdn.com',        
      },
      {
        protocol: 'https',
        hostname: 'www.safigrup.com',        
      },
    ],
  },  
}
module.exports = withNextIntl(nextConfig);