import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const WHATSAPP_NUMBER = "5541996865804";

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
  return (
    <>
      <Helmet>
        <title>Casa de Seu Tranca Ruas | Amarração Amorosa e Trabalho Espiritual</title>
        <meta name="description" content="A Casa de Seu Tranca Ruas oferece amarração amorosa poderosa, ebós para dinheiro e limpeza espiritual. Resultados garantidos e sigilo total." />
        <link rel="canonical" href="https://www.casadeseutrancaruas.info/" />
      </Helmet>

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
      <div className="bg-blood/10 border-y border-gold/20 py-4 overflow-hidden relative z-20">
        <div className="marquee-content whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-gold font-secondary text-sm uppercase tracking-[0.3em] mx-8">
              Amarração Amorosa • Ebó para Dinheiro • Limpeza Espiritual • Proteção de Tranca Ruas • Volta do Ex Urgente • 
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
