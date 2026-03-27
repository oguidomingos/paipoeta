import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

/* ───── Layout ───── */
function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Página Inicial' },
    { path: '/o-livro', label: 'O Livro' },
    { path: '/o-pai-poeta', label: 'O Pai Poeta' },
    { path: '/os-4-pes', label: 'Os 4 "Pês"' },
    { path: '/quem-faz-poesia', label: '"Quem faz Poesia..."' },
    { path: '/poesia-filosofia', label: 'Poesia & Filosofia' },
    { path: '/momentum', label: 'Momentum Filosófico' },
    { path: '/cultural', label: 'Pai Poeta Cultural' },
    { path: '/coluna-pais', label: 'Coluna dos Pais Poetas' },
    { path: '/saude', label: 'Pai Poeta e Saúde' },
    { path: '/empresa-cult', label: 'Empresa Cult' },
    { path: '/loja', label: 'Loja Pai Poeta' },
    { path: '/contato', label: 'Fale Conosco' },
  ]

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#faf6ee' }}>
      {/* Header */}
      <header className="border-b" style={{ borderColor: '#e8dcc8', backgroundColor: '#fefcf7' }}>
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-bold m-0" style={{ fontFamily: "'Dancing Script', cursive", color: '#745409' }}>
                Pai Poeta
              </h1>
              <span className="text-xs tracking-widest uppercase" style={{ color: '#a67c1a' }}>
                De Brasília
              </span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#745409" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-wrap justify-end max-w-2xl">
            {navItems.slice(0, 7).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-2 py-1 text-sm no-underline rounded transition-colors"
                style={{
                  color: location.pathname === item.path ? '#745409' : '#4a3728',
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  backgroundColor: location.pathname === item.path ? 'rgba(116,84,9,0.08)' : 'transparent',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="lg:hidden border-t px-4 py-4" style={{ borderColor: '#e8dcc8', backgroundColor: '#fefcf7' }}>
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2 text-sm no-underline rounded transition-colors"
                  style={{
                    color: location.pathname === item.path ? '#745409' : '#4a3728',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    backgroundColor: location.pathname === item.path ? 'rgba(116,84,9,0.08)' : 'transparent',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main content area with sidebar */}
      <div className="flex-1 max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-8 px-4 py-8">
        {/* Sidebar - desktop only */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-8">
            <h3 className="text-sm uppercase tracking-widest mb-4 font-semibold" style={{ color: '#a67c1a' }}>
              Navegação
            </h3>
            <nav className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-3 py-1.5 text-sm no-underline rounded transition-colors"
                  style={{
                    color: location.pathname === item.path ? '#745409' : '#4a3728',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    backgroundColor: location.pathname === item.path ? 'rgba(116,84,9,0.1)' : 'transparent',
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '0.95rem',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Decorative quote */}
            <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: 'rgba(116,84,9,0.05)', borderLeft: '3px solid #a67c1a' }}>
              <p className="text-xs italic leading-relaxed" style={{ color: '#745409', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                "Quem faz Poesia não mata e não morre."
              </p>
              <p className="text-xs mt-1" style={{ color: '#a67c1a' }}>— Pai Poeta</p>
            </div>
          </div>
        </aside>

        {/* Page content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t py-8 px-4" style={{ borderColor: '#e8dcc8', backgroundColor: '#fefcf7' }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl mb-2" style={{ fontFamily: "'Dancing Script', cursive", color: '#745409' }}>
            Pai Poeta
          </p>
          <p className="text-sm mb-4" style={{ color: '#a67c1a' }}>
            &copy; Pai Poeta — Todos os direitos reservados
          </p>
          <div className="flex items-center justify-center gap-4 text-sm" style={{ color: '#4a3728' }}>
            <a
              href="https://www.instagram.com/paipoetadebrasilia/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:opacity-70 transition-opacity"
              style={{ color: '#745409' }}
            >
              Instagram
            </a>
            <span style={{ color: '#e8dcc8' }}>|</span>
            <a
              href="https://twitter.com/PaiPoeta"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:opacity-70 transition-opacity"
              style={{ color: '#745409' }}
            >
              Twitter
            </a>
            <span style={{ color: '#e8dcc8' }}>|</span>
            <Link to="/contato" className="no-underline hover:opacity-70 transition-opacity" style={{ color: '#745409' }}>
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ───── Reusable Components ───── */
function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#745409' }}>
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg italic" style={{ color: '#a67c1a' }}>{subtitle}</p>
      )}
      <div className="mt-4" style={{ height: '1px', background: 'linear-gradient(to right, #a67c1a, transparent)' }} />
    </div>
  )
}

function Ornament() {
  return (
    <div className="text-center text-2xl my-6" style={{ color: '#a67c1a' }}>❦</div>
  )
}

function ContentCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`p-6 md:p-8 rounded-lg ${className}`}
      style={{
        backgroundColor: '#fefcf7',
        border: '1px solid #e8dcc8',
        boxShadow: '0 2px 8px rgba(116,84,9,0.06)',
      }}
    >
      {children}
    </div>
  )
}

function VideoEmbed({ url, title }: { url: string; title: string }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2" style={{ color: '#745409' }}>{title}</h3>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: '1px solid #e8dcc8' }}
        />
      </div>
    </div>
  )
}

/* ───── Pages ───── */

function HomePage() {
  return (
    <div>
      {/* Hero section */}
      <div className="text-center py-12 md:py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Dancing Script', cursive", color: '#745409' }}>
          Bem-vindo ao Pai Poeta
        </h1>
        <p className="text-xl md:text-2xl italic max-w-2xl mx-auto" style={{ color: '#a67c1a', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          "Quem faz Poesia não mata e não morre."
        </p>
        <Ornament />
      </div>

      {/* About section */}
      <ContentCard className="mb-8">
        <p className="text-justify leading-relaxed mb-4" style={{ color: '#2c1810' }}>
          <strong>Pai Poeta</strong> é um personagem do livro <em>Pai Poeta</em>. O autor do livro e criador do portal de mesmo nome é <strong>Renan Lins Alves da Cunha</strong>, médico cardiologista e geriatra de Brasília. O autor utiliza o pseudônimo de <em>Pai Poeta de Brasília</em> nas suas criações literárias em poesia e filosofia, em todas as mídias.
        </p>
        <div className="flex justify-center">
          <Link
            to="/o-livro"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg no-underline transition-all"
            style={{ backgroundColor: 'rgba(116,84,9,0.1)', color: '#745409', fontWeight: 600 }}
          >
            + Leia mais sobre o livro
          </Link>
        </div>
      </ContentCard>

      {/* Empresa Cult section */}
      <ContentCard className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#745409' }}>
          Empresa Cult Pai Poeta
        </h2>
        <p className="text-justify leading-relaxed" style={{ color: '#2c1810' }}>
          O <em><strong>Certificado de Empresa Cult Pai Poeta</strong></em> é um selo de qualidade garantido pelo site Pai Poeta e que, assim como o mesmo, estimula a Cultura, a Paternidade responsável e, primordialmente, a poesia no Brasil.
        </p>
      </ContentCard>

      {/* Featured sections grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Link to="/os-4-pes" className="no-underline">
          <ContentCard>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#745409' }}>Os 4 "Pês"</h3>
            <p className="text-sm" style={{ color: '#4a3728' }}>
              Paternidade, Pacifismo, Poesia e Pão — os quatro pilares fundamentais do Pai Poeta.
            </p>
          </ContentCard>
        </Link>
        <Link to="/poesia-filosofia" className="no-underline">
          <ContentCard>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#745409' }}>Poesia & Filosofia</h3>
            <p className="text-sm" style={{ color: '#4a3728' }}>
              Coletânea de poesias e reflexões filosóficas do Pai Poeta de Brasília.
            </p>
          </ContentCard>
        </Link>
        <Link to="/momentum" className="no-underline">
          <ContentCard>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#745409' }}>Momentum Filosófico</h3>
            <p className="text-sm" style={{ color: '#4a3728' }}>
              Vídeos e reflexões sobre existencialismo, estoicismo, filosofia oriental e mais.
            </p>
          </ContentCard>
        </Link>
        <Link to="/cultural" className="no-underline">
          <ContentCard>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#745409' }}>Pai Poeta Cultural</h3>
            <p className="text-sm" style={{ color: '#4a3728' }}>
              Resenhas culturais, avaliações de filmes e recomendações artísticas.
            </p>
          </ContentCard>
        </Link>
      </div>
    </div>
  )
}

function OLivroPage() {
  return (
    <div>
      <PageTitle title="O Livro" subtitle="Pai Poeta — o livro que deu origem a tudo" />

      <ContentCard className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: '#745409' }}>Sobre o Livro</h2>
        <p className="text-justify leading-relaxed mb-4" style={{ color: '#2c1810' }}>
          "Pai Poeta" é o título do conto principal de um livro de contos e poesias, patrocinado pelo IBRAGE e impresso pela LGE Editora. O conto fala de paz, aventura e fantasia em tempos remotos. Tem como objetivo entreter as pessoas de forma criativa e singular.
        </p>
        <p className="text-justify leading-relaxed" style={{ color: '#2c1810' }}>
          A história é uma alegoria da sociedade moderna, traduzindo o que as pessoas deveriam ser — pessoas de paz, preocupadas com a saúde física e mental da humanidade.
        </p>
      </ContentCard>

      <div className="grid md:grid-cols-3 gap-6">
        <ContentCard>
          <h3 className="text-lg font-semibold mb-2" style={{ color: '#745409' }}>Sobre o Livro</h3>
          <p className="text-sm" style={{ color: '#4a3728' }}>
            Conheça a obra que deu origem ao universo Pai Poeta.
          </p>
        </ContentCard>
        <ContentCard>
          <h3 className="text-lg font-semibold mb-2" style={{ color: '#745409' }}>A História</h3>
          <p className="text-sm" style={{ color: '#4a3728' }}>
            Mergulhe na narrativa de paz, aventura e fantasia.
          </p>
        </ContentCard>
        <ContentCard>
          <h3 className="text-lg font-semibold mb-2" style={{ color: '#745409' }}>Seu Espaço</h3>
          <p className="text-sm" style={{ color: '#4a3728' }}>
            Um espaço para os leitores e admiradores da obra.
          </p>
        </ContentCard>
      </div>
    </div>
  )
}

function OPaiPoetaPage() {
  return (
    <div>
      <PageTitle title="Minha Missão" subtitle="O Pai Poeta — Ano 1315 D.C da Ilha de Rostand" />

      <ContentCard className="mb-8">
        <p className="text-center text-xl italic font-semibold mb-6" style={{ color: '#745409' }}>
          "Quem faz Poesia não mata e não morre."
        </p>
        <p className="text-justify leading-relaxed mb-4" style={{ color: '#2c1810' }}>
          Poesia e fazer pão são os ofícios do Pai Poeta, transmitidos de geração em geração. Ele vem da Ilha de Rostand, um reino onde a poesia é a linguagem da paz e o pão é o alimento que une as famílias.
        </p>
        <p className="text-justify leading-relaxed mb-4" style={{ color: '#2c1810' }}>
          Agora vivendo em Brasília, o Pai Poeta tem uma missão: a cada mês de agosto — mês dos pais no Brasil — escolher um pai-poeta local para seguir seus passos, levando adiante a tradição da poesia como ferramenta de paternidade responsável e pacifismo.
        </p>
        <p className="text-right italic text-sm mt-6" style={{ color: '#a67c1a' }}>
          (Pai Poeta — Ano 1315 D.C da Ilha de Rostand)
        </p>
      </ContentCard>

      <h2 className="text-2xl font-semibold mb-4" style={{ color: '#745409' }}>O Reino de Poetum</h2>
      <ContentCard className="mb-8">
        <p className="text-justify leading-relaxed" style={{ color: '#2c1810' }}>
          O domínio de Poetum, circundado por imponentes sequências de nobres eucaliptos — um reino afável de indivíduos produtivos e diligentes que cultivavam a terra em produção industrial básica, vestuário e artes. Essas artes alimentavam as mentes e talentos de seus Poetas.
        </p>
        <p className="text-xs italic mt-4" style={{ color: '#a67c1a' }}>
          T.W. Lawsson — "Reunião e Primavera" 1307 D.C — Poetum — Pintura a óleo
        </p>
      </ContentCard>
    </div>
  )
}

function Os4PesPage() {
  return (
    <div>
      <PageTitle title='Os 4 "Pês"' subtitle="Os quatro pilares do Pai Poeta" />

      {/* Paternidade */}
      <ContentCard className="mb-6">
        <h2 className="text-2xl font-bold mb-3" style={{ color: '#745409' }}>P — Paternidade Responsável</h2>
        <p className="text-justify leading-relaxed mb-3" style={{ color: '#2c1810' }}>
          A Paternidade Responsável é o maior dos 4 Pês. Trata de criar a vida em parceria, dar exemplos, fazer sacrifícios pelas necessidades dos filhos, ensinar sobre a natureza, contos de fadas, esportes, música e os enigmas da vida.
        </p>
        <p className="text-justify leading-relaxed" style={{ color: '#2c1810' }}>
          O Pai Poeta utiliza a poesia como ferramenta para a vida, transmitindo valores fundamentais através da arte e da palavra.
        </p>
      </ContentCard>

      {/* Pacifismo */}
      <ContentCard className="mb-6">
        <h2 className="text-2xl font-bold mb-3" style={{ color: '#745409' }}>P — Pacifismo</h2>
        <p className="text-justify leading-relaxed mb-3" style={{ color: '#2c1810' }}>
          O Pacifismo do Pai Poeta é a crença na poesia como ferramenta de transformação pessoal e social. Defende o uso das palavras como defesa, ouvir mais do que falar, e adotar princípios budistas.
        </p>
        <p className="text-justify leading-relaxed" style={{ color: '#2c1810' }}>
          O pacifismo não é fraqueza — é o uso da mente sobre a força física, uma escolha consciente pela harmonia.
        </p>
      </ContentCard>

      {/* Poesia */}
      <ContentCard className="mb-6">
        <h2 className="text-2xl font-bold mb-3" style={{ color: '#745409' }}>P — Poesia</h2>
        <p className="text-justify leading-relaxed mb-3" style={{ color: '#2c1810' }}>
          A Poesia é música tocada em palavras, o alimento da alma que fortalece a "musculatura" do cérebro. A poesia transporta os leitores a mundos interiores ocultos e produz comportamentos positivos.
        </p>
        <p className="text-justify leading-relaxed" style={{ color: '#2c1810' }}>
          É através da poesia que o Pai Poeta encontra a linguagem universal capaz de unir gerações, culturas e pensamentos.
        </p>
      </ContentCard>

      {/* Pão */}
      <ContentCard className="mb-6">
        <h2 className="text-2xl font-bold mb-3" style={{ color: '#745409' }}>P — Pão</h2>
        <p className="text-justify leading-relaxed mb-3" style={{ color: '#2c1810' }}>
          O Pai Poeta é padeiro por profissão. O pão remonta às civilizações antigas: os gregos catalogaram 70 tipos, o Egito o produz há mais de 2.500 anos, e na Idade Média cada pão recebia uma cruz com uma prece.
        </p>
        <p className="text-justify leading-relaxed mb-3" style={{ color: '#2c1810' }}>
          A baguete francesa foi criada em 1840 (80cm), a OMS recomenda 50kg/ano por pessoa, e o Marrocos lidera o consumo mundial com 100kg/pessoa/ano.
        </p>
        <p className="text-justify leading-relaxed italic" style={{ color: '#4a3728' }}>
          O pão alimenta a vida física; a poesia alimenta a vida intelectual e emocional.
        </p>
      </ContentCard>
    </div>
  )
}

function QuemFazPoesiaPage() {
  return (
    <div>
      <PageTitle title='"Quem faz Poesia não mata e não morre"' subtitle="Um pensamento do Pai Poeta" />

      <ContentCard className="mb-8">
        <p className="text-justify leading-relaxed mb-4" style={{ color: '#2c1810' }}>
          A poesia pode ser considerada uma ferramenta cognitiva para alcançar uma vida satisfatória em termos de bem-estar físico, mental e social. A prática da criação poética pode gerar uma forte conexão com a realidade, interpretando-a para extrair conceitos úteis que orientem comportamentos humanos saudáveis.
        </p>
        <p className="text-justify leading-relaxed mb-4" style={{ color: '#2c1810' }}>
          A frase pode ser considerada uma resposta afirmativa em direção à não-violência — uma ferramenta de defesa com letalidade zero e apenas ação moderadora sobre comportamentos interpretativos exacerbados. Mesmo o pior criminoso pode ceder diante de uma bela imagem poética; a "arma poética" destrói amargura, violência imaginária e talvez até violência real.
        </p>
        <p className="text-justify leading-relaxed mb-4" style={{ color: '#2c1810' }}>
          A poesia pode inspirar comportamentos moderados e despertar a alegria soterrada pelas tarefas diárias. Como disse Sartre, "as palavras são pistolas carregadas," e a palavra poética nunca é disparada para "ferir mortalmente" a alma de outrem — ela se torna uma arma de moderação psicológica para trazer tranquilidade à alma humana.
        </p>
        <p className="text-justify leading-relaxed" style={{ color: '#2c1810' }}>
          "Quem faz poesia não morre" — referencia o verso imortal de Vinícius de Moraes e reflete sobre como o verso inesquecível torna o poeta um amigo duradouro, imortalizado pela arte poética.
        </p>
        <p className="text-right italic text-sm mt-4" style={{ color: '#a67c1a' }}>
          — Pai Poeta de Brasília, março 2025
        </p>
      </ContentCard>

      <Ornament />

      <ContentCard>
        <h2 className="text-xl font-bold text-center mb-4" style={{ color: '#745409' }}>
          Eu, Drummond e Einstein
        </h2>
        <div className="text-center italic leading-loose" style={{ color: '#2c1810' }}>
          <p className="mb-4">
            Uma referência ao famoso poema da pedra de Drummond<br />
            e à citação de Einstein sobre desejo e caminhos.
          </p>
        </div>
        <p className="text-right italic text-sm mt-4" style={{ color: '#a67c1a' }}>
          — Pai Poeta de Brasília, abril 2025
        </p>
      </ContentCard>
    </div>
  )
}

function PoesiaFilosofiaPage() {
  const poems = [
    { title: 'Planeta Terra', date: 'Dezembro/2025' },
    { title: 'Ela', date: 'Abril de 2024' },
    { title: 'Destino', date: '2011, pág. 165' },
    { title: 'Canecas de Vinho', date: '2011' },
    { title: 'Teu Corpo', date: '2011' },
    { title: 'Ilusões — Regresso', date: '2011' },
    { title: 'O Cão Sentado', date: '2011' },
    { title: 'Desejo', date: '2011' },
    { title: 'Riacho Fundo', date: '2011' },
    { title: 'Amor e Desejo', date: '2011' },
    { title: 'Combate', date: '2011' },
    { title: 'Rosa', date: '2011' },
    { title: 'Verdade', date: 'Março de 2026' },
  ]

  return (
    <div>
      <PageTitle title="Poesia & Filosofia" subtitle="Coletânea poética de Renan Lins Alves da Cunha" />

      <div className="space-y-4">
        {poems.map((poem, i) => (
          <ContentCard key={i}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold" style={{ color: '#745409' }}>{poem.title}</h3>
              <span className="text-xs shrink-0 ml-4" style={{ color: '#a67c1a' }}>{poem.date}</span>
            </div>
            <p className="text-sm mt-1 italic" style={{ color: '#4a3728' }}>
              Pai Poeta de Brasília — Renan Lins Alves da Cunha
            </p>
          </ContentCard>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm italic" style={{ color: '#a67c1a' }}>
          Para ler os poemas completos, visite{' '}
          <a
            href="http://www.paipoeta.com.br/regulamento-2"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: '#745409' }}
          >
            o site original
          </a>
        </p>
      </div>
    </div>
  )
}

function MomentumPage() {
  const videos = [
    { title: 'Abraço', desc: 'Mensagem forte sobre o que um abraço pode fazer na vida de uma pessoa', url: 'https://www.youtube.com/embed/ZUdHQ_ApLfI' },
    { title: 'Reflexão da música Carinhoso', desc: 'A Humildade é a primeira coisa para sabedoria', url: 'https://www.youtube.com/embed/y1oBVRg2d90' },
    { title: 'Existencialismo', desc: 'Uma corrente filosófica que enfatiza a liberdade individual, escolha e responsabilidade', url: 'https://www.youtube.com/embed/pd063rVkwJM' },
    { title: 'A Felicidade é...', desc: 'Seja feliz', url: 'https://www.youtube.com/embed/r4UOMAl1Bz4' },
    { title: 'Alteridade', desc: 'Coloque-se no lugar do outro', url: 'https://www.youtube.com/embed/HJdCnESAVvA' },
    { title: 'Estoicismo', desc: 'Uma filosofia que busca a paz interior por meio do autodomínio', url: 'https://www.youtube.com/embed/HOmamJA3TWw' },
    { title: 'Filosofia Oriental', desc: 'Buscam compreender a existência, a realidade, a moralidade e a ética', url: 'https://www.youtube.com/embed/3CiW_FDFdpQ' },
    { title: 'Solidão e Solitude', desc: 'Não se isole', url: 'https://www.youtube.com/embed/W_ZHu_zvkSI' },
  ]

  return (
    <div>
      <PageTitle title="Momentum Filosófico" subtitle="Reflexões em vídeo sobre filosofia e vida" />

      <div className="space-y-8">
        {videos.map((v, i) => (
          <ContentCard key={i}>
            <p className="text-sm italic mb-3" style={{ color: '#a67c1a' }}>{v.desc}</p>
            <VideoEmbed url={v.url} title={v.title} />
          </ContentCard>
        ))}
      </div>
    </div>
  )
}

function CulturalPage() {
  const reviews = [
    { title: 'A Bela e a Fera', rating: '5+/5+', url: 'https://www.youtube.com/embed/-QhfhH4vhlk' },
    { title: 'O Artista', rating: '5+/5', url: 'https://www.youtube.com/embed/yAjt9cJXH1c' },
    { title: 'Heleno (Rodrigo Santoro)', rating: '5+/5+', url: 'https://www.youtube.com/embed/GlhJrXWQ6FU' },
    { title: 'O Hobbit', rating: '5+/5+', url: 'https://www.youtube.com/embed/JTSoD4BBCJc' },
    { title: 'Homem de Aço', rating: '5+/5+', url: 'https://www.youtube.com/embed/T6DJcgm3wNY' },
    { title: 'O Cavaleiro Mascarado (Zorro)', rating: '5/5+', url: 'https://www.youtube.com/embed/njsI9_Gx7ns' },
    { title: 'O Cavaleiro das Trevas Ressurge', rating: '5/5', url: 'https://www.youtube.com/embed/gl58PXjR-cA' },
    { title: 'Faroeste Caboclo', rating: '5-/5+', url: 'https://www.youtube.com/embed/4azYkNkPtJg' },
  ]

  return (
    <div>
      <PageTitle title="Pai Poeta Cultural" subtitle="Resenhas culturais e avaliações" />

      <p className="mb-6 text-sm" style={{ color: '#4a3728' }}>
        Avaliações e resenhas de filmes e espetáculos culturais pelo Pai Poeta. Classificação em escala de X/5+.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <ContentCard key={i}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold" style={{ color: '#745409' }}>{r.title}</h3>
              <span
                className="text-sm font-bold px-2 py-1 rounded"
                style={{ backgroundColor: 'rgba(116,84,9,0.1)', color: '#745409' }}
              >
                {r.rating}
              </span>
            </div>
            <VideoEmbed url={r.url} title={r.title} />
          </ContentCard>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm italic" style={{ color: '#a67c1a' }}>
          Mais de 30 resenhas disponíveis no{' '}
          <a
            href="http://www.paipoeta.com.br/pai-poeta-cultural"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: '#745409' }}
          >
            acervo completo
          </a>
        </p>
      </div>
    </div>
  )
}

function ColunaPaisPage() {
  return (
    <div>
      <PageTitle title="Coluna dos Pais Poetas" subtitle="Encontros literários e crônicas" />

      <ContentCard className="mb-8">
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#745409' }}>
          Pai Poeta Encontros
        </h2>
        <p className="text-justify leading-relaxed mb-4" style={{ color: '#2c1810' }}>
          Uma narrativa fictícia que descreve um encontro imaginário entre o personagem Pai Poeta e os poetas românticos ingleses Byron e Keats, no pub Spaniard's Inn em Londres, durante o inverno de 1816.
        </p>
        <p className="text-justify leading-relaxed mb-4" style={{ color: '#2c1810' }}>
          A narrativa inclui diálogos, recitações poéticas ficcionais atribuídas a Keats (Ode sobre a Indolência), Byron (Child Harold Excertos) e o próprio personagem Pai Poeta, além de descrições da atmosfera do pub e temas de amizade, poesia e otimismo.
        </p>
        <p className="text-xs italic" style={{ color: '#a67c1a' }}>
          O Spaniard's Inn em Londres — Sim, meus amigos, ele existe.
        </p>
      </ContentCard>

      <h3 className="text-lg font-semibold mb-4" style={{ color: '#745409' }}>Mais na Coluna</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          'Histórias de Poeta e suas Viagens',
          'Tributo ao Poeta Salgado Maranhão — Ato I',
          'Tributo ao Poeta Salgado Maranhão — Ato II',
          'Angora',
          'Um dia no trabalho',
          'Coco, Asneira',
        ].map((t, i) => (
          <ContentCard key={i}>
            <h4 className="text-base font-medium" style={{ color: '#745409' }}>{t}</h4>
          </ContentCard>
        ))}
      </div>
    </div>
  )
}

function SaudePage() {
  return (
    <div>
      <PageTitle title="Pai Poeta e Saúde" subtitle="Saúde, bem-estar e qualidade de vida" />

      <div className="space-y-6">
        <ContentCard>
          <h3 className="text-lg font-semibold mb-2" style={{ color: '#745409' }}>
            Mensagem da Brigada Anti-Tabagismo
          </h3>
          <p className="text-sm mb-2" style={{ color: '#4a3728' }}>
            Do Instituto Brasileiro de Geriatria Preventiva — IBRAGE
          </p>
          <p className="text-justify leading-relaxed" style={{ color: '#2c1810' }}>
            Orientações e campanhas de conscientização sobre os males do tabagismo, com o apoio do IBRAGE, parceiro institucional do Pai Poeta.
          </p>
        </ContentCard>

        <ContentCard>
          <h3 className="text-lg font-semibold mb-2" style={{ color: '#745409' }}>
            Pai Poeta e o Sono
          </h3>
          <p className="text-justify leading-relaxed" style={{ color: '#2c1810' }}>
            Reflexões e orientações sobre a importância do sono para a saúde física e mental, escritas pelo Dr. Renan Lins Alves da Cunha, cardiologista e geriatra.
          </p>
        </ContentCard>
      </div>
    </div>
  )
}

function EmpresaCultPage() {
  return (
    <div>
      <PageTitle title="Empresa Cult Pai Poeta" subtitle="O Selo de Qualidade" />

      <ContentCard className="mb-8">
        <p className="text-justify leading-relaxed mb-4" style={{ color: '#2c1810' }}>
          O <em><strong>Certificado de Empresa Cult Pai Poeta</strong></em> é um selo de qualidade que promove a Cultura, a Poesia, a Integração Familiar e a Paternidade Responsável no Brasil.
        </p>
        <p className="text-justify leading-relaxed mb-4" style={{ color: '#2c1810' }}>
          Uma Empresa Cult Pai Poeta é uma parceira que apoia os ideais do site e desenvolve:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4" style={{ color: '#2c1810' }}>
          <li>Apoio incondicional às ideias e iniciativas do site Pai Poeta</li>
          <li>Apoio à Paternidade Responsável e Pró-ativa</li>
          <li>Incentivo a concursos Pai Poeta entre funcionários</li>
          <li>Organização de eventos com competições culturais e esportivas entre pais e filhos</li>
          <li>Estímulo à criação literária poética como ferramenta de integração</li>
        </ul>
      </ContentCard>

      <ContentCard>
        <h2 className="text-xl font-semibold mb-3" style={{ color: '#745409' }}>IBRAGE</h2>
        <p className="text-justify leading-relaxed mb-3" style={{ color: '#2c1810' }}>
          O <strong>Instituto Brasileiro de Geriatria Preventiva (IBRAGE)</strong> é a primeira Empresa Cult Pai Poeta e parceira institucional. O IBRAGE possui um Centro de Estudos com duas áreas: <strong>IBRAGE MED</strong> (trabalhos científicos) e <strong>IBRAGE CULT</strong> (produção cultural, incluindo o livro Pai Poeta).
        </p>
        <p className="text-sm" style={{ color: '#4a3728' }}>
          Setor Terminal Norte, Bloco O, Ed. Life Center, sala 136 — Asa Norte, Brasília
        </p>
      </ContentCard>
    </div>
  )
}

function LojaPage() {
  return (
    <div>
      <PageTitle title="Loja Pai Poeta" subtitle="SmartFashion — Vista a Poesia" />

      <ContentCard className="mb-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#745409' }}>Camisa Pai Poeta</h2>
          <p className="text-xl font-semibold" style={{ color: '#a67c1a' }}>R$ 130,00</p>
        </div>

        <p className="text-justify leading-relaxed mb-4" style={{ color: '#2c1810' }}>
          O conceito <strong>SmartFashion</strong> do Pai Poeta traz uma camisa preta exclusiva que acompanha uma caixa personalizada e um poema em papel timbrado. Uma ideia de presente para o Dia dos Pais, Dia dos Namorados, aniversários e mais.
        </p>

        <div className="p-4 rounded-lg text-center mb-4" style={{ backgroundColor: 'rgba(116,84,9,0.05)', border: '1px dashed #a67c1a' }}>
          <p className="text-lg italic" style={{ color: '#745409', fontFamily: "'Dancing Script', cursive" }}>
            "Com o Pai Poeta, Você veste a Poesia."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-sm" style={{ color: '#4a3728' }}>
          <div>
            <p><strong>Tamanhos:</strong> G e GG</p>
            <p><strong>Modelo:</strong> Unissex</p>
            <p><strong>Cor:</strong> Preta</p>
          </div>
          <div>
            <p><strong>Personalização:</strong> Estampa com o lema "Quem faz poesia não mata e não morre" sem custo adicional</p>
            <p><strong>Entrega:</strong> Até 15 dias úteis</p>
          </div>
        </div>
      </ContentCard>
    </div>
  )
}

function ContatoPage() {
  return (
    <div>
      <PageTitle title="Fale Conosco" subtitle="Entre em contato com o Pai Poeta" />

      <ContentCard className="mb-8">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#745409' }}>
              E-mail *
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
              style={{
                backgroundColor: '#faf6ee',
                border: '1px solid #e8dcc8',
                color: '#2c1810',
              }}
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#745409' }}>
              Assunto *
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
              style={{
                backgroundColor: '#faf6ee',
                border: '1px solid #e8dcc8',
                color: '#2c1810',
              }}
              placeholder="Assunto da mensagem"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#745409' }}>
              Mensagem *
            </label>
            <textarea
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-vertical"
              style={{
                backgroundColor: '#faf6ee',
                border: '1px solid #e8dcc8',
                color: '#2c1810',
              }}
              placeholder="Escreva sua mensagem..."
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer"
            style={{
              backgroundColor: '#745409',
              color: '#fefcf7',
              border: 'none',
            }}
          >
            Enviar
          </button>
        </form>
      </ContentCard>

      <ContentCard>
        <h3 className="text-lg font-semibold mb-2" style={{ color: '#745409' }}>Fundador</h3>
        <p className="text-sm" style={{ color: '#4a3728' }}>
          <strong>Dr. Renan Lins Alves da Cunha</strong><br />
          Médico Cardiologista e Geriatra<br />
          Brasília — DF
        </p>
        <div className="flex gap-4 mt-3">
          <a
            href="https://www.instagram.com/paipoetadebrasilia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm no-underline"
            style={{ color: '#745409' }}
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/PaiPoeta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm no-underline"
            style={{ color: '#745409' }}
          >
            Twitter
          </a>
        </div>
      </ContentCard>
    </div>
  )
}

/* ───── App Router ───── */
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/o-livro" element={<OLivroPage />} />
        <Route path="/o-pai-poeta" element={<OPaiPoetaPage />} />
        <Route path="/os-4-pes" element={<Os4PesPage />} />
        <Route path="/quem-faz-poesia" element={<QuemFazPoesiaPage />} />
        <Route path="/poesia-filosofia" element={<PoesiaFilosofiaPage />} />
        <Route path="/momentum" element={<MomentumPage />} />
        <Route path="/cultural" element={<CulturalPage />} />
        <Route path="/coluna-pais" element={<ColunaPaisPage />} />
        <Route path="/saude" element={<SaudePage />} />
        <Route path="/empresa-cult" element={<EmpresaCultPage />} />
        <Route path="/loja" element={<LojaPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
    </Layout>
  )
}

export default App
