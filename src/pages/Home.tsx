import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';

const WHATSAPP_NUMBER = "5541996865804";

const MARQUEE_ITEMS = [
  { name: "Vila Parolin", path: "/estados/pr/curitiba/vila-parolin" },
  { name: "Vila Torres", path: "/estados/pr/curitiba/vila-torres" },
  { name: "Água Verde", path: "/estados/pr/curitiba/agua-verde" },
  { name: "Batel", path: "/estados/pr/curitiba/batel" },
  { name: "CIC", path: "/estados/pr/curitiba/cic" },
  { name: "Pinheirinho", path: "/estados/pr/curitiba/pinheirinho" },
  { name: "Sítio Cercado", path: "/estados/pr/curitiba/sitio-cercado" },
  { name: "Boqueirão", path: "/estados/pr/curitiba/boqueirao" },
  { name: "Santa Felicidade", path: "/estados/pr/curitiba/santa-felicidade" },
  { name: "Colombo", path: "/estados/pr/colombo" },
  { name: "São José dos Pinhais", path: "/estados/pr/sao-jose-dos-pinhais" },
  { name: "Araucária", path: "/estados/pr/araucaria" },
  { name: "Pinhais", path: "/estados/pr/pinhais" },
  { name: "Fazenda Rio Grande", path: "/estados/pr/fazenda-rio-grande" },
  { name: "Campo Largo", path: "/estados/pr/campo-largo" },
  { name: "Almirante Tamandaré", path: "/estados/pr/almirante-tamandare" },
  { name: "Piraquara", path: "/estados/pr/piraquara" },
  { name: "Campina Grande do Sul", path: "/estados/pr/campina-grande-do-sul" },
  { name: "Goiânia", path: "/estados/go-df/goiania" },
  { name: "Brasília", path: "/estados/go-df/brasilia" },
  { name: "Salvador", path: "/estados/ba/salvador" },
  { name: "Rio de Janeiro", path: "/estados/rj/rio-de-janeiro" },
  { name: "Porto Alegre", path: "/estados/rs/porto-alegre" },
  { name: "São Luís", path: "/estados/ma/sao-luis" },
];

const PERSUASIVE_TEXTS = [
  "Amarração Amorosa Poderosa e Definitiva",
  "Traga seu amor de volta em até 24 horas",
  "Trabalho Espiritual Urgente com Tranca Ruas",
  "Ebó para Dinheiro e Prosperidade Imediata",
  "Feitiço de Amor que Funciona de Verdade",
  "Macumba para Amor: Resultados Garantidos",
  "Simpatia para Voltar Ex com Alta Potência",
  "Desbloqueio de Caminhos com Tranca Ruas das Almas",
  "Guerra Espiritual: Proteção e Vitória",
  "Abertura de Caminhos Financeiros Urgente",
  "União de Casais com Segredo e Discrição",
  "Limpeza Espiritual e Descarrego Profundo",
  "Ponto de Exu Tranca Ruas: Força e Fé",
  "O Senhor das Encruzilhadas Abre Seus Caminhos",
  "Recupere sua Felicidade no Amor Hoje Mesmo"
];

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [reverse, setReverse] = React.useState(false);

  React.useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, parseInt((Math.random() * 150).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="typewriter-cursor">
      {texts[index].substring(0, subIndex)}
    </span>
  );
};

export const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState<{name: string, path: string} | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Casa de Seu Tranca Ruas",
    "description": "A Casa de Seu Tranca Ruas oferece amarração amorosa poderosa, ebós para dinheiro e limpeza espiritual. Resultados garantidos e sigilo total.",
    "url": "https://www.casadeseutrancaruas.info/",
    "telephone": "+5541996865804",
    "image": "https://filhodeogum.com/imagens/casa-de-seu-tranca-ruas.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "205"
    }
  };

  return (
    <>
      <EnhancedSEO 
        title="Casa de Seu Tranca Ruas | Amarração Amorosa e Trabalho Espiritual"
        description="A Casa de Seu Tranca Ruas oferece amarração amorosa poderosa, ebós para dinheiro e limpeza espiritual. Resultados garantidos e sigilo total."
        canonical="/"
        schemaData={schemaData}
      />

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://filhodeogum.com/imagens/casa-de-seu-tranca-ruas.png"
            className="w-full h-full object-cover opacity-40"
            alt="Exu Tranca Ruas"
          />
          <div className="absolute inset-0 smoke-overlay" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-gradient-gold text-4xl md:text-8xl mb-6 leading-tight drop-shadow-2xl font-display">
              Casa de Seu Tranca Ruas
            </h1>
            <div className="h-12 md:h-16 flex items-center justify-center">
              <p className="text-neon-red font-secondary text-xl md:text-3xl tracking-wider uppercase">
                <Typewriter texts={PERSUASIVE_TEXTS} />
              </p>
            </div>
            <p className="text-bone text-lg md:text-2xl italic mt-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              "O Senhor das Almas abre os caminhos que o mundo fechou. Amarração amorosa poderosa, ebó para dinheiro e proteção espiritual urgente."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Vim+pelo+site+Hero`}
                className="w-full sm:w-auto bg-blood hover:bg-red-700 text-white px-10 py-5 rounded-sm font-secondary tracking-widest flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(163,0,0,0.5)] hover:shadow-blood/50"
              >
                <MessageCircle size={24} /> Consulta Urgente
              </a>
              <button 
                className="w-full sm:w-auto border-2 border-gold text-gold hover:bg-gold hover:text-dark px-10 py-5 rounded-sm font-secondary tracking-widest transition-all"
              >
                ⚜ Ver Trabalhos
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Strip */}
      <div className="bg-blood/10 border-y border-gold/20 py-8 overflow-hidden relative z-20">
        <div className="flex marquee-track">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {MARQUEE_ITEMS.map((item, idx) => (
                <button
                  key={`${item.path}-${idx}`}
                  onClick={() => setSelectedLocation(item)}
                  className="text-gold font-secondary text-lg uppercase tracking-[0.2em] mx-12 hover:text-neon-red transition-colors flex items-center gap-3 whitespace-nowrap group"
                >
                  <MapPin size={18} className="text-neon-red group-hover:scale-125 transition-transform" /> {item.name}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Location Popup */}
      <AnimatePresence>
        {selectedLocation && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLocation(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-dark border border-gold/30 p-8 md:p-12 rounded-sm max-w-lg w-full shadow-[0_0_50px_rgba(212,175,55,0.2)]"
            >
              <button 
                onClick={() => setSelectedLocation(null)}
                className="absolute top-4 right-4 text-gold hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/20">
                  <MapPin size={40} className="text-neon-red" />
                </div>
                <h2 className="text-3xl text-gold mb-4 font-display">Atendimento em {selectedLocation.name}</h2>
                <p className="text-bone/70 text-lg mb-8 leading-relaxed">
                  A Casa de Seu Tranca Ruas possui forte atuação em {selectedLocation.name}, trazendo resultados reais em amarração amorosa e abertura de caminhos para moradores desta região.
                </p>
                
                <div className="flex flex-col gap-4">
                  <Link 
                    to={selectedLocation.path}
                    className="bg-neon-red text-white py-4 rounded-sm font-secondary tracking-widest flex items-center justify-center gap-2 hover:brightness-125 transition-all"
                  >
                    Ver Página Completa <ArrowRight size={18} />
                  </Link>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Vim+pelo+site+-+Atendimento+em+${selectedLocation.name}`}
                    className="border border-gold text-gold py-4 rounded-sm font-secondary tracking-widest hover:bg-gold hover:text-dark transition-all"
                  >
                    Falar com Especialista
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
