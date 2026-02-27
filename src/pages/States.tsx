import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { MapPin, ArrowRight } from 'lucide-react';

const STATES = [
  { 
    name: "Rio Grande do Sul", 
    slug: "rs", 
    desc: "Atendimento especializado em Porto Alegre e todo o interior gaúcho.",
    cities: ["Porto Alegre", "Pelotas", "Canoas", "Santa Maria", "Gravataí"]
  },
  { 
    name: "Bahia", 
    slug: "ba", 
    desc: "A força do axé em Salvador e em todas as cidades baianas.",
    cities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna"]
  },
  { 
    name: "Rio de Janeiro", 
    slug: "rj", 
    desc: "Trabalhos espirituais poderosos na capital e em todo o estado do Rio.",
    cities: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói"]
  },
  { 
    name: "Maranhão", 
    slug: "ma", 
    desc: "Tradição e poder em São Luís e em todo o território maranhense.",
    cities: ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias"]
  },
  { 
    name: "Goiás e DF", 
    slug: "go-df", 
    desc: "Abertura de caminhos em Goiânia, Brasília e região.",
    cities: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Brasília"]
  }
];

export const States = () => {
  return (
    <div className="bg-dark min-h-screen py-20 px-4">
      <Helmet>
        <title>Estados Atendidos | Casa de Seu Tranca Ruas</title>
        <meta name="description" content="Veja os estados e cidades onde realizamos amarração amorosa e trabalhos espirituais. Atendimento em todo o Brasil." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-7xl text-gold mb-6">Presença em Todo o Brasil</h1>
          <p className="text-muted text-xl max-w-2xl mx-auto">
            A força de Seu Tranca Ruas não conhece fronteiras. Atendemos presencialmente e à distância com a mesma eficácia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {STATES.map((state, idx) => (
            <motion.div
              key={state.slug}
              whileHover={{ scale: 1.01 }}
              className="bg-dark/50 border border-gold/20 p-8 md:p-10 rounded-xl hover:border-neon-red transition-all group flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blood/20 rounded-full flex items-center justify-center text-neon-red shadow-[0_0_15px_rgba(255,26,26,0.2)]">
                  <MapPin size={24} />
                </div>
                <h2 className="text-2xl text-gold font-secondary">{state.name}</h2>
              </div>
              
              <p className="text-bone/70 mb-8 leading-relaxed">{state.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {state.cities.map(city => (
                  <Link 
                    key={city}
                    to={`/estados/${state.slug}/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[11px] uppercase tracking-widest bg-gold/5 border border-gold/10 px-3 py-1.5 rounded-full text-bone/60 hover:text-gold hover:border-gold/40 transition-all"
                  >
                    {city}
                  </Link>
                ))}
              </div>

              <div className="mt-auto">
                <Link 
                  to={`/estados/${state.slug}`}
                  className="text-neon-red font-secondary flex items-center gap-2 hover:text-gold transition-colors group/link"
                >
                  Ver todas as cidades <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
