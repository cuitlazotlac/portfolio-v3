import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
const experiences = [
  {
    index: "01",
    period: "2024 — NOW",
    status: "CURRENT",
    logo: "TK",
    defaultImage: "/TENKI-DARK.png",
    hoverImage: "/TENKI-HOVER.png",
    company: "Tenki",
    role: "Senior Product Manager",
    copy: "Building developer infrastructure and products that make compute easier to access, run, and scale.",
    tags: ["Dev Tools", "Infrastructure", "Compute & AI"],
  },
  {
    index: "02",
    period: "2021 — 2024",
    status: "COMPLETED",
    logo: "LX",
    defaultImage: "/LUXOR-DARK.png",
    hoverImage: "/LUXOR-HOVER.png",
    company: "Luxor Technology",
    role: "Senior Product Manager",
    copy: "Joined as the first PM, leading core products and launching new ones from 0→1, including ASIC firmware.",
    tags: ["Bitcoin", "0→1 Product", "B2B/B2C Platform"],
  },
  {
    index: "03",
    period: "2019 — 2021",
    status: "COMPLETED",
    logo: "SG",
    defaultImage: "/SG-DARK.png",
    hoverImage: "/SG-HOVER.png",
    company: "Société Générale CIB",
    role: "Product Manager",
    copy: "Built developer-facing products and experiences while contributing to product exploration inside the innovation center.",
    tags: ["Fintech APIs", "Dev Platforms", "Innovation Center"],
  },
  {
    index: "04",
    period: "2018 — 2019",
    status: "COMPLETED",
    logo: "BNP",
    defaultImage: "/BNP-DARK.png",
    hoverImage: "/BNP-HOVER.png",
    company: "BNP Paribas Cardif",
    role: "Technical Project Manager",
    copy: "Built internal products and data systems to improve sales workflows and operational efficiency.",
    tags: ["Data Pipelines", "Internal Tools", "B2B Enterprise"],
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

function HveLogo() {
  return (
    <svg
      viewBox="0 0 110 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="HVE — Hayssem Vazquez-Elsayed"
      className="hve-logo-svg"
    >
      <g className="hve-mark">
        <line x1="5" y1="5" x2="5" y2="27" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="23" y1="5" x2="23" y2="27" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="5" y1="16" x2="23" y2="16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <polyline points="5,7 14,23 23,7" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="16" r="2.2" fill="var(--amber)" />
      </g>
      <g className="hve-text" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="36" y1="7" x2="36" y2="25" />
        <line x1="36" y1="16" x2="47" y2="16" />
        <line x1="47" y1="7" x2="47" y2="25" />
        <polyline points="54,7 62,25 70,7" />
        <line x1="77" y1="7" x2="77" y2="25" />
        <line x1="77" y1="7" x2="88" y2="7" />
        <line x1="77" y1="16" x2="85" y2="16" />
        <line x1="77" y1="25" x2="88" y2="25" />
      </g>
      <rect x="94" y="21" width="3.5" height="3.5" rx="0.75" fill="var(--amber)" />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="HVE — home">
          <HveLogo />
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
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
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-telemetry-bar">
        <span className="telemetry-item">
          <i className="status-dot" /> SYS_CHANNEL // DIRECT CONNECT
        </span>
        <span className="telemetry-item">TORONTO, CA [EASTERN TIME · UTC-4]</span>
        <span className="telemetry-item">
          <i className="status-dot" /> LIVE TELEMETRY · 24ms
        </span>
      </div>

      <div className="footer-stage">
        <div className="footer-cta-wrap">
          <h3>
            Ideas are better in <em>production.</em>
          </h3>
          <p>
            Open to high-impact product leadership, 0→1 platform initiatives, and
            technical challenges.
          </p>
          <Link className="button button-amber footer-cta-btn" to="/contact">
            Start a conversation <Arrow />
          </Link>
        </div>
        <div className="signal-line" aria-hidden="true">
          {[
            { step: "01", label: "DISCOVER" },
            { step: "02", label: "FRAME" },
            { step: "03", label: "BUILD" },
            { step: "04", label: "SHIP" },
            { step: "05", label: "LEARN" },
          ].map((item) => (
            <span key={item.label} className="signal-step">
              <small>{item.step}</small>
              <b>{item.label}</b>
            </span>
          ))}
          <svg className="timeline-runner" viewBox="0 0 48 48">
            <path
              className="dino-body"
              d="M5 24h5v5h5v4h5v4h5v-5h5v-5h4V9h-4V5H17v4h-4v15H9v-5H5zm17-14h4v4h-4z"
            />
            <path className="dino-leg dino-leg-a" d="M16 35h6v9h-5v-5h-4z" />
            <path className="dino-leg dino-leg-b" d="M25 34h6v10h-5v-6h-4z" />
          </svg>
        </div>
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <small className="footer-col-num">01 // DIRECT CONTACT</small>
          <h4>Contact</h4>
          <a className="footer-strong" href="mailto:heyhayssem@gmail.com">
            heyhayssem@gmail.com
          </a>
          <p>Ideas are better in production.</p>
          <p>Toronto · Eastern Time</p>
          <span className="footer-status-pill">
            <i className="status-dot" /> OPEN FOR DISCUSSIONS
          </span>
        </div>
        <div className="footer-col">
          <small className="footer-col-num">02 // ELSEWHERE</small>
          <h4>Elsewhere</h4>
          <div className="footer-link-list">
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
        </div>
        <div className="footer-col">
          <small className="footer-col-num">03 // DOMAIN &amp; PRACTICE</small>
          <h4>Practice</h4>
          <p>Technical Product Leadership</p>
          <p>Platforms, Compute &amp; Developer Tools</p>
          <div className="footer-tags">
            <span>[PLATFORMS]</span>
            <span>[APIs &amp; DATA]</span>
            <span>[AI WORKFLOWS]</span>
            <span>[0→1 PRODUCTS]</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Hayssem Vazquez-Elsayed</span>
        <span>Senior Product Manager // Platforms</span>
        <span>SYS_BUILD · 2026.09</span>
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

function HeroArchitecture() {
  const [activeVector, setActiveVector] = useState(0);

  const vectors = [
    {
      id: "01",
      tag: "COMPUTE & CLOUD",
      title: "Developer Infrastructure & Compute",
      role: "Current Focus @ Tenki",
      status: "PRODUCTION",
      summary:
        "Architecting developer platforms that transform complex bare-metal compute and AI workloads into intuitive APIs and automated scheduling surfaces.",
      specs: [
        { label: "LATENCY TARGET", value: "<15ms P99" },
        { label: "ORCHESTRATION", value: "Distributed Clusters" },
        { label: "SURFACE", value: "REST & GraphQL APIs" },
        { label: "VELOCITY", value: "Continuous Delivery" },
      ],
      nodes: ["ORCHESTRATION", "API GATEWAY", "COMPUTE NODES", "TELEMETRY"],
    },
    {
      id: "02",
      tag: "0→1 HARDENED",
      title: "From 0→1 to Hardened Systems",
      role: "Senior PM @ Luxor Technology",
      status: "DEPLOYED",
      summary:
        "First PM driving core products from blank page to global release, including custom ASIC firmware, enterprise hash rate management, and B2B telemetry.",
      specs: [
        { label: "SYSTEM TYPE", value: "Embedded + Cloud" },
        { label: "SCALE", value: "Global Hashrate" },
        { label: "DEVELOPMENT", value: "0→1 Green-field" },
        { label: "SECURITY", value: "Hardened Cryptographic" },
      ],
      nodes: ["FIRMWARE", "INGESTION BUS", "TELEMETRY ENGINE", "ENTERPRISE B2B"],
    },
    {
      id: "03",
      tag: "FINTECH & APIS",
      title: "Resilient Contracts & Financial Data",
      role: "Product Manager @ SocGen & BNP",
      status: "VERIFIED",
      summary:
        "Building developer-facing fintech products, internal data workflows, and strictly-typed API ecosystems where high-throughput reliability is mandatory.",
      specs: [
        { label: "INTEGRITY", value: "Audited Financials" },
        { label: "DATA PIPELINE", value: "Event-Driven Streams" },
        { label: "ARCHITECTURE", value: "Defensive Contracts" },
        { label: "AVAILABILITY", value: "99.99% Enterprise" },
      ],
      nodes: ["EVENT STREAM", "CONTRACT VALIDATOR", "CORE LEDGER", "AUDIT PIPELINE"],
    },
  ];

  const current = vectors[activeVector];

  return (
    <div className="hero-arch-board">
      <div className="hero-arch-top">
        <div className="arch-top-left">
          <span className="arch-dots">● ● ●</span>
          <span className="arch-system-title">SYSTEMS ARCHITECTURE // PRODUCT OPERATING MODEL</span>
        </div>
        <div className="arch-top-right">
          <span className="arch-badge">
            <i className="status-dot" /> LIVE PLATFORM TELEMETRY
          </span>
          <span className="arch-loc">TORONTO [EST]</span>
        </div>
      </div>

      <div className="hero-arch-body">
        <div className="arch-selector" role="tablist" aria-label="Architecture Vectors">
          {vectors.map((vec, idx) => (
            <button
              key={vec.id}
              role="tab"
              aria-selected={activeVector === idx}
              className={`arch-tab ${activeVector === idx ? "active" : ""}`}
              onClick={() => setActiveVector(idx)}
              type="button"
            >
              <div className="arch-tab-header">
                <span className="arch-tab-num">{vec.id} // {vec.tag}</span>
                <span className="arch-tab-status">{vec.status}</span>
              </div>
              <strong className="arch-tab-title">{vec.title}</strong>
              <small className="arch-tab-role">{vec.role}</small>
            </button>
          ))}
        </div>

        <div className="arch-viewport">
          <div className="viewport-banner">
            <div className="viewport-meta">
              <span className="viewport-vector-id">VECTOR_{current.id}</span>
              <h4>{current.title}</h4>
              <span className="viewport-role-tag">{current.role}</span>
            </div>
            <span className="viewport-status-pill">
              <i className="status-dot" /> {current.status}
            </span>
          </div>

          <p className="viewport-summary">{current.summary}</p>

          <div className="viewport-circuit" aria-hidden="true">
            <svg viewBox="0 0 540 80" className="circuit-svg" preserveAspectRatio="none">
              <path d="M40 40 L180 40 L340 40 L480 40" className="circuit-wire" />
              <line x1="40" y1="40" x2="480" y2="40" className="circuit-pulse-line" />
              <circle cx="40" cy="40" r="4" className="circuit-node" />
              <circle cx="180" cy="40" r="4" className="circuit-node" />
              <circle cx="340" cy="40" r="4" className="circuit-node" />
              <circle cx="480" cy="40" r="4" className="circuit-node" />
              <circle className="path-pulse" r="4">
                <animateMotion
                  dur="3.2s"
                  repeatCount="indefinite"
                  path="M40 40 L180 40 L340 40 L480 40"
                />
              </circle>
            </svg>
            <div className="circuit-labels">
              {current.nodes.map((nodeName, nIdx) => (
                <div className={`circuit-pill pill-${nIdx}`} key={nodeName}>
                  <small>NODE 0{nIdx + 1}</small>
                  <b>{nodeName}</b>
                </div>
              ))}
            </div>
          </div>

          <div className="viewport-specs">
            {current.specs.map((spec) => (
              <div className="spec-card" key={spec.label}>
                <small>{spec.label}</small>
                <strong>{spec.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero page-pad">
      <div className="hero-status-strip">
        <span className="status-item">
          <i className="status-dot" /> ACTIVE ROLE: SENIOR PRODUCT MANAGER @ TENKI
        </span>
        <span className="status-item">DEVELOPER INFRASTRUCTURE &amp; COMPUTE</span>
        <span className="status-item">TORONTO, CA [UTC-4]</span>
      </div>

      <div className="hero-grid">
        <h1>
          I build products for people
          <br />
          <em>and the technical systems behind them.</em>
        </h1>
        <div className="hero-copy">
          <p>
            Senior Product Manager specializing in developer infrastructure, compute platforms, and 0→1 products. Grounded in technical architecture, clear evidence, and systems that scale.
          </p>
          <div className="button-row">
            <Link className="button button-amber" to="/about">
              Explore profile &amp; craft <Arrow />
            </Link>
            <Link className="button button-ghost" to="/contact">
              Start a conversation <Arrow />
            </Link>
          </div>
        </div>
      </div>

      <HeroArchitecture />
    </section>
  );
}

function FocusSection() {
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
      <div className="track-grid">
        {focusTracks.map((track, trackIndex) => (
          <article
            className={`track-card track-card-${trackIndex}`}
            key={track.title}
          >
            <div className="track-card-corner" aria-hidden="true" />
            <div className="track-card-head">
              <span className="track-eyebrow">{track.eyebrow}</span>
              <span className="track-status">
                <i className="track-status-dot" />
                ACTIVE
              </span>
            </div>

            <div className="track-card-canvas" aria-hidden="true">
              <div className="track-canvas-bar">
                <span className="bar-dots">● ● ●</span>
                <span className="bar-title">track_0{trackIndex + 1}.graph</span>
              </div>
              <svg className="track-isometric" viewBox="0 0 310 225">
                {trackIndex === 0 && (
                  <>
                    <path
                      className="iso-wire"
                      d="M47 139 143 84 263 140 166 196Z M143 84v-34m-96 89v-34m216 35v-34m-97 90v-34"
                    />
                    <circle className="path-pulse" r="4">
                      <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        path="M47 139 L143 84 L263 140 L166 196 Z"
                      />
                    </circle>
                    <g className="iso-cube cube-a">
                      <path className="iso-top" d="m62 91 43-25 43 21-44 26Z" />
                      <path className="iso-left" d="m62 91 42 22v42l-42-22Z" />
                      <path className="iso-right" d="m104 113 44-26v42l-44 26Z" />
                    </g>
                    <g className="iso-cube cube-b">
                      <path className="iso-top" d="m155 118 34-20 34 17-35 20Z" />
                      <path className="iso-left" d="m155 118 33 17v31l-33-17Z" />
                      <path className="iso-right" d="m188 135 35-20v31l-35 20Z" />
                    </g>
                  </>
                )}
                {trackIndex === 1 && (
                  <>
                    <path
                      className="iso-wire"
                      d="m45 153 110-64 110 55-110 65Zm55-32v-39m55 7V45m55 76V82"
                    />
                    <line
                      className="iso-connector"
                      x1="155"
                      y1="45"
                      x2="155"
                      y2="169"
                    />
                    {[0, 1, 2].map((level) => (
                      <g
                        className={`iso-layer layer-${level}`}
                        key={level}
                        transform={`translate(0 ${-level * 24})`}
                      >
                        <path className="iso-top" d="m76 129 79-46 79 39-79 47Z" />
                        <path className="iso-left" d="m76 129 79 40v18l-79-40Z" />
                        <path className="iso-right" d="m155 169 79-47v18l-79 47Z" />
                      </g>
                    ))}
                    <circle className="path-pulse" r="4">
                      <animateMotion
                        dur="3.4s"
                        repeatCount="indefinite"
                        path="m45 153 L155 89 L265 144 L155 209 Z"
                      />
                    </circle>
                  </>
                )}
                {trackIndex === 2 && (
                  <>
                    <path
                      className="iso-wire"
                      d="m39 164 54-31 58 29 58-34 62 31-119 55Zm54-31V75m58 87V48m58 80V82"
                    />
                    <path className="iso-conduit" d="M93 75 L151 48 L209 82" />
                    <circle className="path-pulse" r="4">
                      <animateMotion
                        dur="3.6s"
                        repeatCount="indefinite"
                        path="M93 75 L151 48 L209 82 L151 48 Z"
                      />
                    </circle>
                    {["93 75", "151 48", "209 82"].map((point, nodeIndex) => {
                      const [x, y] = point.split(" ").map(Number);
                      return (
                        <g
                          className={`iso-node node-${nodeIndex}`}
                          key={point}
                          transform={`translate(${x - 25} ${y})`}
                        >
                          <path className="iso-top" d="m0 14 25-14 25 13-25 14Z" />
                          <path className="iso-left" d="m0 14 25 13v28L0 42Z" />
                          <path className="iso-right" d="m25 27 25-14v28L25 55Z" />
                        </g>
                      );
                    })}
                  </>
                )}
              </svg>
            </div>

            <div className="track-card-body">
              <h3>{track.title}</h3>
              <p>{track.copy}</p>
            </div>

            <div className="track-nodes">
              {track.nodes.map(([label, value]) => (
                <div className="track-node-badge" key={label}>
                  <small>{label}</small>
                  <b>{value}</b>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AnimatedMetric({
  value,
  suffix = "",
  label,
  index,
  tag,
  status,
  detail,
}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        const start = performance.now();
        const duration = 1200;
        const delay = index * 120;

        const timer = setTimeout(() => {
          const tick = (now) => {
            const elapsed = now - (start + delay);
            const progress = Math.min(Math.max(elapsed / duration, 0), 1);
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setDisplay(Math.round(value * ease));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }, delay);

        observer.disconnect();
        return () => clearTimeout(timer);
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, index]);

  return (
    <article
      className={`metric metric-${index}${isVisible ? " is-visible" : ""}`}
      ref={ref}
      style={{ "--card-index": index }}
    >
      <div className="metric-corner" aria-hidden="true" />
      <div className="metric-head">
        <span className="metric-tag">{tag}</span>
        <span className="metric-status">
          <i className="status-dot" />
          {status}
        </span>
      </div>

      <div className="metric-value">
        <strong>{display.toLocaleString()}</strong>
        {suffix && <span className="metric-suffix">{suffix}</span>}
      </div>

      <div className="metric-telemetry" aria-hidden="true">
        {index === 0 && (
          <div className="telemetry-timeline">
            <div className="timeline-blocks">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className={`timeline-segment${isVisible ? " is-filled" : ""}${i === 7 ? " is-current" : ""}`}
                  style={{ "--seg-delay": `${0.12 + i * 0.07}s` }}
                >
                  {i === 7 && <b className="segment-pulse" />}
                </span>
              ))}
            </div>
            <div className="timeline-axis">
              <small>2018</small>
              <span className="axis-line" />
              <small className="axis-now">NOW</small>
            </div>
          </div>
        )}

        {index === 1 && (
          <div className="telemetry-spectrum">
            <div className="spectrum-bars">
              {[42, 68, 55, 90, 72, 85, 60, 95, 78, 100].map((height, i) => (
                <span
                  key={i}
                  className={`spectrum-bar${isVisible ? " is-active" : ""}`}
                  style={{
                    "--bar-height": `${height}%`,
                    "--bar-delay": `${0.1 + i * 0.05}s`,
                  }}
                />
              ))}
            </div>
            <div className="spectrum-baseline" />
          </div>
        )}

        {index === 2 && (
          <div className="telemetry-triad">
            <div className="triad-pills">
              {["PRODUCT", "DATA", "CODE"].map((discipline, i) => (
                <div
                  key={discipline}
                  className={`triad-pill${isVisible ? " is-active" : ""}`}
                  style={{ "--pill-delay": `${0.15 + i * 0.1}s` }}
                >
                  <i className="triad-dot" />
                  <span>{discipline}</span>
                  <small className="triad-signal">ACTIVE</small>
                </div>
              ))}
            </div>
          </div>
        )}

        {index === 3 && (
          <div className="telemetry-coffee">
            <div className="coffee-beaker">
              <div className="coffee-steam-wrap">
                <span className="steam-line s1" />
                <span className="steam-line s2" />
                <span className="steam-line s3" />
              </div>
              <div className="beaker-glass">
                <div className={`beaker-fluid${isVisible ? " is-filled" : ""}`} />
                <div className="beaker-ticks">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="beaker-handle" />
            </div>
          </div>
        )}
      </div>

      <div className="metric-bottom">
        <p className="metric-label">{label}</p>
        {detail && <small className="metric-detail">{detail}</small>}
      </div>
    </article>
  );
}

function MetricsSection() {
  const metrics = [
    {
      value: 8,
      suffix: "+",
      tag: "01 // YEARS",
      status: "CONTINUOUS",
      label: "Years building products",
      detail: "2018 → 2026",
    },
    {
      value: 10,
      suffix: "+",
      tag: "02 // BUILDS",
      status: "PRODUCTION",
      label: "Public product builds",
      detail: "REPOSITORIES / LIVE",
    },
    {
      value: 3,
      tag: "03 // TRIAD",
      status: "INTERSECTION",
      label: "Core disciplines",
      detail: "PRODUCT · DATA · CODE",
    },
    {
      value: 8918,
      tag: "04 // FUEL",
      status: "APPROX",
      label: "Liters of coffee brewed",
      detail: "ROASTED & BREWED",
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

function CompanyLogo({ experience }) {
  const defaultImage = experience.defaultImage || "/company-dummy.png";
  const hoverImage = experience.hoverImage || "/company-dummy-hover.png";

  return (
    <div className="company-logo" aria-label={`${experience.company} logo`}>
      {defaultImage ? (
        <>
          <img
            className="company-logo-image default"
            src={defaultImage}
            alt=""
          />
          {hoverImage && (
            <img className="company-logo-image hover" src={hoverImage} alt="" />
          )}
        </>
      ) : (
        <span>{experience.logo}</span>
      )}
    </div>
  );
}

function ToolsSection() {
  const tools = [
    {
      name: "React",
      category: "UI & State",
      defaultImage: "/REACT-DARK.png",
      hoverImage: "/REACT-HOVER.png",
    },
    {
      name: "SQL",
      category: "Query",
      defaultImage: "/SQL-DARK.png",
      hoverImage: "/SQL-HOVER.png",
    },
    {
      name: "APIs",
      category: "Protocols",
      defaultImage: "/APIS-DARK.png",
      hoverImage: "/APIS-HOVER.png",
    },
    {
      name: "Amplitude",
      category: "Analytics",
      defaultImage: "/AMPLITUDE-DARK.png",
      hoverImage: "/AMPLITUDE-HOVER.png",
    },
    {
      name: "PostHog",
      category: "Telemetry",
      defaultImage: "/POSTHOG-DARK.png",
      hoverImage: "/POSTHOG-HOVER.png",
    },
    {
      name: "Figma",
      category: "Systems",
      defaultImage: "/FIGMA-DARK.png",
      hoverImage: "/FIGMA-HOVER.png",
    },
    {
      name: "Claude",
      category: "AI / LLM",
      defaultImage: "/CLAUDE-DARK.png",
      hoverImage: "/CLAUDE-HOVER.png",
    },
    {
      name: "NotebookLM",
      category: "Research",
      defaultImage: "/NOTEBOOKLM-DARK.png",
      hoverImage: "/NOTEBOOKLM-HOVER.png",
    },
  ];
  return (
    <section className="tools-section">
      <SectionRule label="Working kit" />
      <div className="section-intro">
        <h2>
          Tools are part of how <em> I think, test &amp; ship.</em>
        </h2>
        <p>
          From rough ideas to prototypes, decisions, and products in production.
        </p>
      </div>
      <div className="tool-grid" aria-label="Tools I work with">
        {tools.map((tool) => (
          <article className="tool-card" key={tool.name}>
            <div className="tool-card-corner" aria-hidden="true" />
            <div className="tool-card-head">
              <span className="tool-category">{tool.category}</span>
              <i className="tool-status-dot" />
            </div>
            <div className="tool-mark">
              <img
                className="tool-image default"
                src={tool.defaultImage}
                alt=""
              />
              <img className="tool-image hover" src={tool.hoverImage} alt="" />
            </div>
            <div className="tool-card-foot">
              <span className="tool-name">{tool.name}</span>
            </div>
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
          <article className="experience-card" key={experience.company}>
            <div className="experience-card-corner" aria-hidden="true" />
            <div className="experience-card-head">
              <CompanyLogo experience={experience} />
              <div className="experience-status-badge">
                {experience.status === "CURRENT" ? (
                  <span className="exp-live">
                    <i className="status-dot" /> ACTIVE
                  </span>
                ) : (
                  <span className="exp-period">{experience.period}</span>
                )}
              </div>
            </div>
            <div className="experience-card-body">
              <small className="experience-index">{experience.index} · TEAM</small>
              <h3>{experience.company}</h3>
              <span className="experience-role">{experience.role}</span>
              <p>{experience.copy}</p>
            </div>
            <div className="experience-tags">
              {experience.tags.map((tag) => (
                <span className="exp-tag" key={tag}>
                  {tag}
                </span>
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
        <div className="portrait-hud">
          <div className="portrait-hud-top">
            <span>[OPERATOR // IDENTITY]</span>
            <span>
              <i className="status-dot" /> ACTIVE · TORONTO [EDT]
            </span>
          </div>
          <div className="portrait-media-wrap">
            <img
              className="profile-portrait"
              src="/profile-placeholder.png"
              alt="Profile portrait"
            />
            <div className="profile-shade" aria-hidden="true" />
            <div className="hud-corner hud-tl" />
            <div className="hud-corner hud-tr" />
            <div className="hud-corner hud-bl" />
            <div className="hud-corner hud-br" />
          </div>
          <div className="portrait-hud-bottom">
            <span>SYS_ID: HVE-88 // PM</span>
            <span>ROLE: SR_PRODUCT_MANAGER</span>
          </div>
        </div>

        <div className="profile-lead-wrap">
          <div className="profile-badge-row">
            <span className="profile-spec-badge">EXP // 7+ YEARS</span>
            <span className="profile-spec-badge">FOCUS // 0→1 PLATFORMS</span>
            <span className="profile-spec-badge">STACK // APIs · DATA · AI</span>
          </div>
          <p className="profile-lead-copy">
            I like building products, especially when the path from idea to
            production isn’t obvious yet. Over the years, that’s taken me through
            developer infrastructure, fintech, data, and Bitcoin, working with
            teams to understand the problem, build something real, and keep
            improving it once it’s in users’ hands.
          </p>
        </div>
      </section>

      <section className="profile-story profile-combined">
        <SectionRule label="Profile" />
        <div className="section-intro">
          <h2>
            Started by learning to build, moved into product, and kept the
            <em> hands-on curiosity.</em>
          </h2>
          <p>
            I like taking products from early questions to something real,
            understanding the problem, making the trade-offs, shipping, and
            learning from what happens next.
          </p>
        </div>

        <div className="profile-journey-grid">
          <article className="journey-card">
            <div className="journey-card-corner" aria-hidden="true" />
            <div className="journey-card-head">
              <span className="journey-step">01 · ROOTS</span>
              <span className="journey-status">FOUNDATION</span>
            </div>
            <h3>Learning to build</h3>
            <p>
              Grounded in software fundamentals and systems thinking. Knowing how
              architecture, latency, and code actually execute gives clarity when
              making hard engineering trade-offs.
            </p>
            <div className="journey-badges">
              <span>[CODE // REASONING]</span>
              <span>[SYSTEMS // THINKING]</span>
            </div>
          </article>

          <article className="journey-card">
            <div className="journey-card-corner" aria-hidden="true" />
            <div className="journey-card-head">
              <span className="journey-step">02 · CRAFT</span>
              <span className="journey-status">PRODUCT</span>
            </div>
            <h3>Leading products from 0→1</h3>
            <p>
              Bridging engineering reality and business impact. Unifying discovery,
              user pain points, and strategic roadmaps into clear product specs that
              teams can ship with confidence.
            </p>
            <div className="journey-badges">
              <span>[STRATEGY // ROADMAPS]</span>
              <span>[DISCOVERY // SIGNALS]</span>
            </div>
          </article>

          <article className="journey-card">
            <div className="journey-card-corner" aria-hidden="true" />
            <div className="journey-card-head">
              <span className="journey-step">03 · VELOCITY</span>
              <span className="journey-status">EXECUTION</span>
            </div>
            <h3>Staying close to production</h3>
            <p>
              When a prototype answers an open question faster than two weeks of
              meetings, I&apos;ll still open the IDE, test the APIs directly, or build
              the proof-of-concept myself.
            </p>
            <div className="journey-badges">
              <span>[PROTOTYPES // FAST]</span>
              <span>[PRD → PRODUCTION]</span>
            </div>
          </article>
        </div>

        <SectionRule label="How I work" />
        <div className="section-intro">
          <h2>
            Long story short,
            <br />I make complexity <em>workable.</em>
          </h2>
          <p>
            Connecting customer context, business outcomes, and technical
            reality so teams can make confident decisions and ship useful work.
          </p>
        </div>

        <div className="how-pillars">
          <div className="how-pillar-card">
            <div className="pillar-corner" aria-hidden="true" />
            <div className="pillar-head">
              <span className="pillar-phase">PHASE 01 // EVIDENCE</span>
              <i className="status-dot" />
            </div>
            <h3>Context &amp; Discovery</h3>
            <p>
              Finding genuine signal across user interviews, behavior analytics,
              and commercial outcomes before locking commitments.
            </p>
            <span className="pillar-metric">EVIDENCE &gt; ASSUMPTIONS</span>
          </div>

          <div className="how-pillar-card">
            <div className="pillar-corner" aria-hidden="true" />
            <div className="pillar-head">
              <span className="pillar-phase">PHASE 02 // ALIGNMENT</span>
              <i className="status-dot" />
            </div>
            <h3>Technical Reality</h3>
            <p>
              Partnering with engineering on API contracts, system constraints,
              and data models early to ensure what ships is resilient.
            </p>
            <span className="pillar-metric">RESILIENT ARCHITECTURE</span>
          </div>

          <div className="how-pillar-card">
            <div className="pillar-corner" aria-hidden="true" />
            <div className="pillar-head">
              <span className="pillar-phase">PHASE 03 // VELOCITY</span>
              <i className="status-dot" />
            </div>
            <h3>Execution &amp; Telemetry</h3>
            <p>
              Rapid prototyping, pragmatic scope slicing, and closing feedback
              loops immediately after deployment with real production telemetry.
            </p>
            <span className="pillar-metric">0→1 SHIP VELOCITY</span>
          </div>
        </div>

        <div className="how-capabilities-wrap">
          <small className="capabilities-label">CORE CAPABILITIES // DOMAIN EXPERTISE</small>
          <div className="tag-row capabilities-tags">
            <span>Product strategy</span>
            <span>Platforms &amp; Infra</span>
            <span>API Design</span>
            <span>Data Systems</span>
            <span>UX/UI Prototyping</span>
            <span>AI &amp; LLM Workflows</span>
          </div>
        </div>
      </section>
      <ExperienceSection />
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
