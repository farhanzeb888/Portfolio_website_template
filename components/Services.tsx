
import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Compass, Rocket, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Diamond className="w-8 h-8 text-[#daa520]" />,
    title: "Brand Strategy",
    description: "Architecting narrative frameworks that define your market position and emotional resonance."
  },
  {
    icon: <Compass className="w-8 h-8 text-[#daa520]" />,
    title: "Market Intelligence",
    description: "Deep-dive analytics and trend forecasting to ensure your business stays ahead of the curve."
  },
  {
    icon: <Rocket className="w-8 h-8 text-[#daa520]" />,
    title: "Creative Direction",
    description: "Holistic oversight of visual and experiential assets that elevate your brand's presence."
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-[#daa520]">
              Signature Services
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold">My Expertise</h3>
          </motion.div>
          <div className="w-full md:w-64 h-[1px] bg-white/10 mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group p-10 bg-[#15202f] border border-white/5 rounded-2xl relative overflow-hidden"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-8 p-4 bg-[#0a192f] inline-block rounded-xl border border-white/5 group-hover:border-[#daa520]/40 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-[#daa520] transition-colors">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#daa520] group/link">
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  <span className="block w-0 h-[1px] bg-[#daa520] absolute -bottom-1 left-0 group-hover/link:w-full transition-all" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
