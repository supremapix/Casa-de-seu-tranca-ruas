import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { MapPin, MessageCircle, Star, Shield, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = "5541996865804";

const NEIGHBORHOODS_DATA: Record<string, string> = {
  "vila-parolin": "Vila Parolin",
  "vila-torres": "Vila Torres",
  "jardim-schaffer": "Jardim Schaffer",
  "vila-sabara": "Vila Sabará",
  "boqueirao-de-baixo": "Boqueirão de Baixo",
  "boqueirao-de-cima": "Boqueirão de Cima",
  "tangua": "Tanguá",
  "vila-zumbi": "Vila Zumbi",
  "abranches-de-baixo": "Abranches de Baixo",
  "abranches-de-cima": "Abranches de Cima",
  "vila-nossa-senhora-da-luz": "Vila Nossa Senhora da Luz",
  "vila-tecnologica": "Vila Tecnológica",
  "vila-oficinas": "Vila Oficinas",
  "vila-fanny": "Vila Fanny",
  "vila-hauer": "Vila Hauer",
  "batel-soho": "Batel Soho",
  "alto-da-rua-xv": "Alto da Rua XV",
  "cic-norte": "CIC Norte",
  "cic-central": "CIC Central",
  "cic-sul": "CIC Sul",
  "vila-guaira": "Vila Guaíra",
  "centro-historico": "Centro Histórico",
  "ecoville": "Ecoville",
  "carmo-abranches": "Carmo Abranches",
  "agua-verde": "Água Verde",
  "ahu": "Ahú (Alto da Glória)",
  "alto-boqueirao": "Alto Boqueirão",
  "alto-da-gloria": "Alto da Glória",
  "alto-da-xv": "Alto da XV",
  "atuba": "Atuba",
  "augusta": "Augusta",
  "bacacheri": "Bacacheri",
  "bairro-alto": "Bairro Alto",
  "barreirinha": "Barreirinha",
  "batel": "Batel",
  "bigorrilho": "Bigorrilho (Champagnat)",
  "boa-vista": "Boa Vista",
  "bom-retiro": "Bom Retiro",
  "boqueirao": "Boqueirão",
  "butiatuvinha": "Butiatuvinha",
  "cabral": "Cabral",
  "cachoeira": "Cachoeira",
  "cajuru": "Cajuru",
  "campina-do-siqueira": "Campina do Siqueira",
  "campo-comprido": "Campo Comprido",
  "campo-de-santana": "Campo de Santana",
  "capao-da-imbuia": "Capão da Imbuia",
  "capao-raso": "Capão Raso",
  "cascatinha": "Cascatinha",
  "caximba": "Caximba",
  "centro": "Centro",
  "centro-civico": "Centro Cívico",
  "cic": "Cidade Industrial de Curitiba (CIC)",
  "cristo-rei": "Cristo Rei",
  "fanny": "Fanny",
  "fazendinha": "Fazendinha",
  "ganchinho": "Ganchinho",
  "guabirotuba": "Guabirotuba",
  "guaira": "Guaíra",
  "hauer": "Hauer",
  "hugo-lange": "Hugo Lange",
  "jardim-botanico": "Jardim Botânico",
  "jardim-das-americas": "Jardim das Américas",
  "jardim-social": "Jardim Social",
  "juveve": "Juvevê",
  "lamenha-pequena": "Lamenha Pequena",
  "lindoia": "Lindóia",
  "merces": "Mercês",
  "mossungue": "Mossunguê",
  "novo-mundo": "Novo Mundo",
  "orleans": "Orleans",
  "parolin": "Parolin",
  "pilarzinho": "Pilarzinho",
  "pinheirinho": "Pinheirinho",
  "portao": "Portão",
  "prado-velho": "Prado Velho",
  "reboucas": "Rebouças",
  "riviera": "Riviera",
  "santa-candida": "Santa Cândida",
  "santa-felicidade": "Santa Felicidade",
  "santa-quiteria": "Santa Quitéria",
  "santo-inacio": "Santo Inácio",
  "sao-braz": "São Braz",
  "sao-francisco": "São Francisco",
  "sao-joao": "São João",
  "sao-lourenco": "São Lourenço",
  "sao-miguel": "São Miguel",
  "vila-pantanal": "Vila Pantanal",
  "seminario": "Seminário",
  "sitio-cercado": "Sítio Cercado",
  "taboao": "Taboão",
  "taruma": "Tarumã",
  "tatuquara": "Tatuquara",
  "tingui": "Tingui",
  "uberaba": "Uberaba",
  "umbara": "Umbará",
  "vila-izabel": "Vila Izabel",
  "vista-alegre": "Vista Alegre",
  "xaxim": "Xaxim",
  "santa-quiteria-velha": "Santa Quitéria Velha",
  "portao-velho": "Portão Velho",
  "guaira-velho": "Guaíra Velho",
  "uberaba-de-cima": "Uberaba de Cima",
  "uberaba-de-baixo": "Uberaba de Baixo",
  "sao-braz-velho": "São Braz Velho",
  "vila-verde": "Vila Verde",
  "vila-barigui": "Vila Barigui",
  "caiua": "Caiuá",
  "xaxim-velho": "Xaxim Velho",
  "fazendinha-portao": "Fazendinha-Portão",
  "campo-comprido-velho": "Campo Comprido Velho",
  "bacacheri-velho": "Bacacheri Velho",
  "capao-da-imbuia-velho": "Capão da Imbuia Velho",
  "pinheirinho-velho": "Pinheirinho Velho",
  "vila-sao-pedro": "Vila São Pedro (Uberaba)",
  "vila-osternack": "Vila Osternack (Sítio Cercado)",
  "conjunto-caiua": "Conjunto Caiuá (CIC)",
  "conjunto-parigot-de-souza": "Conjunto Parigot de Souza (CIC)",
  "vila-reno": "Vila Reno (CIC)",
  "vila-audi": "Vila Audi (CIC)",
  "vila-vitoria-regia": "Vila Vitória Régia",
  "vila-santa-helena": "Vila Santa Helena",
  "vila-conquista": "Vila Conquista",
  "vila-osvaldo-cruz": "Vila Osvaldo Cruz I e II",
  "vila-itatiaia": "Vila Itatiaia",
  "vila-atenas": "Vila Atenas",
  "vila-sandra": "Vila Sandra",
  "jardim-gabineto": "Jardim Gabineto",
  "belo-ar": "Belo Ar",
  "colina-verde": "Colina Verde",
  "gralha-azul": "Gralha Azul",
  "barro-preto": "Barro Preto"
};

export const NeighborhoodPage = () => {
  const { neighborhoodSlug } = useParams();
  const neighborhoodName = NEIGHBORHOODS_DATA[neighborhoodSlug || ""];

  if (!neighborhoodName) return <div className="py-20 text-center text-gold">Bairro não encontrado em Curitiba.</div>;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Casa de Seu Tranca Ruas - ${neighborhoodName}`,
    "description": `Amarração amorosa poderosa e trabalhos espirituais no bairro ${neighborhoodName}, Curitiba. Traga seu amor de volta com a força de Tranca Ruas das Almas.`,
    "url": window.location.href,
    "telephone": "+5541996865804",
    "image": "https://filhodeogum.com/imagens/casa-de-seu-tranca-ruas.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": neighborhoodName,
      "addressRegion": "Curitiba",
      "addressCountry": "BR"
    },
    "areaServed": {
      "@type": "Neighborhood",
      "name": neighborhoodName
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "205"
    }
  };

  const sections = [
    {
      title: `Amarração Amorosa em ${neighborhoodName}`,
      text: `Se você mora no bairro ${neighborhoodName} em Curitiba e está passando por momentos difíceis no relacionamento, saiba que a Casa de Seu Tranca Ruas é especialista em trazer a felicidade de volta. A amarração amorosa realizada com os fundamentos de Seu Tranca Ruas das Almas é reconhecida por sua eficácia e rapidez em toda a capital paranaense. Atendemos moradores de toda a região do ${neighborhoodName} com total sigilo e dedicação, garantindo que o seu caso seja tratado com a seriedade que merece. A força de Exu Tranca Ruas é capaz de quebrar as barreiras que impedem o seu amor de florescer, trazendo a pessoa amada de volta com domínio, paixão e fidelidade absoluta.`
    },
    {
      title: `Trabalhos Espirituais no ${neighborhoodName}`,
      text: `Nossa casa espiritual tem forte atuação no ${neighborhoodName}, oferecendo desde consultas de búzios e cartas até rituais complexos de limpeza e abertura de caminhos. Se você sente que sua vida está travada ou que energias negativas estão atrapalhando seu progresso no ${neighborhoodName}, venha fazer uma consulta e descobrir como as entidades podem te ajudar. O bairro ${neighborhoodName} é uma área de grande energia, e nossos rituais são adaptados para as necessidades específicas de quem vive aqui. Seja para problemas de saúde, financeiros ou familiares, temos o fundamento necessário para te guiar rumo à vitória.`
    },
    {
      title: `A Força de Seu Tranca Ruas em Curitiba`,
      text: `Seu Tranca Ruas das Almas é o senhor dos caminhos, aquele que abre as portas fechadas e protege seus filhos contra as demandas. No bairro ${neighborhoodName}, realizamos trabalhos específicos para proteção contra inveja, olho gordo e feitiçarias que podem estar minando sua felicidade. Não deixe que o mal te alcance, fortaleça seu axé com quem realmente conhece a quimbanda e tem anos de experiência atendendo a comunidade de Curitiba. Nossa linhagem é direta e nossos rituais possuem a força ancestral necessária para resolver os problemas mais complexos que afligem os moradores do ${neighborhoodName}.`
    },
    {
      title: `Ebó para Dinheiro e Prosperidade no ${neighborhoodName}`,
      text: `Muitos comerciantes e moradores do ${neighborhoodName} buscam nossa ajuda para prosperar financeiramente. O ebó para dinheiro é um ritual sagrado que remove as travas da sua vida econômica, atraindo clientes, oportunidades e fartura para o seu lar ou negócio. Se o dinheiro entra e sai sem você ver, ou se as dívidas estão acumulando no ${neighborhoodName}, é hora de agir espiritualmente e pedir a intercessão de quem domina as encruzilhadas do sucesso. A prosperidade é um fluxo de energia, e nós sabemos como desbloquear esse fluxo para que você nunca mais passe por necessidades em Curitiba.`
    },
    {
      title: `União de Casais e Volta do Ex no ${neighborhoodName}`,
      text: `O sofrimento por amor é um dos mais dolorosos que o ser humano pode enfrentar. Na Casa de Seu Tranca Ruas, entendemos a dor de quem perdeu a pessoa amada no ${neighborhoodName}. Nossos rituais de união de casais são feitos para restaurar o carinho, o desejo e a cumplicidade que foram perdidos. Traga seu amor de volta hoje mesmo, sem humilhações e com resultados reais que podem ser sentidos em poucos dias. Se você está no ${neighborhoodName} e não aguenta mais a solidão, permita que a força de Tranca Ruas refaça os laços que o destino ou a inveja tentaram separar.`
    },
    {
      title: `Limpeza Espiritual Profunda em Curitiba`,
      text: `Sente o ambiente da sua casa ou trabalho no ${neighborhoodName} pesado? A limpeza espiritual é essencial para remover larvas astrais e energias de baixa vibração que se acumulam com o tempo. Com ervas sagradas, defumações e a força de Exu, purificamos sua vida no ${neighborhoodName} para que você possa caminhar com leveza e clareza mental. Uma alma limpa atrai coisas boas, e moradores de Curitiba sabem que um descarrego bem feito é o primeiro passo para qualquer conquista duradoura.`
    },
    {
      title: `Afastamento de Rivais no ${neighborhoodName}`,
      text: `Tem alguém atrapalhando sua vida no ${neighborhoodName}? Seja no amor ou no trabalho, o afastamento de rivais é um trabalho justo para quem busca paz e tranquilidade. Não permitimos que pessoas mal-intencionadas destruam o que você construiu com tanto esforço no ${neighborhoodName}. Seu Tranca Ruas coloca cada um no seu devido lugar, neutralizando as ações de quem quer te ver cair. Proteja sua felicidade e sua família contra aqueles que agem nas sombras em Curitiba.`
    },
    {
      title: `Consulta Espiritual Online e Presencial para ${neighborhoodName}`,
      text: `Atendemos moradores do ${neighborhoodName} de forma personalizada e discreta. Você pode agendar sua consulta pelo WhatsApp e receber as orientações necessárias para resolver seus problemas sem precisar sair de casa. A espiritualidade não tem fronteiras, e a força de Tranca Ruas chega onde você estiver no ${neighborhoodName}. Nossas consultas revelam a verdade e apontam o caminho exato para a sua superação, seja através de búzios, cartas ou vidência direta.`
    },
    {
      title: `Pacto de Riqueza e Sucesso Financeiro`,
      text: `Para quem busca grandes transformações e não se contenta com o pouco, o pacto de riqueza é um compromisso sério com a prosperidade. No ${neighborhoodName}, orientamos aqueles que desejam subir de patamar na vida, sempre com respeito e fundamento espiritual. O sucesso é um direito de quem tem coragem de buscar e sabe que a força de Exu é o motor que impulsiona as grandes conquistas materiais em Curitiba.`
    },
    {
      title: `Proteção para Comércios no ${neighborhoodName}`,
      text: `Seu negócio no ${neighborhoodName} está sofrendo com inveja ou queda repentina de vendas? Protegemos estabelecimentos comerciais com assentamentos e rituais de blindagem espiritual. Garanta que as portas do seu sucesso no ${neighborhoodName} permaneçam abertas e que a energia do dinheiro flua livremente, afastando qualquer demanda que possa ter sido enviada por concorrentes ou pessoas invejosas em Curitiba.`
    },
    {
      title: `Tratamento de Vícios e Depressão Espiritual`,
      text: `Muitas vezes, problemas que parecem apenas psicológicos têm raízes espirituais profundas. No ${neighborhoodName}, auxiliamos no tratamento espiritual de obsessões que causam desânimo, tristeza profunda e vícios. A força de Exu traz a vitalidade e a vontade de viver de volta para quem se sente perdido no ${neighborhoodName}. Recupere sua alegria e sua força vital com a ajuda de quem entende os mistérios da alma humana.`
    },
    {
      title: `Abertura de Caminhos Amorosos no ${neighborhoodName}`,
      text: `Se você está solteiro(a) e não consegue encontrar ninguém especial no ${neighborhoodName}, ou se seus relacionamentos não duram, pode haver um bloqueio energético. A abertura de caminhos amorosos te torna mais atraente e magnético(a), atraindo pessoas compatíveis com sua felicidade e removendo as amarras que te impedem de ser amado(a) em Curitiba.`
    },
    {
      title: `Justiça de Xangô e Força de Exu no ${neighborhoodName}`,
      text: `Problemas na justiça ou injustiças no trabalho no ${neighborhoodName}? Trabalhamos com a linha de justiça para que a verdade prevaleça em sua vida. Seu Tranca Ruas é o guardião da ordem e não aceita que seus protegidos sejam injustiçados. Se você está no ${neighborhoodName} e precisa de uma solução para causas impossíveis, conte com a força de quem domina as leis do mundo espiritual.`
    },
    {
      title: `Desenvolvimento Mediúnico e Orientação Segura`,
      text: `Para quem sente o chamado da espiritualidade no ${neighborhoodName}, oferecemos orientação segura e desenvolvimento mediúnico. Entender sua mediunidade é o primeiro passo para o equilíbrio emocional e espiritual. Venha conversar com quem tem décadas de experiência atendendo a comunidade de Curitiba e saiba como canalizar sua força para o bem.`
    },
    {
      title: `Rituais de Sedução e Domínio no ${neighborhoodName}`,
      text: `Quer ter o controle da situação amorosa no ${neighborhoodName}? Nossos rituais de sedução aumentam seu poder pessoal e seu brilho. Seja notado(a) e desejado(a) por quem você quer, com a ajuda das Pombagiras e Exus que regem a paixão. Domine seus caminhos afetivos no ${neighborhoodName} com a sabedoria ancestral da quimbanda.`
    },
    {
      title: `Descarrego de Ambientes e Harmonia Familiar`,
      text: `Brigas constantes e desentendimentos em casa no ${neighborhoodName}? Isso pode ser energia negativa acumulada. O descarrego de ambientes remove as discórdias e traz a harmonia familiar de volta para seu lar no ${neighborhoodName}. Um lar abençoado é a base para o sucesso em todas as outras áreas da vida em Curitiba.`
    },
    {
      title: `Trabalhos para Concursos e Sucesso Profissional`,
      text: `Buscando estabilidade e crescimento no ${neighborhoodName}? Fazemos trabalhos para clareza mental em provas de concursos e abertura de portas em empresas de Curitiba. O conhecimento aliado à força espiritual de Seu Tranca Ruas é uma combinação imbatível para quem quer vencer profissionalmente no ${neighborhoodName}.`
    },
    {
      title: `Blindagem Espiritual de Veículos e Viagens`,
      text: `Proteja seu carro, moto ou caminhão no ${neighborhoodName} contra acidentes, roubos e inveja. Realizamos rituais de consagração que criam um escudo protetor em seus bens materiais, garantindo que suas viagens por Curitiba e região sejam sempre seguras e sob a guarda do Senhor das Encruzilhadas.`
    },
    {
      title: `Cura Espiritual e Energização Vital no ${neighborhoodName}`,
      text: `Recupere suas energias e sua disposição no ${neighborhoodName}. Nossos rituais de passes e energização restauram o corpo e a alma, trazendo vigor e saúde para enfrentar os desafios do dia a dia em Curitiba. Sinta a força da terra e do axé renovando suas células e sua mente no ${neighborhoodName}.`
    },
    {
      title: `Patuás e Amuletos Consagrados com Axé`,
      text: `Leve a proteção de Seu Tranca Ruas sempre com você no ${neighborhoodName}. Confeccionamos patuás personalizados para amor, dinheiro, saúde e proteção, carregados com o axé da nossa casa e preparados especificamente para a sua vibração. Moradores de Curitiba confiam em nossos amuletos há gerações.`
    },
    {
      title: `O Mistério das Encruzilhadas no ${neighborhoodName}`,
      text: `Entenda por que a encruzilhada é o ponto de maior poder e mistério. No ${neighborhoodName}, ensinamos como respeitar e utilizar essa energia sagrada para o seu benefício, sempre com a guia de um mestre experiente que conhece os segredos de Seu Tranca Ruas das Almas em Curitiba.`
    },
    {
      title: `Gratidão e Resultados Reais no ${neighborhoodName}`,
      text: `Nossa maior recompensa é ver o sorriso e a paz de quem teve seu problema resolvido no ${neighborhoodName}. Milhares de depoimentos e histórias de sucesso comprovam que a Casa de Seu Tranca Ruas é a referência absoluta em Curitiba para quem busca resultados de verdade na espiritualidade.`
    }
  ];

  return (
    <div className="bg-dark min-h-screen">
      <EnhancedSEO 
        title={`Amarração Amorosa no Bairro ${neighborhoodName} - Curitiba | Casa de Seu Tranca Ruas`}
        description={`Procurando amarração amorosa no bairro ${neighborhoodName}? A Casa de Seu Tranca Ruas realiza trabalhos espirituais poderosos para trazer o ex de volta e abrir caminhos no ${neighborhoodName}, Curitiba.`}
        canonical={`/estados/pr/curitiba/${neighborhoodSlug}`}
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
              <MapPin size={20} /> Curitiba - {neighborhoodName}
            </div>
            <h1 className="text-4xl md:text-7xl text-gold mb-8 leading-tight">
              Amarração Amorosa no {neighborhoodName}
            </h1>
            <p className="text-bone/80 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
              Resultados reais no amor e na vida espiritual para moradores do bairro {neighborhoodName}. A força de Seu Tranca Ruas das Almas abre seus caminhos hoje.
            </p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Vim+pelo+site+-+Bairro:+${neighborhoodName}`}
              className="inline-flex items-center gap-3 bg-blood text-white px-10 py-5 rounded-sm font-secondary tracking-widest hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(163,0,0,0.5)]"
            >
              <MessageCircle size={24} /> Consultar no {neighborhoodName}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Video Highlight */}
      <section className="py-24 px-4 bg-dark/40">
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl text-gold mb-6 font-display">A Chave que Abre Seus Caminhos no {neighborhoodName}</h2>
              <p className="text-bone/70 text-lg mb-8 leading-relaxed">
                Seu Tranca Ruas não apenas promete, ele executa. No bairro {neighborhoodName}, centenas de pessoas já tiveram suas vidas transformadas através dos nossos rituais sagrados.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-gold">
                  <CheckCircle2 className="text-neon-red" /> Atendimento 100% Sigiloso
                </div>
                <div className="flex items-center gap-3 text-gold">
                  <CheckCircle2 className="text-neon-red" /> Resultados Rápidos e Garantidos
                </div>
                <div className="flex items-center gap-3 text-gold">
                  <CheckCircle2 className="text-neon-red" /> Fundamento Real de Quimbanda
                </div>
              </div>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Quero+mudar+minha+vida+no+${neighborhoodName}`}
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

      {/* CTA */}
      <section className="py-24 px-4 bg-blood/5 border-t border-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl text-gold mb-8">Não espere mais para ser feliz no {neighborhoodName}</h2>
          <p className="text-bone/80 text-xl mb-12">
            A felicidade está a um clique de distância. Seu Tranca Ruas das Almas tem as chaves para abrir seus caminhos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Vim+pelo+site+-+Urgente+${neighborhoodName}`}
              className="bg-neon-red text-white px-10 py-5 rounded-sm font-secondary tracking-widest hover:brightness-125 transition-all shadow-[0_0_20px_#FF1A1A]"
            >
              Falar com o Pai de Santo
            </a>
            <Link 
              to="/estados/pr/curitiba"
              className="border border-gold text-gold px-10 py-5 rounded-sm font-secondary tracking-widest hover:bg-gold hover:text-dark transition-all"
            >
              Outros Bairros
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
