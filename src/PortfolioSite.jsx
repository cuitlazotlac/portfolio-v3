import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import cryptowatcher from "./assets/images/portfolios/cryptowatcher.png";
import katakomb from "./assets/images/portfolios/katakomb.png";
import spread from "./assets/images/portfolios/spread.png";
import defiFarm from "./assets/images/portfolios/defi_farm.png";
import ethSignin from "./assets/images/portfolios/ethsignin.png";
import nftMint from "./assets/images/portfolios/nftmint.png";

const projects = [
  { number: "01", title: "Crypto Watcher", type: "Product build · React", description: "A cryptocurrency market monitor that brings live prices and industry news into one focused experience.", image: cryptowatcher, github: "https://github.com/cuitlazotlac/crypto-watcher-v2", live: "https://cuitlazotlac.github.io/crypto-watcher-v2/", tags: ["React", "API", "Product UI"] },
  { number: "02", title: "Katakomb", type: "Web3 product · DApp", description: "A full-stack Ethereum experiment for sending transactions and learning the interaction between wallets, contracts, and interfaces.", image: katakomb, github: "https://github.com/cuitlazotlac/katakomb", tags: ["Vite", "Ethers", "Solidity"] },
  { number: "03", title: "Spread", type: "Social product · Web3", description: "A decentralized social prototype combining wallet connection, smart contracts, and an IPFS-hosted interface.", image: spread, github: "https://github.com/cuitlazotlac/twitter-clone", tags: ["React", "IPFS", "Hardhat"] },
  { number: "04", title: "DeFi Token Farm", type: "Financial product · DApp", description: "A digital banking simulation for depositing crypto assets and earning rewards through a connected smart contract.", image: defiFarm, github: "https://github.com/cuitlazotlac/defi_app", tags: ["Ethereum", "Web3.js", "Truffle"] },
  { number: "05", title: "ETH SignIn", type: "Identity product · Web3", description: "A wallet-based identity management concept for creating, reading, and updating a portable user profile.", image: ethSignin, github: "https://github.com/cuitlazotlac/eth-sign-in", live: "https://cuitlazotlac.github.io/eth-sign-in/", tags: ["Ceramic", "DIDs", "Ethers"] },
  { number: "06", title: "NFT Mint", type: "Creator product · Web3", description: "A compact minting flow that connects a wallet, calls a smart contract, and creates a digital asset.", image: nftMint, github: "https://github.com/cuitlazotlac/full-mint-website", live: "https://cuitlazotlac.github.io/full-mint-website/", tags: ["Solidity", "Hardhat", "React"] },
];

const experiences = [
  { index: "A1", company: "Luxor Technology", role: "Senior Product Manager", copy: "Building products that help bitcoin miners operate, measure, and maximize their hashrate." },
  { index: "A2", company: "Société Générale CIB", role: "Product Manager", copy: "Built developer-facing products and experiences while contributing to product exploration inside the innovation center." },
  { index: "A3", company: "Confsquare", role: "Co-founder", copy: "Explored a more intentional way to organize events and help communities create meaningful connections." },
  { index: "A4", company: "Independent builds", role: "Product · Design · Code", copy: "Turned product questions into working prototypes across APIs, analytics, Web3, and consumer interfaces." },
];

const focusTracks = [
  { eyebrow: "01 · END TO END", title: "Product leadership", copy: "From discovery and strategy to delivery, measurement, and the next decision." },
  { eyebrow: "02 · SYSTEMS", title: "Technical products", copy: "Developer tools, APIs, platforms, data models, and workflows where clarity matters." },
  { eyebrow: "03 · PRACTICE", title: "Product craft", copy: "Research, interface thinking, analytics, and prototypes that keep teams close to users." },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function SectionRule({ label }) {
  return <div className="section-rule" aria-hidden="true"><span>{label}</span><i /></div>;
}

function Header({ light, onTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setMenuOpen(false), [location.pathname]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="HVE — home">HVE<span>.</span></Link>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
          <NavLink end to="/" className={({ isActive }) => isActive ? "active" : undefined}>Welcome</NavLink>
          <NavLink to="/work" className={({ isActive }) => isActive ? "active" : undefined}>Work</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : undefined}>Profile</NavLink>
          <button className="theme-toggle" type="button" onClick={onTheme} aria-label={light ? "Switch to dark" : "Switch to light"}><span /></button>
          <NavLink className={({ isActive }) => isActive ? "nav-contact active" : "nav-contact"} to="/contact">Contact</NavLink>
        </nav>
        <div className="mobile-controls">
          <button className="theme-toggle" type="button" onClick={onTheme} aria-label={light ? "Switch to dark" : "Switch to light"}><span /></button>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Open menu" onClick={() => setMenuOpen((value) => !value)}><i /><i /></button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-stage">
        <Link className="button button-amber" to="/work">Explore portfolio <Arrow /></Link>
        <p className="footer-kit"><span>HVE</span> Product · Systems · Delivery</p>
        <div className="signal-line" aria-hidden="true">{["DISCOVER", "FRAME", "BUILD", "SHIP", "LEARN"].map((item) => <span key={item}>{item}</span>)}</div>
      </div>
      <div className="footer-grid">
        <div><h4>Contact</h4><a className="footer-strong" href="mailto:heyhayssem@gmail.com">heyhayssem@gmail.com</a><p>Let&apos;s build something useful.</p><p>Toronto · Eastern Time</p></div>
        <div><h4>Sitemap</h4><Link to="/">Welcome</Link><Link to="/work">Work</Link><Link to="/about">Profile</Link><Link to="/contact">Contact</Link></div>
        <div><h4>Elsewhere</h4><a href="https://github.com/cuitlazotlac" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/hayssem-elsayed/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="https://www.behance.net/cuitlazotlac" target="_blank" rel="noreferrer">Behance <Arrow /></a><a href="https://codepen.io/cuitlazotlac" target="_blank" rel="noreferrer">CodePen <Arrow /></a></div>
        <div><h4>Practice</h4><p>Product management · Platforms</p><p>Data · Interfaces · AI</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Hayssem Vazquez-Elsayed</span><span>Built with intention.</span></div>
    </footer>
  );
}

export function SiteFrame({ children }) {
  const [light, setLight] = useState(true);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <div className={light ? "site-shell light" : "site-shell"}><Header light={light} onTheme={() => setLight((value) => !value)} /><main>{children}</main><Footer /></div>;
}

function ProductBench() {
  const [active, setActive] = useState(0);
  const items = [
    { title: "Product strategy", meta: "OUTCOMES · ROADMAP", command: "frame the right problem", response: "Connect user evidence, business context, and technical constraints before committing the team." },
    { title: "AI & automation", meta: "WORKFLOWS · DAILY", command: "remove repeated work", response: "Use automation where it sharpens judgment, speeds feedback, or keeps teams close to the system." },
    { title: "Data & growth", meta: "SIGNALS · LEARNING", command: "measure what changed", response: "Turn behavior, qualitative insight, and experiments into the next focused product decision." },
    { title: "Design systems", meta: "CLARITY · SCALE", command: "make the product coherent", response: "Build reusable patterns so teams can move faster without fragmenting the experience." },
  ];
  const item = items[active];
  return (
    <div className="bench-window">
      <div className="bench-bar"><span>● ● ●</span><strong>PORTFOLIO / PRODUCT / SYSTEMS</strong><small>● READY</small></div>
      <div className="bench-layout">
        <div className="bench-tabs"><small>EXPERTISE</small>{items.map((entry, index) => <button key={entry.title} className={active === index ? "active" : ""} onClick={() => setActive(index)} type="button"><strong>{entry.title}</strong><span>{entry.meta}</span></button>)}<div className="bench-count">{active + 1} / {items.length} OPENED</div></div>
        <div className="bench-canvas">
          <div className="canvas-label"><span>WORKSPACE</span><span>BENCH · LIVE</span></div><div className="canvas-note">HVE</div>
          <div className="canvas-card"><small>NOW WORKING ON</small><strong>{item.title}</strong><p>{item.command}</p></div>
          <div className="canvas-tools"><span>FIGMA</span><span>SQL</span><span>CODE</span><span>AI</span></div>
          <div className="bench-console"><span>❯</span><div><small>{item.command}</small><p>↳ {item.response}</p></div></div>
        </div>
      </div>
      <div className="bench-caption">FIG. 004 — FOUR TRACKS, ONE BENCH <span>PRODUCT, DATA, SYSTEMS, DELIVERY</span></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero page-pad">
      <div className="hero-grid"><h1>I build products, platforms,<br />and systems that <em>move work forward.</em></h1><div className="hero-copy"><p>6+ years shaping B2B and B2C products across technical platforms, developer experiences, data, and Web3.</p><div className="button-row"><Link className="button button-amber" to="/work">View selected work <Arrow /></Link><Link className="button button-ghost" to="/about">About me <Arrow /></Link></div></div></div>
      <div className="career-rail"><span>01</span><strong>Luxor Technology</strong><small>Senior Product Manager</small><i /><small>Next projects</small></div>
      <ProductBench />
    </section>
  );
}

function FocusSection() {
  const [index, setIndex] = useState(0);
  const track = focusTracks[index];
  return (
    <section className="focus-section"><SectionRule label="Tracks" /><div className="section-intro centered"><h2>Primarily <em>focused on</em></h2><p>Product practice shaped by technical systems, clear evidence, and the people using what ships.</p></div><div className="focus-stage"><div className="blueprint" aria-hidden="true"><i /><i /><i /><span>12 COL · HVE</span></div><div className="focus-copy"><h3>{track.title}</h3><small>{track.eyebrow}</small><p>{track.copy}</p><div className="stepper"><button type="button" onClick={() => setIndex((index - 1 + focusTracks.length) % focusTracks.length)} aria-label="Previous track">←</button><button type="button" onClick={() => setIndex((index + 1) % focusTracks.length)} aria-label="Next track">→</button></div></div></div></section>
  );
}

function MetricsSection() {
  const metrics = [{ value: "6+", label: "Years building products", size: 48, solid: true }, { value: "10+", label: "Public product builds", size: 84 }, { value: "3", label: "Core disciplines", size: 56 }, { value: "2", label: "B2B & B2C contexts", size: 46 }];
  return <section className="metrics-section"><SectionRule label="By the numbers" /><div className="section-intro centered narrow"><h2>Product work,<br /><em>counted clearly.</em></h2><p>A practice built across strategy, delivery, technical systems, and hands-on experiments.</p><Link className="text-link" to="/about">Read the full profile →</Link></div><div className="metric-grid">{metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><div className={metric.solid ? "metric-bar solid" : "metric-bar"} style={{ height: `${metric.size}px` }} /><span>{metric.label}</span></div>)}</div></section>;
}

function ToolsSection() {
  const tools = ["Figma", "SQL", "PostHog", "GitHub", "APIs", "AI agents", "React", "Power BI"];
  return <section className="tools-section"><SectionRule label="Working kit" /><div className="section-intro"><h2>Tools are part of how I <em>think, test & ship.</em></h2><p>Not decoration — a working practice for turning rough ideas into evidence, interfaces, and shipped product.</p></div><div className="tool-marquee" aria-label="Tools I work with">{tools.map((tool, index) => <span key={tool}>{String(index + 1).padStart(2, "0")} {tool}</span>)}</div></section>;
}

function ExperienceSection() {
  return <section className="experience-section"><SectionRule label="Teams" /><div className="section-intro"><h2>Where I&apos;ve <em>worked</em></h2><p>From financial services and developer platforms to mining infrastructure and founder-led experiments.</p></div><div className="experience-grid">{experiences.map((experience) => <article key={experience.index}><small>{experience.index}</small><h3>{experience.company}</h3><span>{experience.role}</span><p>{experience.copy}</p></article>)}</div></section>;
}

function SelectedWork() {
  const visible = [projects[0], projects[1], projects[2], projects[4], projects[5], projects[3]];
  return <section className="selected-work"><SectionRule label="Selected screens" /><div className="mosaic">{visible.map((project, index) => <Link to="/work" className={`mosaic-item item-${index + 1}`} key={project.title}><img src={project.image} alt={`${project.title} interface`} /><span>{project.number} · {project.title}</span></Link>)}</div></section>;
}

export function HomePage() { return <><Hero /><FocusSection /><MetricsSection /><ToolsSection /><ExperienceSection /><SelectedWork /></>; }

function WorkHero() { return <section className="subpage-hero page-pad"><div><h1>Explore my work,<br />process <em>and builds.</em></h1></div><div><p>Product work and side explorations across platforms, analytics, APIs, Web3, and interfaces. The common thread is learning by shipping.</p><a className="button button-amber" href="#project-grid">View the projects ↓</a></div></section>; }

function ProjectRail() {
  const [active, setActive] = useState(0);
  return <section className="project-rail" aria-label="Featured projects">{projects.map((project, index) => <button type="button" className={active === index ? "project-slat active" : "project-slat"} onClick={() => setActive(index)} key={project.title}>{active === index && <img src={project.image} alt="" />}<span className="slat-plus">{active === index ? "×" : "+"}</span><span className="slat-copy"><strong>{project.title}</strong><small>{project.type}</small></span>{active === index && <p>{project.description}</p>}</button>)}</section>;
}

function ProjectGrid() {
  return <section className="work-grid-section" id="project-grid"><SectionRule label="Projects" /><div className="section-intro"><h2>Everything, <em>up close.</em></h2><p>Selected experiments and working products. Open the source, visit the live build where available, or inspect the system at a glance.</p></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><div className="project-media"><img src={project.image} alt={`${project.title} interface`} /></div><div className="project-meta"><span>{project.number}</span><small>{project.type}</small></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer">Source <Arrow /></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live <Arrow /></a>}</div></article>)}</div></section>;
}

export function WorkPage() { return <><WorkHero /><ProjectRail /><ProjectGrid /><ToolsSection /></>; }

export function ProfilePage() {
  return <><section className="profile-opening page-pad"><p>Over the last 6+ years, I&apos;ve worked across technical products, financial services, and founder-led experiments—building developer experiences, platforms, APIs, analytics, and interfaces. I like hard problems, clear evidence, and teams that stay close to their users.</p><div className="profile-diagram" aria-hidden="true"><span>HVE</span><i /><i /><i /><strong>PRODUCT / SYSTEMS / PEOPLE</strong></div></section><section className="profile-story"><SectionRule label="Profile" /><div className="story-grid"><h2>Started by learning to build, moved into product, and kept the hands-on curiosity.</h2><p>I shape products from early questions through launch and learning. That means research, strategy, prioritization, design collaboration, technical trade-offs, data analysis, and occasionally opening the code to make the idea concrete.</p></div></section><section className="how-i-work"><SectionRule label="How I work" /><div className="how-grid"><div><h2>Long story short,<br />I make complexity <em>workable.</em></h2><small>MONTRÉAL → TORONTO · 2018 — NOW</small></div><div><p>I connect customer context, business outcomes, and technical reality so teams can make confident decisions and ship useful work.</p><p>And yes—I still enjoy the artifacts: flows, SQL queries, prototypes, API docs, and the small details that make a product understandable.</p><div className="tag-row"><span>Product strategy</span><span>Platforms</span><span>APIs</span><span>Data</span><span>UX/UI</span><span>AI workflows</span></div></div></div></section><ExperienceSection /><section className="profile-cta"><SectionRule label="Next" /><div><h2>Looking for a product leader who can move between strategy and the system?</h2><Link className="button button-amber" to="/contact">Let&apos;s talk <Arrow /></Link></div></section></>;
}

export function ContactPage() {
  return <section className="contact-page page-pad"><SectionRule label="Contact" /><div className="contact-grid"><div><h1>Let&apos;s make the next product decision <em>clearer.</em></h1><p>For product leadership, platform work, thoughtful collaborations, or simply comparing notes.</p></div><div className="contact-links"><a href="mailto:heyhayssem@gmail.com"><span>Email</span><strong>heyhayssem@gmail.com</strong><Arrow /></a><a href="https://www.linkedin.com/in/hayssem-elsayed/" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>hayssem-elsayed</strong><Arrow /></a><a href="https://github.com/cuitlazotlac" target="_blank" rel="noreferrer"><span>GitHub</span><strong>cuitlazotlac</strong><Arrow /></a></div></div><div className="contact-status"><span>● AVAILABLE FOR THE RIGHT CONVERSATION</span><span>TORONTO · ET</span></div></section>;
}
