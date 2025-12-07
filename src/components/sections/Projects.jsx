import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative bg-pattern"
      style={{ backgroundColor: '#ECFDF5' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-green-800/10 via-transparent to-emerald-500/10"></div>
      
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center"
              style={{ 
                background: `linear-gradient(135deg, #064E3B 0%, #10B981 50%, #F59E0B 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
          >
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-2xl border border-emerald-200 card-hover group bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-6 rounded-xl mb-4 border-2 border-emerald-400 bg-emerald-50">
                <h3 className="text-2xl font-bold mb-3 text-center" style={{ color: '#064E3B' }}>BricoHub</h3>
              </div>
              
              <p className="mb-6 leading-relaxed group-hover:opacity-90 transition-colors" style={{ color: '#064E3B' }}>
                A web platform connecting skilled workers with employers looking
                for temporary services. Includes user authentication, job
                postings, and progress tracking.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Laravel", "PHP", "MySQL", "Bootstrap"].map((tech, key) => (
                  <span
                    key={key}
                    className="py-2 px-4 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300"
                    style={{ 
                      backgroundColor: '#10B981', 
                      color: 'white',
                      boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/khalidgara7/BricoHub"
                  className="transition-colors font-medium flex items-center gap-2 py-2 px-4 rounded-lg"
                  style={{ color: '#10B981' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                    e.target.style.color = '#064E3B';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#10B981';
                  }}
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl border border-emerald-200 card-hover group bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-6 rounded-xl mb-4 border-2 border-emerald-400 bg-emerald-50">
                <h3 className="text-2xl font-bold mb-3 text-center" style={{ color: '#064E3B' }}>Wiki Platform</h3>
              </div>
              
              <p className="mb-6 leading-relaxed group-hover:opacity-90 transition-colors" style={{ color: '#064E3B' }}>
                A collaborative Wiki web app allowing users to create, edit, and
                organize articles in real-time, with role management and
                intuitive search functionality.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Laravel", "MySQL", "Bootstrap", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="py-2 px-4 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300"
                    style={{ 
                      backgroundColor: '#F59E0B', 
                      color: 'white',
                      boxShadow: '0 2px 8px rgba(245, 158, 11, 0.3)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/khalidgara7/Gestion-des-Wikis"
                  className="transition-colors font-medium flex items-center gap-2 py-2 px-4 rounded-lg"
                  style={{ color: '#F59E0B' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(245, 158, 11, 0.1)';
                    e.target.style.color = '#064E3B';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#F59E0B';
                  }}
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl border border-emerald-200 card-hover group bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-6 rounded-xl mb-4 border-2 border-emerald-400 bg-emerald-50">
                <h3 className="text-2xl font-bold mb-3 text-center" style={{ color: '#064E3B' }}>Evento</h3>
              </div>
              
              <p className="mb-6 leading-relaxed group-hover:opacity-90 transition-colors" style={{ color: '#064E3B' }}>
                An event management platform that allows users to create,
                promote, and manage events online. Includes admin dashboard,
                ticket booking, and user authentication.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["PHP", "MySQL", "Bootstrap", "JavaScript"].map((tech) => (
                  <span
                    key={tech}
                    className="py-2 px-4 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300"
                    style={{ 
                      backgroundColor: '#10B981', 
                      color: 'white',
                      boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/khalidgara7/Evento"
                  className="transition-colors font-medium flex items-center gap-2 py-2 px-4 rounded-lg"
                  style={{ color: '#10B981' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                    e.target.style.color = '#064E3B';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#10B981';
                  }}
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl border border-emerald-200 card-hover group bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-6 rounded-xl mb-4 border-2 border-emerald-400 bg-emerald-50">
                <h3 className="text-2xl font-bold mb-3 text-center" style={{ color: '#064E3B' }}>Adidas Store Clone</h3>
              </div>
              
              <p className="mb-6 leading-relaxed group-hover:opacity-90 transition-colors" style={{ color: '#064E3B' }}>
                A front-end Adidas e-commerce clone featuring product
                categories, responsive design, shopping cart simulation, and
                modern animations.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["HTML", "CSS", "JavaScript", "Responsive Design"].map((tech, key) => (
                  <span
                    key={key}
                    className="py-2 px-4 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300"
                    style={{ 
                      backgroundColor: '#F59E0B', 
                      color: 'white',
                      boxShadow: '0 2px 8px rgba(245, 158, 11, 0.3)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/khalidgara7/Adiddas"
                  className="transition-colors font-medium flex items-center gap-2 py-2 px-4 rounded-lg"
                  style={{ color: '#F59E0B' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(245, 158, 11, 0.1)';
                    e.target.style.color = '#064E3B';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#F59E0B';
                  }}
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
