import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

/* ───── Medieval Ornamental Components ───── */

function Fleuron({ className = '' }: { className?: string }) {
  return <div className={`fleuron ${className}`}>❦</div>
}

function OrnLine() {
  return <div className="orn-line my-6" />
}

function CrossDivider() {
  return (
    <div className="text-center my-8 select-none" style={{ color: 'var(--gold)', letterSpacing: '0.8rem' }}>
      <span style={{ fontSize: '0.9rem' }}>✦</span>
      <span style={{ fontSize: '1.2rem', margin: '0 0.3rem' }}>✠</span>
      <span style={{ fontSize: '0.9rem' }}>✦</span>
    </div>
  )
}

/* ───── Layout ───── */
function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  const navItems = [
    { path: '/', label: 'Página Inicial' },
    { path: '/o-livro', label: 'O Livro' },
    { path: '/o-pai-poeta', label: 'O Pai Poeta' },
    { path: '/os-4-pes', label: 'Os 4 Pês' },
    { path: '/quem-faz-poesia', label: 'Quem faz Poesia' },
    { path: '/poesia-filosofia', label: 'Poesia & Filosofia' },
    { path: '/momentum', label: 'Momentum' },
    { path: '/cultural', label: 'Cultural' },
    { path: '/coluna-pais', label: 'Coluna dos Pais' },
    { path: '/saude', label: 'Saúde' },
    { path: '/empresa-cult', label: 'Empresa Cult' },
    { path: '/loja', label: 'Loja' },
    { path: '/contato', label: 'Contato' },
  ]

  return (
    <div className="min-h-screen dark-section">
      {/* ── Header ── */}
      <header className="parchment-bg" style={{ borderBottom: '3px double var(--gold)' }}>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-5 flex items-center justify-between">
          <Link to="/" className="no-underline group">
            <h1
              className="text-2xl md:text-3xl m-0 tracking-wider"
              style={{ fontFamily: "'MedievalSharp', cursive", color: 'var(--ink)' }}
            >
              Pai Poeta
            </h1>
            <span
              className="text-xs tracking-[0.25em] uppercase block"
              style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold-dark)', fontWeight: 500 }}
            >
              De Brasília
            </span>
          </Link>

          {/* Hamburger */}
          <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ink-light)" strokeWidth="2">
              {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-wrap justify-end">
            {navItems.slice(0, 7).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-2 py-1 text-xs no-underline transition-colors"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: location.pathname === item.path ? 'var(--gold-dark)' : 'var(--ink-light)',
                  fontWeight: location.pathname === item.path ? 700 : 400,
                  borderBottom: location.pathname === item.path ? '1px solid var(--gold)' : '1px solid transparent',
                  letterSpacing: '0.05em',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="lg:hidden nav-overlay fixed inset-0 z-50" onClick={() => setMenuOpen(false)}>
            <div
              className="parchment-bg absolute right-0 top-0 h-full w-72 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{ borderLeft: '2px solid var(--gold)' }}
            >
              <div className="relative z-10 p-6">
                <button className="mb-6 p-1" onClick={() => setMenuOpen(false)} aria-label="Close">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="px-3 py-2 no-underline rounded transition-colors"
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: '0.8rem',
                        color: location.pathname === item.path ? 'var(--gold-dark)' : 'var(--ink-light)',
                        fontWeight: location.pathname === item.path ? 700 : 400,
                        backgroundColor: location.pathname === item.path ? 'rgba(184,134,11,0.1)' : 'transparent',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── Main manuscript page ── */}
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row" style={{ minHeight: 'calc(100vh - 200px)' }}>
        {/* Sidebar */}
        <aside
          className="hidden lg:block w-48 shrink-0 parchment-bg"
          style={{ borderRight: '1px solid var(--vellum-edge)' }}
        >
          <div className="relative z-10 sticky top-0 py-8 px-4">
            <h3
              className="text-xs uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold-dark)', fontWeight: 600 }}
            >
              Capítulos
            </h3>
            <nav className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-2 py-1.5 no-underline rounded transition-colors"
                  style={{
                    fontFamily: "'IM Fell English', serif",
                    fontSize: '0.85rem',
                    color: location.pathname === item.path ? 'var(--gold-dark)' : 'var(--ink-light)',
                    fontWeight: location.pathname === item.path ? 700 : 400,
                    backgroundColor: location.pathname === item.path ? 'rgba(184,134,11,0.08)' : 'transparent',
                    borderLeft: location.pathname === item.path ? '2px solid var(--gold)' : '2px solid transparent',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 p-3 rounded" style={{ backgroundColor: 'rgba(184,134,11,0.06)', borderLeft: '2px solid var(--gold)' }}>
              <p className="text-sm italic leading-relaxed" style={{ color: 'var(--ink-light)', fontFamily: "'IM Fell English', serif" }}>
                "Quem faz Poesia não mata e não morre."
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--gold-dark)', fontFamily: "'Cinzel', serif" }}>— Pai Poeta</p>
            </div>
          </div>
        </aside>

        {/* Content — the manuscript page */}
        <main className="flex-1 min-w-0 parchment-bg manuscript-border lg:border-l-0">
          <div className="relative z-10 py-8 px-5 md:px-10 lg:px-12">
            {children}
          </div>
        </main>
      </div>

      {/* ── Footer ── */}
      <footer className="parchment-bg" style={{ borderTop: '3px double var(--gold)' }}>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 text-center">
          <p style={{ fontFamily: "'MedievalSharp', cursive", color: 'var(--ink)', fontSize: '1.4rem' }}>
            Pai Poeta
          </p>
          <div className="fleuron" style={{ margin: '0.5rem 0', fontSize: '1.2rem', letterSpacing: '0.8rem' }}>☙ ❦ ❧</div>
          <p className="text-xs mb-3" style={{ color: 'var(--gold-dark)', fontFamily: "'Cinzel', serif", letterSpacing: '0.1em' }}>
            &copy; Pai Poeta — Todos os Direitos Reservados
          </p>
          <div className="flex items-center justify-center gap-4 text-xs" style={{ fontFamily: "'Cinzel', serif" }}>
            <a href="https://www.instagram.com/paipoetadebrasilia/" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-70 transition-opacity" style={{ color: 'var(--ink-light)', letterSpacing: '0.05em' }}>Instagram</a>
            <span style={{ color: 'var(--gold)' }}>✦</span>
            <a href="https://twitter.com/PaiPoeta" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-70 transition-opacity" style={{ color: 'var(--ink-light)', letterSpacing: '0.05em' }}>Twitter</a>
            <span style={{ color: 'var(--gold)' }}>✦</span>
            <Link to="/contato" className="no-underline hover:opacity-70 transition-opacity" style={{ color: 'var(--ink-light)', letterSpacing: '0.05em' }}>Contato</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ───── Reusable Components ───── */

function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8 text-center">
      <h1
        className="text-2xl md:text-3xl lg:text-4xl mb-2"
        style={{ fontFamily: "'MedievalSharp', cursive", color: 'var(--ink)', fontWeight: 400 }}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="text-base italic" style={{ color: 'var(--gold-dark)', fontFamily: "'IM Fell English', serif" }}>
          {subtitle}
        </p>
      )}
      <OrnLine />
    </div>
  )
}

function ManuscriptCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`p-5 md:p-7 rounded manuscript-card ${className}`}
      style={{
        backgroundColor: 'rgba(240, 230, 208, 0.5)',
        border: '1px solid var(--vellum-edge)',
        boxShadow: 'inset 0 0 30px rgba(139, 105, 20, 0.06)',
      }}
    >
      {children}
    </div>
  )
}

function VideoEmbed({ url, title }: { url: string; title: string }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg mb-2" style={{ color: 'var(--ink)' }}>{title}</h3>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded"
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: '1px solid var(--vellum-edge)' }}
        />
      </div>
    </div>
  )
}

function IlluminatedText({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-6 py-4 px-6 text-center italic text-lg"
      style={{
        fontFamily: "'IM Fell English', serif",
        color: 'var(--ink)',
        borderTop: '1px solid var(--gold)',
        borderBottom: '1px solid var(--gold)',
        backgroundColor: 'rgba(184,134,11,0.04)',
      }}
    >
      {children}
    </blockquote>
  )
}

/* ───── Pages ───── */

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div className="text-center py-8 md:py-12">
        <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold-dark)' }}>
          Anno Domini MCCCXV — Ilha de Rostand
        </p>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl mb-4"
          style={{ fontFamily: "'MedievalSharp', cursive", color: 'var(--ink)', fontWeight: 400, lineHeight: 1.2 }}
        >
          Pai Poeta
        </h1>
        <p className="text-sm uppercase tracking-[0.2em] mb-6" style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold-dark)' }}>
          De Brasília
        </p>
        <OrnLine />
        <IlluminatedText>
          "Quem faz Poesia não mata e não morre."
        </IlluminatedText>
        <CrossDivider />
      </div>

      {/* Briefing block */}
      <ManuscriptCard className="mb-8">
        <p className="drop-cap text-justify leading-relaxed mb-4 ink-text">
          Nossa História se passa na Idade Média, entre os séculos XIV e XV, com a introdução do papel no Ocidente. O Conto, que é a obra principal do livro Pai Poeta, é a tradução da solução dos problemas e conflitos de uma forma um tanto quanto diferenciada.
        </p>
        <p className="text-justify leading-relaxed mb-4 ink-text">
          O mundo de Pai Poeta é vasto e está se descortinando para o público aos poucos, para que cada um possa ter a noção de seus personagens, da poesia e para que aproveitem cada segundo conosco.
        </p>
        <Fleuron />
        <p className="text-justify leading-relaxed ink-text">
          <strong>Pai Poeta</strong> é um personagem do livro de mesmo nome, criado por <strong>Renan Lins Alves da Cunha</strong>, médico cardiologista e geriatra de Brasília, que utiliza o pseudônimo de <em>Pai Poeta de Brasília</em> nas suas criações literárias em poesia e filosofia.
        </p>
      </ManuscriptCard>

      {/* Navigation cards */}
      <div className="grid md:grid-cols-2 gap-5 mb-8">
        {[
          { path: '/o-livro', title: 'O Livro', desc: 'O conto que deu origem a todo o universo do Pai Poeta.' },
          { path: '/o-pai-poeta', title: 'O Pai Poeta', desc: 'Ano 1315 D.C — A missão do poeta padeiro da Ilha de Rostand.' },
          { path: '/os-4-pes', title: 'Os 4 Pês', desc: 'Paternidade, Pacifismo, Poesia e Pão — os pilares fundamentais.' },
          { path: '/poesia-filosofia', title: 'Poesia & Filosofia', desc: 'Coletânea de poesias e reflexões filosóficas.' },
          { path: '/momentum', title: 'Momentum Filosófico', desc: 'Vídeos sobre existencialismo, estoicismo e vida.' },
          { path: '/cultural', title: 'Pai Poeta Cultural', desc: 'Resenhas culturais e avaliações de filmes.' },
        ].map((item, i) => (
          <Link key={i} to={item.path} className="no-underline">
            <ManuscriptCard>
              <h3 className="text-lg mb-1" style={{ fontFamily: "'Cinzel', serif", color: 'var(--ink)' }}>{item.title}</h3>
              <p className="text-sm ink-text" style={{ fontFamily: "'IM Fell English', serif" }}>{item.desc}</p>
            </ManuscriptCard>
          </Link>
        ))}
      </div>

      {/* Empresa Cult */}
      <ManuscriptCard>
        <h2 className="text-xl mb-3" style={{ fontFamily: "'Cinzel', serif", color: 'var(--ink)' }}>Empresa Cult Pai Poeta</h2>
        <p className="text-justify leading-relaxed ink-text">
          O <em><strong>Certificado de Empresa Cult Pai Poeta</strong></em> é um selo de qualidade garantido pelo site Pai Poeta e que, assim como o mesmo, estimula a Cultura, a Paternidade responsável e, primordialmente, a poesia no Brasil.
        </p>
      </ManuscriptCard>
    </div>
  )
}

function OLivroPage() {
  return (
    <div>
      <PageTitle title="O Livro" subtitle="O conto que deu origem a tudo" />
      <ManuscriptCard className="mb-8">
        <p className="drop-cap text-justify leading-relaxed mb-4 ink-text">
          "Pai Poeta" é o título do conto principal de um livro de contos e poesias, patrocinado pelo IBRAGE e impresso pela LGE Editora. O conto fala de paz, aventura e fantasia em tempos remotos.
        </p>
        <p className="text-justify leading-relaxed ink-text">
          A história é uma alegoria da sociedade moderna, traduzindo o que as pessoas deveriam ser — pessoas de paz, preocupadas com a saúde física e mental da humanidade.
        </p>
      </ManuscriptCard>
      <Fleuron />
      <div className="grid md:grid-cols-3 gap-4">
        {['Sobre o Livro', 'A História', 'Seu Espaço'].map((t, i) => (
          <ManuscriptCard key={i}>
            <h3 className="text-base text-center" style={{ fontFamily: "'Cinzel', serif", color: 'var(--ink)' }}>{t}</h3>
          </ManuscriptCard>
        ))}
      </div>
    </div>
  )
}

function OPaiPoetaPage() {
  return (
    <div>
      <PageTitle title="Minha Missão" subtitle="Ano 1315 D.C — Ilha de Rostand" />

      <IlluminatedText>
        "Quem faz Poesia não mata e não morre."
      </IlluminatedText>

      <ManuscriptCard className="mb-8">
        <p className="drop-cap text-justify leading-relaxed mb-4 ink-text">
          Poesia e fazer pão são os ofícios do Pai Poeta, transmitidos de geração em geração. Ele vem da Ilha de Rostand, um reino onde a poesia é a linguagem da paz e o pão é o alimento que une as famílias.
        </p>
        <p className="text-justify leading-relaxed mb-4 ink-text">
          Agora vivendo em Brasília, o Pai Poeta tem uma missão: a cada mês de agosto — mês dos pais no Brasil — escolher um pai-poeta local para seguir seus passos.
        </p>
        <p className="text-right italic text-sm mt-4" style={{ color: 'var(--gold-dark)', fontFamily: "'IM Fell English', serif" }}>
          (Pai Poeta — Ano 1315 D.C da Ilha de Rostand)
        </p>
      </ManuscriptCard>

      <CrossDivider />

      <ManuscriptCard>
        <h2 className="text-xl mb-3" style={{ fontFamily: "'Cinzel', serif", color: 'var(--ink)' }}>O Reino de Poetum</h2>
        <p className="drop-cap text-justify leading-relaxed ink-text">
          O domínio de Poetum, circundado por imponentes sequências de nobres eucaliptos — um reino afável de indivíduos produtivos e diligentes que cultivavam a terra em produção industrial básica, vestuário e artes.
        </p>
        <p className="text-xs italic mt-4" style={{ color: 'var(--gold-dark)', fontFamily: "'IM Fell English', serif" }}>
          T.W. Lawsson — "Reunião e Primavera" 1307 D.C — Poetum — Pintura a óleo
        </p>
      </ManuscriptCard>
    </div>
  )
}

function Os4PesPage() {
  const sections = [
    { letter: 'P', title: 'Paternidade Responsável', text: 'A Paternidade Responsável é o maior dos 4 Pês. Trata de criar a vida em parceria, dar exemplos, fazer sacrifícios pelas necessidades dos filhos, ensinar sobre a natureza, contos de fadas, esportes, música e os enigmas da vida.', color: 'var(--lapis)' },
    { letter: 'P', title: 'Pacifismo', text: 'O Pacifismo do Pai Poeta é a crença na poesia como ferramenta de transformação pessoal e social. Defende o uso das palavras como defesa, ouvir mais do que falar. O pacifismo não é fraqueza — é o uso da mente sobre a força física.', color: 'var(--vermilion)' },
    { letter: 'P', title: 'Poesia', text: 'A Poesia é música tocada em palavras, o alimento da alma que fortalece a "musculatura" do cérebro. A poesia transporta os leitores a mundos interiores ocultos e produz comportamentos positivos.', color: 'var(--forest)' },
    { letter: 'P', title: 'Pão', text: 'O Pai Poeta é padeiro por profissão. O pão remonta às civilizações antigas: os gregos catalogaram 70 tipos, o Egito o produz há mais de 2.500 anos. O pão alimenta a vida física; a poesia alimenta a vida intelectual e emocional.', color: 'var(--gold-dark)' },
  ]
  return (
    <div>
      <PageTitle title="Os 4 Pês" subtitle="Os quatro pilares do Pai Poeta" />
      <div className="space-y-6">
        {sections.map((s, i) => (
          <ManuscriptCard key={i}>
            <div className="flex items-start gap-4">
              <span
                className="text-5xl shrink-0 leading-none"
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${s.color}, var(--gold))`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.letter}
              </span>
              <div>
                <h2 className="text-xl mb-2" style={{ fontFamily: "'Cinzel', serif", color: 'var(--ink)' }}>
                  {s.title}
                </h2>
                <p className="text-justify leading-relaxed ink-text">{s.text}</p>
              </div>
            </div>
          </ManuscriptCard>
        ))}
      </div>
    </div>
  )
}

function QuemFazPoesiaPage() {
  return (
    <div>
      <PageTitle title="Quem faz Poesia não mata e não morre" subtitle="Um pensamento do Pai Poeta" />

      <ManuscriptCard className="mb-8">
        <p className="drop-cap text-justify leading-relaxed mb-4 ink-text">
          A poesia pode ser considerada uma ferramenta cognitiva para alcançar uma vida satisfatória em termos de bem-estar físico, mental e social.
        </p>
        <p className="text-justify leading-relaxed mb-4 ink-text">
          A frase pode ser considerada uma resposta afirmativa em direção à não-violência — uma ferramenta de defesa com letalidade zero. Mesmo o pior criminoso pode ceder diante de uma bela imagem poética.
        </p>
        <p className="text-justify leading-relaxed mb-4 ink-text">
          Como disse Sartre, "as palavras são pistolas carregadas," e a palavra poética nunca é disparada para "ferir mortalmente" a alma de outrem — ela se torna uma arma de moderação psicológica.
        </p>
        <p className="text-right italic text-sm mt-4" style={{ color: 'var(--gold-dark)', fontFamily: "'IM Fell English', serif" }}>
          — Pai Poeta de Brasília, março 2025
        </p>
      </ManuscriptCard>

      <CrossDivider />

      <ManuscriptCard>
        <h2 className="text-xl text-center mb-3" style={{ fontFamily: "'Cinzel', serif", color: 'var(--ink)' }}>
          Eu, Drummond e Einstein
        </h2>
        <p className="text-center italic ink-text" style={{ fontFamily: "'IM Fell English', serif" }}>
          Uma referência ao famoso poema da pedra de Drummond e à citação de Einstein sobre desejo e caminhos.
        </p>
        <p className="text-right italic text-sm mt-4" style={{ color: 'var(--gold-dark)', fontFamily: "'IM Fell English', serif" }}>
          — Pai Poeta de Brasília, abril 2025
        </p>
      </ManuscriptCard>
    </div>
  )
}

function PoesiaFilosofiaPage() {
  const poems = [
    { title: 'Planeta Terra', date: 'Dezembro/2025' }, { title: 'Ela', date: 'Abril 2024' },
    { title: 'Destino', date: '2011' }, { title: 'Canecas de Vinho', date: '2011' },
    { title: 'Teu Corpo', date: '2011' }, { title: 'Ilusões — Regresso', date: '2011' },
    { title: 'O Cão Sentado', date: '2011' }, { title: 'Desejo', date: '2011' },
    { title: 'Riacho Fundo', date: '2011' }, { title: 'Amor e Desejo', date: '2011' },
    { title: 'Combate', date: '2011' }, { title: 'Rosa', date: '2011' },
    { title: 'Verdade', date: 'Março 2026' },
  ]
  return (
    <div>
      <PageTitle title="Poesia & Filosofia" subtitle="Coletânea poética de Renan Lins Alves da Cunha" />
      <div className="space-y-3">
        {poems.map((p, i) => (
          <ManuscriptCard key={i}>
            <div className="flex items-center justify-between">
              <h3 className="text-base" style={{ fontFamily: "'Cinzel', serif", color: 'var(--ink)' }}>{p.title}</h3>
              <span className="text-xs shrink-0 ml-4" style={{ color: 'var(--gold-dark)', fontFamily: "'Cinzel', serif", letterSpacing: '0.05em' }}>{p.date}</span>
            </div>
            <p className="text-sm mt-1 italic" style={{ color: 'var(--ink-light)', fontFamily: "'IM Fell English', serif" }}>Pai Poeta de Brasília</p>
          </ManuscriptCard>
        ))}
      </div>
      <Fleuron className="mt-6" />
      <p className="text-center text-sm italic" style={{ color: 'var(--gold-dark)', fontFamily: "'IM Fell English', serif" }}>
        Para ler os poemas completos, visite{' '}
        <a href="http://www.paipoeta.com.br/regulamento-2" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--lapis)' }}>o site original</a>.
      </p>
    </div>
  )
}

function MomentumPage() {
  const videos = [
    { title: 'Abraço', desc: 'O que um abraço pode fazer na vida de uma pessoa', url: 'https://www.youtube.com/embed/ZUdHQ_ApLfI' },
    { title: 'Reflexão da música Carinhoso', desc: 'A Humildade é a primeira coisa para sabedoria', url: 'https://www.youtube.com/embed/y1oBVRg2d90' },
    { title: 'Existencialismo', desc: 'Liberdade individual, escolha e responsabilidade', url: 'https://www.youtube.com/embed/pd063rVkwJM' },
    { title: 'A Felicidade é...', desc: 'Seja feliz', url: 'https://www.youtube.com/embed/r4UOMAl1Bz4' },
    { title: 'Alteridade', desc: 'Coloque-se no lugar do outro', url: 'https://www.youtube.com/embed/HJdCnESAVvA' },
    { title: 'Estoicismo', desc: 'Paz interior por meio do autodomínio', url: 'https://www.youtube.com/embed/HOmamJA3TWw' },
    { title: 'Filosofia Oriental', desc: 'Compreender a existência e a realidade', url: 'https://www.youtube.com/embed/3CiW_FDFdpQ' },
    { title: 'Solidão e Solitude', desc: 'Não se isole', url: 'https://www.youtube.com/embed/W_ZHu_zvkSI' },
  ]
  return (
    <div>
      <PageTitle title="Momentum Filosófico" subtitle="Reflexões em vídeo sobre filosofia e vida" />
      <div className="space-y-6">
        {videos.map((v, i) => (
          <ManuscriptCard key={i}>
            <p className="text-sm italic mb-3" style={{ color: 'var(--ink-light)', fontFamily: "'IM Fell English', serif" }}>{v.desc}</p>
            <VideoEmbed url={v.url} title={v.title} />
          </ManuscriptCard>
        ))}
      </div>
    </div>
  )
}

function CulturalPage() {
  const reviews = [
    { title: 'A Bela e a Fera', rating: '5+', url: 'https://www.youtube.com/embed/-QhfhH4vhlk' },
    { title: 'O Artista', rating: '5+', url: 'https://www.youtube.com/embed/yAjt9cJXH1c' },
    { title: 'Heleno', rating: '5+', url: 'https://www.youtube.com/embed/GlhJrXWQ6FU' },
    { title: 'O Hobbit', rating: '5+', url: 'https://www.youtube.com/embed/JTSoD4BBCJc' },
    { title: 'Homem de Aço', rating: '5+', url: 'https://www.youtube.com/embed/T6DJcgm3wNY' },
    { title: 'Faroeste Caboclo', rating: '5-', url: 'https://www.youtube.com/embed/4azYkNkPtJg' },
    { title: 'O Cavaleiro das Trevas', rating: '5', url: 'https://www.youtube.com/embed/gl58PXjR-cA' },
    { title: 'Zorro 1957', rating: '5', url: 'https://www.youtube.com/embed/njsI9_Gx7ns' },
  ]
  return (
    <div>
      <PageTitle title="Pai Poeta Cultural" subtitle="Resenhas culturais e avaliações" />
      <div className="grid md:grid-cols-2 gap-5">
        {reviews.map((r, i) => (
          <ManuscriptCard key={i}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base" style={{ fontFamily: "'Cinzel', serif", color: 'var(--ink)' }}>{r.title}</h3>
              <span
                className="text-xs px-2 py-0.5 rounded"
                style={{
                  backgroundColor: 'rgba(184,134,11,0.12)',
                  color: 'var(--gold-dark)',
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 600,
                }}
              >
                {r.rating}/5
              </span>
            </div>
            <VideoEmbed url={r.url} title={r.title} />
          </ManuscriptCard>
        ))}
      </div>
      <Fleuron className="mt-6" />
      <p className="text-center text-sm italic" style={{ color: 'var(--gold-dark)', fontFamily: "'IM Fell English', serif" }}>
        Mais de 30 resenhas no{' '}
        <a href="http://www.paipoeta.com.br/pai-poeta-cultural" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--lapis)' }}>acervo completo</a>.
      </p>
    </div>
  )
}

function ColunaPaisPage() {
  return (
    <div>
      <PageTitle title="Coluna dos Pais Poetas" subtitle="Encontros literários e crônicas" />
      <ManuscriptCard className="mb-6">
        <h2 className="text-xl mb-3" style={{ fontFamily: "'Cinzel', serif", color: 'var(--ink)' }}>Pai Poeta Encontros</h2>
        <p className="drop-cap text-justify leading-relaxed mb-3 ink-text">
          Uma narrativa fictícia descrevendo um encontro imaginário entre o personagem Pai Poeta e os poetas românticos ingleses Byron e Keats, no pub Spaniard's Inn em Londres, durante o inverno de 1816.
        </p>
        <p className="text-xs italic" style={{ color: 'var(--gold-dark)', fontFamily: "'IM Fell English', serif" }}>
          O Spaniard's Inn em Londres — Sim, meus amigos, ele existe.
        </p>
      </ManuscriptCard>
      <h3 className="text-lg mb-3" style={{ fontFamily: "'Cinzel', serif", color: 'var(--ink)' }}>Mais na Coluna</h3>
      <div className="grid md:grid-cols-2 gap-3">
        {['Histórias de Poeta e suas Viagens', 'Tributo ao Poeta Salgado Maranhão I', 'Tributo ao Poeta Salgado Maranhão II', 'Angora', 'Um dia no trabalho', 'Coco, Asneira'].map((t, i) => (
          <ManuscriptCard key={i}>
            <h4 className="text-sm" style={{ fontFamily: "'Cinzel', serif", color: 'var(--ink)' }}>{t}</h4>
          </ManuscriptCard>
        ))}
      </div>
    </div>
  )
}

function SaudePage() {
  return (
    <div>
      <PageTitle title="Pai Poeta e Saúde" subtitle="Saúde, bem-estar e qualidade de vida" />
      <div className="space-y-5">
        <ManuscriptCard>
          <h3 className="text-lg mb-2" style={{ fontFamily: "'Cinzel', serif", color: 'var(--ink)' }}>Mensagem da Brigada Anti-Tabagismo</h3>
          <p className="text-sm mb-2" style={{ color: 'var(--gold-dark)', fontFamily: "'Cinzel', serif" }}>Instituto Brasileiro de Geriatria Preventiva — IBRAGE</p>
          <p className="text-justify leading-relaxed ink-text">Orientações e campanhas de conscientização sobre os males do tabagismo.</p>
        </ManuscriptCard>
        <ManuscriptCard>
          <h3 className="text-lg mb-2" style={{ fontFamily: "'Cinzel', serif", color: 'var(--ink)' }}>Pai Poeta e o Sono</h3>
          <p className="text-justify leading-relaxed ink-text">
            Reflexões sobre a importância do sono para a saúde, escritas pelo Dr. Renan Lins Alves da Cunha, cardiologista e geriatra.
          </p>
        </ManuscriptCard>
      </div>
    </div>
  )
}

function EmpresaCultPage() {
  return (
    <div>
      <PageTitle title="Empresa Cult Pai Poeta" subtitle="O Selo de Qualidade" />
      <ManuscriptCard className="mb-6">
        <p className="drop-cap text-justify leading-relaxed mb-4 ink-text">
          O <em><strong>Certificado de Empresa Cult Pai Poeta</strong></em> é um selo de qualidade que promove a Cultura, a Poesia, a Integração Familiar e a Paternidade Responsável no Brasil.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 ink-text">
          <li>Apoio incondicional às ideias e iniciativas do site Pai Poeta</li>
          <li>Apoio à Paternidade Responsável e Pró-ativa</li>
          <li>Incentivo a concursos Pai Poeta entre funcionários</li>
          <li>Organização de eventos culturais e esportivos entre pais e filhos</li>
          <li>Estímulo à criação literária poética</li>
        </ul>
      </ManuscriptCard>
      <Fleuron />
      <ManuscriptCard>
        <h2 className="text-xl mb-3" style={{ fontFamily: "'Cinzel', serif", color: 'var(--ink)' }}>IBRAGE</h2>
        <p className="text-justify leading-relaxed ink-text">
          O <strong>Instituto Brasileiro de Geriatria Preventiva</strong> é a primeira Empresa Cult Pai Poeta e parceira institucional, com as áreas IBRAGE MED (trabalhos científicos) e IBRAGE CULT (produção cultural).
        </p>
        <p className="text-xs mt-3" style={{ color: 'var(--gold-dark)', fontFamily: "'Cinzel', serif" }}>
          Setor Terminal Norte, Bloco O, Ed. Life Center, sala 136 — Asa Norte, Brasília
        </p>
      </ManuscriptCard>
    </div>
  )
}

function LojaPage() {
  return (
    <div>
      <PageTitle title="Loja Pai Poeta" subtitle="SmartFashion — Vista a Poesia" />
      <ManuscriptCard>
        <div className="text-center mb-5">
          <h2 className="text-2xl mb-1" style={{ fontFamily: "'MedievalSharp', cursive", color: 'var(--ink)' }}>Camisa Pai Poeta</h2>
          <p className="text-xl" style={{ color: 'var(--gold)', fontFamily: "'Cinzel', serif", fontWeight: 700 }}>R$ 130,00</p>
        </div>
        <p className="text-justify leading-relaxed mb-4 ink-text">
          O conceito <strong>SmartFashion</strong> traz uma camisa preta exclusiva com caixa personalizada e um poema em papel timbrado. Presente ideal para Dia dos Pais, aniversários e mais.
        </p>
        <IlluminatedText>
          "Com o Pai Poeta, Você veste a Poesia."
        </IlluminatedText>
        <div className="grid md:grid-cols-2 gap-4 text-sm ink-text">
          <div><p><strong>Tamanhos:</strong> G e GG</p><p><strong>Modelo:</strong> Unissex</p></div>
          <div><p><strong>Personalização:</strong> Lema "Quem faz poesia não mata e não morre"</p><p><strong>Entrega:</strong> Até 15 dias úteis</p></div>
        </div>
      </ManuscriptCard>
    </div>
  )
}

function ContatoPage() {
  return (
    <div>
      <PageTitle title="Fale Conosco" subtitle="Entre em contato com o Pai Poeta" />
      <ManuscriptCard className="mb-6">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {[
            { label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
            { label: 'Assunto', type: 'text', placeholder: 'Assunto da mensagem' },
          ].map((f, i) => (
            <div key={i}>
              <label className="block text-sm mb-1" style={{ color: 'var(--gold-dark)', fontFamily: "'Cinzel', serif", fontWeight: 600, letterSpacing: '0.05em' }}>
                {f.label} *
              </label>
              <input
                type={f.type}
                required
                className="w-full px-4 py-3 rounded text-sm outline-none"
                style={{
                  backgroundColor: 'rgba(240, 230, 208, 0.6)',
                  border: '1px solid var(--vellum-edge)',
                  color: 'var(--ink)',
                  fontFamily: "'IM Fell English', serif",
                }}
                placeholder={f.placeholder}
              />
            </div>
          ))}
          <div>
            <label className="block text-sm mb-1" style={{ color: 'var(--gold-dark)', fontFamily: "'Cinzel', serif", fontWeight: 600, letterSpacing: '0.05em' }}>
              Mensagem *
            </label>
            <textarea
              required
              rows={6}
              className="w-full px-4 py-3 rounded text-sm outline-none resize-vertical"
              style={{
                backgroundColor: 'rgba(240, 230, 208, 0.6)',
                border: '1px solid var(--vellum-edge)',
                color: 'var(--ink)',
                fontFamily: "'IM Fell English', serif",
              }}
              placeholder="Escreva sua mensagem..."
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 rounded text-sm cursor-pointer transition-all"
            style={{
              backgroundColor: 'var(--ink)',
              color: 'var(--parchment)',
              border: '1px solid var(--gold)',
              fontFamily: "'Cinzel', serif",
              fontWeight: 600,
              letterSpacing: '0.1em',
            }}
          >
            Enviar
          </button>
        </form>
      </ManuscriptCard>
      <ManuscriptCard>
        <h3 className="text-lg mb-2" style={{ fontFamily: "'Cinzel', serif", color: 'var(--ink)' }}>Fundador</h3>
        <p className="text-sm ink-text">
          <strong>Dr. Renan Lins Alves da Cunha</strong><br />
          Médico Cardiologista e Geriatra — Brasília, DF
        </p>
        <div className="flex gap-4 mt-3">
          <a href="https://www.instagram.com/paipoetadebrasilia/" target="_blank" rel="noopener noreferrer" className="text-sm no-underline" style={{ color: 'var(--lapis)', fontFamily: "'Cinzel', serif" }}>Instagram</a>
          <a href="https://twitter.com/PaiPoeta" target="_blank" rel="noopener noreferrer" className="text-sm no-underline" style={{ color: 'var(--lapis)', fontFamily: "'Cinzel', serif" }}>Twitter</a>
        </div>
      </ManuscriptCard>
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
