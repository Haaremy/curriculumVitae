// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
    trailingSlash: false, // Disable trailing slashes
    distDir: 'build',
  };
  export default nextConfig;
  