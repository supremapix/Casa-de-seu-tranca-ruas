import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="bg-dark min-h-screen flex items-center justify-center px-4 py-20">
      <Helmet>
        <title>Página Não Encontrada | Casa de Seu Tranca Ruas</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <h1 className="text-[150px] md:text-[200px] font-secondary text-gold/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl text-gold font-secondary uppercase tracking-widest">
              Caminho Fechado
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-8"
        >
          <p className="text-bone/70 text-xl leading-relaxed">
            Parece que você se perdeu nas encruzilhadas do destino. Esta página não existe ou foi movida para outro plano.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              to="/"
              className="group flex items-center gap-3 bg-gold text-dark px-8 py-4 rounded-sm font-secondary uppercase tracking-widest transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              <Home size={20} />
              Voltar ao Início
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="group flex items-center gap-3 border border-gold/30 text-gold px-8 py-4 rounded-sm font-secondary uppercase tracking-widest transition-all hover:bg-gold/5"
            >
              <ArrowLeft size={20} />
              Página Anterior
            </button>
          </div>
        </motion.div>

        <div className="mt-24 pt-12 border-t border-gold/10">
          <p className="text-muted text-sm italic">
            "Seu Tranca Ruas abre os caminhos de quem sabe para onde vai."
          </p>
        </div>
      </div>
    </div>
  );
};
