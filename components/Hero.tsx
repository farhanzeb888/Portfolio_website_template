
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-[#daa520]">
            Established 2018
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Welcome, I'm <br />
            <span className="inline-block">Alexandra Vance.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-10 max-w-lg">
            <span className="gold-gradient-text font-medium italic">Creative</span> Business Owner & Strategist helping brands craft vision into lasting value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(218, 165, 32, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="gold-gradient-bg px-10 py-4 rounded-md text-black font-bold text-lg relative overflow-hidden group shadow-xl"
            >
              <span className="relative z-10">Work With Me</span>
              <motion.div 
                className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
              />
            </motion.button>
            
            <button className="px-10 py-4 rounded-md border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
              View Strategy
            </button>
          </div>
        </motion.div>

        {/* Right Portrait */}
        <motion.div
          style={{ y: y1, opacity }}
          className="relative lg:h-[80vh] flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md lg:max-w-full aspect-[4/5] overflow-hidden rounded-2xl group">
            {/* Image Placeholder - portrait of confident woman */}
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
              alt="Alexandra Vance"
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            />
            {/* Depth of field / Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-40" />
            <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
          </div>
          
          {/* Accent Element */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-40 h-40 border border-[#daa520]/30 rounded-full blur-2xl z-0"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
