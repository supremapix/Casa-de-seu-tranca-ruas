import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const STATES = [
  { name: "Rio Grande do Sul", slug: "rs", cities: ["Porto Alegre", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande", "Alvorada", "Passo Fundo", "Sapucaia do Sul", "Uruguaiana", "Santa Cruz do Sul", "Cachoeirinha"] },
  { name: "Bahia", slug: "ba", cities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Juazeiro", "Lauro de Freitas", "Ilhéus", "Jequié", "Teixeira de Freitas", "Alagoinhas", "Barreiras", "Porto Seguro", "Simões Filho", "Paulo Afonso"] },
  { name: "Rio de Janeiro", slug: "rj", cities: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói", "Belford Roxo", "Campos dos Goytacazes", "São João de Meriti", "Petrópolis", "Volta Redonda", "Macaé", "Magé", "Itaboraí", "Mesquita", "Nova Friburgo"] },
  { name: "Maranhão", slug: "ma", cities: ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias", "Codó", "Paço do Lumiar", "Açailândia", "Bacabal", "Balsas", "Santa Inês", "Pinheiro", "Chapadinha", "Buriticupu", "Grajaú"] },
  { name: "Goiás e DF", slug: "go-df", cities: ["Abadia de Goiás", "Abadiânia", "Acreúna", "Adelandia", "Água Fria de Goiás", "Água Limpa", "Águas Lindas de Goiás", "Alexânia", "Aloândia", "Alô Brasil", "Alto Horizonte", "Alto Paraíso de Goiás", "Alvorada do Norte", "Amaralina", "Americano do Brasil", "Amorinópolis", "Amorrantina", "Anápolis", "Anhanguera", "Anicuns", "Aparecida de Goiânia", "Aparecida do Rio Docê", "Aporé", "Aragarças", "Araguaína", "Araguapaz", "Arenópolis", "Aruanã", "Aurilândia", "Avelinópolis", "Baliza", "Barro Alto", "Barra do Garças", "Barro de Santa Luzia", "Barra do São João", "Barra Longa", "Barreiras do Oeste", "Barro Preto", "Bela Vista de Goiás", "Bom Jardim de Goiás", "Bom Jesus de Goiás", "Bonfinópolis", "Bonópolis", "Brazabrantes", "Britânia", "Buritinópolis", "Buru", "Cachoeira Alta", "Cachoeira de Goiás", "Cachoeira Dourada", "Caçu", "Caiapônia", "Caiçara", "Caldas Novas", "Caldazinha", "Campestre de Goiás", "Campinaçu", "Campinaçu", "Campinorte", "Campo Alegre de Goiás", "Campo Limpo de Goiás", "Campos Belos", "Campos Verdes", "Carmo do Rio Verde", "Castelândia", "Catalão", "Caturaí", "Cavalcante", "Ceres", "Cezarina", "Chapadão do Céu", "Cidade Ocidental", "Cocalzinho de Goiás", "Colinas do Sul", "Córrego do Ouro", "Corumbá de Goiás", "Corumbaíba", "Cristalina", "Cristianópolis", "Crixás", "Cromínia", "Cumari", "Damianópolis", "Damolândia", "Davinópolis", "Diorama", "Divinópolis de Goiás", "Doverlândia", "Edealina", "Edéia", "Estrela do Norte", "Faina", "Fazenda Nova", "Firminópolis", "Flores de Goiás", "Formosa", "Formoso", "Goiandira", "Goianésia", "Goianésia do Pará", "Goianira", "Goiás", "Goianápolis", "Gombi", "Gouvelândia", "Guapó", "Guarani de Goiás", "Guarinos", "Heitorabai", "Hidrolândia", "Hidrolina", "Iaciara", "Inaciolândia", "Indiara", "Inhumas", "Ipameri", "Ipiranga de Goiás", "Iporá", "Israelândia", "Ithumirim", "Itumbiara", "Ivolândia", "Jandaia", "Jaraguá", "Jataí", "Jaupaci", "Jesúpolis", "Joviânia", "Jussara", "Lagoa Santa", "Leal Moreira", "Luziânia", "Mairipotaba", "Mangaratiba", "Mantena", "Matrinchã", "Maurilândia", "Mimoso de Goiás", "Minaçu", "Mineiros", "Moiporá", "Monte Alegre de Goiás", "Montes Claros de Goiás", "Montividiu", "Montividiu do Norte", "Morrinhos", "Morro Agudo de Goiás", "Mossâmedes", "Mozarlândia", "Mundo Novo", "Mutunópolis", "Nazário", "Nerópolis", "Niquelândia", "Nova América", "Nova Aurora", "Nova Crixás", "Nova Glória", "Nova Iguaçu de Goiás", "Nova Roma", "Nova Veneza", "Novo Brasil", "Novo Gama", "Novo Planalto", "Orizona", "Ouro Verde de Goiás", "Ouvidor", "Padre Bernardo", "Palestina de Goiás", "Palmeiras de Goiás", "Palmelo", "Palmas de Monte Alto", "Paraúna", "Perolândia", "Petrolina de Goiás", "Pilar de Goiás", "Pirenópolis", "Pires do Rio", "Planaltina", "Pontalina", "Porangatu", "Porteirão", "Porto Alegre do Norte", "Porto Nacional", "Porteirinha de Goiás", "Posse", "Professor Jamil", "Quirinópolis", "Rialma", "Rianápolis", "Rio Quente", "Rio Verde", "Rubiataba", "Sanclerlândia", "Santa Bárbara de Goiás", "Santa Cruz de Goiás", "Santa Fé de Goiás", "Santa Helena de Goiás", "Santa Isabel", "Santa Rita do Araguaia", "Santa Rita do Novo Destino", "Santa Rosa de Goiás", "Santa Tereza de Goiás", "Santa Terezinha de Goiás", "Santo Antônio da Barra", "Santo Antônio de Goiás", "Santo Antônio do Descoberto", "São Domingos", "São Francisco de Goiás", "São João da Paraúna", "São João d'Aliança", "São Luís de Montes Belos", "São Miguel do Araguaia", "São Miguel do Passa Quatro", "São Patrício", "São Simão", "Senador Canedo", "Serranópolis", "Silvânia", "Simolândia", "Sítio d'Abadia", "Taquaral de Goiás", "Teresina de Goiás", "Terezópolis de Goiás", "Três Ranchos", "Trindade", "Trombas", "Turvânia", "Turvelândia", "Uirapuru", "Uruaçu", "Uruana", "Urutaí", "Valparaíso de Goiás", "Varjão", "Vianópolis", "Vicentinópolis", "Vila Boa", "Vila Propício", "Brasília", "Ceilândia"] },
  { name: "Paraná", slug: "pr", cities: ["Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", "Campo Magro", "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", "Fazenda Rio Grande", "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", "Quatro Barras", "Quitandinha", "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná", "Curitiba"] },
];

const NEIGHBORHOODS = [
  { slug: "vila-parolin", name: "Vila Parolin" },
  { slug: "vila-torres", name: "Vila Torres" },
  { slug: "jardim-schaffer", name: "Jardim Schaffer" },
  { slug: "vila-sabara", name: "Vila Sabará" },
  { slug: "boqueirao-de-baixo", name: "Boqueirão de Baixo" },
  { slug: "boqueirao-de-cima", name: "Boqueirão de Cima" },
  { slug: "tangua", name: "Tanguá" },
  { slug: "vila-zumbi", name: "Vila Zumbi" },
  { slug: "abranches-de-baixo", name: "Abranches de Baixo" },
  { slug: "abranches-de-cima", name: "Abranches de Cima" },
  { slug: "vila-nossa-senhora-da-luz", name: "Vila Nossa Senhora da Luz" },
  { slug: "vila-tecnologica", name: "Vila Tecnológica" },
  { slug: "vila-oficinas", name: "Vila Oficinas" },
  { slug: "vila-fanny", name: "Vila Fanny" },
  { slug: "vila-hauer", name: "Vila Hauer" },
  { slug: "batel-soho", name: "Batel Soho" },
  { slug: "alto-da-rua-xv", name: "Alto da Rua XV" },
  { slug: "cic-norte", name: "CIC Norte" },
  { slug: "cic-central", name: "CIC Central" },
  { slug: "cic-sul", name: "CIC Sul" },
  { slug: "vila-guaira", name: "Vila Guaíra" },
  { slug: "centro-historico", name: "Centro Histórico" },
  { slug: "ecoville", name: "Ecoville" },
  { slug: "carmo-abranches", name: "Carmo Abranches" },
  { slug: "agua-verde", name: "Água Verde" },
  { slug: "ahu", name: "Ahú (Alto da Glória)" },
  { slug: "alto-boqueirao", name: "Alto Boqueirão" },
  { slug: "alto-da-gloria", name: "Alto da Glória" },
  { slug: "alto-da-xv", name: "Alto da XV" },
  { slug: "atuba", name: "Atuba" },
  { slug: "augusta", name: "Augusta" },
  { slug: "bacacheri", name: "Bacacheri" },
  { slug: "bairro-alto", name: "Bairro Alto" },
  { slug: "barreirinha", name: "Barreirinha" },
  { slug: "batel", name: "Batel" },
  { slug: "bigorrilho", name: "Bigorrilho (Champagnat)" },
  { slug: "boa-vista", name: "Boa Vista" },
  { slug: "bom-retiro", name: "Bom Retiro" },
  { slug: "boqueirao", name: "Boqueirão" },
  { slug: "butiatuvinha", name: "Butiatuvinha" },
  { slug: "cabral", name: "Cabral" },
  { slug: "cachoeira", name: "Cachoeira" },
  { slug: "cajuru", name: "Cajuru" },
  { slug: "campina-do-siqueira", name: "Campina do Siqueira" },
  { slug: "campo-comprido", name: "Campo Comprido" },
  { slug: "campo-de-santana", name: "Campo de Santana" },
  { slug: "capao-da-imbuia", name: "Capão da Imbuia" },
  { slug: "capao-raso", name: "Capão Raso" },
  { slug: "cascatinha", name: "Cascatinha" },
  { slug: "caximba", name: "Caximba" },
  { slug: "centro", name: "Centro" },
  { slug: "centro-civico", name: "Centro Cívico" },
  { slug: "cic", name: "Cidade Industrial de Curitiba (CIC)" },
  { slug: "cristo-rei", name: "Cristo Rei" },
  { slug: "fanny", name: "Fanny" },
  { slug: "fazendinha", name: "Fazendinha" },
  { slug: "ganchinho", name: "Ganchinho" },
  { slug: "guabirotuba", name: "Guabirotuba" },
  { slug: "guaira", name: "Guaíra" },
  { slug: "hauer", name: "Hauer" },
  { slug: "hugo-lange", name: "Hugo Lange" },
  { slug: "jardim-botanico", name: "Jardim Botânico" },
  { slug: "jardim-das-americas", name: "Jardim das Américas" },
  { slug: "jardim-social", name: "Jardim Social" },
  { slug: "juveve", name: "Juvevê" },
  { slug: "lamenha-pequena", name: "Lamenha Pequena" },
  { slug: "lindoia", name: "Lindóia" },
  { slug: "merces", name: "Mercês" },
  { slug: "mossungue", name: "Mossunguê" },
  { slug: "novo-mundo", name: "Novo Mundo" },
  { slug: "orleans", name: "Orleans" },
  { slug: "parolin", name: "Parolin" },
  { slug: "pilarzinho", name: "Pilarzinho" },
  { slug: "pinheirinho", name: "Pinheirinho" },
  { slug: "portao", name: "Portão" },
  { slug: "prado-velho", name: "Prado Velho" },
  { slug: "reboucas", name: "Rebouças" },
  { slug: "riviera", name: "Riviera" },
  { slug: "santa-candida", name: "Santa Cândida" },
  { slug: "santa-felicidade", name: "Santa Felicidade" },
  { slug: "santa-quiteria", name: "Santa Quitéria" },
  { slug: "santo-inacio", name: "Santo Inácio" },
  { slug: "sao-braz", name: "São Braz" },
  { slug: "sao-francisco", name: "São Francisco" },
  { slug: "sao-joao", name: "São João" },
  { slug: "sao-lourenco", name: "São Lourenço" },
  { slug: "sao-miguel", name: "São Miguel" },
  { slug: "vila-pantanal", name: "Vila Pantanal" },
  { slug: "seminario", name: "Seminário" },
  { slug: "sitio-cercado", name: "Sítio Cercado" },
  { slug: "taboao", name: "Taboão" },
  { slug: "taruma", name: "Tarumã" },
  { slug: "tatuquara", name: "Tatuquara" },
  { slug: "tingui", name: "Tingui" },
  { slug: "uberaba", name: "Uberaba" },
  { slug: "umbara", name: "Umbará" },
  { slug: "vila-izabel", name: "Vila Izabel" },
  { slug: "vista-alegre", name: "Vista Alegre" },
  { slug: "xaxim", name: "Xaxim" },
  { slug: "santa-quiteria-velha", name: "Santa Quitéria Velha" },
  { slug: "portao-velho", name: "Portão Velho" },
  { slug: "guaira-velho", name: "Guaíra Velho" },
  { slug: "uberaba-de-cima", name: "Uberaba de Cima" },
  { slug: "uberaba-de-baixo", name: "Uberaba de Baixo" },
  { slug: "sao-braz-velho", name: "São Braz Velho" },
  { slug: "vila-verde", name: "Vila Verde" },
  { slug: "vila-barigui", name: "Vila Barigui" },
  { slug: "caiua", name: "Caiuá" },
  { slug: "xaxim-velho", name: "Xaxim Velho" },
  { slug: "fazendinha-portao", name: "Fazendinha-Portão" },
  { slug: "campo-comprido-velho", name: "Campo Comprido Velho" },
  { slug: "bacacheri-velho", name: "Bacacheri Velho" },
  { slug: "capao-da-imbuia-velho", name: "Capão da Imbuia Velho" },
  { slug: "pinheirinho-velho", name: "Pinheirinho Velho" },
  { slug: "vila-sao-pedro", name: "Vila São Pedro (Uberaba)" },
  { slug: "vila-osternack", name: "Vila Osternack (Sítio Cercado)" },
  { slug: "conjunto-caiua", name: "Conjunto Caiuá (CIC)" },
  { slug: "conjunto-parigot-de-souza", name: "Conjunto Parigot de Souza (CIC)" },
  { slug: "vila-reno", name: "Vila Reno (CIC)" },
  { slug: "vila-audi", name: "Vila Audi (CIC)" },
  { slug: "vila-vitoria-regia", name: "Vila Vitória Régia" },
  { slug: "vila-santa-helena", name: "Vila Santa Helena" },
  { slug: "vila-conquista", name: "Vila Conquista" },
  { slug: "vila-osvaldo-cruz", name: "Vila Osvaldo Cruz I e II" },
  { slug: "vila-itatiaia", name: "Vila Itatiaia" },
  { slug: "vila-atenas", name: "Vila Atenas" },
  { slug: "vila-sandra", name: "Vila Sandra" },
  { slug: "jardim-gabineto", name: "Jardim Gabineto" },
  { slug: "belo-ar", name: "Belo Ar" },
  { slug: "colina-verde", name: "Colina Verde" },
  { slug: "gralha-azul", name: "Gralha Azul" },
  { slug: "barro-preto", name: "Barro Preto" }
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

        <section className="md:col-span-2 lg:col-span-4">
          <h2 className="text-2xl text-neon-red mb-6 font-secondary uppercase tracking-widest">Bairros de Curitiba</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 font-body text-xs">
            {NEIGHBORHOODS.map(nb => (
              <li key={nb.slug}>
                <Link 
                  to={`/estados/pr/curitiba/${nb.slug}`}
                  className="hover:text-gold transition-colors opacity-70 hover:opacity-100"
                >
                  {nb.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
