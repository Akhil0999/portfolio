import { Link } from 'react-router-dom';
import myPhoto1 from '../assets/Graduation-pic.jpg';

function Home() {
  return (
    <section id="home" className="section theme-blue hero-section">
      <div className="hero-grid">
        <div className="hero-text">
          <span className="hero-badge">👋 Welcome to my corner of the web</span>

          <h1 className="hero-heading">
            Hi, I’m <span className="hero-name">Akhil</span>
          </h1>

          <h2 className="hero-role">Software Developer &amp; Problem Solver</h2>

          <p className="hero-desc">
            I build clean, practical solutions and love turning ideas into
            working products. When I'm not coding, you'll find me skating,
            drawing, or chasing the next thing worth learning.
          </p>

          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>

          <div className="social-row">
            <a
              href="https://github.com/Akhil0999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.61.56.1.76-.24.76-.54 0-.27-.01-1.15-.02-2.09-3.11.68-3.77-1.32-3.77-1.32-.51-1.3-1.24-1.64-1.24-1.64-1.01-.7.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.24-5.11 5.52.4.35.76 1.04.76 2.1 0 1.51-.01 2.73-.01 3.1 0 .3.2.65.77.54A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/akhil-proothveerajh-41a88b2bb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
            <a
              href="mailto:ahkillspc@gmail.com"
              aria-label="Email"
              className="social-icon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 6.24L19.8 6H4.2Zm15.8 1.53-7.36 5.9a1.5 1.5 0 0 1-1.88 0L3.4 7.53V18h16.6V7.53Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image-glow"></div>
          <img src={myPhoto1} alt="Akhil" className="hero-photo" />
        </div>
      </div>
    </section>
  );
}

export default Home;
