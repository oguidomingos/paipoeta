import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

const BASE = '/paipoeta'

/* ───── Layout ───── */
function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  const navItems = [
    { path: '/', label: 'Página Inicial' },
    { path: '/o-livro', label: 'O Livro' },
    { path: '/o-pai-poeta', label: 'O Pai Poeta' },
    { path: '/os-4-pes', label: 'Os 4 "Pês"' },
    { path: '/quem-faz-poesia', label: '"Quem faz Poesia..."' },
    { path: '/poesia-filosofia', label: 'Poesia & Filosofia' },
    { path: '/momentum', label: 'Momentum Filosófico' },
    { path: '/cultural', label: 'Pai Poeta Cultural' },
    { path: '/coluna-pais', label: 'Coluna dos Pais' },
    { path: '/saude', label: 'Saúde' },
    { path: '/empresa-cult', label: 'Empresa Cult' },
    { path: '/loja', label: 'Loja' },
    { path: '/contato', label: 'Contato' },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1a0e05' }}>
      {/* Outer wrapper with earth texture */}
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `url(${BASE}/cracked-earth.jpg)`,
          backgroundSize: '600px',
          backgroundRepeat: 'repeat',
        }}
      >
        {/* Header on parchment */}
        <header
          className="relative"
          style={{
            backgroundImage: `url(${BASE}/paper-texture.jpg)`,
            backgroundSize: '800px',
            backgroundRepeat: 'repeat',
            borderBottom: '3px solid #5a3f06',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}
        >
          <div className="relative z-10 max-w-5xl mx-auto px-4 py-5 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 no-underline">
              <div className="flex flex-col">
                <h1 className="text-3xl md:text-4xl font-bold m-0 ink-text" style={{ fontFamily: "'Dancing Script', cursive", color: '#5a3f06' }}>
                  Pai Poeta
                </h1>
                <span className="text-xs tracking-widest uppercase" style={{ color: '#8b6914', fontFamily: "'Cormorant Garamond', serif" }}>
                  De Brasília
                </span>
              </div>
            </Link>

            <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5a3f06" strokeWidth="2.5">
                {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>

            <nav className="hidden lg:flex items-center gap-1 flex-wrap justify-end">
              {navItems.slice(0, 8).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-2 py-1 text-sm no-underline rounded transition-colors"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: location.pathname === item.path ? '#5a3f06' : '#6b4e1a',
                    fontWeight: location.pathname === item.path ? 700 : 500,
                    backgroundColor: location.pathname === item.path ? 'rgba(90,63,6,0.12)' : 'transparent',
                    fontSize: '0.95rem',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {menuOpen && (
            <nav className="lg:hidden relative z-10 px-4 pb-4" style={{ borderTop: '1px solid rgba(90,63,6,0.2)' }}>
              <div className="flex flex-col gap-0.5 pt-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-2 text-sm no-underline rounded"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: location.pathname === item.path ? '#5a3f06' : '#6b4e1a',
                      fontWeight: location.pathname === item.path ? 700 : 500,
                      backgroundColor: location.pathname === item.path ? 'rgba(90,63,6,0.12)' : 'transparent',
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </header>

        {/* Main content area — parchment paper center */}
        <div className="flex justify-center">
          {/* Earth border left */}
          <div className="hidden lg:block w-16 shrink-0" style={{ backgroundImage: `url(${BASE}/earth-border.jpg)`, backgroundSize: '200px', backgroundRepeat: 'repeat-y' }} />

          <div className="flex-1 max-w-5xl flex flex-col lg:flex-row" style={{ minHeight: 'calc(100vh - 200px)' }}>
            {/* Sidebar — on paper */}
            <aside
              className="hidden lg:block w-52 shrink-0 py-8 px-4"
              style={{
                backgroundImage: `url(${BASE}/paper-texture.jpg)`,
                backgroundSize: '800px',
                backgroundRepeat: 'repeat',
                borderRight: '1px solid rgba(90,63,6,0.25)',
                boxShadow: 'inset -8px 0 20px rgba(90,63,6,0.08)',
              }}
            >
              <div className="sticky top-8">
                <h3 className="text-xs uppercase tracking-widest mb-3 font-semibold" style={{ color: '#8b6914', fontFamily: "'Cormorant Garamond', serif" }}>
                  Navegação
                </h3>
                <nav className="flex flex-col gap-0.5">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="px-2 py-1 text-sm no-underline rounded transition-colors"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: location.pathname === item.path ? '#5a3f06' : '#6b4e1a',
                        fontWeight: location.pathname === item.path ? 700 : 500,
                        backgroundColor: location.pathname === item.path ? 'rgba(90,63,6,0.1)' : 'transparent',
                        fontSize: '0.9rem',
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-6 p-3 rounded" style={{ backgroundColor: 'rgba(90,63,6,0.06)', borderLeft: '2px solid #8b6914' }}>
                  <p className="text-xs italic leading-relaxed" style={{ color: '#5a3f06', fontFamily: "'Caveat', cursive", fontSize: '0.95rem' }}>
                    "Quem faz Poesia não mata e não morre."
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#8b6914', fontFamily: "'Cormorant Garamond', serif" }}>— Pai Poeta</p>
                </div>
              </div>
            </aside>

            {/* Page content — paper texture */}
            <main
              className="flex-1 min-w-0 py-8 px-5 md:px-10 relative"
              style={{
                backgroundImage: `url(${BASE}/paper-texture.jpg)`,
                backgroundSize: '800px',
                backgroundRepeat: 'repeat',
              }}
            >
              <div className="relative z-10">
                {children}
              </div>
            </main>
          </div>

          {/* Earth border right */}
          <div className="hidden lg:block w-16 shrink-0" style={{ backgroundImage: `url(${BASE}/earth-border.jpg)`, backgroundSize: '200px', backgroundRepeat: 'repeat-y', transform: 'scaleX(-1)' }} />
        </div>

        {/* Footer on parchment */}
        <footer
          className="relative py-8 px-4"
          style={{
            backgroundImage: `url(${BASE}/paper-texture.jpg)`,
            backgroundSize: '800px',
            backgroundRepeat: 'repeat',
            borderTop: '3px solid #5a3f06',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.4)',
          }}
        >
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <p className="text-2xl mb-2" style={{ fontFamily: "'Dancing Script', cursive", color: '#5a3f06' }}>
              Pai Poeta
            </p>
            <p className="text-sm mb-3" style={{ color: '#8b6914', fontFamily: "'Cormorant Garamond', serif" }}>
              &copy; Pai Poeta — Todos os direitos reservados
            </p>
            <div className="flex items-center justify-center gap-4 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <a href="https://www.instagram.com/paipoetadebrasilia/" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-70 transition-opacity" style={{ color: '#5a3f06' }}>Instagram</a>
              <span style={{ color: '#c4a55a' }}>|</span>
              <a href="https://twitter.com/PaiPoeta" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-70 transition-opacity" style={{ color: '#5a3f06' }}>Twitter</a>
              <span style={{ color: '#c4a55a' }}>|</span>
              <Link to="/contato" className="no-underline hover:opacity-70 transition-opacity" style={{ color: '#5a3f06' }}>Contato</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

/* ───── Reusable Components ───── */
function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 ink-text" style={{ color: '#3a2208', fontFamily: "'Cormorant Garamond', serif" }}>
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg italic" style={{ color: '#6b4e1a', fontFamily: "'Caveat', cursive", fontSize: '1.3rem' }}>{subtitle}</p>
      )}
      <div className="mt-4" style={{ height: '2px', background: 'linear-gradient(to right, #8b6914, rgba(139,105,20,0.2), transparent)' }} />
    </div>
  )
}

function Ornament() {
  return <div className="text-center text-2xl my-6" style={{ color: '#8b6914' }}>❦</div>
}

function InkCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`p-5 md:p-7 rounded ${className}`}
      style={{
        backgroundColor: 'rgba(245,237,214,0.5)',
        border: '1px solid rgba(90,63,6,0.2)',
        boxShadow: '0 2px 12px rgba(26,14,5,0.08), inset 0 1px 2px rgba(255,255,255,0.5)',
      }}
    >
      {children}
    </div>
  )
}

function VideoEmbed({ url, title }: { url: string; title: string }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2" style={{ color: '#3a2208' }}>{title}</h3>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe className="absolute top-0 left-0 w-full h-full rounded" src={url} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ border: '2px solid rgba(90,63,6,0.3)' }} />
      </div>
    </div>
  )
}

/* ───── Pages ───── */
function HomePage() {
  return (
    <div>
      <div className="text-center py-10 md:py-14">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 ink-text" style={{ fontFamily: "'Dancing Script', cursive", color: '#3a2208' }}>
          Bem-vindo ao Pai Poeta
        </h1>
        <p className="text-xl md:text-2xl italic max-w-2xl mx-auto" style={{ color: '#5a3f06', fontFamily: "'Caveat', cursive", fontSize: '1.6rem' }}>
          "Quem faz Poesia não mata e não morre."
        </p>
        <Ornament />
      </div>

      <InkCard className="mb-8">
        <p className="text-justify leading-relaxed mb-4 ink-text">
          <strong>Pai Poeta</strong> é um personagem do livro <em>Pai Poeta</em>. O autor do livro e criador do portal de mesmo nome é <strong>Renan Lins Alves da Cunha</strong>, médico cardiologista e geriatra de Brasília. O autor utiliza o pseudônimo de <em>Pai Poeta de Brasília</em> nas suas criações literárias em poesia e filosofia, em todas as mídias.
        </p>
        <div className="flex justify-center">
          <Link to="/o-livro" className="inline-flex items-center gap-2 px-6 py-3 rounded no-underline transition-all" style={{ backgroundColor: 'rgba(90,63,6,0.12)', color: '#5a3f06', fontWeight: 600, fontFamily: "'Cormorant Garamond', serif" }}>
            + Leia mais sobre o livro
          </Link>
        </div>
      </InkCard>

      <InkCard className="mb-8">
        <h2 className="text-2xl font-bold mb-3" style={{ color: '#3a2208' }}>Empresa Cult Pai Poeta</h2>
        <p className="text-justify leading-relaxed ink-text">
          O <em><strong>Certificado de Empresa Cult Pai Poeta</strong></em> é um selo de qualidade garantido pelo site Pai Poeta e que, assim como o mesmo, estimula a Cultura, a Paternidade responsável e, primordialmente, a poesia no Brasil.
        </p>
      </InkCard>

      <div className="grid md:grid-cols-2 gap-5 mb-8">
        {[
          { path: '/os-4-pes', title: 'Os 4 "Pês"', desc: 'Paternidade, Pacifismo, Poesia e Pão — os quatro pilares fundamentais.' },
          { path: '/poesia-filosofia', title: 'Poesia & Filosofia', desc: 'Coletânea de poesias e reflexões filosóficas.' },
          { path: '/momentum', title: 'Momentum Filosófico', desc: 'Vídeos sobre existencialismo, estoicismo e mais.' },
          { path: '/cultural', title: 'Pai Poeta Cultural', desc: 'Resenhas culturais e avaliações de filmes.' },
        ].map((item, i) => (
          <Link key={i} to={item.path} className="no-underline">
            <InkCard>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#3a2208' }}>{item.title}</h3>
              <p className="text-sm ink-text">{item.desc}</p>
            </InkCard>
          </Link>
        ))}
      </div>
    </div>
  )
}

function OLivroPage() {
  return (
    <div>
      <PageTitle title="O Livro" subtitle="Pai Poeta — o livro que deu origem a tudo" />
      <InkCard className="mb-8">
        <h2 className="text-2xl font-semibold mb-3" style={{ color: '#3a2208' }}>Sobre o Livro</h2>
        <p className="text-justify leading-relaxed mb-4 ink-text">"Pai Poeta" é o título do conto principal de um livro de contos e poesias, patrocinado pelo IBRAGE e impresso pela LGE Editora. O conto fala de paz, aventura e fantasia em tempos remotos.</p>
        <p className="text-justify leading-relaxed ink-text">A história é uma alegoria da sociedade moderna, traduzindo o que as pessoas deveriam ser — pessoas de paz, preocupadas com a saúde física e mental da humanidade.</p>
      </InkCard>
      <div className="grid md:grid-cols-3 gap-5">
        {['Sobre o Livro', 'A História', 'Seu Espaço'].map((t, i) => (
          <InkCard key={i}><h3 className="text-lg font-semibold" style={{ color: '#3a2208' }}>{t}</h3></InkCard>
        ))}
      </div>
    </div>
  )
}

function OPaiPoetaPage() {
  return (
    <div>
      <PageTitle title="Minha Missão" subtitle="O Pai Poeta — Ano 1315 D.C da Ilha de Rostand" />
      <InkCard className="mb-8">
        <p className="text-center text-xl italic font-semibold mb-5" style={{ color: '#3a2208', fontFamily: "'Caveat', cursive", fontSize: '1.5rem' }}>"Quem faz Poesia não mata e não morre."</p>
        <p className="text-justify leading-relaxed mb-4 ink-text">Poesia e fazer pão são os ofícios do Pai Poeta, transmitidos de geração em geração. Ele vem da Ilha de Rostand, um reino onde a poesia é a linguagem da paz e o pão é o alimento que une as famílias.</p>
        <p className="text-justify leading-relaxed mb-4 ink-text">Agora vivendo em Brasília, o Pai Poeta tem uma missão: a cada mês de agosto — mês dos pais no Brasil — escolher um pai-poeta local para seguir seus passos.</p>
        <p className="text-right italic text-sm mt-4" style={{ color: '#8b6914', fontFamily: "'Caveat', cursive" }}>(Pai Poeta — Ano 1315 D.C da Ilha de Rostand)</p>
      </InkCard>
      <Ornament />
      <InkCard>
        <h2 className="text-2xl font-semibold mb-3" style={{ color: '#3a2208' }}>O Reino de Poetum</h2>
        <p className="text-justify leading-relaxed ink-text">O domínio de Poetum, circundado por imponentes sequências de nobres eucaliptos — um reino afável de indivíduos produtivos e diligentes que cultivavam a terra em produção industrial básica, vestuário e artes.</p>
        <p className="text-xs italic mt-3" style={{ color: '#8b6914', fontFamily: "'Caveat', cursive", fontSize: '0.95rem' }}>T.W. Lawsson — "Reunião e Primavera" 1307 D.C — Poetum — Pintura a óleo</p>
      </InkCard>
    </div>
  )
}

function Os4PesPage() {
  const sections = [
    { title: 'P — Paternidade Responsável', text: 'A Paternidade Responsável é o maior dos 4 Pês. Trata de criar a vida em parceria, dar exemplos, fazer sacrifícios pelas necessidades dos filhos, ensinar sobre a natureza, contos de fadas, esportes, música e os enigmas da vida.' },
    { title: 'P — Pacifismo', text: 'O Pacifismo do Pai Poeta é a crença na poesia como ferramenta de transformação pessoal e social. Defende o uso das palavras como defesa, ouvir mais do que falar. O pacifismo não é fraqueza — é o uso da mente sobre a força física.' },
    { title: 'P — Poesia', text: 'A Poesia é música tocada em palavras, o alimento da alma que fortalece a "musculatura" do cérebro. A poesia transporta os leitores a mundos interiores ocultos e produz comportamentos positivos.' },
    { title: 'P — Pão', text: 'O Pai Poeta é padeiro por profissão. O pão remonta às civilizações antigas: os gregos catalogaram 70 tipos, o Egito o produz há mais de 2.500 anos. O pão alimenta a vida física; a poesia alimenta a vida intelectual e emocional.' },
  ]
  return (
    <div>
      <PageTitle title='Os 4 "Pês"' subtitle="Os quatro pilares do Pai Poeta" />
      <div className="space-y-5">
        {sections.map((s, i) => (
          <InkCard key={i}>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#3a2208' }}>{s.title}</h2>
            <p className="text-justify leading-relaxed ink-text">{s.text}</p>
          </InkCard>
        ))}
      </div>
    </div>
  )
}

function QuemFazPoesiaPage() {
  return (
    <div>
      <PageTitle title='"Quem faz Poesia não mata e não morre"' subtitle="Um pensamento do Pai Poeta" />
      <InkCard className="mb-8">
        <p className="text-justify leading-relaxed mb-4 ink-text">A poesia pode ser considerada uma ferramenta cognitiva para alcançar uma vida satisfatória em termos de bem-estar físico, mental e social.</p>
        <p className="text-justify leading-relaxed mb-4 ink-text">A frase pode ser considerada uma resposta afirmativa em direção à não-violência — uma ferramenta de defesa com letalidade zero. Mesmo o pior criminoso pode ceder diante de uma bela imagem poética.</p>
        <p className="text-justify leading-relaxed mb-4 ink-text">Como disse Sartre, "as palavras são pistolas carregadas," e a palavra poética nunca é disparada para "ferir mortalmente" a alma de outrem — ela se torna uma arma de moderação psicológica.</p>
        <p className="text-right italic text-sm mt-4" style={{ color: '#8b6914', fontFamily: "'Caveat', cursive" }}>— Pai Poeta de Brasília, março 2025</p>
      </InkCard>
      <Ornament />
      <InkCard>
        <h2 className="text-xl font-bold text-center mb-3" style={{ color: '#3a2208' }}>Eu, Drummond e Einstein</h2>
        <p className="text-center italic ink-text">Uma referência ao famoso poema da pedra de Drummond e à citação de Einstein sobre desejo e caminhos.</p>
        <p className="text-right italic text-sm mt-4" style={{ color: '#8b6914', fontFamily: "'Caveat', cursive" }}>— Pai Poeta de Brasília, abril 2025</p>
      </InkCard>
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
          <InkCard key={i}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold" style={{ color: '#3a2208' }}>{p.title}</h3>
              <span className="text-xs shrink-0 ml-4" style={{ color: '#8b6914', fontFamily: "'Cormorant Garamond', serif" }}>{p.date}</span>
            </div>
            <p className="text-sm mt-1 italic" style={{ color: '#6b4e1a', fontFamily: "'Caveat', cursive" }}>Pai Poeta de Brasília</p>
          </InkCard>
        ))}
      </div>
      <p className="mt-6 text-center text-sm italic" style={{ color: '#8b6914', fontFamily: "'Caveat', cursive" }}>
        Para ler os poemas completos, visite{' '}
        <a href="http://www.paipoeta.com.br/regulamento-2" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#5a3f06' }}>o site original</a>
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
      <div className="space-y-6">{videos.map((v, i) => (<InkCard key={i}><p className="text-sm italic mb-3" style={{ color: '#6b4e1a', fontFamily: "'Caveat', cursive", fontSize: '1.1rem' }}>{v.desc}</p><VideoEmbed url={v.url} title={v.title} /></InkCard>))}</div>
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
          <InkCard key={i}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold" style={{ color: '#3a2208' }}>{r.title}</h3>
              <span className="text-sm font-bold px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(90,63,6,0.12)', color: '#5a3f06', fontFamily: "'Cormorant Garamond', serif" }}>{r.rating}/5+</span>
            </div>
            <VideoEmbed url={r.url} title={r.title} />
          </InkCard>
        ))}
      </div>
      <p className="mt-6 text-center text-sm italic" style={{ color: '#8b6914', fontFamily: "'Caveat', cursive" }}>
        Mais de 30 resenhas no <a href="http://www.paipoeta.com.br/pai-poeta-cultural" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#5a3f06' }}>acervo completo</a>
      </p>
    </div>
  )
}

function ColunaPaisPage() {
  return (
    <div>
      <PageTitle title="Coluna dos Pais Poetas" subtitle="Encontros literários e crônicas" />
      <InkCard className="mb-6">
        <h2 className="text-xl font-semibold mb-3" style={{ color: '#3a2208' }}>Pai Poeta Encontros</h2>
        <p className="text-justify leading-relaxed mb-3 ink-text">Uma narrativa fictícia descrevendo um encontro imaginário entre o personagem Pai Poeta e os poetas românticos ingleses Byron e Keats, no pub Spaniard's Inn em Londres, durante o inverno de 1816.</p>
        <p className="text-xs italic" style={{ color: '#8b6914', fontFamily: "'Caveat', cursive", fontSize: '0.95rem' }}>O Spaniard's Inn em Londres — Sim, meus amigos, ele existe.</p>
      </InkCard>
      <h3 className="text-lg font-semibold mb-3" style={{ color: '#3a2208' }}>Mais na Coluna</h3>
      <div className="grid md:grid-cols-2 gap-3">
        {['Histórias de Poeta e suas Viagens', 'Tributo ao Poeta Salgado Maranhão I', 'Tributo ao Poeta Salgado Maranhão II', 'Angora', 'Um dia no trabalho', 'Coco, Asneira'].map((t, i) => (
          <InkCard key={i}><h4 className="text-base font-medium" style={{ color: '#3a2208' }}>{t}</h4></InkCard>
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
        <InkCard>
          <h3 className="text-lg font-semibold mb-2" style={{ color: '#3a2208' }}>Mensagem da Brigada Anti-Tabagismo</h3>
          <p className="text-sm mb-2" style={{ color: '#6b4e1a', fontFamily: "'Cormorant Garamond', serif" }}>Instituto Brasileiro de Geriatria Preventiva — IBRAGE</p>
          <p className="text-justify leading-relaxed ink-text">Orientações e campanhas de conscientização sobre os males do tabagismo.</p>
        </InkCard>
        <InkCard>
          <h3 className="text-lg font-semibold mb-2" style={{ color: '#3a2208' }}>Pai Poeta e o Sono</h3>
          <p className="text-justify leading-relaxed ink-text">Reflexões sobre a importância do sono para a saúde, escritas pelo Dr. Renan Lins Alves da Cunha, cardiologista e geriatra.</p>
        </InkCard>
      </div>
    </div>
  )
}

function EmpresaCultPage() {
  return (
    <div>
      <PageTitle title="Empresa Cult Pai Poeta" subtitle="O Selo de Qualidade" />
      <InkCard className="mb-6">
        <p className="text-justify leading-relaxed mb-4 ink-text">O <em><strong>Certificado de Empresa Cult Pai Poeta</strong></em> é um selo de qualidade que promove a Cultura, a Poesia, a Integração Familiar e a Paternidade Responsável no Brasil.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 ink-text">
          <li>Apoio incondicional às ideias e iniciativas do site Pai Poeta</li>
          <li>Apoio à Paternidade Responsável e Pró-ativa</li>
          <li>Incentivo a concursos Pai Poeta entre funcionários</li>
          <li>Organização de eventos culturais e esportivos entre pais e filhos</li>
          <li>Estímulo à criação literária poética</li>
        </ul>
      </InkCard>
      <InkCard>
        <h2 className="text-xl font-semibold mb-3" style={{ color: '#3a2208' }}>IBRAGE</h2>
        <p className="text-justify leading-relaxed ink-text">O <strong>Instituto Brasileiro de Geriatria Preventiva</strong> é a primeira Empresa Cult Pai Poeta e parceira institucional, com as áreas IBRAGE MED (trabalhos científicos) e IBRAGE CULT (produção cultural).</p>
        <p className="text-xs mt-3" style={{ color: '#8b6914', fontFamily: "'Cormorant Garamond', serif" }}>Setor Terminal Norte, Bloco O, Ed. Life Center, sala 136 — Asa Norte, Brasília</p>
      </InkCard>
    </div>
  )
}

function LojaPage() {
  return (
    <div>
      <PageTitle title="Loja Pai Poeta" subtitle="SmartFashion — Vista a Poesia" />
      <InkCard>
        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold mb-1" style={{ color: '#3a2208' }}>Camisa Pai Poeta</h2>
          <p className="text-xl font-semibold" style={{ color: '#8b6914', fontFamily: "'Cormorant Garamond', serif" }}>R$ 130,00</p>
        </div>
        <p className="text-justify leading-relaxed mb-4 ink-text">O conceito <strong>SmartFashion</strong> traz uma camisa preta exclusiva com caixa personalizada e um poema em papel timbrado. Presente ideal para Dia dos Pais, aniversários e mais.</p>
        <div className="p-4 rounded text-center mb-4" style={{ backgroundColor: 'rgba(90,63,6,0.06)', border: '1px dashed #8b6914' }}>
          <p className="text-lg italic" style={{ color: '#5a3f06', fontFamily: "'Caveat', cursive", fontSize: '1.4rem' }}>"Com o Pai Poeta, Você veste a Poesia."</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm ink-text">
          <div><p><strong>Tamanhos:</strong> G e GG</p><p><strong>Modelo:</strong> Unissex</p></div>
          <div><p><strong>Personalização:</strong> Lema "Quem faz poesia não mata e não morre"</p><p><strong>Entrega:</strong> Até 15 dias úteis</p></div>
        </div>
      </InkCard>
    </div>
  )
}

function ContatoPage() {
  return (
    <div>
      <PageTitle title="Fale Conosco" subtitle="Entre em contato com o Pai Poeta" />
      <InkCard className="mb-6">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {[{ label: 'E-mail', type: 'email', placeholder: 'seu@email.com' }, { label: 'Assunto', type: 'text', placeholder: 'Assunto da mensagem' }].map((f, i) => (
            <div key={i}>
              <label className="block text-sm font-medium mb-1" style={{ color: '#5a3f06', fontFamily: "'Cormorant Garamond', serif" }}>{f.label} *</label>
              <input type={f.type} required className="w-full px-4 py-3 rounded text-sm outline-none" style={{ backgroundColor: 'rgba(245,237,214,0.6)', border: '1px solid rgba(90,63,6,0.25)', color: '#2c1810', fontFamily: "'Caveat', cursive", fontSize: '1.1rem' }} placeholder={f.placeholder} />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#5a3f06', fontFamily: "'Cormorant Garamond', serif" }}>Mensagem *</label>
            <textarea required rows={6} className="w-full px-4 py-3 rounded text-sm outline-none resize-vertical" style={{ backgroundColor: 'rgba(245,237,214,0.6)', border: '1px solid rgba(90,63,6,0.25)', color: '#2c1810', fontFamily: "'Caveat', cursive", fontSize: '1.1rem' }} placeholder="Escreva sua mensagem..." />
          </div>
          <button type="submit" className="px-8 py-3 rounded text-sm font-semibold cursor-pointer transition-all" style={{ backgroundColor: '#5a3f06', color: '#f5edd6', border: 'none', fontFamily: "'Cormorant Garamond', serif" }}>Enviar</button>
        </form>
      </InkCard>
      <InkCard>
        <h3 className="text-lg font-semibold mb-2" style={{ color: '#3a2208' }}>Fundador</h3>
        <p className="text-sm ink-text"><strong>Dr. Renan Lins Alves da Cunha</strong><br />Médico Cardiologista e Geriatra — Brasília, DF</p>
        <div className="flex gap-4 mt-3">
          <a href="https://www.instagram.com/paipoetadebrasilia/" target="_blank" rel="noopener noreferrer" className="text-sm no-underline" style={{ color: '#5a3f06', fontFamily: "'Cormorant Garamond', serif" }}>Instagram</a>
          <a href="https://twitter.com/PaiPoeta" target="_blank" rel="noopener noreferrer" className="text-sm no-underline" style={{ color: '#5a3f06', fontFamily: "'Cormorant Garamond', serif" }}>Twitter</a>
        </div>
      </InkCard>
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
