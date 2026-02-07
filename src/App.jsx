import { useState, useEffect, useRef } from "react";

const sectionStyle = {
  padding: "100px 24px",
  maxWidth: 820,
  margin: "0 auto",
};

const FadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Capital One",
    period: "2024 — Present",
    description:
      "Leading frontend architecture for a high-traffic SaaS platform. Reduced bundle size by 40% and improved Core Web Vitals across the product suite.",
  },
  {
    role: "Software Engineer II",
    company: "WeightWatchers",
    period: "2023 — 2024",
    description:
      "Built real-time data visualization dashboards and internal tooling serving 200+ engineers. Championed migration from class components to hooks.",
  },
  {
    role: "Software Engineer",
    company: "Rent the Runway",
    period: "2021 — 2022",
    description:
      "Developed responsive marketing sites and e-commerce storefronts for agency clients using React, Node.js, and PostgreSQL.",
  },
];

const projects = [
  {
    title: "Synth",
    description:
      "A real-time collaborative code editor with WebSocket sync, syntax highlighting, and conflict-free replicated data types.",
    tags: ["React", "Node.js", "CRDT", "WebSocket"],
  },
  {
    title: "Terraform",
    description:
      "CLI tool that scaffolds full-stack projects with opinionated best practices — auth, CI/CD, linting, and deployment configs out of the box.",
    tags: ["Go", "CLI", "DevOps"],
  },
  {
    title: "Lumina",
    description:
      "Open-source design token manager that bridges Figma and code, generating theme files for CSS, Tailwind, and styled-components.",
    tags: ["TypeScript", "Figma API", "Design Systems"],
  },
  {
    title: "Pulse",
    description:
      "Lightweight application performance monitor with custom dashboards, alerting, and anomaly detection for microservices.",
    tags: ["Python", "Grafana", "InfluxDB"],
  },
];

const navLinks = ["About", "Experience", "Projects", "Contact"];

const ThemeIcon = ({ dark }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "block" }}
  >
    {dark ? (
      <>
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </>
    ) : (
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    )}
  </svg>
);

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap');

        :root {
          --bg: #ffffff;
          --fg: #111111;
          --fg-secondary: #555555;
          --fg-muted: #888888;
          --fg-faint: #999999;
          --fg-ghost: #bbbbbb;
          --border: #e8e8e8;
          --border-light: #f0f0f0;
          --border-input: #dddddd;
          --nav-bg: rgba(255,255,255,0.92);
          --card-bg: #ffffff;
          --card-hover-bg: #111111;
          --card-hover-fg: #ffffff;
          --card-hover-desc: #aaaaaa;
          --card-hover-tag-border: #444444;
          --card-hover-tag-color: #aaaaaa;
          --selection-bg: #111111;
          --selection-fg: #ffffff;
          --scrollbar-track: #ffffff;
          --scrollbar-thumb: #cccccc;
          --btn-bg: #111111;
          --btn-fg: #ffffff;
          --btn-hover-bg: #333333;
          --hero-sub: #666666;
          --mobile-bg: #ffffff;
        }

        [data-theme="dark"] {
          --bg: #0a0a0a;
          --fg: #e8e8e8;
          --fg-secondary: #aaaaaa;
          --fg-muted: #777777;
          --fg-faint: #666666;
          --fg-ghost: #444444;
          --border: #1e1e1e;
          --border-light: #181818;
          --border-input: #333333;
          --nav-bg: rgba(10,10,10,0.92);
          --card-bg: #0f0f0f;
          --card-hover-bg: #e8e8e8;
          --card-hover-fg: #0a0a0a;
          --card-hover-desc: #555555;
          --card-hover-tag-border: #bbbbbb;
          --card-hover-tag-color: #555555;
          --selection-bg: #e8e8e8;
          --selection-fg: #0a0a0a;
          --scrollbar-track: #0a0a0a;
          --scrollbar-thumb: #333333;
          --btn-bg: #e8e8e8;
          --btn-fg: #0a0a0a;
          --btn-hover-bg: #cccccc;
          --hero-sub: #777777;
          --mobile-bg: #0a0a0a;
        }

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; font-size: 16px; }
        body {
          background: var(--bg); color: var(--fg);
          font-family: 'Newsreader', Georgia, serif;
          -webkit-font-smoothing: antialiased;
          transition: background 0.4s ease, color 0.4s ease;
        }

        ::selection { background: var(--selection-bg); color: var(--selection-fg); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--scrollbar-track); }
        ::-webkit-scrollbar-thumb { background: var(--scrollbar-thumb); border-radius: 3px; }

        a { color: inherit; text-decoration: none; }

        .nav-bar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 40px;
          transition: all 0.4s ease;
        }
        .nav-bar.scrolled {
          background: var(--nav-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          padding: 14px 40px;
        }
        .nav-logo {
          font-family: 'DM Mono', monospace;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          font-weight: 500;
          cursor: pointer;
        }
        .nav-right { display: flex; align-items: center; gap: 32px; }
        .nav-links { display: flex; gap: 36px; list-style: none; }
        .nav-links li {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
        }
        .nav-links li::after {
          content: '';
          position: absolute; bottom: -4px; left: 0;
          width: 0; height: 1px; background: var(--fg);
          transition: width 0.3s ease;
        }
        .nav-links li:hover::after { width: 100%; }

        .theme-toggle {
          background: none; border: 1px solid var(--border);
          color: var(--fg);
          width: 36px; height: 36px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .theme-toggle:hover {
          background: var(--fg);
          color: var(--bg);
          border-color: var(--fg);
        }

        .hamburger {
          display: none; cursor: pointer; background: none; border: none;
          width: 28px; height: 20px; position: relative; z-index: 110;
        }
        .hamburger span {
          display: block; width: 100%; height: 1.5px; background: var(--fg);
          position: absolute; left: 0; transition: all 0.35s ease;
        }
        .hamburger span:nth-child(1) { top: 0; }
        .hamburger span:nth-child(2) { top: 9px; }
        .hamburger span:nth-child(3) { top: 18px; }
        .hamburger.open span:nth-child(1) { top: 9px; transform: rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { top: 9px; transform: rotate(-45deg); }

        .mobile-menu {
          position: fixed; inset: 0; z-index: 99;
          background: var(--mobile-bg);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 40px;
          opacity: 0; pointer-events: none;
          transition: opacity 0.35s ease;
        }
        .mobile-menu.open { opacity: 1; pointer-events: all; }
        .mobile-menu li {
          list-style: none;
          font-family: 'DM Mono', monospace;
          font-size: 1rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
        }

        .hero {
          min-height: 100vh;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          position: relative;
        }
        .hero-greeting {
          font-family: 'DM Mono', monospace;
          font-size: clamp(0.75rem, 1.2vw, 0.9rem);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg-muted);
          margin-bottom: 20px;
        }
        .hero-wave {
          display: inline-block;
          animation: wave 2.5s ease-in-out infinite;
          transform-origin: 70% 70%;
          font-style: normal;
        }
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60%, 100% { transform: rotate(0deg); }
        }
        .hero h1 {
          font-family: 'Newsreader', Georgia, serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }
        .hero h1 em { font-style: italic; font-weight: 400; }
        .hero p {
          font-family: 'DM Mono', monospace;
          font-size: clamp(0.7rem, 1.2vw, 0.85rem);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--hero-sub);
          max-width: 560px;
        }
        .scroll-indicator {
          position: absolute; bottom: 40px;
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--fg-faint);
          animation: float 2.5s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--fg-faint);
          margin-bottom: 48px;
          display: flex; align-items: center; gap: 16px;
        }
        .section-label::after {
          content: ''; flex: 1; height: 1px; background: var(--border);
        }

        .about-text {
          font-size: clamp(1.15rem, 2.2vw, 1.5rem);
          line-height: 1.75;
          color: var(--fg-secondary);
          max-width: 680px;
        }
        .about-text strong { color: var(--fg); font-weight: 600; }

        .divider {
          width: 100%; max-width: 820px; margin: 0 auto;
          height: 1px; background: var(--border);
        }

        .exp-card {
          padding: 36px 0;
          border-bottom: 1px solid var(--border-light);
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 32px; align-items: start;
          transition: opacity 0.3s ease;
        }
        .exp-card:last-child { border-bottom: none; }
        .exp-card:hover { opacity: 0.75; }
        .exp-meta {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem; letter-spacing: 0.06em;
          color: var(--fg-muted); line-height: 1.6;
        }
        .exp-company {
          font-family: 'Newsreader', Georgia, serif;
          color: var(--fg); font-size: 0.95rem; font-weight: 500;
        }
        .exp-role {
          font-family: 'Newsreader', Georgia, serif;
          font-size: 1.2rem; font-weight: 500;
          margin-bottom: 10px; color: var(--fg);
        }
        .exp-desc {
          font-size: 0.95rem; line-height: 1.7;
          color: var(--fg-secondary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          background: var(--border);
          border: 1px solid var(--border);
        }
        .project-card {
          background: var(--card-bg);
          padding: 40px 32px;
          display: flex; flex-direction: column; gap: 14px;
          transition: background 0.4s ease, color 0.4s ease;
          cursor: pointer; min-height: 220px;
        }
        .project-card:hover {
          background: var(--card-hover-bg);
          color: var(--card-hover-fg);
        }
        .project-card:hover .project-tags span {
          border-color: var(--card-hover-tag-border);
          color: var(--card-hover-tag-color);
        }
        .project-card:hover .project-arrow { opacity: 1; }
        .project-title {
          font-family: 'Newsreader', Georgia, serif;
          font-size: 1.4rem; font-weight: 500;
          display: flex; align-items: center; justify-content: space-between;
        }
        .project-arrow {
          font-size: 1.2rem; opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .project-card:hover .project-arrow { transform: translate(3px, -3px); }
        .project-desc {
          font-size: 0.9rem; line-height: 1.65;
          color: var(--fg-muted); flex: 1;
        }
        .project-card:hover .project-desc { color: var(--card-hover-desc); }
        .project-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; }
        .project-tags span {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem; letter-spacing: 0.06em;
          padding: 4px 10px;
          border: 1px solid var(--border-input);
          border-radius: 2px;
          transition: all 0.4s ease;
        }

        .contact-section {
          text-align: center;
          padding: 100px 24px 80px;
          max-width: 560px; margin: 0 auto;
        }
        .contact-heading {
          font-family: 'Newsreader', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400; font-style: italic;
          margin-bottom: 16px;
        }
        .contact-sub {
          font-size: 0.95rem; color: var(--fg-muted);
          margin-bottom: 48px; line-height: 1.6;
        }
        .form-group { margin-bottom: 24px; text-align: left; }
        .form-label {
          display: block;
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem; letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--fg-faint); margin-bottom: 8px;
        }
        .form-input, .form-textarea {
          width: 100%; padding: 14px 0;
          border: none; border-bottom: 1px solid var(--border-input);
          font-family: 'Newsreader', Georgia, serif;
          font-size: 1.05rem; color: var(--fg);
          background: transparent; outline: none;
          transition: border-color 0.3s ease;
        }
        .form-input:focus, .form-textarea:focus { border-color: var(--fg); }
        .form-textarea { resize: vertical; min-height: 100px; }
        .submit-btn {
          margin-top: 16px; padding: 16px 48px;
          background: var(--btn-bg); color: var(--btn-fg);
          border: none;
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem; letter-spacing: 0.14em;
          text-transform: uppercase; cursor: pointer;
          transition: background 0.3s ease, transform 0.15s ease;
        }
        .submit-btn:hover { background: var(--btn-hover-bg); }
        .submit-btn:active { transform: scale(0.97); }
        .success-msg {
          font-family: 'DM Mono', monospace;
          font-size: 0.8rem; color: var(--fg);
          margin-top: 20px; letter-spacing: 0.06em;
        }

        .footer {
          text-align: center; padding: 40px 24px;
          border-top: 1px solid var(--border-light);
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem; letter-spacing: 0.08em;
          color: var(--fg-ghost);
        }
        .footer-links {
          display: flex; justify-content: center;
          gap: 28px; margin-bottom: 16px;
        }
        .footer-links a {
          color: var(--fg-muted);
          transition: color 0.3s ease;
          text-transform: uppercase; letter-spacing: 0.12em;
        }
        .footer-links a:hover { color: var(--fg); }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
          .nav-bar { padding: 16px 24px; }
          .nav-bar.scrolled { padding: 12px 24px; }
          .nav-right { gap: 16px; }
          .exp-card { grid-template-columns: 1fr; gap: 12px; }
          .projects-grid { grid-template-columns: 1fr; }
          .project-card { min-height: auto; }
          .project-arrow { opacity: 1; }
          .hero { min-height: 90vh; }
        }
      `}</style>

      <div
        data-theme={dark ? "dark" : "light"}
        style={{
          background: "var(--bg)",
          color: "var(--fg)",
          transition: "background 0.4s ease, color 0.4s ease",
          minHeight: "100vh",
        }}
      >
        {/* NAV */}
        <nav className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
          <div
            className="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            DANIEL CONSTANTINE
          </div>
          <div className="nav-right">
            <ul className="nav-links">
              {navLinks.map((l) => (
                <li key={l} onClick={() => scrollTo(l.toLowerCase())}>
                  {l}
                </li>
              ))}
            </ul>
            <button
              className="theme-toggle"
              onClick={() => setDark(!dark)}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              title={dark ? "Light mode" : "Dark mode"}
            >
              <ThemeIcon dark={dark} />
            </button>
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {navLinks.map((l) => (
            <li key={l} onClick={() => scrollTo(l.toLowerCase())}>
              {l}
            </li>
          ))}
        </div>

        {/* HERO */}
        <section className="hero">
          <div className="hero-greeting">
            <span className="hero-wave">👋</span> Hello there, I'm
          </div>
          <h1>
            <em>Daniel Constantine</em>
          </h1>
          <p>
            A software engineer who builds reliable systems with focused on
            clean, scalable code.
          </p>
          <div className="scroll-indicator">
            <span>Scroll</span>
            <span>↓</span>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={sectionStyle}>
          <FadeIn>
            <div className="section-label">01 — About</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="about-text">
              I'm <strong>Daniel</strong>, a software engineer with 6+ years of
              experience crafting web applications that are fast, accessible,
              and elegantly simple. I believe great software is invisible — it
              just works. I specialize in <strong>React</strong>,{" "}
              <strong>TypeScript</strong>, and
              <strong> distributed systems</strong>, and I care deeply about the
              details that separate good products from great ones.
            </p>
          </FadeIn>
        </section>

        <div className="divider" />

        {/* EXPERIENCE */}
        <section id="experience" style={sectionStyle}>
          <FadeIn>
            <div className="section-label">02 — Experience</div>
          </FadeIn>
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="exp-card">
                <div className="exp-meta">
                  <div className="exp-company">{exp.company}</div>
                  {exp.period}
                </div>
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-desc">{exp.description}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </section>

        <div className="divider" />

        {/* PROJECTS */}
        <section id="projects" style={{ ...sectionStyle, maxWidth: 900 }}>
          <FadeIn>
            <div className="section-label">03 — Projects</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="projects-grid">
              {projects.map((p, i) => (
                <div className="project-card" key={i}>
                  <div className="project-title">
                    {p.title}
                    <span className="project-arrow">↗</span>
                  </div>
                  <div className="project-desc">{p.description}</div>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <div className="divider" />

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <FadeIn>
            <div className="section-label" style={{ justifyContent: "center" }}>
              04 — Contact
            </div>
            <h2 className="contact-heading">Let's work together</h2>
            <p className="contact-sub">
              Have a project in mind or just want to say hello? I'd love to hear
              from you.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  className="form-input"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <button className="submit-btn" type="submit">
                Send Message
              </button>
              {submitted && (
                <div className="success-msg">✓ Message sent — thank you!</div>
              )}
            </form>
          </FadeIn>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Resume</a>
          </div>
          <div>© 2026 Alex Chen. All rights reserved.</div>
        </footer>
      </div>
    </>
  );
}
