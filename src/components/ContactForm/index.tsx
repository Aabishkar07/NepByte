"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section className="py-20 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a project in mind or questions about our services? We're here to help! Reach out to us using the form below or through our contact information.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          <motion.div 
            className="bg-dark_grey bg-opacity-80 rounded-xl p-6 flex flex-col items-center text-center"
            {...fadeIn}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="bg-primary/20 p-4 rounded-full mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
            <p className="text-white/70 mb-4">Our friendly team is here to help</p>
            <a href="mailto:nepbyte.it@gmail.com" className="text-primary hover:underline font-medium">
              nepbyte.it@gmail.com
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-dark_grey bg-opacity-80 rounded-xl p-6 flex flex-col items-center text-center"
            {...fadeIn}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="bg-primary/20 p-4 rounded-full mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
            <p className="text-white/70 mb-4">Mon-Fri from 9am to 5pm</p>
            <a href="tel:+9779865412365" className="text-primary hover:underline font-medium">
              +977 9865412365
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-dark_grey bg-opacity-80 rounded-xl p-6 flex flex-col items-center text-center"
            {...fadeIn}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="bg-primary/20 p-4 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
            <p className="text-white/70 mb-4">Come say hello at our office</p>
            <p className="text-primary font-medium">
              Kathmandu, Nepal
            </p>
          </motion.div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-dark_grey bg-opacity-80 rounded-xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Send Us a Message</h3>
              <p className="text-white/70 mb-6">
                Fill out the form and our team will get back to you within 24 hours. We're excited to hear from you and discuss how we can help with your project.
              </p>
              
              <div className="hidden md:block">
                <h4 className="text-xl font-semibold text-white mb-4">Our Services</h4>
                <ul className="text-white/70 space-y-2">
                  <li>• Web Development</li>
                  <li>• App Development</li>
                  <li>• UI/UX Design</li>
                  <li>• SEO & Digital Marketing</li>
                  <li>• Graphic Design</li>
                  <li>• Domain & Hosting</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {submitSuccess ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center h-full flex flex-col items-center justify-center">
                  <div className="bg-green-500/20 p-4 rounded-full mb-4">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/70">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-darkmode border border-dark_border border-opacity-60 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-darkmode border border-dark_border border-opacity-60 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-darkmode border border-dark_border border-opacity-60 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">App Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-darkmode border border-dark_border border-opacity-60 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-darkmode font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-darkmode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16">
          <div className="rounded-xl overflow-hidden h-[400px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625950213!2d85.29111341744386!3d27.70895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1653580916874!5m2!1sen!2snp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}