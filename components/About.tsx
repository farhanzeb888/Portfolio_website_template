
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-32 bg-[#15202f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center lg:text-left"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-[#daa520]">
            Philosophy
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            Crafting <span className="gold-gradient-text">Vision</span> into <br />Measurable Value.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed font-light"
          >
            <p>
              Success isn't just about bold ideas; it's about the precision of their execution. For over a decade, I've partnered with forward-thinking founders to bridge the gap between abstract ambition and tangible market impact.
            </p>
            <p>
              My approach blends rigorous data analysis with intuitive creative direction. I believe that every brand has a soul, and my job is to translate that essence into systems, strategies, and stories that resonate at scale.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <div className="w-20 h-[1px] bg-[#daa520]" />
              <span className="font-serif italic text-2xl gold-gradient-text">Alexandra Vance</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="p-8 border border-white/5 bg-[#0a192f]/50 rounded-xl hover:border-[#daa520]/30 transition-all">
              <div className="text-4xl font-bold mb-2 gold-gradient-text">12+</div>
              <div className="text-sm uppercase tracking-widest text-gray-400">Years Experience</div>
            </div>
            <div className="p-8 border border-white/5 bg-[#0a192f]/50 rounded-xl hover:border-[#daa520]/30 transition-all">
              <div className="text-4xl font-bold mb-2 gold-gradient-text">150+</div>
              <div className="text-sm uppercase tracking-widest text-gray-400">Brands Launched</div>
            </div>
            <div className="p-8 border border-white/5 bg-[#0a192f]/50 rounded-xl hover:border-[#daa520]/30 transition-all">
              <div className="text-4xl font-bold mb-2 gold-gradient-text">15</div>
              <div className="text-sm uppercase tracking-widest text-gray-400">Global Awards</div>
            </div>
            <div className="p-8 border border-white/5 bg-[#0a192f]/50 rounded-xl hover:border-[#daa520]/30 transition-all">
              <div className="text-4xl font-bold mb-2 gold-gradient-text">$2B+</div>
              <div className="text-sm uppercase tracking-widest text-gray-400">Client Revenue</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
