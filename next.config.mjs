/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'intietkiem.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i1-dulich.vnecdn.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'thanhnien.mediacdn.vn',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'facts.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'live.staticflickr.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdna.artstation.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'townsquare.media',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdnmedia.baotintuc.vn',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'mages.squarespace-cdn.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.galaxycine.vn',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.squarespace-cdn.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
