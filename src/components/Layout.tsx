import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { GoogleReviews } from './GoogleReviews';
import { VideoSection } from './VideoSection';

const WHATSAPP_NUMBER = "5541996865804";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const FAQSection = () => {
  const faqs = [
    {
      q: "Amarração amorosa funciona à distância? (Caso Real: Maria de Porto Alegre)",
      a: "Sim, com absoluta certeza. O mundo espiritual não conhece barreiras físicas. \n\n**Caso de Sucesso:** Maria nos procurou desesperada. Seu marido havia saído de casa há 6 meses e já morava com outra pessoa em outro estado. Realizamos o trabalho de Amarração com Tranca Ruas das Almas totalmente à distância. Em apenas 14 dias, ele começou a ter sonhos perturbadores com ela. No 19º dia, ele pegou um avião, apareceu na porta dela chorando e pedindo perdão, dizendo que não conseguia mais respirar sem ela. Hoje estão casados e mais felizes do que nunca. A distância é apenas um detalhe para quem tem a chave dos caminhos."
    },
    {
      q: "Em quanto tempo vejo resultado? (Caso Real: João da Bahia)",
      a: "Cada caso é único, mas a força de Tranca Ruas é rápida. \n\n**Caso de Sucesso:** João estava com a vida financeira destruída e o amor em frangalhos. Ele precisava de algo urgente. Fizemos um Ebó de Abertura de Caminhos e uma Amarração simultânea. Em 7 dias, ele recebeu uma proposta de emprego que triplicou sua renda. No 12º dia, a mulher que o ignorava há um ano mandou uma mensagem dizendo que sentia um aperto no peito e precisava vê-lo. Resultados sólidos exigem fundamento, e nós entregamos o que prometemos."
    },
    {
      q: "É seguro? Pode se voltar contra mim? (A Verdade sobre a Proteção)",
      a: "Trabalhamos na Lei do Retorno Positivo. Nossos rituais são blindados. \n\n**A História de Proteção:** Atendemos uma empresária que sentia que sua vida estava sendo sugada. Identificamos uma demanda pesada enviada por um sócio invejoso. Quebramos o feitiço e ativamos o Escudo de Tranca Ruas. O mal foi devolvido na mesma hora: o sócio faliu em um mês, enquanto ela abriu sua terceira filial. Você não corre riscos quando está sob a guarda do Senhor das Encruzilhadas. O único risco é você continuar sofrendo enquanto a solução está aqui."
    },
    {
      q: "Preciso enviar foto ou objetos? (Como o Enxu age)",
      a: "As fotos ajudam na conexão energética, mas o Enxu lê a alma. \n\n**Detalhes do Fundamento:** Quando você nos envia uma foto, ela é colocada no ponto riscado sagrado. Ali, Seu Tranca Ruas identifica os nós que prendem sua vida. Não é apenas uma imagem, é o seu portal vibratório. Já resolvemos casos apenas com o nome completo, pois a entidade sabe exatamente quem você é e o que você merece. A fé e o fundamento são os verdadeiros motores do milagre."
    }
  ];

  return (
    <section className="py-24 px-4 bg-black/20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gold/10" />
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl text-gold mb-6 font-display">Histórias de Poder e Fé</h2>
          <p className="text-muted text-lg italic">"Onde o homem falha, o Enxu triunfa. Veja o que a força de Tranca Ruas pode fazer por você."</p>
        </motion.div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-dark/40 border border-gold/20 rounded-lg overflow-hidden shadow-xl hover:border-gold/50 transition-all">
              <summary className="p-8 cursor-pointer flex items-center justify-between font-secondary text-gold uppercase tracking-[0.2em] text-lg hover:bg-gold/5 transition-colors">
                <span className="flex-1 pr-4">{faq.q}</span>
                <ChevronDown className="group-open:rotate-180 transition-transform text-neon-red" />
              </summary>
              <div className="p-8 text-bone/90 leading-relaxed border-t border-gold/10 bg-black/40 text-lg whitespace-pre-line">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

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
      <ScrollToTop />
      <div className="noise-bg" />
      
      {/* --- Navbar --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-50 bg-dark/95 backdrop-blur-md border-b border-gold/20"
      >
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-display text-gold flex items-center gap-2 hover:scale-105 transition-transform">
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
      </motion.nav>

      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pt-20"
        >
          {/* Page Content */}
          {children}

          {/* Video 01 — Amarração Amorosa (Apos Hero) */}
          <VideoSection 
            title="Amarração Amorosa Poderosa Que Funciona de Verdade"
            description="🕯️ AMARRAÇÃO AMOROSA — RESULTADO REAL E DEFINITIVO\n\nVocê está sofrendo por amor enquanto a pessoa que você ama vive a vida como se você não existisse? Isso pode acabar hoje.\n\nTranca Ruas Age Onde Nenhum Humano Consegue."
            videoId="l0rGQ8fQnqY"
            ctaText="Trazer meu Amor de Volta"
            whatsappMsg="Vim pelo YouTube - Amarração"
            features={[
              "Amarração com mel e fita vermelha",
              "Volta do ex em até 21 dias",
              "União de casais separados",
              "Afastamento de amantes e rivais"
            ]}
          />

          {/* Video 02 — Abertura de Caminhos Financeiros (No meio da pagina) */}
          <VideoSection 
            title="Abertura de Caminhos Financeiros com Exu Tranca Ruas"
            description="💰 ABERTURA DE CAMINHOS FINANCEIROS — QUEBRE O BLOQUEIO DE VEZ\n\nDívidas acumulando, portas que não abrem, oportunidades que chegam e somem. Destrave sua prosperidade agora com a força de Seu Tranca Ruas."
            videoId="aEj0kqAv2yA"
            ctaText="Abrir meus Caminhos"
            whatsappMsg="Vim pelo YouTube - Caminhos Financeiros"
            features={[
              "Ritual para negócio prosperar",
              "Trabalho para emprego urgente",
              "Ebó para prosperidade e abundância",
              "Desbloqueio de oportunidades"
            ]}
          />

          <FAQSection />
          <GoogleReviews />

          {/* Video 03 — Proteção Espiritual (Antes do footer) */}
          <VideoSection 
            title="Alguém Fez um Trabalho Contra Você? Tranca Ruas Devolve"
            description="⚔️ PROTEÇÃO ESPIRITUAL E GUERRA ESPIRITUAL — VOCÊ NÃO ESTÁ SOZINHO\n\nVocê sente que algo está errado? Azar em série, pesadelos, cansaço extremo? Pode ser um trabalho feito contra você. Nós identificamos, neutralizamos e devolvemos qualquer mal."
            videoId="E34bVyV-8WE"
            ctaText="Quebrar Feitiço Agora"
            whatsappMsg="Vim pelo YouTube - Proteção Espiritual"
            features={[
              "Identificação do mal feito",
              "Quebra de feitiço na raiz",
              "Devolução ao remetente",
              "Escudo espiritual permanente"
            ]}
          />
        </motion.main>
      </AnimatePresence>

      {/* --- Footer --- */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-black py-20 px-4 border-t border-gold/20"
      >
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
      </motion.footer>

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
