import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { MapPin, MessageCircle, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = "5541996865804";

const STATES_DATA: Record<string, { name: string, cities: string[], msg: string }> = {
  "rs": {
    name: "Rio Grande do Sul",
    cities: ["Porto Alegre", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande", "Alvorada", "Passo Fundo", "Sapucaia do Sul", "Uruguaiana", "Santa Cruz do Sul", "Cachoeirinha"],
    msg: "Vim pelo site - Estado: Rio Grande do Sul"
  },
  "ba": {
    name: "Bahia",
    cities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Juazeiro", "Lauro de Freitas", "Ilhéus", "Jequié", "Teixeira de Freitas", "Alagoinhas", "Barreiras", "Porto Seguro", "Simões Filho", "Paulo Afonso"],
    msg: "Vim pelo site - Estado: Bahia"
  },
  "rj": {
    name: "Rio de Janeiro",
    cities: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói", "Belford Roxo", "Campos dos Goytacazes", "São João de Meriti", "Petrópolis", "Volta Redonda", "Macaé", "Magé", "Itaboraí", "Mesquita", "Nova Friburgo"],
    msg: "Vim pelo site - Estado: Rio de Janeiro"
  },
  "ma": {
    name: "Maranhão",
    cities: ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias", "Codó", "Paço do Lumiar", "Açailândia", "Bacabal", "Balsas", "Santa Inês", "Pinheiro", "Chapadinha", "Buriticupu", "Grajaú"],
    msg: "Vim pelo site - Estado: Maranhão"
  },
  "go-df": {
    name: "Goiás e DF",
    cities: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia", "Águas Lindas de Goiás", "Valparaíso de Goiás", "Trindade", "Formosa", "Novo Gama", "Senador Canedo", "Itumbiara", "Catalão", "Jataí", "Brasília"],
    msg: "Vim pelo site - Estado: Goiás e DF"
  }
};

export const StatePage = () => {
  const { stateSlug } = useParams();
  const state = STATES_DATA[stateSlug || ""];

  if (!state) return <div className="py-20 text-center text-gold">Estado não encontrado.</div>;

  return (
    <div className="bg-dark min-h-screen py-20 px-4">
      <Helmet>
        <title>Amarração Amorosa em {state.name} | Casa de Seu Tranca Ruas</title>
        <meta name="description" content={`Trabalhos espirituais e amarração amorosa em todo o estado de ${state.name}. Atendimento em Porto Alegre, Salvador, Rio de Janeiro e mais.`} />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-2 text-neon-red mb-6 font-secondary tracking-widest uppercase">
            <MapPin size={20} /> Atendimento em {state.name}
          </div>
          <h1 className="text-4xl md:text-7xl text-gold mb-8">Amarração Amorosa em {state.name}</h1>
          <p className="text-bone/80 text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            Realizamos trabalhos espirituais de alta potência para todas as cidades de {state.name}. 
            Traga seu amor de volta e abra seus caminhos com quem entende de verdade.
          </p>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${state.msg}`}
            className="inline-flex items-center gap-3 bg-blood text-white px-10 py-5 rounded-sm font-secondary tracking-widest hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(163,0,0,0.5)]"
          >
            <MessageCircle size={24} /> Consultar Especialista de {state.name}
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {state.cities.map(city => (
            <Link 
              key={city}
              to={`/estados/${stateSlug}/${city.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-dark/50 border border-gold/10 p-6 rounded-sm hover:border-neon-red hover:bg-gold/5 transition-all flex items-center justify-between group"
            >
              <span className="text-bone group-hover:text-gold transition-colors">{city}</span>
              <ArrowRight size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
