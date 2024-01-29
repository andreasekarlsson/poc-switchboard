/** @type {import('next').NextConfig} */
const nextConfig = {  
  async rewrites() {
    return [
      {
        source: "/axis/:path*",
        destination: "https://www.axis.com/:path*",
        locale: false,
      },
    ];
  },
};

export default nextConfig;

module.exports ={
  output:"standalone",
}