function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>CMCS</h3>
          <p className="project-desc">
            Claim management system featuring a clean UI and asynchronous processing architecture.
          </p>
          <span className="project-tag">Full Stack</span>
        </div>

        <div className="project-card">
          <h3>Municipal Service App</h3>
          <p className="project-desc">
            Uses trees and linked lists to analyze service delivery data and raise awareness around community events.
          </p>
          <span className="project-tag">Data Structures</span>
        </div>

        <div className="project-card">
          <h3>Payment Gateway</h3>
          <p className="project-desc">
            Implemented SSL, bcrypt, XSS protection, JWT authentication, and rate limiting for secure transactions.
          </p>
          <span className="project-tag">Cybersecurity</span>
        </div>

        <div className="project-card">
          <h3>Flyte</h3>
          <p className="project-desc">
            Real-time Android social app built for bird watchers to record and share experiences.
          </p>
          <span className="project-tag">Firebase • Kotlin</span>
        </div>

      </div>
    </section>
  );
}

export default Projects;