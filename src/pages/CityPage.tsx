import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { MapPin, MessageCircle, Star, Shield, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = "5541996865804";

const STATES_DATA: Record<string, { name: string }> = {
  "rs": { name: "Rio Grande do Sul" },
  "ba": { name: "Bahia" },
  "rj": { name: "Rio de Janeiro" },
  "ma": { name: "Maranhão" },
  "go-df": { name: "Goiás e DF" },
  "pr": { name: "Paraná" }
};

const MOCK_TESTIMONIALS = [
  { name: "Ricardo S.", text: "Minha vida estava um caos completo. Depois da consulta em {city}, Seu Tranca Ruas abriu meus caminhos e hoje sou um novo homem.", stars: 5 },
  { name: "Ana Paula L.", text: "Gratidão eterna! Meu marido voltou para casa em menos de uma semana. O trabalho em {city} é realmente poderoso.", stars: 5 },
  { name: "Marcos O.", text: "Eu não acreditava mais, mas a força de Tranca Ruas me provou o contrário. Prosperidade total agora.", stars: 5 },
  { name: "Juliana C.", text: "Atendimento impecável e resultados rápidos. Se você busca ajuda em {city}, este é o lugar certo.", stars: 5 },
  { name: "Felipe S.", text: "A amarração amorosa mudou meu destino. Ela voltou carinhosa e focada apenas em mim. Obrigado!", stars: 5 },
  { name: "Beatriz L.", text: "Limpeza espiritual profunda. Senti o peso saindo das minhas costas logo após o ritual em {city}.", stars: 5 },
  { name: "Gustavo P.", text: "Justiça foi feita. Quem tentou me derrubar no trabalho em {city} acabou saindo e eu fui promovido.", stars: 5 },
  { name: "Camila R.", text: "O melhor investimento que já fiz pela minha paz. Seu Tranca Ruas é justo e implacável.", stars: 5 },
  { name: "Thiago S.", text: "Meus negócios em {city} estavam parados. Hoje não dou conta de tanto cliente. Axé!", stars: 5 },
  { name: "Larissa A.", text: "Recuperei minha dignidade e meu amor. O descarrego foi a chave para minha nova vida.", stars: 5 },
  { name: "Bruno F.", text: "Trabalho sério e com fundamento. Recomendo a todos que precisam de uma solução real em {city}.", stars: 5 },
  { name: "Letícia G.", text: "A união de casais aqui é diferente. Sinto que o amor foi restaurado pela raiz.", stars: 5 },
  { name: "André R.", text: "Proteção total. Inveja nenhuma me pega mais depois do patuá de Seu Tranca Ruas.", stars: 5 },
  { name: "Fernanda C.", text: "Estava sofrendo por um ex que nem me olhava. Hoje ele não para de me mandar mensagem.", stars: 5 },
  { name: "Lucas M.", text: "Abertura de caminhos imediata. Consegui o emprego dos meus sonhos em {city} em 3 dias.", stars: 5 },
  { name: "Mariana R.", text: "Sempre fui cética, mas os resultados em {city} me deixaram sem palavras. É real.", stars: 5 },
  { name: "Gabriel C.", text: "Obrigado por me tirar do fundo do poço. A força de Tranca Ruas é a luz no fim do túnel.", stars: 5 },
  { name: "Amanda B.", text: "Fidelidade e paixão. Meu relacionamento nunca esteve tão sólido e feliz.", stars: 5 },
  { name: "Rafael X.", text: "Afastamento de rivais que funciona de verdade. Minha paz voltou.", stars: 5 },
  { name: "Vanessa M.", text: "Consulta reveladora. Soube de coisas que ninguém sabia e recebi o guia correto.", stars: 5 },
  { name: "Rodrigo T.", text: "Ebó de prosperidade que traz fartura. Minha mesa nunca mais ficou vazia.", stars: 5 },
  { name: "Patrícia K.", text: "Seu Tranca Ruas das Almas é o dono da minha fé. Gratidão por tudo em {city}.", stars: 5 }
];

export const CityPage = () => {
  const { stateSlug, citySlug } = useParams();
  const state = STATES_DATA[stateSlug || ""];
  const city = citySlug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  if (!state || !city) return <div className="py-20 text-center text-gold">Cidade não encontrada.</div>;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Casa de Seu Tranca Ruas - ${city}`,
    "description": `Amarração amorosa poderosa e trabalhos espirituais em ${city}, ${state.name}. Traga seu amor de volta com a força de Tranca Ruas das Almas.`,
    "url": window.location.href,
    "telephone": "+5541996865804",
    "image": "https://filhodeogum.com/imagens/casa-de-seu-tranca-ruas.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state.name,
      "addressCountry": "BR"
    },
    "areaServed": {
      "@type": "City",
      "name": city
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Espirituais",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Amarração Amorosa Definitiva",
            "description": "Trabalho espiritual para unir casais e trazer o amor de volta."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Abertura de Caminhos",
            "description": "Remoção de obstáculos financeiros e profissionais."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza Espiritual",
            "description": "Descarrego e proteção contra inveja e demandas."
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

  const sections = [
    {
      title: `Amarração Amorosa em ${city}`,
      text: `Se você mora em ${city} e está passando por momentos difíceis no relacionamento, saiba que a Casa de Seu Tranca Ruas é especialista em trazer a felicidade de volta. A amarração amorosa realizada com os fundamentos de Seu Tranca Ruas das Almas é reconhecida por sua eficácia e rapidez em toda a região de ${state.name}. Atendemos moradores de ${city} com total sigilo e dedicação, garantindo que o seu caso seja tratado com a seriedade que merece. A força de Exu Tranca Ruas é capaz de quebrar as barreiras que impedem o seu amor de florescer, trazendo a pessoa amada de volta com domínio, paixão e fidelidade absoluta. Não importa quão difícil pareça a situação em ${city}, nossa amarração é definitiva e poderosa.`
    },
    {
      title: `Trabalhos Espirituais em ${city}`,
      text: `Nossa casa espiritual tem forte atuação em ${city}, oferecendo desde consultas de búzios e cartas até rituais complexos de limpeza e abertura de caminhos. Se você sente que sua vida está travada ou que energias negativas estão atrapalhando seu progresso em ${city}, venha fazer uma consulta e descobrir como as entidades podem te ajudar. A cidade de ${city} é um polo de grande energia, e nossos rituais são adaptados para as necessidades específicas de quem vive aqui. Seja para problemas de saúde, financeiros ou familiares, temos o fundamento necessário para te guiar rumo à vitória e à paz de espírito que você tanto busca em ${state.name}.`
    },
    {
      title: `A Força de Seu Tranca Ruas em ${state.name}`,
      text: `Seu Tranca Ruas das Almas é o senhor dos caminhos, aquele que abre as portas fechadas e protege seus filhos contra as demandas. Em ${city}, realizamos trabalhos específicos para proteção contra inveja, olho gordo e feitiçarias que podem estar minando sua felicidade. Não deixe que o mal te alcance, fortaleça seu axé com quem realmente conhece a quimbanda e tem anos de experiência atendendo a comunidade de ${city}. Nossa linhagem é direta e nossos rituais possuem a força ancestral necessária para resolver os problemas mais complexos que afligem os moradores de ${state.name}.`
    },
    {
      title: `Ebó para Dinheiro e Prosperidade em ${city}`,
      text: `Muitos comerciantes e moradores de ${city} buscam nossa ajuda para prosperar financeiramente. O ebó para dinheiro é um ritual sagrado que remove as travas da sua vida econômica, atraindo clientes, oportunidades e fartura para o seu lar ou negócio em ${city}. Se o dinheiro entra e sai sem você ver, ou se as dívidas estão acumulando em ${state.name}, é hora de agir espiritualmente e pedir a intercessão de quem domina as encruzilhadas do sucesso. A prosperidade é um fluxo de energia, e nós sabemos como desbloquear esse fluxo para que você nunca mais passe por necessidades em ${city}.`
    },
    {
      title: `União de Casais e Volta do Ex em ${city}`,
      text: `O sofrimento por amor é um dos mais dolorosos que o ser humano pode enfrentar. Na Casa de Seu Tranca Ruas, entendemos a dor de quem perdeu a pessoa amada em ${city}. Nossos rituais de união de casais são feitos para restaurar o carinho, o desejo e a cumplicidade que foram perdidos. Traga seu amor de volta hoje mesmo em ${city}, sem humilhações e com resultados reais que podem ser sentidos em poucos dias. Se você está em ${city} e não aguenta mais a solidão, permita que a força de Tranca Ruas refaça os laços que o destino ou a inveja tentaram separar em ${state.name}.`
    },
    {
      title: `Limpeza Espiritual Profunda em ${city}`,
      text: `Sente o ambiente da sua casa ou trabalho em ${city} pesado? A limpeza espiritual é essencial para remover larvas astrais e energias de baixa vibração que se acumulam com o tempo. Com ervas sagradas, defumações e a força de Exu, purificamos sua vida em ${city} para que você possa caminhar com leveza e clareza mental. Uma alma limpa atrai coisas boas, e moradores de ${city} sabem que um descarrego bem feito é o primeiro passo para qualquer conquista duraduram em ${state.name}.`
    },
    {
      title: `Afastamento de Rivais em ${city}`,
      text: `Tem alguém atrapalhando sua vida em ${city}? Seja no amor ou no trabalho, o afastamento de rivais é um trabalho justo para quem busca paz e tranquilidade. Não permitimos que pessoas mal-intencionadas destruam o que você construiu com tanto esforço em ${city}. Seu Tranca Ruas coloca cada um no seu devido lugar, neutralizando as ações de quem quer te ver cair em ${state.name}. Proteja sua felicidade e sua família contra aqueles que agem nas sombras em ${city}.`
    },
    {
      title: `Consulta Espiritual Online para ${city}`,
      text: `Atendemos moradores de ${city} de forma personalizada e discreta. Você pode agendar sua consulta pelo WhatsApp e receber as orientações necessárias para resolver seus problemas sem precisar se deslocar. A espiritualidade não tem fronteiras, e a força de Tranca Ruas chega onde você estiver em ${city}. Nossas consultas revelam a verdade e apontam o caminho exato para a sua superação em ${state.name}, seja através de búzios, cartas ou vidência direta.`
    },
    {
      title: `Pacto de Riqueza e Sucesso em ${city}`,
      text: `Para quem busca grandes transformações e não se contenta com o pouco, o pacto de riqueza é um compromisso sério com a prosperidade. Em ${city}, orientamos aqueles que desejam subir de patamar na vida, sempre com respeito e fundamento espiritual. O sucesso é um direito de quem tem coragem de buscar e sabe que a força de Exu é o motor que impulsiona as grandes conquistas materiais em ${city} e em todo o ${state.name}.`
    },
    {
      title: `Proteção para Comércios em ${city}`,
      text: `Seu negócio em ${city} está sofrendo com inveja ou queda repentina de vendas? Protegemos estabelecimentos comerciais com assentamentos e rituais de blindagem espiritual. Garanta que as portas do seu sucesso em ${city} permaneçam abertas e que a energia do dinheiro flua livremente, afastando qualquer demanda que possa ter sido enviada por concorrentes ou pessoas invejosas em ${state.name}.`
    },
    {
      title: `Tratamento de Vícios e Depressão Espiritual`,
      text: `Muitas vezes, problemas que parecem apenas psicológicos têm raízes espirituais profundas. Em ${city}, auxiliamos no tratamento espiritual de obsessões que causam desânimo, tristeza profunda e vícios. A força de Exu traz a vitalidade e a vontade de viver de volta para quem se sente perdido em ${city}. Recupere sua alegria e sua força vital com a ajuda de quem entende os mistérios da alma humana atendendo em ${state.name}.`
    },
    {
      title: `Abertura de Caminhos Amorosos em ${city}`,
      text: `Se você está solteiro(a) e não consegue encontrar ninguém especial em ${city}, ou se seus relacionamentos não duram, pode haver um bloqueio energético. A abertura de caminhos amorosos te torna mais atraente e magnético(a), atraindo pessoas compatíveis com sua felicidade e removendo as amarras que te impedem de ser amado(a) em ${city} e região.`
    },
    {
      title: `Justiça de Xangô e Força de Exu em ${city}`,
      text: `Problemas na justiça ou injustiças no trabalho em ${city}? Trabalhamos com a linha de justiça para que a verdade prevaleça em sua vida. Seu Tranca Ruas é o guardião da ordem e não aceita que seus protegidos sejam injustiçados. Se você está em ${city} e precisa de uma solução para causas impossíveis, conte com a força de quem domina as leis do mundo espiritual em ${state.name}.`
    },
    {
      title: `Desenvolvimento Mediúnico em ${city}`,
      text: `Para quem sente o chamado da espiritualidade em ${city}, oferecemos orientação segura e desenvolvimento mediúnico. Entender sua mediunidade é o primeiro passo para o equilíbrio emocional e espiritual. Venha conversar com quem tem décadas de experiência atendendo a comunidade de ${city} e saiba como canalizar sua força para o bem em ${state.name}.`
    },
    {
      title: `Rituais de Sedução e Domínio em ${city}`,
      text: `Quer ter o controle da situação amorosa em ${city}? Nossos rituais de sedução aumentam seu poder pessoal e seu brilho. Seja notado(a) e desejado(a) por quem você quer, com a ajuda das Pombagiras e Exus que regem a paixão. Domine seus caminhos afetivos em ${city} com a sabedoria ancestral da quimbanda.`
    },
    {
      title: `Descarrego de Ambientes em ${city}`,
      text: `Brigas constantes e desentendimentos em casa em ${city}? Isso pode ser energia negativa acumulada. O descarrego de ambientes remove as discórdias e traz a harmonia familiar de volta para seu lar em ${city}. Um lar abençoado é a base para o sucesso em todas as outras áreas da vida em ${state.name}.`
    },
    {
      title: `Trabalhos para Concursos e Empregos em ${city}`,
      text: `Buscando estabilidade e crescimento em ${city}? Fazemos trabalhos para clareza mental em provas de concursos e abertura de portas em empresas de ${city}. O conhecimento aliado à força espiritual de Seu Tranca Ruas é uma combinação imbatível para quem quer vencer profissionalmente em ${state.name}.`
    },
    {
      title: `Blindagem Espiritual de Veículos em ${city}`,
      text: `Proteja seu carro, moto ou caminhão em ${city} contra acidentes, roubos e inveja. Realizamos rituais de consagração que criam um escudo protetor em seus bens materiais, garantindo que suas viagens por ${city} e região sejam sempre seguras e sob a guarda do Senhor das Encruzilhadas.`
    },
    {
      title: `Cura Espiritual e Energização em ${city}`,
      text: `Recupere suas energias e sua disposição em ${city}. Nossos rituais de passes e energização restauram o corpo e a alma, trazendo vigor e saúde para enfrentar os desafios do dia a dia em ${city}. Sinta a força da terra e do axé renovando suas células e sua mente em ${state.name}.`
    },
    {
      title: `Patuás e Amuletos Consagrados em ${city}`,
      text: `Leve a proteção de Seu Tranca Ruas sempre com você em ${city}. Confeccionamos patuás personalizados para amor, dinheiro, saúde e proteção, carregados com o axé da nossa casa e preparados especificamente para a sua vibração. Moradores de ${city} confiam em nossos amuletos há gerações.`
    },
    {
      title: `O Mistério das Encruzilhadas em ${city}`,
      text: `Entenda por que a encruzilhada é o ponto de maior poder e mistério. Em ${city}, ensinamos como respeitar e utilizar essa energia sagrada para o seu benefício, sempre com a guia de um mestre experiente que conhece os segredos de Seu Tranca Ruas das Almas em ${state.name}.`
    },
    {
      title: `Gratidão e Resultados em ${city}`,
      text: `Nossa maior recompensa é ver o sorriso e a paz de quem teve seu problema resolvido em ${city}. Milhares de depoimentos e histórias de sucesso comprovam que a Casa de Seu Tranca Ruas é a referência absoluta em ${state.name} para quem busca resultados de verdade na espiritualidade.`
    }
  ];

  return (
    <div className="bg-dark min-h-screen">
      <EnhancedSEO 
        title={`Amarração Amorosa em ${city} - ${state.name} | Casa de Seu Tranca Ruas`}
        description={`Procurando amarração amorosa em ${city}? A Casa de Seu Tranca Ruas realiza trabalhos espirituais poderosos para trazer o ex de volta e abrir caminhos em ${city}, ${state.name}.`}
        canonical={`/estados/${stateSlug}/${citySlug}`}
        schemaData={schemaData}
      />

      {/* Hero */}
      <section className="relative py-32 px-4 border-b border-gold/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
          <img src="https://filhodeogum.com/imagens/tranca-rua.png" alt="" className="w-full h-full object-contain object-right" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-center gap-2 text-neon-red mb-6 font-secondary tracking-widest uppercase">
              <MapPin size={20} /> {city} - {state.name}
            </div>
            <h1 className="text-4xl md:text-7xl text-gold mb-8 leading-tight">
              Amarração Amorosa em {city}
            </h1>
            <p className="text-bone/80 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
              Se você mora em {city} e busca resultados reais no amor e na vida espiritual, a força de Seu Tranca Ruas das Almas está aqui para te ajudar.
            </p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Vim+pelo+site+-+Cidade:+${city}`}
              className="inline-flex items-center gap-3 bg-blood text-white px-10 py-5 rounded-sm font-secondary tracking-widest hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(163,0,0,0.5)]"
            >
              <MessageCircle size={24} /> Consultar em {city}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Video Highlight Section */}
      <section className="py-24 px-4 bg-dark/40 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[9/16] max-w-[350px] mx-auto rounded-xl overflow-hidden border border-gold/30 shadow-[0_0_50px_rgba(212,175,55,0.1)]"
            >
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/olerJm-kQsY?autoplay=1&mute=1&loop=1&playlist=olerJm-kQsY" 
                title="A Força de Seu Tranca Ruas"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-dark/80 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl text-gold mb-6 font-display">A Chave que Abre Seus Caminhos em {city}</h2>
              <p className="text-bone/70 text-lg mb-8 leading-relaxed">
                Assista e sinta a energia que move nossa casa. Seu Tranca Ruas não apenas promete, ele executa. Em {city}, centenas de pessoas já tiveram suas vidas transformadas através dos nossos rituais sagrados.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-gold">
                  <CheckCircle2 className="text-neon-red" /> Atendimento 100% Sigiloso
                </div>
                <div className="flex items-center gap-3 text-gold">
                  <CheckCircle2 className="text-neon-red" /> Resultados em até 24 Horas
                </div>
                <div className="flex items-center gap-3 text-gold">
                  <CheckCircle2 className="text-neon-red" /> Fundamento Real de Quimbanda
                </div>
              </div>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Quero+mudar+minha+vida+em+${city}`}
                className="inline-block bg-neon-red text-white px-12 py-5 rounded-sm font-secondary tracking-widest hover:brightness-125 transition-all shadow-[0_0_25px_rgba(255,26,26,0.4)]"
              >
                Agendar Consulta Agora
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 px-4 relative">
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 opacity-10 pointer-events-none">
          <img src="https://filhodeogum.com/imagens/casa-de-seu-tranca-rua.png" alt="" className="w-full h-full object-contain object-left" />
        </div>
        <div className="max-w-4xl mx-auto space-y-20">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark/50 p-8 border border-gold/10 rounded-sm"
            >
              <h2 className="text-2xl md:text-3xl text-gold mb-6 font-display">{section.title}</h2>
              <p className="text-bone/80 text-lg leading-relaxed">{section.text}</p>
              {index % 3 === 0 && (
                <div className="mt-8">
                  <img 
                    src="https://filhodeogum.com/imagens/casa-de-seu-tranca-ruas.png" 
                    alt={section.title} 
                    className="w-full h-64 object-cover rounded-sm border border-gold/20 opacity-60"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-dark/60">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-dark/50 border border-gold/20 p-8 rounded-sm">
            <h3 className="text-2xl text-gold mb-6 font-secondary text-center">Depoimentos em {state.name}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {MOCK_TESTIMONIALS.map((t, i) => (
                <div key={i} className="border-b border-gold/10 pb-6 last:border-0">
                  <div className="flex gap-1 mb-2">
                    {[...Array(t.stars)].map((_, s) => <Star key={s} size={14} className="fill-gold text-gold" />)}
                  </div>
                  <p className="text-bone/70 italic mb-2">"{t.text.replace('{city}', city)}"</p>
                  <p className="text-gold text-sm font-secondary">- {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-blood/5 border-t border-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl text-gold mb-8">Não espere mais para ser feliz em {city}</h2>
          <p className="text-bone/80 text-xl mb-12">
            A felicidade está a um clique de distância. Seu Tranca Ruas das Almas tem as chaves para abrir seus caminhos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Vim+pelo+site+-+Urgente+${city}`}
              className="bg-neon-red text-white px-10 py-5 rounded-sm font-secondary tracking-widest hover:brightness-125 transition-all shadow-[0_0_20px_#FF1A1A]"
            >
              Falar com o Pai de Santo
            </a>
            <Link 
              to="/estados"
              className="border border-gold text-gold px-10 py-5 rounded-sm font-secondary tracking-widest hover:bg-gold hover:text-dark transition-all"
            >
              Outras Cidades
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
