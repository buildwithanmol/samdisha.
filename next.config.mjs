/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                host: 'res.cloudinary.com'
            }
        ]
    }
};

export default nextConfig;
