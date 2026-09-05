import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
const experiences = [
  {
    index: "A1",
    logo: "TK",
    company: "Tenki",
    role: "Senior Product Manager",
    copy: "Building developer infrastructure and products that make compute easier to access, run, and scale.",
    tags: ["Developer Tools", "Infrastructure", "AI"],
  },
  {
    index: "A2",
    logo: "LX",
    company: "Luxor Technology",
    role: "Senior Product Manager",
    copy: "Joined as the first PM, leading core products and launching new ones from 0→1, including ASIC firmware.",
    tags: ["Bitcoin", "0→1", "B2BC"],
  },
  {
    index: "A3",
    logo: "SG",
    company: "Société Générale CIB",
    role: "Product Manager",
    copy: "Built developer-facing products and experiences while contributing to product exploration inside the innovation center.",
    tags: ["Fintech", "APIs", "Platform"],
  },
  {
    index: "A4",
    logo: "BNP",
    company: "BNP Paribas Cardif",
    role: "Technical Project Manager",
    copy: "Built internal products and data systems to improve sales workflows and operational efficiency.",
    tags: ["Insurance", "Data", "B2B"],
  },
];

const focusTracks = [
  {
    eyebrow: "01 · END TO END",
    title: "Product Leadership",
    copy: "Taking products from an early problem to something people use, measure, and improve.",
    nodes: [
      ["DISCOVER", "42 SIGNALS"],
      ["FRAME", "03 BETS"],
      ["SHIP", "Q3 ACTIVE"],
    ],
  },
  {
    eyebrow: "02 · SYSTEMS",
    title: "Technical Products",
    copy: "Making complex systems easier to understand, use, and build on.",
    nodes: [
      ["CLIENT", "REQUEST"],
      ["API", "200 OK"],
      ["DATA", "SYNCED"],
    ],
  },
  {
    eyebrow: "03 · ZERO TO ONE",
    title: "From Idea to Production",
    copy: "Turning early ideas into real products, shaping the concept, building the first version, and getting it into users' hands.",
    nodes: [
      ["IDEA", "EARLY"],
      ["BUILD", "V.01"],
      ["SHIP", "LIVE"],
    ],
  },
];

function Arrow() {
  return (
    <span className="arrow-icon" aria-hidden="true">
      <svg className="arrow-glyph" viewBox="0 0 16 16">
        <path d="M4 12 12 4M6 4h6v6" />
      </svg>
    </span>
  );
}

function ContactIcon({ type }) {
  if (type === "email")
    return (
      <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  if (type === "linkedin")
    return (
      <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M8 10v7M8 7.5v.1M12 17v-4a3 3 0 0 1 6 0v4M12 10v7" />
      </svg>
    );
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 21v-3.5c0-1 .1-1.4-.5-2 3 0 6-1.5 6-6A4.6 4.6 0 0 0 19.3 6c.1-.8.1-1.8-.3-3 0 0-1 0-3.5 1.5a12 12 0 0 0-7 0C6 3 5 3 5 3c-.4 1.2-.4 2.2-.3 3a4.6 4.6 0 0 0-1.2 3.5c0 4.5 3 6 6 6-.6.6-.6 1.2-.5 2V21M9 19c-3 .9-3-1.5-4.5-2" />
    </svg>
  );
}

function SectionRule({ label }) {
  return (
    <div className="section-rule" aria-hidden="true">
      <span>{label}</span>
      <i />
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setMenuOpen(false), [location.pathname]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="HVE — home">
          <img src="/hve-logo.svg" alt="" />
        </Link>
        <nav
          className={menuOpen ? "site-nav is-open" : "site-nav"}
          aria-label="Primary navigation"
        >
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Profile
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-contact active" : "nav-contact"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
        <div className="mobile-controls">
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <i />
            <i />
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-stage">
        <Link className="button button-amber" to="/contact">
          Start a conversation <Arrow />
        </Link>
        <p className="footer-kit">
          <span>HVE</span> Product · Systems · Delivery
        </p>
        <div className="signal-line" aria-hidden="true">
          {["DISCOVER", "FRAME", "BUILD", "SHIP", "LEARN"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="footer-grid">
        <div>
          <h4>Contact</h4>
          <a className="footer-strong" href="mailto:heyhayssem@gmail.com">
            heyhayssem@gmail.com
          </a>
          <p> Ideas are better in production.</p>
          <p>Toronto · Eastern Time</p>
        </div>
        <div>
          <h4>Elsewhere</h4>
          <a
            href="https://github.com/cuitlazotlac"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow />
          </a>
          <a
            href="https://www.linkedin.com/in/hayssem-elsayed/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Arrow />
          </a>
          <a
            href="https://www.behance.net/cuitlazotlac"
            target="_blank"
            rel="noreferrer"
          >
            Behance <Arrow />
          </a>
          <a
            href="https://codepen.io/cuitlazotlac"
            target="_blank"
            rel="noreferrer"
          >
            CodePen <Arrow />
          </a>
        </div>
        <div>
          <h4>Practice</h4>
          <p>Product management · Platforms</p>
          <p>Data · Interfaces · AI</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Hayssem Vazquez-Elsayed</span>
        <span>Built with intention.</span>
      </div>
    </footer>
  );
}

export function SiteFrame({ children }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const elements = document.querySelectorAll("main section");
    elements.forEach((element) => element.classList.add("scroll-reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);
  return (
    <div className="site-shell">
      <Header />
      <main key={location.pathname} className="page-transition">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function ProductBench() {
  const [active, setActive] = useState(0);
  const items = [
    {
      title: "Product Strategy",
      meta: "OUTCOMES · ROADMAP",
      command: "find the right problem",
      response:
        "Turn user needs, business goals, and technical constraints into clear product bets.",
      cards: ["USER SIGNAL", "OPPORTUNITY", "ROADMAP"],
      values: ["42 INSIGHTS", "03 BETS", "Q3 / ACTIVE"],
      topology: "funnel",
    },
    {
      title: "Design Systems",
      meta: "CLARITY · SCALE",
      command: "create a consistent product",
      response:
        "Build reusable patterns that make the experience clearer and the product easier to scale.",
      cards: ["TOKEN", "COMPONENT", "PRODUCT"],
      values: ["CORAL / 500", "BUTTON / 04", "CONSISTENT"],
      topology: "stack",
    },
    {
      title: "AI & Automation",
      meta: "WORKFLOWS · DAILY",
      command: "automate the repetitive",
      response:
        "Use AI and automation to remove friction, shorten feedback loops, and keep humans in control.",
      cards: ["TRIGGER", "AGENT LOOP", "HUMAN CHECK"],
      values: ["EVENT / 08", "RUNNING", "APPROVED"],
      topology: "loop",
    },

    {
      title: "Data & Growth",
      meta: "SIGNALS · LEARNING",
      command: "turn signals into decisions",
      response:
        "Use behavior, feedback, and experiments to understand what changed and what to do next.",
      cards: ["BEHAVIOR", "QUERY", "DECISION"],
      values: ["+18.4%", "SQL / LIVE", "SHIP B"],
      topology: "pipeline",
    },
  ];
  const item = items[active];
  return (
    <div className="bench-window">
      <div className="bench-bar">
        <span>● ● ●</span>
        <strong>PORTFOLIO / PRODUCT / SYSTEMS</strong>
        <small>● READY</small>
      </div>
      <div className="bench-layout">
        <div className="bench-tabs">
          <small>EXPERTISE</small>
          {items.map((entry, index) => (
            <button
              key={entry.title}
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
              type="button"
            >
              <strong>{entry.title}</strong>
              <span>{entry.meta}</span>
            </button>
          ))}
          <div className="bench-count">
            {active + 1} / {items.length} OPENED
          </div>
        </div>
        <div className="bench-canvas">
          <div className="canvas-label">
            <span>WORKSPACE</span>
            <span>BENCH · LIVE</span>
          </div>
          <div className="canvas-note">HVE</div>
          <div
            className={`expertise-network topology-${item.topology}`}
            key={item.title}
            aria-hidden="true"
          >
            <svg viewBox="0 0 620 300" preserveAspectRatio="none">
              {item.topology === "funnel" && (
                <>
                  <path d="M95 62 C190 62 170 150 305 150" />
                  <path d="M95 238 C190 238 170 150 305 150" />
                  <path d="M305 150 C410 150 430 150 530 150" />
                </>
              )}
              {item.topology === "loop" && (
                <>
                  <path d="M105 80 C250 -10 465 15 515 128" />
                  <path d="M515 128 C555 245 310 300 170 220" />
                  <path d="M170 220 C72 170 46 110 105 80" />
                </>
              )}
              {item.topology === "pipeline" && (
                <>
                  <path d="M70 150 H190 L230 84 H370 L410 214 H548" />
                  <path d="M190 150 L230 214 H360" />
                </>
              )}
              {item.topology === "stack" && (
                <>
                  <path d="M310 46 V98" />
                  <path d="M310 138 V184" />
                  <path d="M310 224 V267" />
                  <path d="M132 202 H260 M360 202 H498" />
                </>
              )}
            </svg>
            <div className="network-pulse" />
            {item.cards.map((card, index) => (
              <div className={`network-card network-${index + 1}`} key={card}>
                <small>{card}</small>
                <strong>{item.values[index]}</strong>
                <span>{index === 1 ? "● PROCESSING" : "◆ CONNECTED"}</span>
              </div>
            ))}
            <i className="network-node node-a" />
            <i className="network-node node-b" />
            <i className="network-node node-c" />
          </div>
          <div className="canvas-card">
            <small>NOW WORKING ON</small>
            <strong>{item.title}</strong>
            <p>{item.command}</p>
          </div>
          <div className="canvas-tools">
            <span>FIGMA</span>
            <span>SQL</span>
            <span>CODE</span>
            <span>AI</span>
          </div>
          <div className="bench-console">
            <span>❯</span>
            <div>
              <small>{item.command}</small>
              <p>↳ {item.response}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bench-caption">
        FIG. 004 — FOUR TRACKS, ONE BENCH{" "}
        <span>PRODUCT, DATA, SYSTEMS, DELIVERY</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero page-pad">
      <div className="hero-grid">
        <h1>
          I build products for people
          <br />
          <em>and the systems behind them.</em>
        </h1>
        <div className="hero-copy">
          <p>
            Currently at Tenki, working on developer infrastructure and tools.
            Previously across fintech, data, and Web3.
          </p>
          <div className="button-row">
            <Link className="button button-amber" to="/about">
              View my profile <Arrow />
            </Link>
            <Link className="button button-ghost" to="/contact">
              Contact me <Arrow />
            </Link>
          </div>
        </div>
      </div>
      <div className="career-rail">
        <span>01</span>
        <strong>Tenki Cloud</strong>
        <small>Senior Product Manager</small>
        <i />
        <small>-</small>
      </div>
      <ProductBench />
    </section>
  );
}

function FocusSection() {
  const [index, setIndex] = useState(0);
  const track = focusTracks[index];
  return (
    <section className="focus-section">
      <SectionRule label="Tracks" />
      <div className="section-intro centered">
        <h2>
          Primarily <em>focused on</em>
        </h2>
        <p>
          Product practice shaped by technical systems, clear evidence, and the
          people using what ships.
        </p>
      </div>
      <div className="focus-stage">
        <div
          key={index}
          className={`focus-illustration track-network focus-${index}`}
          aria-hidden="true"
        >
          <div className="track-bar">
            <span>● ● ●</span>
            <b>track_0{index + 1}.graph</b>
          </div>
          <svg viewBox="0 0 310 225">
            {index === 0 && (
              <>
                <path d="M46 75 C105 75 104 112 155 112" />
                <path d="M46 164 C105 164 104 112 155 112" />
                <path d="M155 112 C210 112 218 118 267 118" />
              </>
            )}
            {index === 1 && (
              <>
                <path d="M53 112 H108" />
                <path d="M155 112 H205" />
                <path d="M252 112 V169 H155" />
                <path d="M155 169 V112" />
              </>
            )}
            {index === 2 && (
              <>
                <path d="M155 54 C70 54 58 173 126 177" />
                <path d="M126 177 C203 202 264 147 244 94" />
                <path d="M244 94 C226 48 192 45 155 54" />
              </>
            )}
          </svg>
          <div className="track-core">
            <small>HVE</small>
            <b>{index === 0 ? "DECIDE" : index === 1 ? "SYSTEM" : "ITERATE"}</b>
          </div>
          {track.nodes.map(([label, value], nodeIndex) => (
            <div
              className={`track-node track-node-${nodeIndex + 1}`}
              key={label}
            >
              <small>{label}</small>
              <b>{value}</b>
            </div>
          ))}
          <div className="track-cursor">› _</div>
        </div>
        <div key={track.title} className="focus-copy track-enter">
          <h3>{track.title}</h3>
          <small>{track.eyebrow}</small>
          <p>{track.copy}</p>
          <div className="stepper">
            <button
              type="button"
              onClick={() =>
                setIndex((index - 1 + focusTracks.length) % focusTracks.length)
              }
              aria-label="Previous track"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setIndex((index + 1) % focusTracks.length)}
              aria-label="Next track"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedMetric({
  value,
  suffix = "",
  label,
  index,
  size,
  detail,
  solid,
}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / 900, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);
  return (
    <article className={`metric metric-${index}`} ref={ref}>
      <div className="metric-head">
        <small>0{index + 1}</small>
        <span>● ACTIVE</span>
      </div>
      <strong>
        {display}
        {suffix}
      </strong>
      <div className="metric-bar" aria-hidden="true">
        <i
          className={solid ? "solid" : ""}
          style={{ "--metric-height": `${size}px` }}
        />
        <b />
      </div>
      <p>{label}</p>
      <small className="metric-detail">{detail}</small>
    </article>
  );
}

function MetricsSection() {
  const metrics = [
    {
      value: 8,
      suffix: "+",
      label: "Years building products",
      size: 62,
      detail: "2018 → NOW",
      solid: true,
    },
    {
      value: 10,
      suffix: "+",
      label: "Public product builds",
      size: 102,
      detail: "REPOSITORIES / LIVE",
    },
    {
      value: 3,
      label: "Core disciplines",
      size: 76,
      detail: "PRODUCT · DATA · CODE",
    },
    {
      value: 8918,
      label: "Liters of coffee, approximately",
      size: 240,
      detail: "SOURCE: TRUST ME",
    },
  ];
  return (
    <section className="metrics-section">
      <SectionRule label="By the numbers" />
      <div className="section-intro centered narrow">
        <h2>
          Product work,
          <br />
          <em>counted clearly.</em>
        </h2>
        <p>
          A practice built across strategy, delivery, technical systems, and
          hands-on experiments.
        </p>
        <Link className="text-link" to="/about">
          Read the full profile →
        </Link>
      </div>
      <div className="metric-grid">
        {metrics.map((metric, index) => (
          <AnimatedMetric {...metric} index={index} key={metric.label} />
        ))}
      </div>
    </section>
  );
}

function ToolsSection() {
  const tools = [
    "React",
    "SQL",
    "APIs",
    "Amplitude",
    "PostHog",
    "Figma",
    "Claude",
    "NotebookLM",
  ];
  return (
    <section className="tools-section">
      <SectionRule label="Working kit" />
      <div className="section-intro">
        <h2>
          Tools are part of how <em> I think, test & ship.</em>
        </h2>
        <p>
          From rough ideas to prototypes, decisions, and products in production.
        </p>
      </div>
      <div className="tool-grid" aria-label="Tools I work with">
        {tools.map((tool, index) => (
          <article className="tool-card" key={tool}>
            <div className="tool-mark">
              <img
                className="tool-image default"
                src="/tool-placeholder.svg"
                alt=""
              />
              <img
                className="tool-image hover"
                src="/tool-placeholder-hover.svg"
                alt=""
              />
              <b>{String(index + 1).padStart(2, "0")}</b>
            </div>
            <span>{tool}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="experience-section">
      <SectionRule label="Teams" />
      <div className="section-intro">
        <h2>
          Where I&apos;ve <em>worked</em>
        </h2>
        <p>
          From financial services and developer platforms to mining
          infrastructure and founder-led experiments.
        </p>
      </div>
      <div className="experience-grid">
        {experiences.map((experience) => (
          <article key={experience.index}>
            <div className="experience-top">
              <div
                className="company-logo"
                aria-label={`${experience.company} logo placeholder`}
              >
                {experience.logo}
              </div>
              <small>{experience.index}</small>
            </div>
            <h3>{experience.company}</h3>
            <span>{experience.role}</span>
            <p>{experience.copy}</p>
            <div className="experience-tags">
              {experience.tags.map((tag) => (
                <b key={tag}>{tag}</b>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <FocusSection />
      <MetricsSection />
      <ToolsSection />
      <ExperienceSection />
    </>
  );
}

export function ProfilePage() {
  return (
    <>
      <section className="profile-opening page-pad">
        <img
          className="profile-portrait"
          src="/profile-placeholder.png"
          alt="Temporary profile portrait placeholder"
        />
        <div className="profile-shade" aria-hidden="true" />
        <p>
          I like building products, especially when the path from idea to
          production isn’t obvious yet. Over the years, that’s taken me through
          developer infrastructure, fintech, data, and Bitcoin, working with
          teams to understand the problem, build something real, and keep
          improving it once it’s in users’ hands.
        </p>
        <div className="profile-diagram terminal-graph" aria-hidden="true">
          <div className="terminal-bar">
            <span>● ● ●</span>
            <b>hve://knowledge-graph</b>
            <small>SYNCED / 24 NODES</small>
          </div>
          <svg viewBox="0 0 1000 390" preserveAspectRatio="none">
            <path d="M500 176 C420 120 310 92 192 126" />
            <path d="M500 176 C580 112 710 92 832 132" />
            <path d="M500 176 C455 250 340 282 238 294" />
            <path d="M500 176 C560 250 680 282 792 290" />
            <path d="M192 126 L238 294 M832 132 L792 290" />
          </svg>
          <div className="terminal-core">
            <small>~/profile/core</small>
            <b>HVE</b>
            <span>STATUS: BUILDING</span>
          </div>
          <div className="terminal-node graph-product">
            <small>01 / PRODUCT</small>
            <b>Outcome framing</b>
            <code>$ discover → decide</code>
          </div>
          <div className="terminal-node graph-systems">
            <small>02 / SYSTEMS</small>
            <b>Technical clarity</b>
            <code>$ map --dependencies</code>
          </div>
          <div className="terminal-node graph-people">
            <small>03 / PEOPLE</small>
            <b>User context</b>
            <code>$ listen --closely</code>
          </div>
          <div className="terminal-node graph-delivery">
            <small>04 / DELIVERY</small>
            <b>Useful shipping</b>
            <code>$ build && learn</code>
          </div>
          <div className="terminal-log">
            <span>› connecting evidence...</span>
            <span>› resolving constraints...</span>
            <span>
              › signal received <b>OK</b>
            </span>
          </div>
          <i className="graph-dot dot-1" />
          <i className="graph-dot dot-2" />
          <i className="graph-dot dot-3" />
          <strong>PRODUCT / SYSTEMS / PEOPLE / DELIVERY</strong>
        </div>
      </section>
      <section className="profile-story">
        <SectionRule label="Profile" />
        <div className="story-grid">
          <h2>
            Started by learning to build, moved into product, and kept the
            hands-on curiosity.
          </h2>
          <p>
            I like taking products from early questions to something real,
            understanding the problem, making the trade-offs, shipping, and
            learning from what happens next. And when it helps, I’ll still open
            the code and build the idea myself.
          </p>
        </div>
      </section>
      <section className="how-i-work">
        <SectionRule label="How I work" />
        <div className="how-grid">
          <div>
            <h2>
              Long story short,
              <br />I make complexity <em>workable.</em>
            </h2>
            <small>MONTRÉAL → TORONTO · 2018 — NOW</small>
          </div>
          <div>
            <p>
              I connect customer context, business outcomes, and technical
              reality so teams can make confident decisions and ship useful
              work.
            </p>
            <div className="tag-row">
              <span>Product strategy</span>
              <span>Platforms</span>
              <span>APIs</span>
              <span>Data</span>
              <span>UX/UI</span>
              <span>AI workflows</span>
            </div>
          </div>
        </div>
      </section>
      <ExperienceSection />
      <section className="profile-cta">
        <SectionRule label="Next" />
        <div>
          <h2>
            Looking for a product leader who can move between strategy and the
            system?
          </h2>
          <Link className="button button-amber" to="/contact">
            Let&apos;s talk <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}

export function ContactPage() {
  return (
    <section className="contact-page page-pad">
      <SectionRule label="Contact" />
      <div className="contact-grid">
        <div>
          <h1>
            Let&apos;s <em>talk.</em>
          </h1>
          <p>
            Always happy to meet new people, exchange ideas, or just have a good
            conversation.
          </p>
        </div>
        <div className="contact-links">
          <a href="mailto:heyhayssem@gmail.com">
            <ContactIcon type="email" />
            <span>Email</span>
            <strong>heyhayssem@gmail.com</strong>
            <Arrow />
          </a>
          <a
            href="https://www.linkedin.com/in/hayssem-elsayed/"
            target="_blank"
            rel="noreferrer"
          >
            <ContactIcon type="linkedin" />
            <span>LinkedIn</span>
            <strong>hayssem-elsayed</strong>
            <Arrow />
          </a>
          <a
            href="https://github.com/cuitlazotlac"
            target="_blank"
            rel="noreferrer"
          >
            <ContactIcon type="github" />
            <span>GitHub</span>
            <strong>cuitlazotlac</strong>
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
