import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  
  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-b shadow-lg"
         style={{ 
           backgroundColor: 'rgba(236, 253, 245, 0.95)',
           borderBottomColor: 'rgba(16, 185, 129, 0.2)'
         }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#home" 
            className="font-mono text-xl font-bold hover:scale-105 transition-transform duration-300 shimmer"
            style={{ color: '#064E3B' }}
          >
            Khalid<span style={{ color: '#10B981' }}>.</span><span style={{ color: '#F59E0B' }}>EL Mati</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-2xl transition-colors duration-300 hover:scale-110 transform"
            style={{ color: '#064E3B' }}
            onClick={() => setMenuOpen((prev) => !prev)}
            onMouseEnter={(e) => e.target.style.color = '#10B981'}
            onMouseLeave={(e) => e.target.style.color = '#064E3B'}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="transition-all duration-300 relative group"
              style={{ color: '#064E3B' }}
              onMouseEnter={(e) => e.target.style.color = '#10B981'}
              onMouseLeave={(e) => e.target.style.color = '#064E3B'}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ background: 'linear-gradient(to right, #10B981, #F59E0B)' }}></span>
            </a>
            <a
              href="#about"
              className="transition-all duration-300 relative group"
              style={{ color: '#064E3B' }}
              onMouseEnter={(e) => e.target.style.color = '#10B981'}
              onMouseLeave={(e) => e.target.style.color = '#064E3B'}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ background: 'linear-gradient(to right, #10B981, #F59E0B)' }}></span>
            </a>
            <a
              href="#projects"
              className="transition-all duration-300 relative group"
              style={{ color: '#064E3B' }}
              onMouseEnter={(e) => e.target.style.color = '#10B981'}
              onMouseLeave={(e) => e.target.style.color = '#064E3B'}
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ background: 'linear-gradient(to right, #10B981, #F59E0B)' }}></span>
            </a>
            <a
              href="#contact"
              className="transition-all duration-300 relative group"
              style={{ color: '#064E3B' }}
              onMouseEnter={(e) => e.target.style.color = '#10B981'}
              onMouseLeave={(e) => e.target.style.color = '#064E3B'}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ background: 'linear-gradient(to right, #10B981, #F59E0B)' }}></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};