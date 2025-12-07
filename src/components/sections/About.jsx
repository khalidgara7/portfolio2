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
      className="min-h-screen flex items-center justify-center py-20 relative"
      style={{ backgroundColor: '#ECFDF5' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-800/5"></div>
      
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#064E3B' }}>
            About Me
          </h2>

          <div className="rounded-2xl p-8 border border-emerald-200 mb-8 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="mb-6 text-lg leading-relaxed" style={{ color: '#064E3B' }}>
              I'm <span className="font-bold" style={{ color: '#10B981' }}>Khalid EL Mati</span>, a passionate Full Stack Web
              Developer from Morocco, with a strong interest in building modern,
              responsive, and user-friendly web applications. I enjoy combining
              creativity and technology to deliver efficient digital solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl p-6 group border border-emerald-300 bg-emerald-50/70 hover:bg-emerald-50 hover:scale-105 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#064E3B' }}>🎨 Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="py-2 px-4 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 animate-fade-in-scale"
                      style={{ 
                        backgroundColor: '#10B981', 
                        color: 'white',
                        animationDelay: `${key * 0.1}s`,
                        boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 group border border-amber-300 bg-amber-50/70 hover:bg-amber-50 hover:scale-105 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#064E3B' }}>⚙️ Backend</h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="py-2 px-4 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 animate-fade-in-scale"
                      style={{ 
                        backgroundColor: '#F59E0B', 
                        color: 'white',
                        animationDelay: `${key * 0.1}s`,
                        boxShadow: '0 2px 8px rgba(245, 158, 11, 0.3)'
                      }}
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
            <div className="p-6 rounded-2xl border border-emerald-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="p-4 rounded-xl mb-4 border-2 border-emerald-400 bg-emerald-50">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#064E3B' }}>🏫 Education</h3>
              </div>
              <ul className="space-y-4" style={{ color: '#064E3B' }}>
                <li className="group-hover:opacity-80 transition-opacity">
                  <strong style={{ color: '#10B981' }}>
                    Bachelor's Degree in Web Engineering (Full Stack)
                  </strong>{" "}
                  <span className="text-sm" style={{ color: '#064E3B', opacity: 0.7 }}>– École Supérieure de Technologie de Kénitra (2025)</span>
                </li>
                <li className="group-hover:opacity-80 transition-opacity">
                  <strong style={{ color: '#F59E0B' }}>YouCode</strong>{" "}
                  <span className="text-sm" style={{ color: '#064E3B', opacity: 0.7 }}>(OCP, Simplon & UM6P Partnership) –
                  Project-based learning in Agile, responsive web design, and
                  teamwork. Youssofia (2023)</span>
                </li>
                <li className="group-hover:opacity-80 transition-opacity">
                  <strong style={{ color: '#064E3B', opacity: 0.8 }}>
                    Diploma: Specialized Technician in Software Development
                  </strong>{" "}
                  <span className="text-sm" style={{ color: '#064E3B', opacity: 0.7 }}>– Al Ahramat School, Laâyoune (2020)</span>
                </li>
              </ul>
            </div>

            {/* 💼 Work Experience */}
            <div className="p-6 rounded-2xl border border-emerald-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="p-4 rounded-xl mb-4 border-2 border-emerald-400 bg-emerald-50">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#064E3B' }}>💼 Work Experience</h3>
              </div>
              <div className="space-y-6" style={{ color: '#064E3B' }}>
                <div className="group-hover:opacity-80 transition-opacity">
                  <h4 className="font-semibold mb-2" style={{ color: '#10B981' }}>
                    Full Stack Developer Intern – ALEF DIGITAL SOLUTIONS (2024)
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Built an e-learning platform with React and Node.js.
                    Implemented role-based access, dashboards, and course
                    tracking features.
                  </p>
                </div>

                <div className="group-hover:opacity-80 transition-opacity">
                  <h4 className="font-semibold mb-2" style={{ color: '#F59E0B' }}>
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
          <div className="absolute top-20 right-10 w-32 h-32 rounded-full blur-2xl animate-float" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full blur-2xl animate-float" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', animationDelay: '2s' }}></div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
