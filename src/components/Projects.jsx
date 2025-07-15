export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Azeti */}
          <a href="https://azeti.net" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="h-48 bg-white flex items-center justify-center p-6">
              <img src="/azeti.png" alt="Azeti Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Azeti</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">An MES (manufacturing execution system) platform for the world's largest copper recycler.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">React</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Next.js</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Kotlin</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Spring Boot</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">PostgreSQL</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Redux ToolKit</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">MUI</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Liquibase</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Docker</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Spring</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">API Gateway</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">AG Grid</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">React Hook Forms</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">RTL</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Playwright</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Gitlab CI</span>
              </div>
            </div>
          </a>
          {/* Netcetera */}
          <a href="https://netcetera.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="h-48 bg-white flex items-center justify-center p-6">
              <img src="/netcetera.jpg" alt="Netcetera Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Netcetera</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Secure payment processing solutions for major financial institutions.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Angular</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Java</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Spring Boot</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Rundeck</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Selenium</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Mockito</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Flyway</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Lombok</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Jenkins</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Maven</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Spring</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">JUnit</span>
              </div>
            </div>
          </a>
          {/* Propertybase */}
          <a href="https://propertybase.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="h-48 bg-white flex items-center justify-center p-6">
              <img src="/propertybase.png" alt="Propertybase Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Propertybase</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Developing the #1 real estate extension for the Salesforce platform.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Salesforce</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Apex</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Java</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">VisualForce</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">React</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
} 