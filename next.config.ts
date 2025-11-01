/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL FIX FOR STATIC DEPLOYMENT:
  // This tells Next.js to output a folder of static HTML/CSS/JS files (in the 'out' directory)
  // instead of a server-ready application. This is ideal for static landing pages.
  output: 'export', 
};

export default nextConfig;
