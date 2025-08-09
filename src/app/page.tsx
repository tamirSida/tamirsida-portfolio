"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Layers,
  Cpu,
  Database,
} from "lucide-react";
import {
  FaClipboardList,
  FaShieldAlt,
  FaBullseye,
  FaShoppingCart,
} from "react-icons/fa";

export default function Portfolio() {
  const [readmeOpenIndex, setReadmeOpenIndex] = useState<number | null>(null);

  type Project = {
    title: string;
    year: string;
    blurb: string;
    stack: string[];
    links: { demo: string; repo: string };
    icon: ReactNode;
    repoPrivate?: boolean;
    demoClassified?: boolean;
    readme?: string;
  };

  const projects: Project[] = [
    {
      title: "Version Bravo Application Platform & CRM",
      year: "2025",
      blurb:
        "Multi-phase application flow with admin dashboards, GPT logic checks, automated flagging, and interview tracking.",
      stack: ["Next.js", "Firebase", "LLMs"],
      links: { demo: "https://portal.versionbravo.com/admin", repo: "#" },
      repoPrivate: true,
      icon: <FaClipboardList className="h-8 w-8 text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "55th Brigade Smart Community Platform",
      year: "2024",
      blurb:
        "Secure community hub for a large reserve brigade: roles & permissions, announcements, events, and workflows.",
      stack: ["Next.js", "Firebase", "RBAC"],
      links: {
        demo: "https://hativa55.netlify.app",
        repo: "https://github.com/tamirSida/hativa55-portal",
      },
      icon: <FaShieldAlt className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "Shooting Range Management System",
      year: "2024",
      blurb:
        "Scheduling, drill templates, grading, and analytics with real-time data capture and permissioned access.",
      stack: ["Next.js", "Firebase", "Realtime DB"],
      links: { demo: "#", repo: "#" },
      demoClassified: true,
      repoPrivate: true,
      icon: <FaBullseye className="h-8 w-8 text-rose-600 dark:text-rose-400" />,
    },
    {
      title: "AGAT Catalog",
      year: "2024",
      blurb:
        "Product catalog with filtering, Firebase auth (Admin/Agent/Client), favorites, and responsive UI.",
      stack: ["HTML", "JavaScript", "Firebase"],
      links: {
        demo: "https://agat-dcatalog.netlify.app",
        repo: "https://github.com/tamirSida/agatd",
      },
      icon: <FaShoppingCart className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
      readme: `AGAT Catalog - Firebase Authentication & Netlify Deployment\n\nThis README provides an overview of the AGAT Catalog project's documentation files and deployment resources.\n\nProject Overview\n\nThe AGAT Catalog is a web application that displays products from different categories (Alcohol, Whiskey, Wine, Beer, Food) with features for filtering, user authentication, and personalized experiences.\n\nThe application now includes:\n- Firebase Authentication with role-based access (Admin, Agent, Client)\n- User management dashboard for Admins\n- Client management interface for Agents\n- "Like" functionality for Clients to save favorite products\n- Responsive design for mobile and desktop devices\n\nDocumentation Files\n\nProject Specifications\n- CLAUDE.md: Main project documentation with feature descriptions and technical details\n\nDeployment Documentation\n- DEPLOYMENT.md: General deployment guide for setting up the site on Netlify\n- DEPLOYMENT_UPDATE.md: Specific instructions for updating an existing Netlify site\n- FIREBASE_SETUP.md: Setup guide for Firebase Authentication and Firestore\n- TESTING_CHECKLIST.md: Post-deployment testing checklist to ensure everything works\n\nConfiguration Files\n- netlify.toml: Configuration file for Netlify deployment\n- _redirects: URL redirection rules for client-side routing\n- _headers: Security headers for the Netlify site\n- firestore.rules: Security rules for Firestore database\n- firebase-config.js: Firebase initialization with environment variable support\n\nMain Application Files\n\nHTML Files\n- index.html: Main product catalog with filtering\n- login.html: User authentication page\n- admin.html: Admin dashboard for user management\n- agent.html: Agent dashboard for client management\n- favorites.html: Client's saved/liked products page\n\nJavaScript\n- app.js: Main application logic\n- fallback-data.js: Fallback data when API calls fail\n- setup-collections.js: Script for initializing Firebase collections\n\nOther Resources\n- styles.css: Application styling\n- brands.csv: List of client/store names\n- tl/: Directory with product images\n- images/: Application images and logo\n\nGetting Started\n\nIf you're updating your existing Netlify site:\n1. Review DEPLOYMENT_UPDATE.md for step-by-step instructions\n2. Set up Firebase Authentication as described in FIREBASE_SETUP.md\n3. Use the TESTING_CHECKLIST.md to verify functionality after deployment\n\nIf you're setting up a new deployment:\n1. Follow the complete guide in DEPLOYMENT.md\n2. Configure Firebase as described in FIREBASE_SETUP.md\n\nUser Roles and Functionality\n\nAdmin\n- Manage users (create, edit, delete)\n- Approve registration requests\n- Assign clients to agents\n- View all catalog data\n\nAgent\n- View assigned clients\n- See products liked by their clients\n- Access the full product catalog\n\nClient\n- Browse and filter products\n- "Like" products to save favorites\n- View a personalized favorites page\n\nImportant Security Notes\n1. Always add your Netlify domain to Firebase Authentication's authorized domains\n2. Set proper environment variables in Netlify for Firebase configuration\n3. Ensure Firestore security rules are properly configured\n4. Never commit sensitive API keys or credentials to the repository`,
    },
  ];

  const skills = [
    {
      icon: <Code2 className="h-6 w-6" />,
      label: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "Java", "C#"],
    },
    {
      icon: <Layers className="h-6 w-6" />,
      label: "Frameworks",
      items: ["React", "Next.js", "Node.js", ".NET"],
    },
    {
      icon: <Database className="h-6 w-6" />,
      label: "Platforms",
      items: ["Firebase", "Vercel", "GitHub", "GCP (basic)"],
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      label: "AI/ML",
      items: ["Prompt Eng.", "LLM Apps", "RAG", "LangChain (light)"],
    },
  ];

  const logos: string[] = [
    "/logos/version-bravo-logo.png",
    "/logos/agatd-logo.png",
    "/logos/skyhoop-logo.jpeg",
    "/logos/rarex-logo.png",
    "/logos/idf-logo.jpg",
    "/logos/gorund-works-logo.png",
  
  ];

  return (
    <div className="dark">
      <div className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100">
        {/* Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-200/50 dark:border-neutral-800/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
                <img src="/logos/logo.svg" alt="Logo" className="h-6 w-auto" />
                Tamir Sida
              </a>
              <nav className="hidden gap-6 text-sm md:flex">
                <a href="#projects" className="hover:opacity-80">
                  Projects
                </a>
                <a href="#skills" className="hover:opacity-80">
                  Skills
                </a>
                <a href="#about" className="hover:opacity-80">
                  About
                </a>
                <a href="#contact" className="hover:opacity-80">
                  Contact
                </a>
              </nav>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/tamirsida"
                  target="_blank"
                  className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/tamirsida"
                  target="_blank"
                  className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
            <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-teal-400/30 to-blue-500/20 blur-3xl"></div>
          </div>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="mb-3 text-xs font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400">
                Software Developer • AI-Focused • Tel Aviv
              </p>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                Building AI‑driven web apps that ship fast and scale cleanly.
              </h1>
              <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-300">
                I’m Tamir, a full‑stack developer specializing in Next.js, Firebase, and LLM integrations. I’ve built secure platforms for defense and startups—focused on reliability, UX, and maintainability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-4 py-2 text-white hover:opacity-90 dark:bg-white dark:text-neutral-900"
                >
                  View my work <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-2 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                >
                  Contact me
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trusted by (moved below projects) */}
        <section id="trusted-by" className="mx-auto max-w-7xl px-6 py-10 sm:py-12">
          <h2 className="text-sm font-semibold tracking-wide text-neutral-600 dark:text-neutral-400">
            Trusted by
          </h2>
          <div className="mt-4 hero-marquee-wrapper marquee-active">
            <div className="hero-marquee">
              {logos.concat(logos).map((src, idx) => (
                <span key={`logo-${idx}`} className="inline-flex items-center">
                  <img
                    src={src}
                    alt="Partner logo"
                    className="inline-block opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                  <span className="separator" />
                </span>
              ))}
            </div>
          </div>
        </section>

        

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">Featured Projects</h2>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Context-rich case studies. Problem → Solution → Impact.
              </p>
            </div>
            <a href="#" className="text-sm inline-flex items-center gap-1 hover:opacity-80">
              All projects <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="w-full grid place-items-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 py-8">
                  <div className="scale-100 transition-transform duration-300 group-hover:scale-105">
                    {p.icon}
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                    <span>{p.year}</span>
                    <div className="flex gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border px-2 py-0.5 dark:border-neutral-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                    {p.blurb}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                    <a
                      href={p.links.demo}
                      target={p.demoClassified ? undefined : "_blank"}
                      onClick={(e) => {
                        if (p.demoClassified) {
                          e.preventDefault();
                          alert("Demo is classified");
                        }
                      }}
                      className="inline-flex items-center gap-1 hover:opacity-80"
                    >
                      Demo <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={p.links.repo}
                      target={p.repoPrivate ? undefined : "_blank"}
                      onClick={(e) => {
                        if (p.repoPrivate) {
                          e.preventDefault();
                          alert("Repository is private");
                        }
                      }}
                      className="inline-flex items-center gap-1 hover:opacity-80"
                    >
                      Code <Github className="h-4 w-4" />
                    </a>
                    {p.readme && (
                      <button
                        onClick={() =>
                          setReadmeOpenIndex(readmeOpenIndex === i ? null : i)
                        }
                        className="inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-xs dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      >
                        README
                      </button>
                    )}
                  </div>
                  {p.readme && readmeOpenIndex === i && (
                    <div className="mt-3 rounded-lg border p-3 text-xs leading-relaxed dark:border-neutral-800 max-h-56 overflow-auto whitespace-pre-wrap">
                      {p.readme}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-bold">Skills & Tech</h2>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Focused on maintainable, scalable systems.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((cat) => (
              <div
                key={cat.label}
                className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200">
                  {cat.icon}
                  <h3 className="font-semibold">{cat.label}</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-xl bg-neutral-100 px-2 py-1 text-xs dark:bg-neutral-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">About</h2>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                I’m a full‑stack developer and entrepreneur. I build AI‑enabled web apps with a strong focus on product clarity and clean architecture. My work spans defense tech, accelerators, and education—always optimizing for speed to value and long‑term maintainability.
              </p>
              <ul className="mt-4 list-disc pl-5 text-neutral-700 dark:text-neutral-300">
                <li>
                  Dual Honors student in Computer Science & Entrepreneurship (Reichman
                  University).
                </li>
                <li>
                  Project work includes secure community platforms, application CRMs, and
                  real‑time training systems.
                </li>
                <li>
                  Former combat officer; leadership and execution under pressure inform my
                  delivery style.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <h3 className="font-semibold">Highlights</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <Stat label="Years in software" value="3+" />
                <Stat label="Shipped projects" value="20+" />
                <Stat label="Primary stack" value="Next.js + Firebase" />
                <Stat label="Focus" value="AI + UX + Scale" />
              </div>
              {/* CV link removed */}
            </div>
          </div>
        </section>

        {/* Testimonials removed */}

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Open to freelance work, collaborations, and advisory.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:tamirsida25@gmail.com"
                className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-4 py-2 text-white dark:bg-white dark:text-neutral-900"
              >
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a
                href="https://github.com/tamirsida"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/tamirsida"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
          <footer className="py-10 text-center text-xs text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Tamir Sida. All rights reserved.
          </footer>
        </section>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 p-4 text-sm dark:border-neutral-800">
      <div className="text-neutral-500 dark:text-neutral-400">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}

// Quote component removed (no longer used)
