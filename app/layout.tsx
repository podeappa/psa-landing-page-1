export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="bg-gray-900 py-20 md:py-32 text-center border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 leading-tight">
            Secure CI/CD Automation
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            The foundation for highly secure, automated, and observable software deployment pipelines, demonstrating proficiency in modern development practices for the Sr PSA role.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <a href="#features" className="px-8 py-3 text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-xl transform hover:scale-105">
              Explore Features
            </a>
            <a href="#contact" className="px-8 py-3 text-lg font-medium rounded-lg text-indigo-400 bg-gray-800 hover:bg-gray-700 transition duration-300 border border-indigo-400 transform hover:scale-105">
              Schedule Test Demo
            </a>
          </div>
        </div>
      </section>

      {/* 2. Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Key Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature Card 1 */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-2xl border border-indigo-900 hover:border-indigo-600 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944c-1.25.15-2.482.47-3.666.953M21 12a9 9 0 11-18 0" />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">Automated Testing</h3>
              <p className="text-gray-400">CI pipeline enforces code quality and runs tests on every push, ensuring continuous readiness for deployment.</p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-2xl border border-indigo-900 hover:border-indigo-600 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">Exclusive CLI Workflow</h3>
              <p className="text-gray-400">All Git operations are performed via the command line, establishing a strong and traceable version control history.</p>
            </div>

            {/* Feature Card 3 */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-2xl border border-indigo-900 hover:border-indigo-600 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6-6v6m3-3h6m3-6V3m-3 0h3m-3 3h-3" />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">Security Scanning</h3>
              <p className="text-gray-400">Integrated vulnerability and dependency scanning to identify and mitigate risks early in the development lifecycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Call to Action / Contact Section */}
      <section id="contact" className="py-20 md:py-24 bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Automate Your Success?</h2>
          <p className="text-gray-300 text-lg mb-8">
            This deployment pipeline is designed for speed, reliability, and security. Contact us to discuss your specific automation needs.
          </p>
          <a href="#" className="px-12 py-4 text-xl font-bold rounded-lg text-gray-900 bg-cyan-400 hover:bg-cyan-300 transition duration-300 shadow-2xl transform hover:scale-105">
            Discuss Deployment
          </a>
        </div>
      </section>
    </>
  );
}
