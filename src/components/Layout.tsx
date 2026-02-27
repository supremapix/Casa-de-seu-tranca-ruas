import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, Phone, Clock } from 'lucide-react';

const WHATSAPP_NUMBER = "5541996865804";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Estados', path: '/estados' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <div className="relative min-h-screen bg-dark overflow-x-hidden text-bone">
      <div className="noise-bg" />
      
      {/* --- Navbar --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-dark/95 backdrop-blur-md border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-display text-gold flex items-center gap-2">
            <span className="text-3xl animate-pulse">⚜</span> Tranca Ruas
          </Link>

          <div className="hidden lg:flex items-center gap-8 font-secondary text-sm tracking-widest uppercase">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`transition-all relative group py-2 ${location.pathname === item.path ? 'text-neon-red' : 'hover:text-gold'}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-px bg-gold transition-all group-hover:w-full ${location.pathname === item.path ? 'w-full bg-neon-red shadow-[0_0_10px_#FF1A1A]' : 'w-0'}`} />
              </Link>
            ))}
          </div>

          <button className="lg:hidden text-gold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-dark border-b border-gold/20 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4 font-secondary uppercase tracking-widest text-sm">
                {navItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`p-4 hover:bg-gold/5 rounded-sm ${location.pathname === item.path ? 'text-neon-red' : ''}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {children}
      </main>

      {/* --- Footer --- */}
      <footer className="bg-black py-20 px-4 border-t border-gold/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-display text-gold mb-8">⚜ Casa de Seu Tranca Ruas</div>
          <div className="flex flex-wrap justify-center gap-8 font-secondary text-xs uppercase tracking-widest mb-12">
            {navItems.map(item => (
              <Link key={item.path} to={item.path} className="hover:text-neon-red transition-colors">{item.name}</Link>
            ))}
            <Link to="/mapa-do-site" className="hover:text-neon-red transition-colors">Mapa do Site</Link>
          </div>
          
          <div className="flex flex-col items-center gap-6 opacity-50 hover:opacity-100 transition-opacity">
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema Mídia" 
              className="h-12 grayscale brightness-200"
            />
            <p className="text-bone/40 text-sm">
              Desenvolvido <span className="heart-beat">❤️</span> por <a href="https://supremasite.com.br" target="_blank" rel="noopener" className="text-gold hover:underline">Suprema Sites Express</a>
            </p>
          </div>
        </div>
      </footer>

      {/* --- Floating WhatsApp --- */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Vim+pelo+site+-+Botão+Flutuante`}
          target="_blank" rel="noopener"
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform relative"
        >
          <MessageCircle size={32} />
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-neon-red rounded-full flex items-center justify-center text-[10px] font-bold animate-pulse shadow-[0_0_10px_#FF1A1A]">1</span>
        </a>
      </div>
    </div>
  );
};
