
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Lumina Global",
    category: "Rebranding • Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Vanguard Tech",
    category: "Market Expansion",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Aura Fragrances",
    category: "Creative Direction",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Elevate Real Estate",
    category: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-[#daa520]">
              Featured Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold italic">Selected Portfolio</h3>
          </motion.div>
          
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
            <span className="text-[#daa520] cursor-pointer">All Projects</span>
            <span className="hover:text-white transition-colors cursor-pointer">Strategy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Creative</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[16/10] overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0a192f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="mb-2"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#daa520]">{project.category}</span>
                </motion.div>
                <h4 className="text-3xl font-bold text-white mb-6">{project.title}</h4>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 border border-[#daa520] text-[#daa520] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#daa520] hover:text-black transition-all"
                >
                  View Case Study
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
