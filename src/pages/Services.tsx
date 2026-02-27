import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet';
import { Flame, Zap, Coins, Sword, Unlock, Heart, Shield, Eye, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = "5541996865804";

const SERVICES = [
  {
    id: 'amarração',
    icon: <Flame className="text-neon-red" size={48} />,
    title: "Amarração Amorosa Urgente",
    desc: "A amarração amorosa de Seu Tranca Ruas é definitiva e poderosa. Trazemos o seu amor de volta com domínio espiritual, paixão e fidelidade. Resultados que você sente na alma.",
    msg: "Vim pelo site - Serviço: Amarração Amorosa Poderosa"
  },
  {
    id: 'ebos',
    icon: <Zap className="text-neon-red" size={48} />,
    title: "Ebó para Amor e Dinheiro",
    desc: "Ebós fundamentados para limpar sua aura e atrair o que você deseja. Seja para reconquistar um amor ou para atrair fartura financeira, nossos ebós são a chave do sucesso.",
    msg: "Vim pelo site - Serviço: Ebó para Dinheiro e Amor"
  },
  {
    id: 'financeiro',
    icon: <Coins className="text-neon-red" size={48} />,
    title: "Caminhos Financeiros",
    desc: "Sua vida financeira está travada? Seu Tranca Ruas é o dono das chaves. Abrimos seus caminhos para novos negócios, empregos e prosperidade imediata.",
    msg: "Vim pelo site - Serviço: Caminhos Financeiros"
  },
  {
    id: 'guerras',
    icon: <Sword className="text-neon-red" size={48} />,
    title: "Guerra Espiritual",
    desc: "Proteção contra inimigos, inveja e demandas. Se você sente que está sendo atacado espiritualmente, nós blindamos sua vida e devolvemos o mal para quem o enviou.",
    msg: "Vim pelo site - Serviço: Guerra Espiritual"
  },
  {
    id: 'desbloqueio',
    icon: <Unlock className="text-neon-red" size={48} />,
    title: "Caminhos Fechados",
    desc: "Nada dá certo na sua vida? Pode ser um bloqueio espiritual. Com a força de Tranca Ruas das Almas, quebramos correntes e abrimos todas as portas para você.",
    msg: "Vim pelo site - Serviço: Caminhos Fechados"
  },
  {
    id: 'uniao',
    icon: <Heart className="text-neon-red" size={48} />,
    title: "Volta do Ex de Verdade",
    desc: "Chega de sofrer por quem não te valoriza. Fazemos ele(a) voltar rastejando, pedindo perdão e querendo ficar ao seu lado para sempre. Sigilo total garantido.",
    msg: "Vim pelo site - Serviço: Volta do Ex"
  },
  {
    id: 'limpeza',
    icon: <Shield className="text-neon-red" size={48} />,
    title: "Limpeza Espiritual",
    desc: "Remova encostos, pragas e energias densas que impedem sua felicidade. Uma limpeza profunda para renovar suas forças e trazer paz de espírito.",
    msg: "Vim pelo site - Serviço: Limpeza Espiritual"
  },
  {
    id: 'videncia',
    icon: <Eye className="text-neon-red" size={48} />,
    title: "Vidência e Consulta",
    desc: "Saiba a verdade sobre sua vida. Através das cartas e búzios, revelamos o que está oculto e te damos o direcionamento correto para vencer seus desafios.",
    msg: "Vim pelo site - Serviço: Vidência e Consulta"
  }
];

export const Services = () => {
  return (
    <div className="bg-dark min-h-screen py-20 px-4">
      <Helmet>
        <title>Nossos Serviços Espirituais | Casa de Seu Tranca Ruas</title>
        <meta name="description" content="Conheça nossos trabalhos: Amarração Amorosa, Ebós, Limpeza Espiritual e Abertura de Caminhos. Resultados reais com a força de Tranca Ruas." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-7xl text-gold mb-6">Trabalhos Espirituais</h1>
          <p className="text-muted text-xl max-w-2xl mx-auto">
            Poder, fundamento e resultados garantidos. A força que você precisa para mudar seu destino.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-dark/50 border border-gold/20 p-12 rounded-sm hover:border-neon-red transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                {service.icon}
              </div>
              <div className="mb-8">{service.icon}</div>
              <h2 className="text-3xl text-gold mb-6 font-secondary">{service.title}</h2>
              <p className="text-bone/80 text-lg mb-10 leading-relaxed">{service.desc}</p>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${service.msg}`}
                className="inline-flex items-center gap-3 bg-neon-red text-white px-8 py-4 rounded-sm font-secondary tracking-widest hover:brightness-125 transition-all shadow-[0_0_15px_rgba(255,26,26,0.3)]"
              >
                Solicitar Trabalho <ArrowRight size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
