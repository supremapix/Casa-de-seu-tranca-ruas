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

const MOCK_TESTIMONIALS = [
  { name: "Ricardo S.", text: "Minha vida estava um caos completo. Depois da consulta em {city}, Seu Tranca Ruas abriu meus caminhos e hoje sou um novo homem.", stars: 5 },
  { name: "Ana Paula L.", text: "Gratidão eterna! Meu marido voltou para casa em menos de uma semana. O trabalho em {city} é realmente poderoso.", stars: 5 },
  { name: "Marcos O.", text: "Eu não acreditava mais, mas a força de Tranca Ruas me provou o contrário. Prosperidade total agora.", stars: 5 },
  { name: "Juliana C.", text: "Atendimento impecável e resultados rápidos. Se você busca ajuda em {city}, este é o lugar certo.", stars: 5 },
  { name: "Felipe S.", text: "A amarração amorosa mudou meu destino. Ela voltou carinhosa e focada apenas em mim. Obrigado!", stars: 5 },
  { name: "Beatriz L.", text: "Limpeza espiritual profunda. Senti o peso saindo das minhas costas logo após o ritual em {city}.", stars: 5 },
  { name: "Gustavo P.", text: "Justiça foi feita. Quem tentou me derrubar no trabalho em {city} acabou saindo e eu fui promovido.", stars: 5 },
  { name: "Camila R.", text: "O melhor investimento que já fiz pela minha paz. Seu Tranca Ruas é justo e implacável.", stars: 5 },
  { name: "Thiago S.", text: "Meus negócios em {city} estavam parados. Hoje não dou conta de tanto cliente. Axé!", stars: 5 },
  { name: "Larissa A.", text: "Recuperei minha dignidade e meu amor. O descarrego foi a chave para minha nova vida.", stars: 5 },
  { name: "Bruno F.", text: "Trabalho sério e com fundamento. Recomendo a todos que precisam de uma solução real em {city}.", stars: 5 },
  { name: "Letícia G.", text: "A união de casais aqui é diferente. Sinto que o amor foi restaurado pela raiz.", stars: 5 },
  { name: "André R.", text: "Proteção total. Inveja nenhuma me pega mais depois do patuá de Seu Tranca Ruas.", stars: 5 },
  { name: "Fernanda C.", text: "Estava sofrendo por um ex que nem me olhava. Hoje ele não para de me mandar mensagem.", stars: 5 },
  { name: "Lucas M.", text: "Abertura de caminhos imediata. Consegui o emprego dos meus sonhos em {city} em 3 dias.", stars: 5 },
  { name: "Mariana R.", text: "Sempre fui cética, mas os resultados em {city} me deixaram sem palavras. É real.", stars: 5 },
  { name: "Gabriel C.", text: "Obrigado por me tirar do fundo do poço. A força de Tranca Ruas é a luz no fim do túnel.", stars: 5 },
  { name: "Amanda B.", text: "Fidelidade e paixão. Meu relacionamento nunca esteve tão sólido e feliz.", stars: 5 },
  { name: "Rafael X.", text: "Afastamento de rivais que funciona de verdade. Minha paz voltou.", stars: 5 },
  { name: "Vanessa M.", text: "Consulta reveladora. Soube de coisas que ninguém sabia e recebi o guia correto.", stars: 5 },
  { name: "Rodrigo T.", text: "Ebó de prosperidade que traz fartura. Minha mesa nunca mais ficou vazia.", stars: 5 },
  { name: "Patrícia K.", text: "Seu Tranca Ruas das Almas é o dono da minha fé. Gratidão por tudo em {city}.", stars: 5 }
];

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
    "url": window.location.href,
    "telephone": "+5541996865804",
    "image": "https://filhodeogum.com/imagens/casa-de-seu-tranca-ruas.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state.name,
      "addressCountry": "BR"
    },
    "areaServed": {
      "@type": "City",
      "name": city
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Espirituais",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Amarração Amorosa Definitiva",
            "description": "Trabalho espiritual para unir casais e trazer o amor de volta."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Abertura de Caminhos",
            "description": "Remoção de obstáculos financeiros e profissionais."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza Espiritual",
            "description": "Descarrego e proteção contra inveja e demandas."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "205"
    }
  };

  return (
    <div className="bg-dark min-h-screen">
      <Helmet>
        <title>Amarração Amorosa em {city} - {state.name} | Casa de Seu Tranca Ruas</title>
        <meta name="description" content={`Procurando amarração amorosa em ${city}? A Casa de Seu Tranca Ruas realiza trabalhos espirituais poderosos para trazer o ex de volta e abrir caminhos em ${city}, ${state.name}.`} />
        <link rel="canonical" href={`https://www.casadeseutrancaruas.info/estados/${stateSlug}/${citySlug}`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-32 px-4 border-b border-gold/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
          <img src="https://filhodeogum.com/imagens/tranca-rua.png" alt="" className="w-full h-full object-contain object-right" />
        </div>
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

      {/* Video Highlight Section */}
      <section className="py-24 px-4 bg-dark/40 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-xl overflow-hidden border border-gold/30 shadow-[0_0_50px_rgba(212,175,55,0.1)]"
            >
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=1&loop=1&playlist=5qap5aO4i9A" 
                title="A Força de Seu Tranca Ruas"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-dark/80 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl text-gold mb-6 font-display">A Chave que Abre Seus Caminhos em {city}</h2>
              <p className="text-bone/70 text-lg mb-8 leading-relaxed">
                Assista e sinta a energia que move nossa casa. Seu Tranca Ruas não apenas promete, ele executa. Em {city}, centenas de pessoas já tiveram suas vidas transformadas através dos nossos rituais sagrados.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-gold">
                  <CheckCircle2 className="text-neon-red" /> Atendimento 100% Sigiloso
                </div>
                <div className="flex items-center gap-3 text-gold">
                  <CheckCircle2 className="text-neon-red" /> Resultados em até 24 Horas
                </div>
                <div className="flex items-center gap-3 text-gold">
                  <CheckCircle2 className="text-neon-red" /> Fundamento Real de Quimbanda
                </div>
              </div>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Quero+mudar+minha+vida+em+${city}`}
                className="inline-block bg-neon-red text-white px-12 py-5 rounded-sm font-secondary tracking-widest hover:brightness-125 transition-all shadow-[0_0_25px_rgba(255,26,26,0.4)]"
              >
                Agendar Consulta Agora
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 opacity-10 pointer-events-none">
          <img src="https://filhodeogum.com/imagens/casa-de-seu-tranca-rua.png" alt="" className="w-full h-full object-contain object-left" />
        </div>
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
            <div className="relative bg-dark/50 border border-gold/20 p-8 rounded-sm max-h-[600px] overflow-y-auto custom-scrollbar">
              <h3 className="text-2xl text-gold mb-6 font-secondary text-center">Depoimentos em {state.name}</h3>
              <div className="space-y-6">
                {MOCK_TESTIMONIALS.map((t, i) => (
                  <div key={i} className="border-b border-gold/10 pb-6 last:border-0">
                    <div className="flex gap-1 mb-2">
                      {[...Array(t.stars)].map((_, s) => <Star key={s} size={14} className="fill-gold text-gold" />)}
                    </div>
                    <p className="text-bone/70 italic mb-2">"{t.text.replace('{city}', city)}"</p>
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
