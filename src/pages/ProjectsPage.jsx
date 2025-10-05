//src/pages/ProhjectsPage.jsx:
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsPage() {
  return (
    <div className="container">
      <section className="section" style={{marginTop:'1.5rem'}}>
        <h1 className="hero-title" style={{ fontSize: '2.1rem', textAlign:'center', color:'#FFFFFF' }}>Projects</h1>
        <p className="lede">Impact-first snapshots. Thumbnails for fast scanning. Click into code or live demos.</p>

        <div className="projects-grid">
          {projects.map(p => <ProjectCard key={p.id} {...p} />)}
        </div>
      </section>
    </div>
  )
}
