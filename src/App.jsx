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
      "Spearheaded development of the Vendor Assessment Portal, a full-stack web application using React.js and Express.js, streamline ISO and architecture review for potential vendors, centralizing assessments, and improving onboarding efficiency by 34%.",
    responsibilities: [
      // "Spearheaded development of the Vendor Assessment Portal, a full-stack web application using React.js and Express.js, streamline ISO and architecture review for potential vendors, centralizing assessments, and improving onboarding efficiency by 34%",
      "Designed and built a serverless Python workflow using AWS Lambda, automated through AWS EventBridge to periodically retrieve data from Snowflake and send alerts to Slack, resulting in a 90% reduction in inactive incidents over 3 months",
      // "Developed Performance and Talent Hub (PATH), a full stack application used by the entire company for the performance management process. Integrated GenAI capability to summarize feedback which saving the enterprise ~1.3 million hours annually",
      "Engineered and maintained Ordino, a Python-based enterprise Slack chatbot used by 150+ development teams at Capital One, enabling teams to ensure application compliance with enterprise mandates, resulting in more secure, resilient, and optimized systems",
      // "Partnered with Human Resources team to develop Izby, a Python-based Slack chatbot that detects non-inclusive language / problematic terms and suggests inclusive alternatives, fostering more compassionate team communication",
    ],
  },
  {
    role: "Software Engineer II",
    company: "WeightWatchers",
    period: "2023 — 2024",
    description:
      "Developed and maintained scalable and highly available full-stack applications for the Studio Tech team at WeightWatchers, allowing coaches to engage with members via group chat and manage administrative tasks during virtual and in-person workshops",
    responsibilities: [
      // "Developed and maintained scalable and highly available full-stack applications for the Studio Tech team at WeightWatchers, allowing coaches to engage with members via group chat and manage administrative tasks during virtual and in-person workshops",
      // "Built and implemented Coach Experience Platform (CXP), a React.js and Next.js application used by WeightWatchers coaches worldwide, which enhanced the user experience and saved the company approximately $3 million annually",
      // "Built a feature-flagging microservice using Node.js and Express.js, leveraging PostgreSQL's ltree data type for dynamic feature toggling, which reduced the need for manual application redeployment and increased engineering productivity by 80%",
      // "Spearheaded initiatives to integrate Greenhouse APIs into WeightWatchers' corporate careers page, transforming the site with React.js, Drupal, and Storybook.js to deliver a modern, user-friendly interface, and a seamless experience for job seekers%",
      // "Coordinated with the Database Administrator (DBA) team to consolidate three PostgreSQL databases into a single unified database, resulting in a 30% improvement in query performance, simplified maintenance, and enhanced resource efficiency",
    ],
  },
  {
    role: "Software Engineer",
    company: "Rent the Runway",
    period: "2021 — 2022",
    description:
      "Worked on the Warehouse Automation team, developing software applications to manage inbound (receiving units from customers and storing them in inventory) and outbound workflows (processing and shipping customer orders) across all warehouses; collaborated closely with the Fulfillment, Transportation, and Operation teams",
    responsibilities: [
      // "Worked on the Warehouse Automation team, developing software applications to manage inbound (receiving units from customers and storing them in inventory) and outbound workflows (processing and shipping customer orders) across all warehouses; collaborated closely with the Fulfillment, Transportation, and Operation teams",
      // "Developed Packout, a backend microservice using Kotlin, Spring Boot, MongoDB, and RabbitMQ, to replace third-party software, responsible for managing the outbound workflow in the New Jersey warehouse, resulting in annual savings of approximately $1 million",
      // "Enhanced and maintained YAMS, a React.js application utilized by the Operations team to provide real-time status updates of packaging stations, improved the warehouse associates' responsiveness and reduced incidents caused by overloaded packaging stations by 25%",
      // "Enhanced and maintained YAMS, a React.js application used internally by the Operations team for releasing order batches, managing shipping units, and automating cleaning and drying processes, resulting in a 33\% increase in productivity",
    ],
  },
];

const projects = [
  {
    title: "NYC School Navigator",
    description: "Find and compare NYC public, charter, and private school",
    tags: ["JavaScript/React", "Python/FastAPI", "Ollama/LangChain/ChromaDB"],
    problem:
      "The DOE website is a maze and comparing schools is a nightmare. I wanted to provide clean and intuitive experience for parents who wants the best education for their child",
    solutions: [
      "Develop dashboard to browse 1,500+ NYC schools across all five boroughs with real data (data is puled from NYC DOE sources and NYC Open Data Portal",
      "Interactive Google map view with color-coded markers and implement commute time calculator",
      "Integrate AI chat assistant for personalized school recommendations.",
    ],
    achievement: [
      "Crafted a beautiful and responsive dashboard that allows user to smart filtering schools by district, grade level, with multiple sort options, helping them to compare of up to 5 schools side by side.",
    ],
    youtube: "dQw4w9WgXcQ",
  },
  // {
  //   title: "Terraform",
  //   description:
  //     "CLI tool that scaffolds full-stack projects with opinionated best practices — auth, CI/CD, linting, and deployment configs out of the box.",
  //   tags: ["Go", "CLI", "DevOps"],
  //   problem:
  //     "Bootstrapping new projects required hours of repetitive boilerplate setup — auth, linting, CI pipelines, and deployment configs were copy-pasted across repos.",
  //   solutions: [
  //     "Designed a template engine in Go with composable, swappable module presets",
  //     "Created interactive prompts for selecting auth providers, CI platforms, and hosting targets",
  //     "Built a plugin system allowing community-contributed scaffolding templates",
  //     "Automated dependency resolution and version pinning during generation",
  //   ],
  //   achievement:
  //     "500+ GitHub stars; reduces project setup time from ~4 hours to under 2 minutes with consistent, battle-tested configurations.",
  //   youtube: "dQw4w9WgXcQ",
  // },
  // {
  //   title: "Lumina",
  //   description:
  //     "Open-source design token manager that bridges Figma and code, generating theme files for CSS, Tailwind, and styled-components.",
  //   tags: ["TypeScript", "Figma API", "Design Systems"],
  //   problem:
  //     "Design-to-code handoff was error-prone — designers updated tokens in Figma while engineers maintained separate, frequently out-of-sync theme files.",
  //   solutions: [
  //     "Built a TypeScript pipeline that connects to the Figma REST API to extract design tokens",
  //     "Created code generators for CSS custom properties, Tailwind config, and styled-components themes",
  //     "Implemented a watch mode with webhook listeners to auto-regenerate on every Figma publish",
  //     "Added visual diffing reports so teams can review token changes before merging",
  //   ],
  //   achievement:
  //     "Eliminated token drift across 3 product teams; cut design QA cycle time by 70% and now processes 1,200+ tokens on every Figma publish event.",
  //   youtube: "dQw4w9WgXcQ",
  // },
  // {
  //   title: "Pulse",
  //   description:
  //     "Lightweight application performance monitor with custom dashboards, alerting, and anomaly detection for microservices.",
  //   tags: ["Python", "Grafana", "InfluxDB"],
  //   problem:
  //     "Existing APM tools were expensive and overly complex for small microservice deployments, leaving teams blind to performance regressions until users complained.",
  //   solutions: [
  //     "Developed a lightweight Python agent that instruments HTTP endpoints and background jobs",
  //     "Streamed metrics to InfluxDB with automatic retention policies and downsampling",
  //     "Built pre-configured Grafana dashboards with per-service and aggregate views",
  //     "Implemented statistical anomaly detection with configurable Slack and email alerting",
  //   ],
  //   achievement:
  //     "Deployed across 18 microservices; detected a critical memory leak within 4 minutes of deployment that would have caused a production outage.",
  //   youtube: "dQw4w9WgXcQ",
  // },
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
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
        .exp-responsibilities {
          margin-top: 16px;
          padding-left: 0;
          list-style: none;
        }
        .exp-responsibilities li {
          font-size: 0.88rem;
          line-height: 1.65;
          color: var(--fg-muted);
          padding: 5px 0 5px 20px;
          position: relative;
        }
        .exp-responsibilities li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--border-input);
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .project-block {
          border: 1px solid var(--border);
          border-bottom: none;
        }
        .project-block:last-child {
          border-bottom: 1px solid var(--border);
        }
        .project-card {
          background: var(--card-bg);
          padding: 40px 32px;
          display: flex; flex-direction: column; gap: 14px;
          transition: background 0.4s ease, color 0.4s ease;
          cursor: pointer;
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
        .project-card:hover .project-detail-label { color: var(--card-hover-tag-color); }
        .project-card:hover .project-detail-text { color: var(--card-hover-desc); }
        .project-card:hover .project-solution-list li { color: var(--card-hover-desc); }
        .project-card:hover .project-solution-list li::before { color: var(--card-hover-tag-color); }
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
          font-size: 0.95rem; line-height: 1.65;
          color: var(--fg-secondary);
        }
        .project-card:hover .project-desc { color: var(--card-hover-desc); }
        .project-details {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
          margin: 8px 0 4px;
        }
        .project-detail {
          display: flex; flex-direction: column; gap: 6px;
        }
        .project-detail-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg-faint);
          transition: color 0.4s ease;
        }
        .project-detail-text {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--fg-muted);
          transition: color 0.4s ease;
        }
        .project-solution-list {
          list-style: none;
          padding: 0; margin: 0;
        }
        .project-solution-list li {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--fg-muted);
          padding: 3px 0 3px 18px;
          position: relative;
          transition: color 0.4s ease;
        }
        .project-solution-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--border-input);
          font-size: 0.75rem;
          transition: color 0.4s ease;
        }
        .project-video {
          background: var(--card-bg);
          padding: 0 32px 32px;
          border-top: 1px solid var(--border);
        }
        .video-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          overflow: hidden;
          border-radius: 2px;
          background: #000;
        }
        .video-wrapper iframe {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border: none;
        }
        .video-caption {
          display: block;
          margin-top: 12px;
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: var(--fg-faint);
        }
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
        .contact-email {
          color: var(--fg);
          border-bottom: 1px solid var(--border-input);
          padding-bottom: 1px;
          transition: border-color 0.3s ease;
        }
        .contact-email:hover {
          border-color: var(--fg);
        }
        .mailto-btn {
          display: inline-block;
          margin-top: 8px;
          padding: 18px 52px;
          background: var(--btn-bg);
          color: var(--btn-fg);
          border: none;
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.15s ease;
          text-decoration: none;
        }
        .mailto-btn:hover { background: var(--btn-hover-bg); }
        .mailto-btn:active { transform: scale(0.97); }

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
          .project-details { grid-template-columns: 1fr; gap: 16px; }
          .project-card { padding: 28px 20px; }
          .project-video { padding: 0 20px 24px; }
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
            Daniel Constantine
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
            Software engineer · building clean, performant, and thoughtful
            digital experiences
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
              I'm <strong>Daniel Constantine</strong>, a software engineer with
              6+ years of experience crafting web applications that are fast,
              accessible, and elegantly simple. I believe great software is
              invisible — it just works. I specialize in <strong>React</strong>,{" "}
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
                  {exp.responsibilities && (
                    <ul className="exp-responsibilities">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j}>{r}</li>
                      ))}
                    </ul>
                  )}
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
            <div className="projects-list">
              {projects.map((p, i) => (
                <div className="project-block" key={i}>
                  <div className="project-card">
                    <div className="project-title">
                      {p.title}
                      <span className="project-arrow">↗</span>
                    </div>
                    <div className="project-desc">{p.description}</div>
                    <div className="project-details">
                      <div className="project-detail">
                        <span className="project-detail-label">Problem</span>
                        <span className="project-detail-text">{p.problem}</span>
                      </div>
                      <div className="project-detail">
                        <span className="project-detail-label">Solutions</span>
                        <ul className="project-solution-list">
                          {p.solutions.map((s, j) => (
                            <li key={j}>{s}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="project-detail">
                        <span className="project-detail-label">Result</span>
                        <span className="project-detail-text">
                          {p.achievement}
                        </span>
                      </div>
                    </div>
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                  {p.youtube && (
                    <div className="project-video">
                      <div className="video-wrapper">
                        <iframe
                          src={`https://www.youtube.com/embed/${p.youtube}`}
                          title={`${p.title} demo video`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <span className="video-caption">
                        ▶ {p.title} — Project Demo
                      </span>
                    </div>
                  )}
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
              <br />
              Drop me a line at{" "}
              <a href="mailto:danielkc.dev@proton.me" className="contact-email">
                danielkc.dev@proton.me
              </a>
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <a
              href={`mailto:danielkc.dev@proton.me?subject=${encodeURIComponent("Let's work together")}&body=${encodeURIComponent("Hi Daniel,\n\nI'd love to chat about a project.\n\nBest,\n")}`}
              className="submit-btn mailto-btn"
            >
              Send Message
            </a>
          </FadeIn>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-links">
            <a href="https://github.com/daniel-constantine">GitHub</a>
            <a href="https://www.linkedin.com/in/danielconstantine">LinkedIn</a>
            <a href="mailto:danielkc.dev@proton.me">Email</a>
            <a href="https://www.linkedin.com/in/danielconstantine">Resume</a>
          </div>
          <div>© 2026 Daniel Constantine. All rights reserved.</div>
        </footer>
      </div>
    </>
  );
}
