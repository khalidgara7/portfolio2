import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 relative bg-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-purple-500/5"></div>
      
      <RevealOnScroll>
        <div className="px-4 w-full max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-blue text-center neon-blue">
            Get In Touch
          </h2>
          
          <p className="text-gray-300 text-center mb-12 text-lg leading-relaxed">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you! Let's create something amazing together.
          </p>

          <div className="glass rounded-2xl p-8 border border-white/10 card-hover">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full glass-dark border border-white/20 rounded-xl px-6 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-blue-500/10 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:border-white/30"
                  placeholder="Your Name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full glass-dark border border-white/20 rounded-xl px-6 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-blue-500/10 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:border-white/30"
                  placeholder="your.email@example.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full glass-dark border border-white/20 rounded-xl px-6 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-blue-500/10 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:border-white/30 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden btn-glow hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] animate-glow group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-center mb-6">Or connect with me on</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="mailto:khalidgara7@gmail.com"
                  className="glass-dark p-4 rounded-xl hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group"
                >
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.455L12 12.363l9.909-8.542h.455c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                </a>
                
                <a
                  href="https://linkedin.com/in/khalidelmati"
                  className="glass-dark p-4 rounded-xl hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group"
                >
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
      </RevealOnScroll>
    </section>
  );
};