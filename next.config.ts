/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... โค้ดอื่นๆ ของคุณ ...
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c4.wallpaperflare.com',
        port: '',
        pathname: '/wallpaper/**',
      },
      // คุณสามารถเพิ่ม hostname อื่นๆ ได้ที่นี่
    ],
  },
};

module.exports = nextConfig;