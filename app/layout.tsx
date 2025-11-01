import './globals.css';
import { Inter } from 'next/font/google';

// Initialize the Inter font instance
const inter = Inter({ subsets: ['latin'] });

// Metadata required by Next.js App Router
export const metadata = {
  title: 'Sr PSA Task 1 Landing Page',
  description: 'A static, secure landing page for the Sr PSA assignment.',
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      {/* The body includes the imported Inter font class and correctly wraps the children */}
      <body>{children}</body>
    </html>
  );
}