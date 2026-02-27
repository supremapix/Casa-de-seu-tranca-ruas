import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Shield, Globe, Star, CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-dark min-h-screen py-20 px-4">
      <Helmet>
        <title>Sobre Nós | Casa de Seu Tranca Ruas</title>
        <meta name="description" content="Conheça a história e os fundamentos da Casa de Seu Tranca Ruas. Especialistas em trabalhos espirituais de alta potência e resultados garantidos." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-7xl text-gold mb-8">Fundamentos e Tradição</h1>
            <div className="space-y-6 text-bone/80 text-lg leading-relaxed">
              <p>
                A <strong>Casa de Seu Tranca Ruas</strong> nasceu da necessidade de trazer luz e força para aqueles que se encontram perdidos em caminhos fechados. Com décadas de experiência na quimbanda e fundamentos espirituais sólidos, nos tornamos referência em resultados reais.
              </p>
              <p>
                Nosso trabalho é guiado pela força de <strong>Exu Tranca Ruas das Almas</strong>, o senhor das encruzilhadas, aquele que detém as chaves para abrir ou fechar qualquer porta. Não fazemos promessas vazias; entregamos resultados através de rituais sérios e poderosos.
              </p>
              <p>
                Seja para o amor, para a prosperidade ou para a proteção, cada trabalho é único e tratado com o máximo respeito e dedicação.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blood/20 blur-3xl rounded-full" />
            <img 
              src="https://filhodeogum.com/imagens/casa-de-seu-tranca-ruas-brasil.png" 
              alt="Altar de Tranca Ruas"
              className="relative rounded-sm border border-gold/20 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { 
              icon: <Shield className="text-neon-red" size={40} />, 
              title: "Sigilo Absoluto", 
              desc: "Sua privacidade é nossa prioridade. Todos os atendimentos e trabalhos são realizados sob total discrição." 
            },
            { 
              icon: <Globe className="text-neon-red" size={40} />, 
              title: "Atendimento Global", 
              desc: "Atendemos clientes em todo o Brasil e no exterior com a mesma eficácia e força espiritual." 
            },
            { 
              icon: <Star className="text-neon-red" size={40} />, 
              title: "Resultados Reais", 
              desc: "Nossa maior propaganda são os milhares de caminhos abertos e casais unidos através da nossa fé." 
            }
          ].map((item, i) => (
            <div key={i} className="bg-dark/50 border border-gold/10 p-10 rounded-sm text-center">
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-2xl text-gold mb-4 font-secondary">{item.title}</h3>
              <p className="text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
