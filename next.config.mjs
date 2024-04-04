/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      domains: ['assets.otherside.xyz'],
    }
  };
  
  export default nextConfig;
  