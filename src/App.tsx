import { useEffect, useState } from "react"
import portrait from "./assets/portrait.jpg"
import symposium from "./assets/symposium.jpg"

type IconName = "arrow" | "download" | "mail" | "pin" | "code" | "database"

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
  }

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function TextLink({
  href,
  children,
  className = "",
  download,
}: {
  href: string
  children: React.ReactNode
  className?: string
  download?: boolean
}) {
  return (
    <a href={href} className={className} download={download}>
      {children}
    </a>
  )
}

function SectionTitle({
  eyebrow,
  children,
}: {
  eyebrow: string
  children: React.ReactNode
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
    </div>
  )
}

const skills = [
  ["Languages", "C, C++, C#, Java"],
  ["Core engineering", "OOP, pointers, bitwise operations, memory management"],
  ["Problem solving", "Data structures, algorithms, critical thinking"],
  ["Tools", "Git, GitHub, Visual Studio, VS Code"],
]

const education = [
  {
    year: "Ongoing",
    title: "BSc in Computer Science & Engineering",
    place: "American International University–Bangladesh",
    result: "CGPA 3.10 / 4.00",
  },
  {
    year: "2022",
    title: "Higher Secondary Certificate · Science",
    place: "BAF Shaheen College Jashore",
    result: "GPA 5.00 / 5.00",
  },
  {
    year: "2020",
    title: "Secondary School Certificate · Science",
    place: "Allardarga Secondary School",
    result: "GPA 4.80 / 5.00",
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener("hashchange", close)
    return () => window.removeEventListener("hashchange", close)
  }, [])

  return (
    <main>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <TextLink href="#top" className="monogram">
            MB<span>.</span>
          </TextLink>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <TextLink href="#about">About</TextLink>
            <TextLink href="#introduction">Introduction</TextLink>
            <TextLink href="#work">Work</TextLink>
            <TextLink href="#journey">Journey</TextLink>
            <TextLink href="#contact">Contact</TextLink>
          </div>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="availability">
            <span /> Open to opportunities
          </div>
          <p className="kicker">Software engineer in the making</p>
          <h1>
            I turn logic into <em>useful</em> software.
          </h1>
          <p className="hero-intro">
            I’m <strong>Md. Abdul Mubin Biswas</strong>, a CSE undergraduate in
            Dhaka building reliable applications with a love for low-level
            thinking and clean architecture.
          </p>
          <div className="hero-actions">
            <TextLink href="#work" className="button button-primary">
              Explore my work <Icon name="arrow" />
            </TextLink>
            <TextLink
              href="/md-abdul-mubin-biswas-cv.pdf"
              className="button button-quiet"
              download
            >
              <Icon name="download" /> Download CV
            </TextLink>
          </div>
          <div className="hero-meta">
            <span>
              <Icon name="pin" /> Dhaka, Bangladesh
            </span>
            <span>Bangla · English</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <img src={portrait} alt="Md. Abdul Mubin Biswas in formal attire" />
          </div>
          <div className="code-card" aria-hidden="true">
            <div className="code-dots">
              <span />
              <span />
              <span />
            </div>
            <code>
              <b>class</b> Engineer {"{"}
            </code>
            <code>
              &nbsp;&nbsp;mindset = <i>"curious"</i>;
            </code>
            <code>
              &nbsp;&nbsp;build() → <i>"impact"</i>;
            </code>
            <code>{"}"}</code>
          </div>
          <span className="hero-index">01</span>
        </div>
      </section>

      <section className="marquee" aria-label="Core skills">
        <div>
          <span>C</span>
          <i>✦</i>
          <span>C++</span>
          <i>✦</i>
          <span>C#</span>
          <i>✦</i>
          <span>Java</span>
          <i>✦</i>
          <span>OOP</span>
          <i>✦</i>
          <span>SQL</span>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-lead">
          <SectionTitle eyebrow="01 / About">
            Engineering from first principles.
          </SectionTitle>
        </div>
        <div className="about-body">
          <p className="large-copy">
            I’m drawn to what happens beneath the interface—the logic, memory,
            structure, and decisions that make software dependable.
          </p>
          <p>
            My foundation in C, C++, C#, and Java has shaped a practical
            approach to problem-solving. From pointers and bitwise operations to
            object-oriented systems and databases, I enjoy understanding the
            whole system, not just the surface.
          </p>
          <div className="stats">
            <div>
              <strong>4</strong>
              <span>Programming languages</span>
            </div>
            <div>
              <strong>2</strong>
              <span>End-to-end projects</span>
            </div>
            <div>
              <strong>5.00</strong>
              <span>HSC academic GPA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="introduction section" id="introduction">
        <div className="intro-copy">
          <SectionTitle eyebrow="02 / Introduction">
            A little more about me.
          </SectionTitle>
          <p className="intro-lead">
            Beyond the code, I’m a curious learner who values clear thinking,
            collaboration, and the steady process of turning an idea into
            something useful.
          </p>
          <p>
            Watch my short introduction to hear about my background, what drives
            me as a software engineer, and where I’m heading next.
          </p>
          <div className="intro-signoff">
            <span>Meet Mubin</span>
            <strong>Student · Builder · Problem solver</strong>
          </div>
        </div>
        <div className="intro-video-wrap">
          <div className="video-accent">Play introduction</div>
          <div className="intro-video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/Oyd-ug5vU2g?rel=0"
              title="Self introduction by Md. Abdul Mubin Biswas"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <span className="video-index">SELF INTRODUCTION / VIDEO</span>
        </div>
      </section>

      <section className="work section" id="work">
        <SectionTitle eyebrow="03 / Selected work">
          Built to solve, designed to last.
        </SectionTitle>
        <div className="project-grid">
          <article className="project-card project-dark">
            <div className="project-top">
              <span className="project-number">01</span>
              <Icon name="database" />
            </div>
            <div className="project-content">
              <div className="tags">
                <span>C#</span>
                <span>.NET</span>
                <span>SQL</span>
              </div>
              <h3>
                Jewellery Shop
                <br />
                Management System
              </h3>
              <p>
                A desktop application for managing inventory and sales records,
                built with modular logic, structured workflows, and robust
                database operations.
              </p>
              <span className="project-note">
                Object-oriented desktop application
              </span>
            </div>
          </article>

          <article className="project-card project-light">
            <div className="project-top">
              <span className="project-number">02</span>
              <Icon name="code" />
            </div>
            <div className="project-content">
              <div className="tags">
                <span>Java</span>
                <span>OOP</span>
                <span>Logic</span>
              </div>
              <h3>
                Currency Exchange
                <br />
                Purchase System
              </h3>
              <p>
                A multi-currency calculation and transaction processing
                application focused on accurate algorithms and clean code
                architecture.
              </p>
              <span className="project-note">
                Calculation & transaction engine
              </span>
            </div>
          </article>
        </div>
      </section>

      <section className="skills section">
        <SectionTitle eyebrow="04 / Toolkit">
          The foundations I build with.
        </SectionTitle>
        <div className="skill-list">
          {skills.map(([title, detail], index) => (
            <article className="skill-row" key={title}>
              <span className="skill-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature section">
        <div className="feature-photo">
          <img
            src={symposium}
            alt="Mubin holding his certificate at the IEEE CS BDC Summer Symposium 2025"
          />
          <span className="photo-caption">
            IEEE CS BDC Summer Symposium · 2025
          </span>
        </div>
        <div className="feature-copy">
          <span className="eyebrow">Beyond the classroom</span>
          <h2>Learning grows when it’s shared.</h2>
          <p>
            As an active member of AIUB Computer Club’s software development
            track, I participate in coding bootcamps, technical seminars, and
            collaborative workshops.
          </p>
          <blockquote>
            “Curiosity is the starting point. Consistency is what turns it into
            craft.”
          </blockquote>
        </div>
      </section>

      <section className="journey section" id="journey">
        <SectionTitle eyebrow="05 / Education">
          A journey of continuous learning.
        </SectionTitle>
        <div className="timeline">
          {education.map((item) => (
            <article className="timeline-row" key={item.title}>
              <span className="timeline-year">{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.place}</p>
              </div>
              <strong>{item.result}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-mark">Let’s build.</div>
        <span className="eyebrow">06 / Contact</span>
        <h2>Have a problem worth solving?</h2>
        <p>
          I’m open to internships, junior software engineering roles, and
          collaborative projects.
        </p>
        <TextLink
          href="mailto:mdabdulmubinbiswas@gmail.com"
          className="contact-link"
        >
          <span>
            <Icon name="mail" /> mdabdulmubinbiswas@gmail.com
          </span>
          <Icon name="arrow" />
        </TextLink>
        <footer>
          <span>© {new Date().getFullYear()} Md. Abdul Mubin Biswas</span>
          <TextLink href="#top">Back to top ↑</TextLink>
        </footer>
      </section>
    </main>
  )
}
