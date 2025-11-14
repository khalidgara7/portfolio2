import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
    "Bootstrap",
  ];

  const backendSkills = [
    "Node.js",
    "PHP (Laravel)",
    "MySQL",
    "MongoDB",
    "JWT",
    "Docker",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative bg-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
      
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-blue text-center neon-blue">
            About Me
          </h2>

          <div className="glass rounded-2xl p-8 border border-white/10 card-hover mb-8">
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              I'm <span className="text-blue-400 font-bold gradient-blue">Khalid EL Mati</span>, a passionate Full Stack Web
              Developer from Morocco, with a strong interest in building modern,
              responsive, and user-friendly web applications. I enjoy combining
              creativity and technology to deliver efficient digital solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-dark rounded-xl p-6 card-hover group border border-blue-500/20">
                <h3 className="text-xl font-bold mb-4 gradient-text">🎨 Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:scale-105 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition-all duration-300 animate-fade-in-scale"
                      style={{ animationDelay: `${key * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-dark rounded-xl p-6 card-hover group border border-cyan-500/20">
                <h3 className="text-xl font-bold mb-4 gradient-text">⚙️ Backend</h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-cyan-500/10 text-cyan-400 py-2 px-4 rounded-full text-sm font-medium hover:bg-cyan-500/20 hover:scale-105 hover:shadow-[0_2px_8px_rgba(6,182,212,0.3)] transition-all duration-300 animate-fade-in-scale"
                      style={{ animationDelay: `${key * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 🎓 Education */}
            <div className="glass p-6 rounded-2xl border border-white/10 card-hover group">
              <div className="gradient-border p-4 rounded-xl mb-4">
                <h3 className="text-xl font-bold mb-2 gradient-text">🏫 Education</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="group-hover:text-gray-200 transition-colors">
                  <strong className="text-blue-400">
                    Bachelor's Degree in Web Engineering (Full Stack)
                  </strong>{" "}
                  <span className="text-sm text-gray-400">– École Supérieure de Technologie de Kénitra (2025)</span>
                </li>
                <li className="group-hover:text-gray-200 transition-colors">
                  <strong className="text-cyan-400">YouCode</strong>{" "}
                  <span className="text-sm text-gray-400">(OCP, Simplon & UM6P Partnership) –
                  Project-based learning in Agile, responsive web design, and
                  teamwork. Youssofia (2023)</span>
                </li>
                <li className="group-hover:text-gray-200 transition-colors">
                  <strong className="text-purple-400">
                    Diploma: Specialized Technician in Software Development
                  </strong>{" "}
                  <span className="text-sm text-gray-400">– Al Ahramat School, Laâyoune (2020)</span>
                </li>
              </ul>
            </div>

            {/* 💼 Work Experience */}
            <div className="glass p-6 rounded-2xl border border-white/10 card-hover group">
              <div className="gradient-border p-4 rounded-xl mb-4">
                <h3 className="text-xl font-bold mb-2 gradient-text">💼 Work Experience</h3>
              </div>
              <div className="space-y-6 text-gray-300">
                <div className="group-hover:text-gray-200 transition-colors">
                  <h4 className="font-semibold text-blue-400 mb-2">
                    Full Stack Developer Intern – ALEF DIGITAL SOLUTIONS (2024)
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Built an e-learning platform with React and Node.js.
                    Implemented role-based access, dashboards, and course
                    tracking features.
                  </p>
                </div>

                <div className="group-hover:text-gray-200 transition-colors">
                  <h4 className="font-semibold text-cyan-400 mb-2">
                    Full Stack Developer – Final Year Project (BricoHub, 2024)
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Developed a web app connecting workers with employers using
                    Laravel and MySQL. Focused on accessibility and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
