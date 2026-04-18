/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'links.papareact.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'i5.walmartimages.com',
            pathname: '**',
          }
        ],
      },
    output: 'standalone'  
};

export default nextConfig;
