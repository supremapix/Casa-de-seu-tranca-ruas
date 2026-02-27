import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, MessageCircle, ChevronDown, 
  Shield, Globe, Star, 
  ArrowRight, Phone, Mail, Clock,
  CheckCircle2, Zap, Flame, Lock, Unlock,
  Coins, Sword, MapPin, Heart, Eye
} from 'lucide-react';

// --- Types & Constants ---
const WHATSAPP_NUMBER = "5541996865804";

const PERSUASIVE_TEXTS = [
  "Amarração Amorosa Poderosa e Definitiva",
  "Traga seu amor de volta em até 24 horas",
  "Trabalho Espiritual Urgente com Tranca Ruas",
  "Ebó para Dinheiro e Prosperidade Imediata",
  "Feitiço de Amor que Funciona de Verdade",
  "Macumba para Amor: Resultados Garantidos",
  "Simpatia para Voltar Ex com Alta Potência",
  "Desbloqueio de Caminhos com Tranca Ruas das Almas",
  "Guerra Espiritual: Proteção e Vitória",
  "Abertura de Caminhos Financeiros Urgente",
  "União de Casais com Segredo e Discrição",
  "Limpeza Espiritual e Descarrego Profundo",
  "Ponto de Exu Tranca Ruas: Força e Fé",
  "O Senhor das Encruzilhadas Abre Seus Caminhos",
  "Recupere sua Felicidade no Amor Hoje Mesmo"
];

const SERVICES = [
  {
    id: 'amarração',
    icon: <Flame className="text-blood" size={40} />,
    title: "Amarração Amorosa Urgente",
    desc: "Amarração amorosa que funciona de verdade. Resultados poderosos para trazer o ex de volta com feitiço de amor definitivo.",
    msg: "Vim pelo site - Serviço: Amarração Amorosa Poderosa"
  },
  {
    id: 'ebos',
    icon: <Zap className="text-blood" size={40} />,
    title: "Ebó para Amor e Dinheiro",
    desc: "Ebó poderoso para abrir caminhos financeiros e atrair prosperidade. Macumba para dinheiro com resultados rápidos.",
    msg: "Vim pelo site - Serviço: Ebó para Dinheiro e Amor"
  },
  {
    id: 'financeiro',
    icon: <Coins className="text-blood" size={40} />,
    title: "Caminhos Financeiros",
    desc: "Trabalho espiritual urgente para destravar sua vida financeira. Chaves de Tranca Ruas para o sucesso nos negócios.",
    msg: "Vim pelo site - Serviço: Caminhos Financeiros"
  },
  {
    id: 'guerras',
    icon: <Sword className="text-blood" size={40} />,
    title: "Guerra Espiritual",
    desc: "Proteção total contra inveja e ataques. O trabalho de Exu que devolve o mal e blinda sua casa e família.",
    msg: "Vim pelo site - Serviço: Guerra Espiritual"
  },
  {
    id: 'desbloqueio',
    icon: <Unlock className="text-blood" size={40} />,
    title: "Caminhos Fechados",
    desc: "Desbloqueio de caminhos com Tranca Ruas das Almas. Rompa as correntes que impedem sua evolução.",
    msg: "Vim pelo site - Serviço: Caminhos Fechados"
  },
  {
    id: 'uniao',
    icon: <Heart className="text-blood" size={40} />,
    title: "Volta do Ex de Verdade",
    desc: "Como trazer o ex de volta? Simpatia de amor poderosa e trabalhos de união com sigilo absoluto.",
    msg: "Vim pelo site - Serviço: Volta do Ex"
  },
  {
    id: 'limpeza',
    icon: <Shield className="text-blood" size={40} />,
    title: "Limpeza Espiritual",
    desc: "Descarrego profundo para remover encostos, pragas e energias negativas. Sinta a leveza e a proteção de Seu Tranca Ruas.",
    msg: "Vim pelo site - Serviço: Limpeza Espiritual"
  },
  {
    id: 'vitoria',
    icon: <Eye className="text-blood" size={40} />,
    title: "Vidência e Consulta",
    desc: "Consulta espiritual com revelações reais. Saiba o que o destino reserva e como agir para vencer seus obstáculos.",
    msg: "Vim pelo site - Serviço: Vidência e Consulta"
  }
];

const STATES = [
  {
    name: "Rio Grande do Sul",
    cities: ["Porto Alegre", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande", "Alvorada", "Passo Fundo", "Sapucaia do Sul", "Uruguaiana", "Santa Cruz do Sul", "Cachoeirinha"],
    msg: "Vim pelo site - Estado: Rio Grande do Sul"
  },
  {
    name: "Bahia",
    cities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Juazeiro", "Lauro de Freitas", "Ilhéus", "Jequié", "Teixeira de Freitas", "Alagoinhas", "Barreiras", "Porto Seguro", "Simões Filho", "Paulo Afonso"],
    msg: "Vim pelo site - Estado: Bahia"
  },
  {
    name: "Rio de Janeiro",
    cities: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói", "Belford Roxo", "Campos dos Goytacazes", "São João de Meriti", "Petrópolis", "Volta Redonda", "Macaé", "Magé", "Itaboraí", "Mesquita", "Nova Friburgo"],
    msg: "Vim pelo site - Estado: Rio de Janeiro"
  },
  {
    name: "Maranhão",
    cities: ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias", "Codó", "Paço do Lumiar", "Açailândia", "Bacabal", "Balsas", "Santa Inês", "Pinheiro", "Chapadinha", "Buriticupu", "Grajaú"],
    msg: "Vim pelo site - Estado: Maranhão"
  },
  {
    name: "Goiás e DF",
    cities: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia", "Águas Lindas de Goiás", "Valparaíso de Goiás", "Trindade", "Formosa", "Novo Gama", "Senador Canedo", "Itumbiara", "Catalão", "Jataí", "Brasília (DF)"],
    msg: "Vim pelo site - Estado: Goiás e DF"
  }
];

// --- Components ---

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, parseInt((Math.random() * 150).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="typewriter-cursor">
      {texts[index].substring(0, subIndex)}
    </span>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', tel: '', state: '', service: '', desc: '' });
  const [activeTab, setActiveTab] = useState(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Consulta pelo site*%0ANome: ${formData.name}%0ATelefone: ${formData.tel}%0AEstado: ${formData.state}%0AServiço: ${formData.service}%0ASituação: ${formData.desc}%0AUTM: formulario_site`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-dark overflow-x-hidden">
      <div className="noise-bg" />
      <div className="custom-cursor hidden md:block" />

      {/* --- Navbar --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-dark/95 backdrop-blur-md border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display text-gold cursor-pointer flex items-center gap-2"
            onClick={() => scrollTo('inicio')}
          >
            <span className="text-3xl animate-pulse">⚜</span> Tranca Ruas
          </motion.div>

          <div className="hidden lg:flex items-center gap-8 font-secondary text-sm tracking-widest uppercase">
            {['Início', 'Serviços', 'Sobre', 'Estados', 'Contato'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-gold transition-all relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          <button className="lg:hidden text-gold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="inicio" className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://filhodeogum.com/imagens/casa-de-seu-tranca-ruas.png"
            className="w-full h-full object-cover opacity-40"
            alt="Exu Tranca Ruas"
          />
          <div className="absolute inset-0 smoke-overlay" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-gradient-gold text-4xl md:text-8xl mb-6 leading-tight drop-shadow-2xl">
              Casa de Seu Tranca Ruas
            </h1>
            <div className="h-12 md:h-16 flex items-center justify-center">
              <p className="text-gold font-secondary text-xl md:text-3xl tracking-wider uppercase">
                <Typewriter texts={PERSUASIVE_TEXTS} />
              </p>
            </div>
            <p className="text-bone text-lg md:text-2xl italic mt-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              "O Senhor das Almas abre os caminhos que o mundo fechou. Amarração amorosa poderosa, ebó para dinheiro e proteção espiritual urgente."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Vim+pelo+site+Hero`}
                className="w-full sm:w-auto bg-blood hover:bg-red-700 text-white px-10 py-5 rounded-sm font-secondary tracking-widest flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-blood/50"
              >
                <MessageCircle size={24} /> Consulta Urgente
              </a>
              <button 
                onClick={() => scrollTo('servicos')}
                className="w-full sm:w-auto border-2 border-gold text-gold hover:bg-gold hover:text-dark px-10 py-5 rounded-sm font-secondary tracking-widest transition-all"
              >
                ⚜ Ver Trabalhos
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="servicos" className="py-32 px-4 bg-dark relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl text-gold mb-6">Trabalhos Espirituais de Verdade</h2>
            <p className="text-muted text-xl max-w-2xl mx-auto">Resultados garantidos com a força de Tranca Ruas das Almas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10 }}
                className="bg-dark/50 border border-gold/20 p-10 rounded-sm hover:border-gold transition-all group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl text-gold mb-4 font-secondary">{service.title}</h3>
                <p className="text-bone/80 text-lg mb-8 leading-relaxed">{service.desc}</p>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${service.msg}`}
                  className="text-blood font-secondary flex items-center gap-2 hover:text-gold transition-colors text-lg"
                >
                  Fazer este trabalho agora <ArrowRight size={20} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- States Section (SEO Pages) --- */}
      <section id="estados" className="py-32 px-4 bg-dark/95 border-y border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-4xl text-gold mb-8">Atendimento em Todo o Brasil</h2>
              <p className="text-muted text-lg mb-8">Selecione seu estado para ver as cidades atendidas com amarração amorosa e trabalhos espirituais.</p>
              <div className="flex flex-col gap-4">
                {STATES.map((state, i) => (
                  <button
                    key={state.name}
                    onClick={() => setActiveTab(i)}
                    className={`text-left p-4 border-l-4 transition-all font-secondary tracking-widest ${activeTab === i ? 'bg-blood/10 border-blood text-gold' : 'border-gold/10 text-muted hover:bg-gold/5'}`}
                  >
                    {state.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:w-2/3 bg-dark p-8 md:p-12 border border-gold/10 rounded-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-3xl text-gold mb-6">Amarração Amorosa em {STATES[activeTab].name}</h2>
                  <p className="text-bone/80 text-lg mb-8 leading-relaxed">
                    Realizamos amarração amorosa poderosa e trabalhos de Exu para todas as cidades de {STATES[activeTab].name}. 
                    Atendimento à distância com a mesma força do presencial. Traga seu amor de volta hoje mesmo.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
                    {STATES[activeTab].cities.map(city => (
                      <div key={city} className="flex items-center gap-2 text-muted hover:text-gold transition-colors cursor-pointer">
                        <MapPin size={14} className="text-blood" />
                        <span className="text-sm">{city}</span>
                      </div>
                    ))}
                  </div>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${STATES[activeTab].msg}`}
                    className="inline-flex items-center gap-3 bg-gold text-dark px-8 py-4 rounded-sm font-secondary tracking-widest hover:bg-white transition-all shadow-xl"
                  >
                    <MessageCircle size={20} /> Falar com Especialista em {STATES[activeTab].name}
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contato" className="py-32 px-4 bg-dark">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl text-gold mb-8">Trabalho Espiritual Urgente</h2>
            <p className="text-bone/80 text-xl mb-12 leading-relaxed">
              Não sofra mais. Seus caminhos podem ser abertos hoje. Atendimento 100% sigiloso e seguro. 
              Especialista em casos impossíveis.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-blood/20 rounded-full flex items-center justify-center text-blood"><Phone size={32} /></div>
                <div>
                  <p className="text-muted text-sm uppercase tracking-widest">WhatsApp 24h</p>
                  <p className="text-2xl font-secondary text-bone">(41) 99686-5804</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center text-gold"><Clock size={32} /></div>
                <div>
                  <p className="text-muted text-sm uppercase tracking-widest">Atendimento</p>
                  <p className="text-2xl font-secondary text-bone">Segunda a Sábado — 8h às 22h</p>
                </div>
              </div>
            </div>
            <img 
              src="https://filhodeogum.com/imagens/casa-de-seu-tranca-ruas-brasil.png" 
              className="mt-16 rounded-sm opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Brasil Espiritual"
            />
          </div>

          <div className="bg-dark/50 p-8 md:p-12 border border-gold/20 rounded-sm">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-secondary uppercase tracking-widest text-gold">Nome Completo</label>
                <input 
                  type="text" required
                  className="w-full bg-dark border border-gold/20 p-4 focus:border-gold outline-none text-bone"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-secondary uppercase tracking-widest text-gold">WhatsApp</label>
                  <input 
                    type="tel" required
                    className="w-full bg-dark border border-gold/20 p-4 focus:border-gold outline-none text-bone"
                    value={formData.tel}
                    onChange={e => setFormData({...formData, tel: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-secondary uppercase tracking-widest text-gold">Estado</label>
                  <select 
                    required
                    className="w-full bg-dark border border-gold/20 p-4 focus:border-gold outline-none text-bone appearance-none"
                    value={formData.state}
                    onChange={e => setFormData({...formData, state: e.target.value})}
                  >
                    <option value="">Selecione...</option>
                    {STATES.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-secondary uppercase tracking-widest text-gold">Serviço</label>
                <select 
                  required
                  className="w-full bg-dark border border-gold/20 p-4 focus:border-gold outline-none text-bone appearance-none"
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Selecione...</option>
                  {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  <option value="Outro">Outro assunto</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-secondary uppercase tracking-widest text-gold">Sua Situação</label>
                <textarea 
                  rows={4} required
                  className="w-full bg-dark border border-gold/20 p-4 focus:border-gold outline-none text-bone resize-none"
                  value={formData.desc}
                  onChange={e => setFormData({...formData, desc: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blood hover:bg-red-700 text-white py-6 font-secondary tracking-widest uppercase transition-all shadow-xl"
              >
                📩 Consultar Tranca Ruas agora
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-black py-20 px-4 border-t border-gold/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-display text-gold mb-8">⚜ Casa de Seu Tranca Ruas</div>
          <div className="flex flex-wrap justify-center gap-8 font-secondary text-xs uppercase tracking-widest mb-16">
            {['Início', 'Serviços', 'Sobre', 'Estados', 'Contato'].map(item => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="hover:text-gold transition-colors">{item}</button>
            ))}
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
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-[10px] font-bold animate-pulse">1</span>
        </a>
      </div>
    </div>
  );
}
