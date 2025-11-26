import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      {/* --- Home Section --- */}
      <section id="home" style={{ marginBottom: "50px" }}>
        <h1>Hello, I’m Akhil!</h1>
        <p>Welcome to my life</p>
        <img src="/src/assets/Graduation-pic.jpg" alt="Profile" style={{ width: "300px", borderRadius: "75px" }} />
      </section>

      {/* --- About Section --- */}
      <section id="about" style={{ marginBottom: "50px" }}>
        <h2>About Me</h2>
        <p>
          I’m a software developer with a passion for creating projects and
          solving problems. I enjoy learning frameworks, designing UI/UX, and
          building practical solutions.
        </p>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" style={{ marginBottom: "50px" }}>
        <h2>Projects</h2>
        <ul>
          <li>Project 1 - Description of what it does</li>
          <li>Project 2 - Description of what it does</li>
          <li>Project 3 - Description of what it does</li>
        </ul>
      </section>

      {/* --- Stories / Media Section --- */}
      <section id="stories" style={{ marginBottom: "50px" }}>
        <h2>Stories / Gallery</h2>
        <p>
          Curiosity killed the cat, but it made me who I am today. If I 
          had any advice for somebody trying to make their dreams come true
          it would be to stay curious, keep learning, adapting and NEVER GIVE UP! 
        </p>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" style={{ marginBottom: "50px" }}>
        <h2>Contact</h2>
        <p>Email: ahkillspc@gmail.com</p>
        <p>LinkedIn: 
          <a href="https://www.linkedin.com/in/akhil-proothveerajh-41a88b2bb" target="_blank" rel="noopener noreferrer">Akhil Proothveerajh</a></p>
        <p>GitHub: 
          <a href="https://github.com/Akhil0999" target="_blank" rel="noopener noreferrer">Akhil0999</a></p>
      </section>
    </div>
  );
}

export default App;
