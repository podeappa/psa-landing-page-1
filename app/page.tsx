import Link from 'next/link';

// Component for a simple button link
const ButtonLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="px-6 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
  >
    {children}
  </Link>
);

// Component for a feature card
const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: string }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
    <div className="text-3xl text-indigo-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);


export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* 1. Navigation Header */}
      <header className="sticky top-0 z-10 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold text-indigo-600">
            Test Website
          </div>
          <div className="space-x-4">
            <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition">Features</Link>
            <Link href="#contact" className="text-gray-600 hover:text-indigo-600 transition">Contact</Link>
          </div>
        </nav>
      </header>

      {/* 2. Hero Section (Fills the black space) */}
      <main className="flex-grow">
        <section className="bg-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="lg:pr-16">
              <span className="inline-block bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full uppercase mb-4">
                Task 1 Complete
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Automated Security & Governance Platform
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We design resilient CI/CD pipelines and enforce strict code quality and security policies, ensuring zero tolerance for unauthorized changes.
              </p>
              <div className="flex space-x-4">
                <ButtonLink href="#features">Explore Features</ButtonLink>
                <ButtonLink href="#contact">Get in Touch</ButtonLink>
              </div>
            </div>

            {/* Image Placeholder (Fills the visual gap) */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition duration-500">
              <img
                src="https://placehold.co/800x600/4F46E5/FFFFFF?text=Secure+Pipeline"
                alt="A secure software delivery pipeline visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-indigo-500 opacity-20"></div>
            </div>

          </div>
        </section>

        {/* 3. Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Core Capabilities</h2>
            <p className="text-xl text-center text-gray-600 mb-12">Automation, Governance, and Security Auditing.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="Continuous Deployment" 
                description="Automated Vercel deployment ensures every push to main instantly goes live, verified and built by CI." 
                icon="🚀" 
              />
              <FeatureCard 
                title="Repository Governance" 
                description="Strict PR auto-closure policy prevents unauthorized external contributions, enforcing code integrity." 
                icon="🔒" 
              />
              <FeatureCard 
                title="Automated Support" 
                description="Issue comment triggers (like /help) automate communication, maintaining professional standards." 
                icon="💬" 
              />
            </div>
          </div>
        </section>

        {/* 4. CTA / Contact Section */}
        <section id="contact" className="py-20 bg-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">Ready to Secure Your Delivery?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Reach out today to discuss how we can secure your critical applications.
            </p>
            <ButtonLink href="#">Start Project Now</ButtonLink>
          </div>
        </section>
      </main>

      {/* 5. Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Task 1. All rights reserved. | Built with Next.js, Tailwind, and GitHub Actions.
        </div>
      </footer>
      
    </div>
  );
}