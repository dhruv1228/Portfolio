import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhruv Pachauri — Software Developer & ML Engineer" },
      { name: "description", content: "Portfolio of Dhruv Pachauri. Full-stack developer building IPO platforms, AI financial advisors, and CNN-based medical imaging." },
      { property: "og:title", content: "Dhruv Pachauri — Software Developer & ML Engineer" },
      { property: "og:description", content: "Full-stack developer and ML engineer. React, Node.js, Python, TensorFlow." },
    ],
  }),
  component: Portfolio,
});

const experience = [
  {
    role: "Software Developer Intern",
    org: "Bluestock Fintech Pvt. Ltd.",
    place: "Pune",
    period: "Aug 2025 — Oct 2025",
    points: [
      "Developed an IPO web application and REST APIs for mobile integration enabling real-time IPO data access.",
      "Built a Machine Learning–based Fundamental Analysis System for publicly listed companies.",
      "Participated in requirement gathering and rapid prototype development.",
    ],
  },
  {
    role: "Trainee — Job Oriented Value-Added Course",
    org: "GLA University",
    place: "Mathura",
    period: "Jun 2025 — Jul 2025",
    points: [
      "Studied core AI/ML concepts and deep learning architectures.",
      "Capstone: Lung Cancer Detection using Convolutional Neural Networks in Python.",
    ],
  },
];

const projects = [
  {
    name: "Airbnb Clone",
    period: "Mar 2026 — Apr 2026",
    stack: ["React", "Node.js", "Express", "MySQL"],
    blurb:
      "Full-stack rental platform with authentication, property listings, booking workflow, image uploads and REST APIs — tuned with optimised queries for fast retrieval.",
  },
  {
    name: "WealthWise — AI Financial Advisor",
    period: "Mar 2025 — Apr 2025",
    stack: ["MERN", "OpenAI", "LangChain"],
    blurb:
      "AI-powered advisory platform with chatbot interaction, automated email onboarding, and personalised recommendation workflows.",
  },
  {
    name: "Lung Cancer Detection (CNN)",
    period: "Jul 2025 — Aug 2025",
    stack: ["Python", "TensorFlow", "Keras"],
    blurb:
      "Trained a convolutional neural network on CT-scan images for automated cancer classification. Handled preprocessing, augmentation and model optimisation.",
  },
];

const skills = {
  Languages: ["Python", "Java", "C", "JavaScript"],
  Frontend: ["React.js", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js"],
  Database: ["PostgreSQL", "MySQL", "MongoDB"],
  "AI & ML": ["OpenAI API", "LangChain", "TensorFlow", "Keras", "GitHub Copilot"],
  Tools: ["Git", "GitHub", "Postman", "Firebase"],
};

const marqueeItems = [
  "React", "Node.js", "Python", "TensorFlow", "MongoDB", "PostgreSQL",
  "Express", "OpenAI", "LangChain", "Keras", "MySQL", "Firebase",
];

function Portfolio() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg">
          dhruv<span className="text-amber">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <li><a href="#about" className="hover:text-foreground transition">About</a></li>
          <li><a href="#work" className="hover:text-foreground transition">Work</a></li>
          <li><a href="#projects" className="hover:text-foreground transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-foreground transition">Skills</a></li>
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm rounded-full border border-border/60 px-4 py-1.5 hover:border-amber hover:text-amber transition"
        >
          Get in touch <ArrowUpRight className="size-3.5" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-24 pb-32 relative">
      <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8 animate-fade-up">
        <span className="size-1.5 rounded-full bg-amber animate-pulse" />
        Available for software roles · 2027
      </div>
      <h1 className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.95] font-light text-balance animate-fade-up">
        Dhruv<br />
        <span className="italic text-amber">Pachauri</span>
      </h1>
      <p className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up">
        Computer Science undergrad at GLA University, Mathura. I build full-stack
        web applications and train machine-learning models — from IPO platforms
        and AI advisors to CNNs for medical imaging.
      </p>
      <div className="mt-12 flex flex-wrap gap-3 animate-fade-up">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-amber text-accent-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
        >
          See selected work <ArrowUpRight className="size-4" />
        </a>
        <a
          href="mailto:dhruv.pachauri_cs23@gla.ac.in"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:border-amber hover:text-amber transition"
        >
          <Mail className="size-4" /> Email me
        </a>
      </div>

      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/50 pt-10">
        {[
          { k: "Based in", v: "Agra, India" },
          { k: "Focus", v: "Full-stack · ML" },
          { k: "Graduating", v: "May 2027" },
          { k: "Currently", v: "Open to roles" },
        ].map((s) => (
          <div key={s.k}>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.k}</div>
            <div className="mt-2 font-display text-xl">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="border-y border-border/40 py-6 overflow-hidden bg-surface/40">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {items.map((it, i) => (
          <span key={i} className="font-display text-2xl text-muted-foreground/70">
            {it} <span className="text-amber mx-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-16">
      <div className="font-mono text-xs uppercase tracking-widest text-amber mb-4">— {tag}</div>
      <h2 className="font-display text-4xl md:text-6xl font-light text-balance">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeader tag="About" title={<>Engineer by training, <span className="italic text-amber">builder</span> by instinct.</> as unknown as string} />
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a third-year B.Tech CSE student at GLA University, Mathura. My
            work lives at the intersection of product engineering and applied
            machine learning — I'm equally comfortable shipping a REST API for a
            fintech app and training a CNN to classify CT scans.
          </p>
          <p>
            Recently, I interned at <span className="text-foreground">Bluestock Fintech</span>{" "}
            in Pune, where I built an IPO platform and a Fundamental Analysis
            system powered by ML. Outside of work I hack on side projects,
            attend hackathons, and explore new frameworks.
          </p>
        </div>
        <aside className="rounded-2xl border border-border/60 bg-surface/60 p-6 space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Education</div>
          <div>
            <div className="font-display text-lg">B.Tech, Computer Science</div>
            <div className="text-sm text-muted-foreground">GLA University, Mathura · CGPA 6.87</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">Expected May 2027</div>
          </div>
          <div className="h-px bg-border/60" />
          <div>
            <div className="font-display text-lg">Intermediate & High School</div>
            <div className="text-sm text-muted-foreground">Symboyzia School, Agra</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">2020 · 2022</div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeader tag="Experience" title="Where I've worked." />
      <ol className="space-y-4">
        {experience.map((e) => (
          <li
            key={e.org}
            className="group grid md:grid-cols-[200px_1fr] gap-6 rounded-2xl border border-border/50 bg-surface/40 hover:bg-surface/80 hover:border-amber/40 transition p-8"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {e.period}
            </div>
            <div>
              <h3 className="font-display text-2xl">
                {e.role} <span className="text-amber">·</span>{" "}
                <span className="text-muted-foreground">{e.org}</span>
              </h3>
              <div className="text-sm text-muted-foreground mt-1">{e.place}</div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {e.points.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-amber mt-2 size-1 rounded-full bg-amber shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeader tag="Selected work" title="Things I've shipped." />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className={`group relative rounded-2xl border border-border/50 bg-surface/50 p-8 hover:border-amber/50 transition overflow-hidden ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="absolute -top-20 -right-20 size-64 rounded-full bg-amber/5 blur-3xl group-hover:bg-amber/10 transition" />
            <div className="flex items-start justify-between gap-4 relative">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  {p.period}
                </div>
                <h3 className="font-display text-3xl md:text-4xl">{p.name}</h3>
              </div>
              <Sparkles className="size-5 text-amber shrink-0" />
            </div>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl relative">
              {p.blurb}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 relative">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-3 py-1 rounded-full border border-border/60 text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeader tag="Toolkit" title="What I work with." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([cat, list]) => (
          <div key={cat} className="rounded-2xl border border-border/50 bg-surface/40 p-6">
            <div className="font-mono text-xs uppercase tracking-widest text-amber mb-4">{cat}</div>
            <ul className="flex flex-wrap gap-2">
              {list.map((s) => (
                <li key={s} className="text-sm px-3 py-1.5 rounded-full bg-background/60 border border-border/40">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border/50 bg-surface/40 p-8">
        <div className="font-mono text-xs uppercase tracking-widest text-amber mb-4">Beyond code</div>
        <p className="text-muted-foreground">
          Participated in <span className="text-foreground">Hack-n-Win Hackathon 2025</span> at Chandigarh Group of Colleges.
          Attended a Software Development workshop by Dr. Manish Bhatia (AppSquadz, Noida) and an industrial visit to AppSquadz.
          Strong communication, leadership, adaptability and time management.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-32">
      <div className="rounded-3xl border border-border/60 bg-surface/60 p-10 md:p-16 grain relative overflow-hidden">
        <div className="absolute -top-40 -left-20 size-96 rounded-full bg-amber/10 blur-3xl" />
        <div className="font-mono text-xs uppercase tracking-widest text-amber mb-4 relative">— Contact</div>
        <h2 className="font-display text-4xl md:text-7xl font-light text-balance relative">
          Let's build <span className="italic text-amber">something</span><br />worth shipping.
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl relative">
          I'm open to internships, full-time roles graduating 2027, and
          collaborations on interesting full-stack or ML projects.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl relative">
          <ContactLink icon={<Mail className="size-4" />} label="dhruv.pachauri_cs23@gla.ac.in" href="mailto:dhruv.pachauri_cs23@gla.ac.in" />
          <ContactLink icon={<Phone className="size-4" />} label="+91 88688 55317" href="tel:+918868855317" />
          <ContactLink icon={<Linkedin className="size-4" />} label="linkedin.com/in/dhruv-pachauri-dp1228" href="https://www.linkedin.com/in/dhruv-pachauri-dp1228/" />
          <ContactLink icon={<Github className="size-4" />} label="github.com/dhruv1228" href="https://github.com/dhruv1228" />
        </div>
        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground relative">
          <MapPin className="size-4" /> Agra, India
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-background/50 px-5 py-4 hover:border-amber hover:text-amber transition"
    >
      <span className="flex items-center gap-3 text-sm truncate">
        <span className="text-amber">{icon}</span>
        <span className="truncate">{label}</span>
      </span>
      <ArrowUpRight className="size-4 opacity-60 group-hover:opacity-100" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Dhruv Pachauri. Crafted with care.</div>
        <div className="font-mono text-xs">Designed & built in Agra, India.</div>
      </div>
    </footer>
  );
}
