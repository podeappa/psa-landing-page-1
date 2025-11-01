/** @type {import('next').NextConfig} */
const nextConfig = {
    // Required for static site generation (fixes the build failure)
    output: 'export', 
    
    // FINAL CSS FIX: This sets the base path for assets (CSS/JS) to the root directory, 
    // ensuring the styles are loaded correctly after static export.
    basePath: '', 
  
    // Optional: Disable strict mode for production for stability
    reactStrictMode: false,
  };
  
  export default nextConfig;