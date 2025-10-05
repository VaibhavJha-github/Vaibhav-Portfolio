//src/pages/HomePage.jsx:
import { Link } from 'react-router-dom'
import EluragptImage from '../assets/evadegpt.jpg'
import CV from '../assets/CV_Vaibhav_2025.pdf'

/* === Brand icons (stable) === */
import {
  FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDocker,
  FaAws, FaLaravel, FaBootstrap, FaTerminal, FaWindows, FaApple, FaUbuntu
} from 'react-icons/fa'
import {
  SiTensorflow, SiScikitlearn, SiOpencv, SiNextdotjs, SiTypescript, SiSupabase, SiStripe,
  SiMysql, SiMongodb, SiSqlite, SiTableau, SiJupyter, SiAndroidstudio, SiXcode, SiPhp
} from 'react-icons/si'

export default function HomePage() {
  return (
    <div className="container">
      {/* Top label and hero */}
      <section className="hero-section">
        <div className="hero-kicker">Portfolio Website</div>
        <h1 className="hero-title">Vaibhav Jha</h1>
        <div className="hero-subtitle">Computer Science: AI & Data Science • Software Engineering</div>

        <div className="text-container">
          <p className="hero-sub">
            I build intelligent, full-stack applications that solve real-world problems. As a Computer Science student at
            Griffith University specializing in AI, I’m passionate about everything from NLP humanizers and multi-robot
            planning to intuitive data analytics.
          </p>
        </div>

        <div className="stats">
          <span className="stat">🧠 NLP & CV</span>
          <span className="stat">🤖 ROS + CSP planning</span>
          <span className="stat">📈 Data viz & dashboards</span>
        </div>

        <div className="hero-actions">
          <a href={CV} target="_blank" rel="noopener noreferrer" className="btn primary">View Resume</a>
          <a href="mailto:vaibhav130304@gmail.com" className="btn secondary">Get in touch</a>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="section">
        <h2>Featured Case Study</h2>
        <p className="lede">EluraGPT — AI Humanizer built with Next.js, Supabase Auth, Stripe subscriptions, and GPT pipelines.</p>

        <div className="featured-card">
          <a className="project-image-link" href="https://lura-ee8vdkt0x-vaibhav-jhas-projects-b6e98035.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={EluragptImage} alt="EluraGPT case study" />
          </a>
          <div style={{marginTop:12, textAlign:'center'}}>
            <Link to="/projects" className="btn primary">Explore all projects</Link>
          </div>
        </div>
      </section>

      {/* Skills with brand icons, aligned within a max-width container */}
      <SkillsSection />

      {/* Experience (left-aligned text for readability) */}
      <section className="section">
        <h2>Experience & Highlights</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h4>Founder / Engineer — EluraGPT.ai</h4>
            <div className="meta">2025 — Present · Next.js • Supabase • Stripe • GPT</div>
            <p>Launched subscription SaaS end-to-end (auth, billing, usage limits, humanizer pipeline). Reached 50+ early signups and processed 10k+ words/day during initial tests.</p>
          </div>

          <div className="timeline-item">
            <h4>WIL Placement — AKA Studio (AI Colour Management System)</h4>
            <div className="meta">Python • OpenCV • ML</div>
            <p>Automated colour accuracy; reduced manual adjustments by ~40% and predicted profiles across multiple resolutions.</p>
          </div>

          <div className="timeline-item">
            <h4>Customer Service Officer — Woolworths</h4>
            <div className="meta">Jan 2022 – Present</div>
            <p>Customer comms & teamwork in a high-throughput environment.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <h2>Let’s Build</h2>
        <div className="contact">
          <a className="btn primary" href="mailto:vaibhav130304@gmail.com">Email</a>
          <a className="btn secondary" href="https://www.linkedin.com/in/vaibhav-jha-6b6b46221/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn secondary" href="https://github.com/VaibhavJha-github?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
    </div>
  )
}

/* ========= Skills Section with brand icons (no emojis) ========= */
function SkillsSection(){
  const skillGroups = [
    {
      title: 'Languages',
      items: [
        { icon:<FaPython/>, label:'Python' },
        { icon:<FaJs/>, label:'JavaScript' },
        { icon:<SiTypescript/>, label:'TypeScript' },
        { icon:<SiPhp/>, label:'PHP' },
        { icon:<FaHtml5/>, label:'HTML' },
        { icon:<FaCss3Alt/>, label:'CSS' },
        { icon:<FaTerminal/>, label:'Shell / PowerShell' },
        { icon:<SiSqlite/>, label:'SQL / SQLite' }
      ]
    },
    {
      title: 'AI / Data',
      items: [
        { icon:<SiTensorflow/>, label:'TensorFlow' },
        { icon:<SiScikitlearn/>, label:'scikit-learn' },
        { icon:<SiOpencv/>, label:'OpenCV' },
        { icon:<SiTableau/>, label:'Tableau' },
        { icon:<SiJupyter/>, label:'Jupyter Notebook' }
      ]
    },
    {
      title: 'Web & App',
      items: [
        { icon:<FaReact/>, label:'React' },
        { icon:<SiNextdotjs/>, label:'Next.js' },
        { icon:<FaNodeJs/>, label:'Node.js' },
        { icon:<FaLaravel/>, label:'Laravel' },
        { icon:<FaBootstrap/>, label:'Bootstrap' },
        { icon:<SiAndroidstudio/>, label:'Android Studio' },
        { icon:<SiXcode/>, label:'Xcode' }
      ]
    },
    {
      title: 'Infra & Cloud',
      items: [
        { icon:<FaAws/>, label:'AWS (EC2, S3)' },
        { icon:<FaDocker/>, label:'Docker' },
        { icon:<FaGitAlt/>, label:'Git' },
        { icon:<FaUbuntu/>, label:'Ubuntu' },
        { icon:<FaWindows/>, label:'Windows' },
        { icon:<FaApple/>, label:'macOS' }
      ]
    },
    {
      title: 'Data Stores',
      items: [
        { icon:<SiMysql/>, label:'MySQL' },
        { icon:<SiMongodb/>, label:'MongoDB' },
        { icon:<SiSqlite/>, label:'SQLite' }
      ]
    },
    {
      title: 'SaaS Stack (EluraGPT)',
      items: [
        { icon:<SiSupabase/>, label:'Supabase Auth' },
        { icon:<SiStripe/>, label:'Stripe Subscriptions' }
      ]
    }
  ]

  return (
    <section className="section">
      <h2>Technologies & Frameworks</h2>
      <p className="lede">A quick snapshot of what I use across AI/ML, data, and full-stack delivery.</p>

      <div className="skills-wrap">
        {skillGroups.map(group=>(
          <div key={group.title} style={{marginTop:'18px'}}>
            <h3 style={{color:'#FFFFFF', margin:'6px 0 8px', textAlign:'left'}}>{group.title}</h3>
            <div className="skills-grid">
              {group.items.map(({icon,label})=>(
                <div className="skill" key={label}>
                  {icon}<span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
