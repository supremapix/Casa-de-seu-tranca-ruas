import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2, ThumbsUp, Share2, Shield } from 'lucide-react';

const GOOGLE_LOGO = "https://img.freepik.com/vetores-premium/icone-do-logotipo-do-google-em-fundo-transparente_1273375-1570.jpg?semt=ais_related_payload_trends&w=740&q=80";

const MOCK_NAMES = [
  "Ricardo Silva", "Ana Paula", "Marcos Oliveira", "Juliana Costa", "Felipe Santos",
  "Beatriz Lima", "Gustavo Pereira", "Camila Rodrigues", "Thiago Souza", "Larissa Alves",
  "Bruno Ferreira", "Letícia Gomes", "André Ribeiro", "Fernanda Carvalho", "Lucas Martins",
  "Mariana Rocha", "Gabriel Castro", "Amanda Barbosa", "Rafael Xavier", "Vanessa Melo"
];

const MOCK_REVIEWS = [
  "Eu estava completamente sem esperanças, meu casamento de 15 anos tinha acabado e ele já estava com outra pessoa. Procurei a Casa de Seu Tranca Ruas e em menos de 21 dias ele voltou para casa arrependido, pedindo perdão de joelhos. A força desse trabalho é algo que nunca vi igual em toda minha vida, gratidão eterna ao Pai de Santo.",
  "Minha empresa estava à beira da falência, dívidas acumuladas e portas se fechando todos os dias. Depois do ebó de abertura de caminhos com Seu Tranca Ruas, em menos de uma semana recebi três propostas de contratos grandes que mudaram tudo. Hoje meu negócio prospera como nunca imaginei ser possível. Recomendo muito!",
  "Sofri por anos com uma depressão espiritual e nada dava certo na minha vida. Parecia que tinha um peso nas minhas costas. Na primeira consulta já senti uma leveza inexplicável. O descarrego foi profundo e hoje me sinto uma nova mulher, com energia e alegria de viver. Seu Tranca Ruas realmente limpa tudo o que é ruim.",
  "A amarração amorosa feita aqui é de uma potência absurda. Eu tentei em vários outros lugares e nada funcionava, só perdia dinheiro. Aqui o resultado foi rápido e definitivo. Ele me procura todos os dias, está carinhoso e focado apenas em mim. O sigilo e o respeito durante todo o processo foram impecáveis.",
  "Gratidão imensa por ter encontrado esse auxílio. Minha vida era um nó cego, nada fluía, nem amor nem dinheiro. Depois dos rituais, os caminhos se abriram de uma forma mágica. Consegui o emprego que tanto queria e meu relacionamento se estabilizou. É um trabalho sério, com fundamento e muita responsabilidade espiritual.",
  "Eu não acreditava mais em nada, achava que era tudo mentira. Mas a situação estava tão crítica que resolvi tentar uma última vez. Seu Tranca Ruas me mostrou que a fé com fundamento traz milagres. Minha família que estava desunida hoje vive em paz e harmonia total. Não tenho palavras para agradecer tamanha ajuda.",
  "O trabalho de afastamento de rivais foi cirúrgico. Tinha uma pessoa no meu trabalho que fazia de tudo para me derrubar. Depois da limpeza e da proteção, essa pessoa simplesmente pediu demissão e sumiu da minha vida, sem eu precisar fazer nada de ruim. A justiça de Tranca Ruas é implacável e justa.",
  "Fiz um trabalho para atrair clientes e em 48 horas o telefone não parava de tocar. É impressionante como a energia muda instantaneamente quando o ritual é bem feito. Se você está com o negócio parado, não perca tempo, a solução está aqui. Atendimento muito profissional e direto ao ponto.",
  "Minha saúde estava debilitada e os médicos não achavam nada físico. Era espiritual. Depois do descarrego e da proteção de Tranca Ruas das Almas, recuperei minhas forças e minha disposição. Hoje acordo cedo, trabalho e tenho disposição para tudo. Foi uma verdadeira ressurregação na minha vida.",
  "A união de casais que eles fazem aqui é diferenciada. Não é apenas prender a pessoa, é restaurar o amor e o respeito que existiam antes. Meu parceiro mudou da água para o vinho, está mais presente, atencioso e carinhoso. Vale cada centavo investido pela paz que tenho hoje no meu lar."
];

// Generate 205 reviews for maximum authority
const ALL_REVIEWS = Array.from({ length: 205 }, (_, i) => ({
  id: i,
  name: MOCK_NAMES[i % MOCK_NAMES.length] + (i > 20 ? " " + (i + 1) : ""),
  text: MOCK_REVIEWS[i % MOCK_REVIEWS.length],
  rating: 5,
  date: "Há " + (i % 12 + 1) + " meses"
}));

export const GoogleReviews = () => {
  return (
    <section className="py-24 bg-dark/20 border-y border-gold/10 overflow-hidden relative">
      {/* Header Section - Fixed Spacing to avoid overlap */}
      <div className="max-w-7xl mx-auto px-4 mb-20 relative z-30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-dark/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <div className="bg-white p-2 rounded-full shadow-lg">
                <img src={GOOGLE_LOGO} alt="Google" className="h-10 w-10 object-contain" />
              </div>
              <h2 className="text-3xl md:text-5xl font-display text-gold tracking-tight">Excelência Comprovada</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={28} className="fill-[#FBBC04] text-[#FBBC04]" />)}
                </div>
                <span className="text-white font-bold text-4xl ml-2">5.0</span>
              </div>
              <div className="h-10 w-px bg-gold/30 hidden md:block" />
              <div className="flex flex-col">
                <span className="text-gold font-bold text-xl uppercase tracking-widest">205+ Avaliações</span>
                <span className="text-bone/40 text-xs uppercase tracking-[0.3em]">Clientes Satisfeitos</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <button className="w-full md:w-auto bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-gold transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-gold/20 hover:scale-105 active:scale-95">
              Deixe seu depoimento
            </button>
            <div className="flex items-center gap-2 text-[10px] text-bone/30 uppercase tracking-[0.3em]">
              <Shield size={12} className="text-emerald-500" />
              Privacidade 100% Garantida
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="h-[900px] relative z-20">
        {/* Top and Bottom Fades for smooth transition */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-dark to-transparent z-10 pointer-events-none" />
        
        <div className="marquee-vertical">
          {[...ALL_REVIEWS, ...ALL_REVIEWS].map((review, idx) => (
            <div 
              key={`${review.id}-${idx}`}
              className="mb-10 p-8 bg-white rounded-2xl mx-6 shadow-[0_15px_35px_rgba(0,0,0,0.3)] border border-slate-100 transition-all hover:scale-[1.02] cursor-default max-w-2xl self-center"
            >
              <div className="flex items-start gap-5 mb-5">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center text-slate-700 font-bold text-xl shadow-inner border border-slate-200">
                  {review.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-slate-900 font-bold text-lg">{review.name}</h4>
                    <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-md">
                      <img src={GOOGLE_LOGO} alt="Google" className="h-4 w-4" />
                      <span className="text-[10px] font-bold text-blue-600 uppercase">Local Guide</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-[#FBBC04] text-[#FBBC04]" />
                      ))}
                    </div>
                    <span className="text-slate-400 text-xs font-medium">{review.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <p className="text-slate-700 text-base leading-relaxed font-normal">
                  {review.text}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-[11px] uppercase tracking-wider">
                  <CheckCircle2 size={14} />
                  Experiência Verificada
                </div>
                <div className="flex gap-4">
                  <button className="text-slate-400 hover:text-blue-600 transition-colors">
                    <ThumbsUp size={14} />
                  </button>
                  <button className="text-slate-400 hover:text-red-600 transition-colors">
                    <Share2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
