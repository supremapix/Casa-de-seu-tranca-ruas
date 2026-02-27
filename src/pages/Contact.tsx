import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, Clock, MessageCircle, MapPin } from 'lucide-react';

const WHATSAPP_NUMBER = "5541996865804";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', tel: '', state: '', service: '', desc: '' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Consulta pelo site*%0ANome: ${formData.name}%0ATelefone: ${formData.tel}%0AEstado: ${formData.state}%0AServiço: ${formData.service}%0ASituação: ${formData.desc}%0AUTM: pagina_contato`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-dark min-h-screen py-20 px-4">
      <Helmet>
        <title>Contato | Casa de Seu Tranca Ruas</title>
        <meta name="description" content="Entre em contato com a Casa de Seu Tranca Ruas. Atendimento 24h via WhatsApp para consultas espirituais e amarrações amorosas." />
        <link rel="canonical" href="https://www.casadeseutrancaruas.info/contato" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-7xl text-gold mb-6">Fale Conosco</h1>
          <p className="text-muted text-xl max-w-2xl mx-auto">
            Não sofra em silêncio. A solução para o seu problema está a uma mensagem de distância.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <div className="space-y-12">
              <div className="flex items-center gap-8 group">
                <div className="w-20 h-20 bg-blood/20 rounded-full flex items-center justify-center text-neon-red group-hover:scale-110 transition-transform">
                  <Phone size={40} />
                </div>
                <div>
                  <p className="text-muted text-sm uppercase tracking-widest mb-1">WhatsApp 24h</p>
                  <p className="text-3xl font-secondary text-bone">(41) 99686-5804</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <Clock size={40} />
                </div>
                <div>
                  <p className="text-muted text-sm uppercase tracking-widest mb-1">Horário de Atendimento</p>
                  <p className="text-3xl font-secondary text-bone">Segunda a Sábado — 8h às 22h</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-20 h-20 bg-blood/20 rounded-full flex items-center justify-center text-neon-red group-hover:scale-110 transition-transform">
                  <MapPin size={40} />
                </div>
                <div>
                  <p className="text-muted text-sm uppercase tracking-widest mb-1">Localização</p>
                  <p className="text-3xl font-secondary text-bone">Atendimento em Todo o Brasil</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-8 border border-gold/10 bg-dark/50 rounded-sm">
              <h3 className="text-2xl text-gold mb-6 font-secondary">Sigilo e Segurança</h3>
              <p className="text-bone/70 leading-relaxed">
                Garantimos 100% de sigilo em todas as consultas e trabalhos realizados. Sua identidade e seus problemas são tratados com o máximo respeito e discrição.
              </p>
            </div>
          </div>

          <div className="bg-dark/50 p-8 md:p-12 border border-gold/20 rounded-sm shadow-2xl">
            <h2 className="text-3xl text-gold mb-10 font-secondary">Envie sua Mensagem</h2>
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-secondary uppercase tracking-widest text-gold">Seu Nome</label>
                <input 
                  type="text" required
                  className="w-full bg-dark border border-gold/20 p-5 focus:border-neon-red outline-none text-bone transition-all"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-secondary uppercase tracking-widest text-gold">WhatsApp</label>
                  <input 
                    type="tel" required
                    className="w-full bg-dark border border-gold/20 p-5 focus:border-neon-red outline-none text-bone transition-all"
                    value={formData.tel}
                    onChange={e => setFormData({...formData, tel: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-secondary uppercase tracking-widest text-gold">Estado</label>
                  <input 
                    type="text" required
                    className="w-full bg-dark border border-gold/20 p-5 focus:border-neon-red outline-none text-bone transition-all"
                    placeholder="Ex: PR, SP, RJ..."
                    value={formData.state}
                    onChange={e => setFormData({...formData, state: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-secondary uppercase tracking-widest text-gold">Assunto</label>
                <select 
                  required
                  className="w-full bg-dark border border-gold/20 p-5 focus:border-neon-red outline-none text-bone appearance-none transition-all"
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Selecione um trabalho...</option>
                  <option value="Amarração Amorosa">Amarração Amorosa</option>
                  <option value="Ebó para Dinheiro">Ebó para Dinheiro</option>
                  <option value="Limpeza Espiritual">Limpeza Espiritual</option>
                  <option value="Abertura de Caminhos">Abertura de Caminhos</option>
                  <option value="Outro">Outro Assunto</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-secondary uppercase tracking-widest text-gold">Sua Situação</label>
                <textarea 
                  rows={5} required
                  className="w-full bg-dark border border-gold/20 p-5 focus:border-neon-red outline-none text-bone resize-none transition-all"
                  placeholder="Conte brevemente o que está acontecendo..."
                  value={formData.desc}
                  onChange={e => setFormData({...formData, desc: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-neon-red text-white py-6 font-secondary tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(255,26,26,0.4)] hover:brightness-125"
              >
                📩 Enviar para Tranca Ruas
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
