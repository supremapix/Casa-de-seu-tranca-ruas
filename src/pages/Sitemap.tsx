import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet';

const STATES = [
  { name: "Rio Grande do Sul", slug: "rs", cities: ["Porto Alegre", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande", "Alvorada", "Passo Fundo", "Sapucaia do Sul", "Uruguaiana", "Santa Cruz do Sul", "Cachoeirinha"] },
  { name: "Bahia", slug: "ba", cities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Juazeiro", "Lauro de Freitas", "Ilhéus", "Jequié", "Teixeira de Freitas", "Alagoinhas", "Barreiras", "Porto Seguro", "Simões Filho", "Paulo Afonso"] },
  { name: "Rio de Janeiro", slug: "rj", cities: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói", "Belford Roxo", "Campos dos Goytacazes", "São João de Meriti", "Petrópolis", "Volta Redonda", "Macaé", "Magé", "Itaboraí", "Mesquita", "Nova Friburgo"] },
  { name: "Maranhão", slug: "ma", cities: ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias", "Codó", "Paço do Lumiar", "Açailândia", "Bacabal", "Balsas", "Santa Inês", "Pinheiro", "Chapadinha", "Buriticupu", "Grajaú"] },
  { name: "Goiás e DF", slug: "go-df", cities: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia", "Águas Lindas de Goiás", "Valparaíso de Goiás", "Trindade", "Formosa", "Novo Gama", "Senador Canedo", "Itumbiara", "Catalão", "Jataí", "Brasília"] }
];

export const Sitemap = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <Helmet>
        <title>Mapa do Site | Casa de Seu Tranca Ruas</title>
        <meta name="description" content="Navegue por todas as páginas e cidades atendidas pela Casa de Seu Tranca Ruas." />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl text-gold mb-6">Mapa do Site</h1>
        <p className="text-muted text-xl">Encontre rapidamente o serviço ou a cidade que você procura.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <section>
          <h2 className="text-2xl text-neon-red mb-6 font-secondary uppercase tracking-widest">Páginas Principais</h2>
          <ul className="space-y-4 font-body text-lg">
            <li><Link to="/" className="hover:text-gold transition-colors">Início</Link></li>
            <li><Link to="/servicos" className="hover:text-gold transition-colors">Serviços</Link></li>
            <li><Link to="/sobre" className="hover:text-gold transition-colors">Sobre Nós</Link></li>
            <li><Link to="/estados" className="hover:text-gold transition-colors">Estados Atendidos</Link></li>
            <li><Link to="/contato" className="hover:text-gold transition-colors">Contato</Link></li>
          </ul>
        </section>

        {STATES.map(state => (
          <section key={state.slug}>
            <h2 className="text-2xl text-neon-red mb-6 font-secondary uppercase tracking-widest">{state.name}</h2>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link to={`/estados/${state.slug}`} className="text-gold font-bold hover:underline block mb-2">
                  Ver tudo em {state.name}
                </Link>
              </li>
              {state.cities.map(city => (
                <li key={city}>
                  <Link 
                    to={`/estados/${state.slug}/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-gold transition-colors opacity-70 hover:opacity-100"
                  >
                    Amarração Amorosa em {city}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};
