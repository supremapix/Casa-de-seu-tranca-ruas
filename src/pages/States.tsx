import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { MapPin, ArrowRight } from 'lucide-react';

const STATES = [
  { name: "Rio Grande do Sul", slug: "rs", desc: "Atendimento especializado em Porto Alegre e todo o interior gaúcho." },
  { name: "Bahia", slug: "ba", desc: "A força do axé em Salvador e em todas as cidades baianas." },
  { name: "Rio de Janeiro", slug: "rj", desc: "Trabalhos espirituais poderosos na capital e em todo o estado do Rio." },
  { name: "Maranhão", slug: "ma", desc: "Tradição e poder em São Luís e em todo o território maranhense." },
  { name: "Goiás e DF", slug: "go-df", desc: "Abertura de caminhos em Goiânia, Brasília e região." }
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
              whileHover={{ scale: 1.02 }}
              className="bg-dark/50 border border-gold/20 p-10 rounded-sm hover:border-neon-red transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blood/20 rounded-full flex items-center justify-center text-neon-red">
                  <MapPin size={24} />
                </div>
                <h2 className="text-2xl text-gold font-secondary">{state.name}</h2>
              </div>
              <p className="text-bone/70 mb-8 leading-relaxed">{state.desc}</p>
              <Link 
                to={`/estados/${state.slug}`}
                className="text-neon-red font-secondary flex items-center gap-2 hover:text-gold transition-colors"
              >
                Ver cidades atendidas <ArrowRight size={20} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
