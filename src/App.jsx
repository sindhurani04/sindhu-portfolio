import React from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Mail,
  Code2,
  BrainCircuit,
  Database,
  Globe,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

const skills = [
  { name: "Java", icon: Code2 },
  { name: "Spring Boot", icon: Sparkles },
  { name: "MySQL & SQL", icon: Database },
  { name: "Python", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "React.js", icon: Globe },
  { name: "HTML5 & CSS3", icon: Globe },
  { name: "AI / Machine Learning", icon: BrainCircuit },
  { name: "Prompt Engineering", icon: Sparkles },
  { name: "REST APIs", icon: Code2 },
  { name: "Git & GitHub", icon: Code2 },
];

const certifications = [
  ["Java Full Stack Development", "TAP Academy · 2026"],
  ["Advanced Prompt Engineering", "Simplilearn SkillUp · 2026"],
  ["AI Fundamentals", "IBM SkillsBuild"],
  ["Java Full Stack", "EduSkills"],
  [
    "Salesforce Developer with Agentblazer Champion Program",
    "SmartBridge AICTE · 2025",
  ],
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Sindhu Rani home"
        >
          <span className="brand-mark">SR</span>
          <span className="brand-name">SINDHU RANI</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["About", "Experience", "Projects", "Certifications", "Contact"].map(
            (item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ),
          )}
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              AI ENGINEERING <span>·</span> JAVA <span>·</span> FULL STACK
            </p>
            <h1>
              Sindhu Rani
              <br />
              <em>Madiga.</em>
            </h1>
            <h2>
              Building useful things with
              <br className="desktop-break" /> code and intelligence.
            </h2>
            <p className="hero-description">
              AI engineering graduate interested in full-stack development,
              intelligent applications, and solving real-world problems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                <Mail size={17} /> Get in touch
              </a>
              <a className="button button-outline" href="#projects">
                Explore projects <ArrowDownRight size={17} />
              </a>
            </div>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/msindhurani/"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={17} /> LinkedIn
              </a>
              <a
                href="https://github.com/sindhurani04"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={18} /> GitHub
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=msindhurani2003@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Decorative portfolio illustration"
          >
            <div className="art-orbit orbit-one"></div>
            <div className="art-orbit orbit-two"></div>
            <div className="art-sun"></div>
            <div className="monogram-card">
              <span className="monogram">SR</span>
              <span className="monogram-line"></span>
              <span className="monogram-caption">
                Curious mind.
                <br />
                Thoughtful code.
              </span>
            </div>
            <div className="art-note">
              <span>✳</span>
              <p>
                Turning ideas
                <br />
                into impact
              </p>
              <ArrowDownRight size={25} />
            </div>
            <div className="art-stamp">
              LEARN
              <br />
              BUILD
              <br />
              IMPROVE
              <br />
              REPEAT
            </div>
            <div className="art-leaf leaf-a"></div>
            <div className="art-leaf leaf-b"></div>
            <div className="art-leaf leaf-c"></div>
          </div>
        </section>

        <section className="about-skills section-wrap" id="about">
          <div className="about-copy">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>
              Curious by nature.
              <br />
              Driven by technology.
            </h2>
            <p>
              I’m an Artificial Intelligence engineering graduate with a strong
              interest in full-stack development, AI/ML, and building useful
              applications. I enjoy learning new technologies, solving problems,
              and creating solutions that make a difference.
            </p>
            <div className="mini-facts">
              <div>
                <strong>88%</strong>
                <span>B.Tech percentage</span>
              </div>
              <div>
                <strong>2022–26</strong>
                <span>Undergraduate journey</span>
              </div>
            </div>
          </div>
          <div className="skills-panel">
            <p className="eyebrow">TECHNICAL SKILLS</p>
            <div className="skill-list">
              {skills.map(({ name, icon: Icon }) => (
                <span className="skill-chip" key={name}>
                  <Icon size={17} />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FEATURED PROJECTS</p>
              <h2>Projects with purpose.</h2>
            </div>
            <span className="heading-note">IDEAS → IMPLEMENTATION</span>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-visual retina-visual">
                <div className="retina-ring"></div>
                <BrainCircuit size={35} />
                <span>AI · DEEP LEARNING</span>
              </div>
              <div className="project-body">
                <div className="project-title-row">
                  <div>
                    <p className="project-index">01 / AI & HEALTHCARE</p>
                    <h3>RetinaFalcon-Net</h3>
                  </div>
                </div>
                <p className="project-subtitle">
                  Diabetic Retinopathy Detection
                </p>
                <p className="project-description">
                  Developed an AI-based system for automated detection and
                  classification of diabetic retinopathy, designed to support
                  early screening and assist ophthalmic healthcare.
                </p>
                <div className="tag-list">
                  <span>Deep Learning</span>
                  <span>CNN</span>
                  <span>RNN</span>
                  <span>Computer Vision</span>
                  <span>Flask</span>
                </div>
              </div>
            </article>
            <article className="project-card">
              <div className="project-visual doc-visual">
                <div className="calendar-illustration">
                  <div className="calendar-top"></div>
                  <div className="calendar-grid">
                    {Array.from({ length: 9 }, (_, i) => (
                      <i key={i}></i>
                    ))}
                  </div>
                </div>
                <span>JAVA FULL STACK</span>
              </div>
              <div className="project-body">
                <div className="project-title-row">
                  <div>
                    <p className="project-index">02 / WEB APPLICATION</p>
                    <h3>DocSpot</h3>
                  </div>
                </div>
                <p className="project-subtitle">
                  Seamless Doctor Appointment Booking
                </p>
                <p className="project-description">
                  Built a doctor appointment booking application with patient
                  registration and backend functionality to support appointment
                  management.
                </p>
                <div className="tag-list">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>MySQL</span>
                  <span>REST API</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="journey section-wrap" id="experience">
          <div className="journey-column">
            <p className="eyebrow">
              <BriefcaseBusiness size={15} /> EXPERIENCE
            </p>
            <div className="timeline-item">
              <div className="timeline-top">
                <h3>TAP Academy</h3>
                <span>Jan 2026 – Aug 2026</span>
              </div>
              <p className="role">Full Stack Java Developer Intern</p>
              <p>
                Completed hands-on training in Java Full Stack Development and
                modern web technologies, with practical exposure to frontend,
                backend, and database integration.
              </p>
            </div>
          </div>

          <div className="journey-column education-column">
            <p className="eyebrow">
              <GraduationCap size={16} /> EDUCATION
            </p>

            {/* B.Tech */}
            <div className="timeline-item">
              <div className="timeline-top">
                <h3>Gates Institute of Technology - Gooty</h3>
                <span>2022–2026</span>
              </div>
              <p className="role">B.Tech in CSE (Artificial Intelligence)</p>
              <p>Percentage: 88%</p>
            </div>

            {/* Intermediate */}
            <div className="timeline-item">
              <div className="timeline-top">
                <h3>S.S.G.S Junior College - Guntakal</h3>
                <span>2019–2021</span>
              </div>
              <p className="role">MPC · Intermediate</p>
              <p> Percentage: 90%</p>
            </div>

            {/* Schooling */}
            <div className="timeline-item">
              <div className="timeline-top">
                <h3>Sumedha E.M. High School - Guntakal</h3>
                <span>2018–2019</span>
              </div>
              <p className="role">Secondary School Certificate (SSC)</p>
              <p>Percentage: 98%</p>
            </div>
          </div>

          <div className="journey-column awards-column">
            <p className="eyebrow">
              <Award size={16} /> HIGHLIGHTS
            </p>
            <div className="award-item">
              <span className="award-icon">
                <Award size={18} />
              </span>
              <div>
                <h3>Gates Memorial Award</h3>
                <p>Academic excellence</p>
              </div>
            </div>
            <div className="award-item">
              <span className="award-icon">
                <Sparkles size={18} />
              </span>
              <div>
                <h3>NPTEL Silver Badge</h3>
                <p>Internet of Things course</p>
              </div>
            </div>
          </div>
        </section>

        <section className="certifications section-wrap" id="certifications">
          <div className="section-heading">
            <div>
              <p className="eyebrow">LEARNING NEVER STOPS</p>
              <h2>Certificates & credentials.</h2>
            </div>
            <Award className="section-icon" size={30} />
          </div>
          <div className="cert-list">
            {certifications.map(([name, issuer], i) => (
              <div className="cert-row" key={name}>
                <span className="cert-number">0{i + 1}</span>
                <div className="cert-name">
                  <h3>{name}</h3>
                  <p>{issuer}</p>
                </div>
                {/* <ArrowUpRight size={18} /> */}
              </div>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-decoration">
            LET’S
            <br />
            CONNECT<span>↗</span>
          </div>
          <div className="contact-copy">
            <p className="eyebrow">HAVE A ROLE OR IDEA?</p>
            <h2>
              Let’s make something
              <br />
              <em>meaningful.</em>
            </h2>
            <p>
              I’m excited to learn, contribute, and grow with a team building
              thoughtful technology.
            </p>
            <a
              className="button button-light"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=msindhurani2003@gmail.com"
            >
              <Mail size={17} /> msindhurani2003@gmail.com{" "}
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/msindhurani/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={16} />
            </a>
            <a
              href="https://github.com/sindhurani04"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">SR</span>
        </a>
        <p>Designed with intention. Built with curiosity.</p>
        <span>© 2026 Sindhu Rani Madiga</span>
      </footer>
    </div>
  );
}

export default App;
