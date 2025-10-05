import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({
  title, description, tags = [], image, link, bullets = [], github, demo, featured = false
}) {
  return (
    <article className={`project-card reveal ${featured ? 'featured' : ''}`} data-reveal>
      {image && <img className="thumb" src={image} alt={title} loading="lazy" />}
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {bullets?.length > 0 && (
          <ul style={{ margin: '.5rem 0 0 1rem' }}>
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}

        {tags?.length > 0 && (
          <div className="project-tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
        )}

        {(github || demo || link) && (
          <div className="cta-row">
            {github && (
              <a className="icon-btn" href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub /><span>Code</span>
              </a>
            )}
            {(demo || link) && (
              <a className="icon-btn" href={demo || link} target="_blank" rel="noopener noreferrer">
                <FiExternalLink /><span>Live</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
