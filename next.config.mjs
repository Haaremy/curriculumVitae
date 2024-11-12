// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
    trailingSlash: true, // Add trailing slashes to URLs
    output: 'export',    // Set output mode to export for static sites
    distDir: 'build',
  };
  
  export default nextConfig;
  