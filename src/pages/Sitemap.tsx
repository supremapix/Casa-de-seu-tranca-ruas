import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const STATES = [
  { name: "Rio Grande do Sul", slug: "rs", cities: ["Porto Alegre", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande", "Alvorada", "Passo Fundo", "Sapucaia do Sul", "Uruguaiana", "Santa Cruz do Sul", "Cachoeirinha"] },
  { name: "Bahia", slug: "ba", cities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Juazeiro", "Lauro de Freitas", "Ilhéus", "Jequié", "Teixeira de Freitas", "Alagoinhas", "Barreiras", "Porto Seguro", "Simões Filho", "Paulo Afonso"] },
  { name: "Rio de Janeiro", slug: "rj", cities: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói", "Belford Roxo", "Campos dos Goytacazes", "São João de Meriti", "Petrópolis", "Volta Redonda", "Macaé", "Magé", "Itaboraí", "Mesquita", "Nova Friburgo"] },
  { name: "Maranhão", slug: "ma", cities: ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias", "Codó", "Paço do Lumiar", "Açailândia", "Bacabal", "Balsas", "Santa Inês", "Pinheiro", "Chapadinha", "Buriticupu", "Grajaú"] },
  { name: "Goiás e DF", slug: "go-df", cities: ["Abadia de Goiás", "Abadiânia", "Acreúna", "Adelandia", "Água Fria de Goiás", "Água Limpa", "Águas Lindas de Goiás", "Alexânia", "Aloândia", "Alô Brasil", "Alto Horizonte", "Alto Paraíso de Goiás", "Alvorada do Norte", "Amaralina", "Americano do Brasil", "Amorinópolis", "Amorrantina", "Anápolis", "Anhanguera", "Anicuns", "Aparecida de Goiânia", "Aparecida do Rio Docê", "Aporé", "Aragarças", "Araguaína", "Araguapaz", "Arenópolis", "Aruanã", "Aurilândia", "Avelinópolis", "Baliza", "Barro Alto", "Barra do Garças", "Barro de Santa Luzia", "Barra do São João", "Barra Longa", "Barreiras do Oeste", "Barro Preto", "Bela Vista de Goiás", "Bom Jardim de Goiás", "Bom Jesus de Goiás", "Bonfinópolis", "Bonópolis", "Brazabrantes", "Britânia", "Buritinópolis", "Buru", "Cachoeira Alta", "Cachoeira de Goiás", "Cachoeira Dourada", "Caçu", "Caiapônia", "Caiçara", "Caldas Novas", "Caldazinha", "Campestre de Goiás", "Campinaçu", "Campinorte", "Campo Alegre de Goiás", "Campo Limpo de Goiás", "Campos Belos", "Campos Verdes", "Carmo do Rio Verde", "Castelândia", "Catalão", "Caturaí", "Cavalcante", "Ceres", "Cezarina", "Chapadão do Céu", "Cidade Ocidental", "Cocalzinho de Goiás", "Colinas do Sul", "Córrego do Ouro", "Corumbá de Goiás", "Corumbaíba", "Cristalina", "Cristianópolis", "Crixás", "Cromínia", "Cumari", "Damianópolis", "Damolândia", "Davinópolis", "Diorama", "Divinópolis de Goiás", "Doverlândia", "Edealina", "Edéia", "Estrela do Norte", "Faina", "Fazenda Nova", "Firminópolis", "Flores de Goiás", "Formosa", "Formoso", "Goiandira", "Goianésia", "Goianésia do Pará", "Goianira", "Goiás", "Goianápolis", "Gombi", "Gouvelândia", "Guapó", "Guarani de Goiás", "Guarinos", "Heitorabai", "Hidrolândia", "Hidrolina", "Iaciara", "Inaciolândia", "Indiara", "Inhumas", "Ipameri", "Ipiranga de Goiás", "Iporá", "Israelândia", "Ithumirim", "Itumbiara", "Ivolândia", "Jandaia", "Jaraguá", "Jataí", "Jaupaci", "Jesúpolis", "Joviânia", "Jussara", "Lagoa Santa", "Leal Moreira", "Luziânia", "Mairipotaba", "Mangaratiba", "Mantena", "Matrinchã", "Maurilândia", "Mimoso de Goiás", "Minaçu", "Mineiros", "Moiporá", "Monte Alegre de Goiás", "Montes Claros de Goiás", "Montividiu", "Montividiu do Norte", "Morrinhos", "Morro Agudo de Goiás", "Mossâmedes", "Mozarlândia", "Mundo Novo", "Mutunópolis", "Nazário", "Nerópolis", "Niquelândia", "Nova América", "Nova Aurora", "Nova Crixás", "Nova Glória", "Nova Iguaçu de Goiás", "Nova Roma", "Nova Veneza", "Novo Brasil", "Novo Gama", "Novo Planalto", "Orizona", "Ouro Verde de Goiás", "Ouvidor", "Padre Bernardo", "Palestina de Goiás", "Palmeiras de Goiás", "Palmelo", "Palmas de Monte Alto", "Paraúna", "Perolândia", "Petrolina de Goiás", "Pilar de Goiás", "Pirenópolis", "Pires do Rio", "Planaltina", "Pontalina", "Porangatu", "Porteirão", "Porto Alegre do Norte", "Porto Nacional", "Porteirinha de Goiás", "Posse", "Professor Jamil", "Quirinópolis", "Rialma", "Rianápolis", "Rio Quente", "Rio Verde", "Rubiataba", "Sanclerlândia", "Santa Bárbara de Goiás", "Santa Cruz de Goiás", "Santa Fé de Goiás", "Santa Helena de Goiás", "Santa Isabel", "Santa Rita do Araguaia", "Santa Rita do Novo Destino", "Santa Rosa de Goiás", "Santa Tereza de Goiás", "Santa Terezinha de Goiás", "Santo Antônio da Barra", "Santo Antônio de Goiás", "Santo Antônio do Descoberto", "São Domingos", "São Francisco de Goiás", "São João da Paraúna", "São João d'Aliança", "São Luís de Montes Belos", "São Miguel do Araguaia", "São Miguel do Passa Quatro", "São Patrício", "São Simão", "Senador Canedo", "Serranópolis", "Silvânia", "Simolândia", "Sítio d'Abadia", "Taquaral de Goiás", "Teresina de Goiás", "Terezópolis de Goiás", "Três Ranchos", "Trindade", "Trombas", "Turvânia", "Turvelândia", "Uirapuru", "Uruaçu", "Uruana", "Urutaí", "Valparaíso de Goiás", "Varjão", "Vianópolis", "Vicentinópolis", "Vila Boa", "Vila Propício", "Brasília", "Ceilândia"] }
];

export const Sitemap = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <Helmet>
        <title>Mapa do Site | Casa de Seu Tranca Ruas</title>
        <meta name="description" content="Navegue por todas as páginas e cidades atendidas pela Casa de Seu Tranca Ruas." />
        <link rel="canonical" href="https://www.casadeseutrancaruas.info/mapa-do-site" />
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
