import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative particles bg-pattern overflow-hidden"
      style={{ backgroundColor: '#ECFDF5' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-800/5"></div>
      
      <RevealOnScroll>
        <div className="text-center z-10 px-4 relative">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight shimmer"
                style={{ 
                  background: `linear-gradient(135deg, #064E3B 0%, #10B981 50%, #F59E0B 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
            >
              Hi, I'm Khalid EL mati
            </h1>
          </div>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-scale"
             style={{ color: '#064E3B' }}
          >
            I'm a <span className="font-semibold" style={{ color: '#10B981' }}>Junior full-stack developer</span> who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="#projects"
              className="py-4 px-8 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 animate-glow"
              style={{ 
                background: `linear-gradient(to right, #10B981, #064E3B)`,
                color: 'white',
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)'
              }}
              onMouseEnter={(e) => e.target.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.6)'}
              onMouseLeave={(e) => e.target.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.4)'}
            >
              <span className="relative z-10">View My Work</span>
            </a>

            <a
              href="#contact"
              className="py-4 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 glass"
              style={{ 
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#10B981',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.3)';
                e.target.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                e.target.style.borderColor = '#10B981';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'rgba(16, 185, 129, 0.3)';
              }}
            >
              Let's Connect
            </a>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full blur-xl animate-float" 
               style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-xl animate-float" 
               style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', animationDelay: '1s' }}></div>
        </div>
      </RevealOnScroll>
    </section>
  );
};