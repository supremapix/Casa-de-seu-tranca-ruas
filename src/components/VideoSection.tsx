import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface VideoSectionProps {
  title: string;
  description: string;
  videoId: string;
  ctaText: string;
  whatsappMsg: string;
  features: string[];
}

export const VideoSection = ({ title, description, videoId, ctaText, whatsappMsg, features }: VideoSectionProps) => {
  const WHATSAPP_NUMBER = "5541996865804";

  return (
    <section className="py-24 px-4 bg-dark/60 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-3xl md:text-5xl text-gold mb-6 font-display leading-tight">
            {title}
          </h2>
          <div className="w-20 h-1 bg-neon-red mb-8 shadow-[0_0_10px_#FF1A1A]" />
          
          <p className="text-bone/90 text-lg md:text-xl mb-8 leading-relaxed whitespace-pre-line">
            {description}
          </p>

          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-bone/80">
                <div className="w-2 h-2 bg-neon-red rounded-full shadow-[0_0_5px_#FF1A1A]" />
                {feature}
              </li>
            ))}
          </ul>

          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`}
            className="inline-flex items-center gap-4 bg-neon-red text-white px-10 py-5 rounded-sm font-secondary tracking-widest hover:brightness-125 transition-all shadow-[0_0_20px_rgba(255,26,26,0.4)] group"
          >
            <MessageCircle size={24} /> {ctaText}
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 relative aspect-[9/16] max-w-[400px] mx-auto w-full"
        >
          <div className="absolute -inset-4 bg-neon-red/10 blur-3xl rounded-full animate-pulse" />
          <div className="relative h-full w-full rounded-2xl overflow-hidden border-4 border-gold/20 shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&loop=1&playlist=${videoId}`}
              title={title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
