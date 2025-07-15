export default function Skills() {
const frontendSkills = ["React", "TypeScript", "Next.js", "Angular", "Tailwind", "AG Grid", "Redux ToolKit", "MUI", "RTL", "Playwright"];
const backendSkills = ["Kotlin", "Java", "Spring Boot", "PostgreSQL", "Hibernate", "JUnit", "Mockito", "Salesforce", "Liquibase", "Lombok"];
const toolsSkills = ["Git", "Docker", "Keycloak", "CI/CD", "Agile", "API Gateway", "Jenkins", "Selenium"];

  return (
    <section id="skills" className="py-20 scroll-mt-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-red-400 p-8 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-white">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <span key={skill} className="bg-gray-200 text-slate-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-400 hover:text-white hover:border-white hover:border-4 hover:scale-105 transition-all duration-300">{skill}</span>
              ))}
            </div>
          </div>
          <div className="bg-blue-400 p-8 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-white">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill) => (
                <span key={skill} className="bg-gray-200 text-slate-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-400 hover:text-white hover:border-white hover:border-4 hover:scale-105 transition-all duration-300">{skill}</span>
              ))}
            </div>
          </div>
          <div className="bg-yellow-400 p-8 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-white">Tools & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {toolsSkills.map((skill) => (
                <span key={skill} className="bg-gray-200 text-slate-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-white hover:border-white hover:border-4 hover:scale-105 transition-all duration-300">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 