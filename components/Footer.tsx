
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050c17] pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let's Build Something <br />
              <span className="gold-gradient-text italic">Exceptional.</span>
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#0a192f] border border-white/5 rounded-md px-4 py-3 focus:outline-none focus:border-[#daa520] transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-[#0a192f] border border-white/5 rounded-md px-4 py-3 focus:outline-none focus:border-[#daa520] transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-[#0a192f] border border-white/5 rounded-md px-4 py-3 focus:outline-none focus:border-[#daa520] transition-colors text-white resize-none"
                  placeholder="Tell me about your vision..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="gold-gradient-bg w-full py-4 rounded-md text-black font-bold uppercase tracking-widest"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-12">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#daa520] mb-6">Contact</h3>
                <a href="mailto:hello@alexandravance.com" className="text-2xl md:text-3xl hover:text-[#daa520] transition-colors">
                  hello@alexandravance.com
                </a>
              </div>
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#daa520] mb-6">Socials</h3>
                <div className="flex gap-8">
                  <a href="#" className="p-4 bg-[#0a192f] border border-white/5 rounded-full hover:border-[#daa520] hover:text-[#daa520] transition-all">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-4 bg-[#0a192f] border border-white/5 rounded-full hover:border-[#daa520] hover:text-[#daa520] transition-all">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-4 bg-[#0a192f] border border-white/5 rounded-full hover:border-[#daa520] hover:text-[#daa520] transition-all">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-20 lg:mt-0 text-xs text-gray-600 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Alexandra Vance. All Rights Reserved.
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
