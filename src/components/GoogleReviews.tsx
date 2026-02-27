import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const GOOGLE_LOGO = "https://img.freepik.com/vetores-premium/icone-do-logotipo-do-google-em-fundo-transparente_1273375-1570.jpg?semt=ais_related_payload_trends&w=740&q=80";

const MOCK_NAMES = [
  "Ricardo Silva", "Ana Paula", "Marcos Oliveira", "Juliana Costa", "Felipe Santos",
  "Beatriz Lima", "Gustavo Pereira", "Camila Rodrigues", "Thiago Souza", "Larissa Alves",
  "Bruno Ferreira", "Letícia Gomes", "André Ribeiro", "Fernanda Carvalho", "Lucas Martins",
  "Mariana Rocha", "Gabriel Castro", "Amanda Barbosa", "Rafael Xavier", "Vanessa Melo"
];

const MOCK_REVIEWS = [
  "Trabalho incrível, meu amor voltou em 3 dias!",
  "Seu Tranca Ruas abriu meus caminhos financeiros, gratidão eterna.",
  "Estava sofrendo muito, mas a consulta mudou minha vida.",
  "Resultados reais e sigilo total. Recomendo a todos.",
  "A amarração mais poderosa que já vi. Funciona de verdade.",
  "Limpeza espiritual profunda, me sinto outra pessoa.",
  "Obrigado por me ajudar a recuperar minha dignidade.",
  "Atendimento nota 1000, muito respeitoso e direto.",
  "Não acreditava mais, mas Seu Tranca Ruas me provou o contrário.",
  "Minha empresa voltou a prosperar depois do ebó."
];

// Generate 50 reviews for better performance
const ALL_REVIEWS = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  name: MOCK_NAMES[i % MOCK_NAMES.length] + " " + (i % 50),
  text: MOCK_REVIEWS[i % MOCK_REVIEWS.length],
  rating: 5,
  date: "Há " + (i % 12 + 1) + " meses"
}));

export const GoogleReviews = () => {
  return (
    <section className="py-20 bg-black/40 border-y border-gold/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-12 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src={GOOGLE_LOGO} alt="Google" className="h-8 w-8 object-contain" />
            <span className="text-xl font-secondary text-bone">Avaliações no Google</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-gold text-gold" />)}
            </div>
            <span className="text-gold font-bold text-2xl">4.9 / 5.0</span>
            <span className="text-muted text-sm">(250+ avaliações)</span>
          </div>
        </div>
        <div className="hidden md:block">
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gold transition-colors">
            Escrever avaliação
          </button>
        </div>
      </div>

      <div className="h-[600px] relative">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-dark via-transparent to-dark" />
        
        <div className="marquee-vertical">
          {[...ALL_REVIEWS, ...ALL_REVIEWS].map((review, idx) => (
            <div 
              key={`${review.id}-${idx}`}
              className="mb-8 p-8 bg-dark/40 backdrop-blur-sm border border-gold/20 rounded-xl mx-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-gold/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-blood rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {review.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-bone font-bold text-base group-hover:text-gold transition-colors">{review.name}</h4>
                    <img src={GOOGLE_LOGO} alt="Google" className="h-5 w-5 opacity-80" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} className="fill-gold text-gold" />)}
                    </div>
                    <span className="text-muted text-xs">• {review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-bone/90 text-sm leading-relaxed italic border-l-2 border-gold/30 pl-4 py-1">
                "{review.text}"
              </p>
              <div className="mt-4 flex items-center gap-2 text-[10px] text-gold/50 uppercase tracking-widest font-secondary">
                <span className="w-4 h-px bg-gold/30"></span>
                Avaliação Verificada
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
