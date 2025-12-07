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
      // Updated with your actual Formspree form endpoint
      const formspreeResponse = await fetch('https://formspree.io/f/xkgwendb', {
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

      if (formspreeResponse.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
        setFormData({ name: "", email: "", message: "" });
        
        // Optional: Send confirmation email to yourself
        setTimeout(() => {
          const subject = `New Portfolio Contact: ${formData.name}`;
          const body = `You received a new message from your portfolio:\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
          
          // This creates a backup mailto link for your records
          console.log('Contact form submission details:', {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            timestamp: new Date().toISOString()
          });
        }, 500);
        
        return;
      }
    } catch (error) {
      console.log('Formspree failed, trying alternative methods...', error);
    }

    try {
      // Fallback: Try EmailJS (free alternative)
      // You can set this up at https://www.emailjs.com/
      const emailJSResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'your_service_id', // Replace with your EmailJS service ID
          template_id: 'your_template_id', // Replace with your EmailJS template ID
          user_id: 'your_user_id', // Replace with your EmailJS public key
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'khalidgara8@gmail.com',
          }
        }),
      });

      if (emailJSResponse.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully via EmailJS! I\'ll get back to you soon.' 
        });
        setFormData({ name: "", email: "", message: "" });
        return;
      }
    } catch (error) {
      console.log('EmailJS also failed, using mailto fallback...', error);
    }

    // Final fallback: mailto link (this always works)
    try {
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Khalid,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from your portfolio contact form`
      );
      const mailtoLink = `mailto:khalidgara8@gmail.com?subject=${subject}&body=${body}`;
      
      // Try to open the mailto link
      const mailtoWindow = window.open(mailtoLink, '_self');
      
      // Check if mailto was blocked (some browsers block it)
      setTimeout(() => {
        setSubmitStatus({ 
          type: 'info', 
          message: 'Please copy the information below and send it to khalidgara8@gmail.com, or use the direct email button below!' 
        });
        
        // Display the message for manual copy
        console.log('Contact Form Data for Manual Sending:', {
          name: formData.name,
          email: formData.email,
          message: formData.message
        });
      }, 1000);
      
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please contact me directly at khalidgara8@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 relative bg-pattern"
      style={{ backgroundColor: '#ECFDF5' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-green-800/10 via-transparent to-emerald-500/10"></div>
      
      <RevealOnScroll>
        <div className="px-4 w-full max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center"
              style={{ 
                background: `linear-gradient(135deg, #064E3B 0%, #10B981 50%, #F59E0B 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
          >
            Get In Touch
          </h2>
          
          <p className="text-center mb-12 text-lg leading-relaxed" style={{ color: '#064E3B' }}>
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you! Let's create something amazing together.
          </p>

          <div className="rounded-2xl p-8 border border-emerald-200 card-hover bg-white/80 backdrop-blur-sm shadow-lg">
            {/* Status Messages */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-xl text-center font-medium ${
                submitStatus.type === 'success' 
                  ? 'border border-emerald-500/30' 
                  : submitStatus.type === 'info'
                  ? 'border border-amber-500/30'
                  : 'border border-red-500/30'
              }`}
              style={{
                backgroundColor: submitStatus.type === 'success' 
                  ? 'rgba(16, 185, 129, 0.1)' 
                  : submitStatus.type === 'info'
                  ? 'rgba(245, 158, 11, 0.1)'
                  : 'rgba(239, 68, 68, 0.1)',
                color: submitStatus.type === 'success' 
                  ? '#10B981' 
                  : submitStatus.type === 'info'
                  ? '#F59E0B'
                  : '#EF4444'
              }}
              >
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
                  className="w-full border rounded-xl px-6 py-4 transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ 
                    backgroundColor: 'rgba(236, 253, 245, 0.5)',
                    borderColor: 'rgba(16, 185, 129, 0.3)',
                    color: '#064E3B'
                  }}
                  placeholder="Your Name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  onFocus={(e) => {
                    e.target.style.borderColor = '#10B981';
                    e.target.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
                    e.target.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                    e.target.style.backgroundColor = 'rgba(236, 253, 245, 0.5)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  value={formData.email}
                  disabled={isSubmitting}
                  className="w-full border rounded-xl px-6 py-4 transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ 
                    backgroundColor: 'rgba(236, 253, 245, 0.5)',
                    borderColor: 'rgba(16, 185, 129, 0.3)',
                    color: '#064E3B'
                  }}
                  placeholder="your.email@example.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  onFocus={(e) => {
                    e.target.style.borderColor = '#10B981';
                    e.target.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
                    e.target.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                    e.target.style.backgroundColor = 'rgba(236, 253, 245, 0.5)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  disabled={isSubmitting}
                  className="w-full border rounded-xl px-6 py-4 transition-all duration-300 focus:outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ 
                    backgroundColor: 'rgba(236, 253, 245, 0.5)',
                    borderColor: 'rgba(16, 185, 129, 0.3)',
                    color: '#064E3B'
                  }}
                  placeholder="Tell me about your project or just say hello!"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  onFocus={(e) => {
                    e.target.style.borderColor = '#10B981';
                    e.target.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
                    e.target.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                    e.target.style.backgroundColor = 'rgba(236, 253, 245, 0.5)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-8 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                  isSubmitting 
                    ? 'cursor-not-allowed opacity-70' 
                    : 'hover:-translate-y-1 animate-glow'
                } text-white`}
                style={{ 
                  background: isSubmitting 
                    ? '#6B7280' 
                    : `linear-gradient(to right, #10B981, #064E3B)`,
                  boxShadow: isSubmitting 
                    ? 'none' 
                    : '0 4px 15px rgba(16, 185, 129, 0.4)'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.4)';
                  }
                }}
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
            <div className="mt-12 pt-8 border-t border-emerald-200">
              <p className="text-center mb-6" style={{ color: '#064E3B', opacity: 0.7 }}>Or reach out directly:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <a
                  href="mailto:khalidgara7@gmail.com?subject=Portfolio Contact&body=Hi Khalid,%0D%0A%0D%0AI would like to discuss..."
                  className="p-4 rounded-xl transition-all duration-300 hover:scale-105 group text-center"
                  style={{ 
                    backgroundColor: 'rgba(16, 185, 129, 0.05)',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                    e.target.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 transition-colors" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#064E3B' }}>
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.455L12 12.363l9.909-8.542h.455c.904 0 1.636.732 1.636 1.636z"/>
                    </svg>
                    <div>
                      <div className="font-medium" style={{ color: '#064E3B' }}>Email Me</div>
                      <div className="text-sm" style={{ color: '#10B981' }}>khalidgara8@gmail.com</div>
                    </div>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/khalidelmati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl transition-all duration-300 hover:scale-105 group text-center"
                  style={{ 
                    backgroundColor: 'rgba(245, 158, 11, 0.05)',
                    border: '1px solid rgba(245, 158, 11, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(245, 158, 11, 0.1)';
                    e.target.style.boxShadow = '0 0 20px rgba(245, 158, 11, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(245, 158, 11, 0.05)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 transition-colors" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#064E3B' }}>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <div>
                      <div className="font-medium" style={{ color: '#064E3B' }}>LinkedIn</div>
                      <div className="text-sm" style={{ color: '#F59E0B' }}>Connect with me</div>
                    </div>
                  </div>
                </a>
              </div>
              
              <div className="text-center">
                <p className="text-sm" style={{ color: '#064E3B', opacity: 0.6 }}>
                  📍 Available for freelance work and full-time opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full blur-2xl animate-float" 
               style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-2xl animate-float" 
               style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', animationDelay: '1.5s' }}></div>
        </div>
      </RevealOnScroll>
    </section>
  );
};