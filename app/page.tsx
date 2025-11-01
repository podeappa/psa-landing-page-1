import './globals.css';
import Link from 'next/link';

// Component for Navigation Bar
function Header() {
  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-xl font-bold tracking-wider hover:text-indigo-400 transition duration-300">
              PSA Launch
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Features
            </Link>
            <Link href="#security" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Security
            </Link>
            <Link href="#contact" className="text-indigo-400 hover:text-indigo-300 px-3 py-2 rounded-md text-sm font-medium border border-indigo-400 transition duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Component for Footer
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sr PSA Assessment Task 1. Built with Next.js and Tailwind CSS.</p>
        <p className="text-xs mt-2">Focus: Web Development, Git CLI, and Automated Deployment.</p>
      </div>
    </footer>
  );
}

// Root Layout Component (Wraps the entire application)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Sr PSA Landing Page: Next.js Automation Task</title>
        <meta name="description" content="Landing page developed for the Senior PSA take-home assignment, focusing on CI/CD and security." />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
