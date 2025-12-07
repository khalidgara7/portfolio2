import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      // Get this from https://formspree.io after creating an account
      const response = await fetch('https://formspree.io/f/khalidgara8@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Fallback to mailto link
      const subject = `Message from ${formData.name} - Portfolio Contact`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      const mailtoLink = `mailto:khalidgara7@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      window.open(mailtoLink, '_blank');
      
      setSubmitStatus({ 
        type: 'info', 
        message: 'Opening your email client... Please send the message from there!' 
      });
    } finally {
      setIsSubmitting(false);
    }
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
            {/* Status Messages */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-xl text-center font-medium ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                  : submitStatus.type === 'info'
                  ? 'bg-blue-500/20 border border-blue-500/30 text-blue-400'
                  : 'bg-red-500/20 border border-red-500/30 text-red-400'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  value={formData.name}
                  disabled={isSubmitting}
                  className="w-full glass-dark border border-white/20 rounded-xl px-6 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-blue-500/10 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  name="user_email"
                  required
                  value={formData.email}
                  disabled={isSubmitting}
                  className="w-full glass-dark border border-white/20 rounded-xl px-6 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-blue-500/10 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  className="w-full glass-dark border border-white/20 rounded-xl px-6 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-blue-500/10 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:border-white/30 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project or just say hello!"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-8 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden btn-glow group ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] animate-glow'
                } text-white`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </form>

            {/* Direct Contact Options */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-center mb-6">Or reach out directly:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <a
                  href="mailto:khalidgara7@gmail.com?subject=Portfolio Contact&body=Hi Khalid,%0D%0A%0D%0AI would like to discuss..."
                  className="glass-dark p-4 rounded-xl hover:bg-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group text-center"
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.455L12 12.363l9.909-8.542h.455c.904 0 1.636.732 1.636 1.636z"/>
                    </svg>
                    <div>
                      <div className="text-white font-medium">Email Me</div>
                      <div className="text-gray-400 text-sm">khalidgara8@gmail.com</div>
                    </div>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/khalidelmati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-dark p-4 rounded-xl hover:bg-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group text-center"
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <div>
                      <div className="text-white font-medium">LinkedIn</div>
                      <div className="text-gray-400 text-sm">Connect with me</div>
                    </div>
                  </div>
                </a>
              </div>
              
              <div className="text-center">
                <p className="text-gray-500 text-sm">
                  📍 Available for freelance work and full-time opportunities
                </p>
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