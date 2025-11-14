import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative bg-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
      
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-blue text-center neon-blue">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-2xl border border-white/10 card-hover group">
              <div className="gradient-border p-6 rounded-xl mb-4">
                <h3 className="text-2xl font-bold mb-3 gradient-text text-center">BricoHub</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                A web platform connecting skilled workers with employers looking
                for temporary services. Includes user authentication, job
                postings, and progress tracking.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Laravel", "PHP", "MySQL", "Bootstrap"].map((tech, key) => (
                  <span
                    key={key}
                    className="glass bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:scale-105 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/khalidgara7/BricoHub"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-2 btn-glow py-2 px-4 rounded-lg hover:bg-blue-500/10"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/10 card-hover group">
              <div className="gradient-border p-6 rounded-xl mb-4">
                <h3 className="text-2xl font-bold mb-3 gradient-text text-center">Wiki Platform</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                A collaborative Wiki web app allowing users to create, edit, and
                organize articles in real-time, with role management and
                intuitive search functionality.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Laravel", "MySQL", "Bootstrap", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="glass bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:scale-105 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/khalidgara7/Gestion-des-Wikis"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-2 btn-glow py-2 px-4 rounded-lg hover:bg-blue-500/10"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/10 card-hover group">
              <div className="gradient-border p-6 rounded-xl mb-4">
                <h3 className="text-2xl font-bold mb-3 gradient-text text-center">Evento</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                An event management platform that allows users to create,
                promote, and manage events online. Includes admin dashboard,
                ticket booking, and user authentication.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["PHP", "MySQL", "Bootstrap", "JavaScript"].map((tech) => (
                  <span
                    key={tech}
                    className="glass bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:scale-105 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/khalidgara7/Evento"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-2 btn-glow py-2 px-4 rounded-lg hover:bg-blue-500/10"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/10 card-hover group">
              <div className="gradient-border p-6 rounded-xl mb-4">
                <h3 className="text-2xl font-bold mb-3 gradient-text text-center">Adidas Store Clone</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                A front-end Adidas e-commerce clone featuring product
                categories, responsive design, shopping cart simulation, and
                modern animations.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["HTML", "CSS", "JavaScript", "Responsive Design"].map((tech, key) => (
                  <span
                    key={key}
                    className="glass bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:scale-105 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/khalidgara7/Adiddas"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-2 btn-glow py-2 px-4 rounded-lg hover:bg-blue-500/10"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
