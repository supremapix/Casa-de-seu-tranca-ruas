import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { MapPin, MessageCircle, Star, Shield, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = "5541996865804";

const STATES_DATA: Record<string, { name: string }> = {
  "rs": { name: "Rio Grande do Sul" },
  "ba": { name: "Bahia" },
  "rj": { name: "Rio de Janeiro" },
  "ma": { name: "Maranhão" },
  "go-df": { name: "Goiás e DF" }
};

export const CityPage = () => {
  const { stateSlug, citySlug } = useParams();
  const state = STATES_DATA[stateSlug || ""];
  const city = citySlug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  if (!state || !city) return <div className="py-20 text-center text-gold">Cidade não encontrada.</div>;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Casa de Seu Tranca Ruas - ${city}`,
    "description": `Amarração amorosa poderosa e trabalhos espirituais em ${city}, ${state.name}. Traga seu amor de volta com a força de Tranca Ruas das Almas.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state.name,
      "addressCountry": "BR"
    },
    "telephone": "+5541996865804",
    "url": window.location.href
  };

  return (
    <div className="bg-dark min-h-screen">
      <Helmet>
        <title>Amarração Amorosa em {city} - {state.name} | Casa de Seu Tranca Ruas</title>
        <meta name="description" content={`Procurando amarração amorosa em ${city}? A Casa de Seu Tranca Ruas realiza trabalhos espirituais poderosos para trazer o ex de volta e abrir caminhos em ${city}, ${state.name}.`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-32 px-4 border-b border-gold/10">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-center gap-2 text-neon-red mb-6 font-secondary tracking-widest uppercase">
              <MapPin size={20} /> {city} - {state.name}
            </div>
            <h1 className="text-4xl md:text-7xl text-gold mb-8 leading-tight">
              Amarração Amorosa em {city}
            </h1>
            <p className="text-bone/80 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
              Se você mora em {city} e busca resultados reais no amor e na vida espiritual, a força de Seu Tranca Ruas das Almas está aqui para te ajudar.
            </p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Vim+pelo+site+-+Cidade:+${city}`}
              className="inline-flex items-center gap-3 bg-blood text-white px-10 py-5 rounded-sm font-secondary tracking-widest hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(163,0,0,0.5)]"
            >
              <MessageCircle size={24} /> Consultar em {city}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl text-gold mb-8 font-display">Como funciona o trabalho em {city}?</h2>
            <div className="space-y-6 text-bone/80 text-lg leading-relaxed">
              <p>
                Muitas pessoas em <strong>{city}</strong> sofrem com caminhos fechados no amor e nas finanças. O trabalho espiritual de Seu Tranca Ruas é focado em remover obstáculos e trazer a pessoa amada de volta com domínio e paixão.
              </p>
              <p>
                Atendemos toda a região de {city} com sigilo absoluto. Nossos ebós e amarrações são feitos com fundamentos reais da quimbanda, garantindo que o seu pedido seja ouvido e atendido pelas entidades de luz e força.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                  "Amarração Amorosa Definitiva",
                  "Abertura de Caminhos Financeiros",
                  "Limpeza Espiritual de Ambientes",
                  "Afastamento de Rivais e Inveja"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gold">
                    <CheckCircle2 size={20} className="text-neon-red" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full" />
            <div className="relative bg-dark/50 border border-gold/20 p-8 rounded-sm">
              <h3 className="text-2xl text-gold mb-6 font-secondary text-center">Depoimentos em {state.name}</h3>
              <div className="space-y-6">
                {[
                  { name: "Maria S.", text: "Fiz a amarração aqui em Porto Alegre e meu marido voltou em 3 dias. Recomendo muito!", stars: 5 },
                  { name: "João P.", text: "O trabalho de caminhos financeiros mudou minha vida. Só tenho a agradecer.", stars: 5 }
                ].map((t, i) => (
                  <div key={i} className="border-b border-gold/10 pb-6 last:border-0">
                    <div className="flex gap-1 mb-2">
                      {[...Array(t.stars)].map((_, s) => <Star key={s} size={14} className="fill-gold text-gold" />)}
                    </div>
                    <p className="text-bone/70 italic mb-2">"{t.text}"</p>
                    <p className="text-gold text-sm font-secondary">- {t.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-blood/5 border-t border-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl text-gold mb-8">Não espere mais para ser feliz em {city}</h2>
          <p className="text-bone/80 text-xl mb-12">
            A felicidade está a um clique de distância. Seu Tranca Ruas das Almas tem as chaves para abrir seus caminhos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Vim+pelo+site+-+Urgente+${city}`}
              className="bg-neon-red text-white px-10 py-5 rounded-sm font-secondary tracking-widest hover:brightness-125 transition-all shadow-[0_0_20px_#FF1A1A]"
            >
              Falar com o Pai de Santo
            </a>
            <Link 
              to="/estados"
              className="border border-gold text-gold px-10 py-5 rounded-sm font-secondary tracking-widest hover:bg-gold hover:text-dark transition-all"
            >
              Outras Cidades
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
