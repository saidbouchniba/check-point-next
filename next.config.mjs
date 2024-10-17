/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn-icons-png.flaticon.com',
            port: '',
            pathname: '/512/4079/4079259.png',
          },
        ],
      },
};

export default nextConfig;
