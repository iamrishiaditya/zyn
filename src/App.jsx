import { useState } from 'react'
import { Icon } from './components/Icons'
import { HeroScene } from './components/HeroScene'
import './App.css'

const features = [
  {
    number: '01',
    icon: 'spark',
    title: 'Intelligent flows',
    text: 'Turn repeatable work into resilient, human-friendly automations that keep moving.',
    accent: 'violet',
  },
  {
    number: '02',
    icon: 'layers',
    title: 'One shared signal',
    text: 'Bring projects, people, and priorities into one beautifully clear operating view.',
    accent: 'cyan',
  },
  {
    number: '03',
    icon: 'shield',
    title: 'Built to scale',
    text: 'Thoughtful controls and dependable architecture that grow with every new idea.',
    accent: 'coral',
  },
]

const navItems = [
  { label: 'Product', href: '#product' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Why Zynvixs', href: '#why-zynvixs' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Zynvixs home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>ZYNVIXS</span>
        </a>

        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span className="sr-only">{menuOpen ? 'Close' : 'Open'} navigation</span>
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
        </button>

        <nav id="site-navigation" className={menuOpen ? 'nav-open' : ''} aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.label} href={item.href} onClick={closeMenu}>{item.label}</a>)}
          <a className="nav-cta mobile-cta" href="#contact" onClick={closeMenu}>Start a conversation <Icon name="arrow-up-right" size={15} /></a>
        </nav>
        <a className="nav-cta desktop-cta" href="#contact">Start a conversation <Icon name="arrow-up-right" size={15} /></a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span /> THE NEXT LAYER OF WORK</p>
          <h1>Make complex work<em>feel inevitable.</em></h1>
          <p className="hero-description">Zynvixs Nexus brings people, intelligence, and momentum into one clear command center.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#product">Explore Nexus <Icon name="arrow-right" size={18} /></a>
            <a className="button button-ghost" href="#showcase"><span className="play-icon"><Icon name="play" size={13} /></span>See it in motion</a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true"><span className="avatar avatar-one">A</span><span className="avatar avatar-two">J</span><span className="avatar avatar-three">M</span></div>
            <p><strong>Built for people who make things happen.</strong><span>Designed to keep teams in flow.</span></p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Animated 3D illustration of the Zynvixs Nexus platform">
          <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
          <div className="scene-wrap"><HeroScene /></div>
          <div className="floating-card card-projects"><span className="card-icon cyan"><Icon name="layers" size={15} /></span><div><small>ACTIVE PROJECTS</small><strong>12 <b>+18%</b></strong></div></div>
          <div className="floating-card card-velocity"><span className="pulse-dot" /><div><small>FLOW VELOCITY</small><strong>Exceptional</strong></div><span className="trend"><Icon name="trend-up" size={17} /></span></div>
          <div className="orbit-label label-one"><span /> SYNCED</div><div className="orbit-label label-two"><span /> ALWAYS ON</div>
          <p className="drag-note"><Icon name="rotate" size={14} /> a living system</p>
        </div>
      </section>

      <section className="signal-strip" aria-label="Product capabilities"><p>DESIGNED FOR MOMENTUM</p><span className="signal-line" /><p>HUMAN-CENTERED AI</p><span className="signal-line" /><p>BUILT FOR WHAT&apos;S NEXT</p></section>

      <section id="product" className="intro-section section-shell">
        <div className="section-heading"><p className="eyebrow"><span /> A CALMER WAY TO MOVE</p><h2>One place to see the whole <em>possibility.</em></h2></div>
        <p className="intro-copy">Nexus is the intelligent workspace for teams who want less busywork and more meaningful progress. It turns disconnected signals into the next right move.</p>
        <div id="showcase" className="product-window">
          <div className="window-topbar"><div className="traffic-lights"><i /><i /><i /></div><div className="window-address"><Icon name="lock" size={12} /> app.zynvixs.io/nexus</div><div className="window-dots"><i /><i /><i /></div></div>
          <div className="workspace">
            <aside className="workspace-sidebar"><span className="workspace-logo"><b /></span><div className="side-group"><i className="side-item active" /><i className="side-item" /><i className="side-item" /><i className="side-item" /></div><div className="side-avatar">AS</div></aside>
            <div className="workspace-main">
              <div className="workspace-heading"><div><small>MONDAY, 09:41</small><h3>Good morning, Aditya <span>✦</span></h3></div><button type="button" aria-label="Add new item"><Icon name="plus" size={17} /></button></div>
              <div className="workspace-grid">
                <article className="focus-card"><div className="mini-card-head"><span>YOUR FOCUS</span><Icon name="more" size={18} /></div><div className="focus-content"><div className="task-illustration"><i /><i /><i /></div><div><small>DEEP WORK</small><h4>Platform redesign</h4><p>45 min remaining</p></div></div><div className="progress"><i /></div></article>
                <article className="pulse-card"><div className="mini-card-head"><span>TEAM PULSE</span><span className="live-tag">LIVE</span></div><div className="pulse-score">94<span>%</span></div><p>Energy is high across your team.</p><div className="pulse-bars"><i /><i /><i /><i /><i /><i /><i /></div></article>
                <article className="activity-card"><div className="mini-card-head"><span>UP NEXT</span><Icon name="arrow-up-right" size={14} /></div><div className="activity-row"><span className="activity-icon violet"><Icon name="spark" size={14} /></span><p><b>Design review</b><small>in 18 minutes</small></p><i className="activity-check" /></div><div className="activity-row"><span className="activity-icon coral"><Icon name="bolt" size={14} /></span><p><b>Ship launch notes</b><small>Today, 2:00 PM</small></p><i className="activity-check" /></div></article>
              </div>
            </div>
          </div>
          <div className="window-reflection" aria-hidden="true" />
        </div>
      </section>

      <section id="solutions" className="features-section section-shell">
        <div className="features-intro"><p className="eyebrow"><span /> THE NEXUS ADVANTAGE</p><h2>Less noise. More <em>noticing.</em></h2><p>Every detail is shaped to make your team feel more capable, connected, and ready.</p></div>
        <div className="feature-grid">{features.map((feature) => <article className={`feature-card ${feature.accent}`} key={feature.number}><div className="feature-top"><span>{feature.number}</span><div className="feature-icon"><Icon name={feature.icon} size={22} /></div></div><h3>{feature.title}</h3><p>{feature.text}</p><a href="#contact" aria-label={`Learn more about ${feature.title}`}><Icon name="arrow-up-right" size={19} /></a></article>)}</div>
      </section>

      <section id="why-zynvixs" className="benefits-section section-shell">
        <div className="benefit-visual"><div className="benefit-grid" /><div className="prism prism-back" /><div className="prism prism-front"><span>∞</span></div><div className="benefit-chip chip-one"><i /> FOCUS</div><div className="benefit-chip chip-two"><i /> FLOW</div><div className="benefit-ring ring-a" /><div className="benefit-ring ring-b" /></div>
        <div className="benefit-copy"><p className="eyebrow"><span /> DESIGNED WITH INTENTION</p><h2>Technology should make you feel <em>more human.</em></h2><p>We pair thoughtful design with practical intelligence to create tools that respect attention and amplify what your team does best.</p><ul><li><Icon name="check" size={17} /><span><b>Clarity, by default</b><small>See what matters without chasing updates.</small></span></li><li><Icon name="check" size={17} /><span><b>Progress you can feel</b><small>Turn small wins into visible momentum.</small></span></li><li><Icon name="check" size={17} /><span><b>Built around your people</b><small>Adaptable spaces that work the way you do.</small></span></li></ul></div>
      </section>

      <section id="contact" className="cta-section section-shell"><div className="cta-orb orb-left" /><div className="cta-orb orb-right" /><p className="eyebrow"><span /> YOUR NEXT CHAPTER</p><h2>Make room for<br /><em>what matters.</em></h2><p>See how a more connected way of working can change the shape of your day.</p><a className="button button-light" href="mailto:hello@zynvixs.com">Start a conversation <Icon name="arrow-right" size={18} /></a><div className="cta-spark spark-one">✦</div><div className="cta-spark spark-two">✦</div><div className="cta-spark spark-three">✦</div></section>

      <footer className="site-footer"><a className="brand" href="#top" aria-label="Back to top"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>ZYNVIXS</span></a><p>© 2026 Zynvixs. Designed for what&apos;s next.</p><div><a href="#top">LinkedIn</a><a href="#top">Instagram</a><a href="#top">Dribbble</a></div></footer>
    </main>
  )
}

export default App
