import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative particles bg-pattern overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
      
      <RevealOnScroll>
        <div className="text-center z-10 px-4 relative">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-blue leading-tight shimmer">
              Hi, I'm Khalid EL mati
            </h1>
          </div>

          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-scale">
            I'm a <span className="text-blue-400 font-semibold">Junior full-stack developer</span> who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-8 rounded-lg font-medium transition-all duration-300 relative overflow-hidden btn-glow hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] animate-glow"
            >
              <span className="relative z-10">View My Work</span>
            </a>

            <a
              href="#contact"
              className="glass border border-blue-500/30 text-blue-400 py-4 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-blue-500/10 hover:border-blue-400"
            >
              Let's Connect
            </a>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
      </RevealOnScroll>
    </section>
  );
};