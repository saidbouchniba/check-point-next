/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.campussuddesmetiers.com',
            port: '',
            pathname: '/wp-content/uploads/2022/05/iStock-1017296544.jpg',
          },
        ],
      },
};

export default nextConfig;
