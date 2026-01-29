
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Alexandra didn't just give us a marketing plan; she redefined our entire reason for being. Our revenue tripled within 18 months of implementation.",
    author: "Jonathan Reed",
    role: "CEO, Lumina Global",
    rating: 5
  },
  {
    quote: "Her ability to synthesize complex data into a compelling brand story is unmatched. She is a true visionary partner.",
    author: "Sarah Chen",
    role: "Founder, Aura",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#15202f] relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#daa520 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex justify-center mb-12">
          <Quote className="w-12 h-12 text-[#daa520]/20" />
        </div>

        <div className="space-y-24">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#daa520] text-[#daa520]" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed text-gray-200 mb-8">
                "{t.quote}"
              </blockquote>
              <div>
                <cite className="not-italic text-lg font-bold text-[#daa520] block">{t.author}</cite>
                <span className="text-sm uppercase tracking-widest text-gray-500">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
