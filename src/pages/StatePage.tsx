import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { MapPin, MessageCircle, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = "5541996865804";

const STATES_DATA: Record<string, { name: string, cities: string[], msg: string }> = {
  "rs": {
    name: "Rio Grande do Sul",
    cities: ["Porto Alegre", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande", "Alvorada", "Passo Fundo", "Sapucaia do Sul", "Uruguaiana", "Santa Cruz do Sul", "Cachoeirinha"],
    msg: "Vim pelo site - Estado: Rio Grande do Sul"
  },
  "ba": {
    name: "Bahia",
    cities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Juazeiro", "Lauro de Freitas", "Ilhéus", "Jequié", "Teixeira de Freitas", "Alagoinhas", "Barreiras", "Porto Seguro", "Simões Filho", "Paulo Afonso"],
    msg: "Vim pelo site - Estado: Bahia"
  },
  "rj": {
    name: "Rio de Janeiro",
    cities: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói", "Belford Roxo", "Campos dos Goytacazes", "São João de Meriti", "Petrópolis", "Volta Redonda", "Macaé", "Magé", "Itaboraí", "Mesquita", "Nova Friburgo"],
    msg: "Vim pelo site - Estado: Rio de Janeiro"
  },
  "ma": {
    name: "Maranhão",
    cities: ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias", "Codó", "Paço do Lumiar", "Açailândia", "Bacabal", "Balsas", "Santa Inês", "Pinheiro", "Chapadinha", "Buriticupu", "Grajaú"],
    msg: "Vim pelo site - Estado: Maranhão"
  },
  "go-df": {
    name: "Goiás e DF",
    cities: ["Abadia de Goiás", "Abadiânia", "Acreúna", "Adelandia", "Água Fria de Goiás", "Água Limpa", "Águas Lindas de Goiás", "Alexânia", "Aloândia", "Alô Brasil", "Alto Horizonte", "Alto Paraíso de Goiás", "Alvorada do Norte", "Amaralina", "Americano do Brasil", "Amorinópolis", "Amorrantina", "Anápolis", "Anhanguera", "Anicuns", "Aparecida de Goiânia", "Aparecida do Rio Docê", "Aporé", "Aragarças", "Araguaína", "Araguapaz", "Arenópolis", "Aruanã", "Aurilândia", "Avelinópolis", "Baliza", "Barro Alto", "Barra do Garças", "Barro de Santa Luzia", "Barra do São João", "Barra Longa", "Barreiras do Oeste", "Barro Preto", "Bela Vista de Goiás", "Bom Jardim de Goiás", "Bom Jesus de Goiás", "Bonfinópolis", "Bonópolis", "Brazabrantes", "Britânia", "Buritinópolis", "Buru", "Cachoeira Alta", "Cachoeira de Goiás", "Cachoeira Dourada", "Caçu", "Caiapônia", "Caiçara", "Caldas Novas", "Caldazinha", "Campestre de Goiás", "Campinaçu", "Campinorte", "Campo Alegre de Goiás", "Campo Limpo de Goiás", "Campos Belos", "Campos Verdes", "Carmo do Rio Verde", "Castelândia", "Catalão", "Caturaí", "Cavalcante", "Ceres", "Cezarina", "Chapadão do Céu", "Cidade Ocidental", "Cocalzinho de Goiás", "Colinas do Sul", "Córrego do Ouro", "Corumbá de Goiás", "Corumbaíba", "Cristalina", "Cristianópolis", "Crixás", "Cromínia", "Cumari", "Damianópolis", "Damolândia", "Davinópolis", "Diorama", "Divinópolis de Goiás", "Doverlândia", "Edealina", "Edéia", "Estrela do Norte", "Faina", "Fazenda Nova", "Firminópolis", "Flores de Goiás", "Formosa", "Formoso", "Goiandira", "Goianésia", "Goianésia do Pará", "Goianira", "Goiás", "Goianápolis", "Gombi", "Gouvelândia", "Guapó", "Guarani de Goiás", "Guarinos", "Heitorabai", "Hidrolândia", "Hidrolina", "Iaciara", "Inaciolândia", "Indiara", "Inhumas", "Ipameri", "Ipiranga de Goiás", "Iporá", "Israelândia", "Ithumirim", "Itumbiara", "Ivolândia", "Jandaia", "Jaraguá", "Jataí", "Jaupaci", "Jesúpolis", "Joviânia", "Jussara", "Lagoa Santa", "Leal Moreira", "Luziânia", "Mairipotaba", "Mangaratiba", "Mantena", "Matrinchã", "Maurilândia", "Mimoso de Goiás", "Minaçu", "Mineiros", "Moiporá", "Monte Alegre de Goiás", "Montes Claros de Goiás", "Montividiu", "Montividiu do Norte", "Morrinhos", "Morro Agudo de Goiás", "Mossâmedes", "Mozarlândia", "Mundo Novo", "Mutunópolis", "Nazário", "Nerópolis", "Niquelândia", "Nova América", "Nova Aurora", "Nova Crixás", "Nova Glória", "Nova Iguaçu de Goiás", "Nova Roma", "Nova Veneza", "Novo Brasil", "Novo Gama", "Novo Planalto", "Orizona", "Ouro Verde de Goiás", "Ouvidor", "Padre Bernardo", "Palestina de Goiás", "Palmeiras de Goiás", "Palmelo", "Palmas de Monte Alto", "Paraúna", "Perolândia", "Petrolina de Goiás", "Pilar de Goiás", "Pirenópolis", "Pires do Rio", "Planaltina", "Pontalina", "Porangatu", "Porteirão", "Porto Alegre do Norte", "Porto Nacional", "Porteirinha de Goiás", "Posse", "Professor Jamil", "Quirinópolis", "Rialma", "Rianápolis", "Rio Quente", "Rio Verde", "Rubiataba", "Sanclerlândia", "Santa Bárbara de Goiás", "Santa Cruz de Goiás", "Santa Fé de Goiás", "Santa Helena de Goiás", "Santa Isabel", "Santa Rita do Araguaia", "Santa Rita do Novo Destino", "Santa Rosa de Goiás", "Santa Tereza de Goiás", "Santa Terezinha de Goiás", "Santo Antônio da Barra", "Santo Antônio de Goiás", "Santo Antônio do Descoberto", "São Domingos", "São Francisco de Goiás", "São João da Paraúna", "São João d'Aliança", "São Luís de Montes Belos", "São Miguel do Araguaia", "São Miguel do Passa Quatro", "São Patrício", "São Simão", "Senador Canedo", "Serranópolis", "Silvânia", "Simolândia", "Sítio d'Abadia", "Taquaral de Goiás", "Teresina de Goiás", "Terezópolis de Goiás", "Três Ranchos", "Trindade", "Trombas", "Turvânia", "Turvelândia", "Uirapuru", "Uruaçu", "Uruana", "Urutaí", "Valparaíso de Goiás", "Varjão", "Vianópolis", "Vicentinópolis", "Vila Boa", "Vila Propício", "Brasília", "Ceilândia"],
    msg: "Vim pelo site - Estado: Goiás e DF"
  }
};

export const StatePage = () => {
  const { stateSlug } = useParams();
  const state = STATES_DATA[stateSlug || ""];

  if (!state) return <div className="py-20 text-center text-gold">Estado não encontrado.</div>;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Casa de Seu Tranca Ruas - ${state.name}`,
    "description": `Trabalhos espirituais e amarração amorosa em todo o estado de ${state.name}. Atendimento em Porto Alegre, Salvador, Rio de Janeiro e mais.`,
    "url": window.location.href,
    "telephone": "+5541996865804",
    "image": "https://www.casadeseutrancaruas.info/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": state.name,
      "addressCountry": "BR"
    },
    "areaServed": {
      "@type": "State",
      "name": state.name
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Espirituais",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Amarração Amorosa Definitiva"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Abertura de Caminhos"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "205"
    }
  };

  return (
    <div className="bg-dark min-h-screen py-20 px-4">
      <Helmet>
        <title>Amarração Amorosa em {state.name} | Casa de Seu Tranca Ruas</title>
        <meta name="description" content={`Trabalhos espirituais e amarração amorosa em todo o estado de ${state.name}. Atendimento em Porto Alegre, Salvador, Rio de Janeiro e mais.`} />
        <link rel="canonical" href={`https://www.casadeseutrancaruas.info/estados/${stateSlug}`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-2 text-neon-red mb-6 font-secondary tracking-widest uppercase">
            <MapPin size={20} /> Atendimento em {state.name}
          </div>
          <h1 className="text-4xl md:text-7xl text-gold mb-8">Amarração Amorosa em {state.name}</h1>
          <p className="text-bone/80 text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            Realizamos trabalhos espirituais de alta potência para todas as cidades de {state.name}. 
            Traga seu amor de volta e abra seus caminhos com quem entende de verdade.
          </p>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${state.msg}`}
            className="inline-flex items-center gap-3 bg-blood text-white px-10 py-5 rounded-sm font-secondary tracking-widest hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(163,0,0,0.5)]"
          >
            <MessageCircle size={24} /> Consultar Especialista de {state.name}
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {state.cities.map(city => (
            <Link 
              key={city}
              to={`/estados/${stateSlug}/${city.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-dark/50 border border-gold/10 p-6 rounded-sm hover:border-neon-red hover:bg-gold/5 transition-all flex items-center justify-between group"
            >
              <span className="text-bone group-hover:text-gold transition-colors">{city}</span>
              <ArrowRight size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
