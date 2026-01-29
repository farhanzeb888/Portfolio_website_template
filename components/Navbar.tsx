
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-[#0a192f]/80 backdrop-blur-lg border-b border-[#1e2a3a]' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          AV<span className="gold-gradient-text">.</span>
        </motion.div>

        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#daa520] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="gold-gradient-bg px-6 py-2 rounded-full text-black text-xs font-bold uppercase tracking-widest shadow-lg shadow-yellow-900/20"
        >
          Let's Talk
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
