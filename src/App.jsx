import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';

import myPhoto1 from './assets/Graduation-pic.jpg'
import myPhoto2 from './assets/study.jpg'
import myPhoto3 from './assets/skate.jpg'
import myPhoto4 from './assets/drawing.jpg'
import myPhoto5 from './assets/biking.jpg'

import Home from './components/Home';
import About from './components/About';
import Academics from './components/Academics';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (

    <div className="container">
      <Navbar/>
      <Home />
      <About />
      <Academics />
      <Projects />
      <Contact />
    </div>

    // <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
    //   {/* --- Home Section --- */}
    //   <section id="home" style={{ marginBottom: "50px" }}>
    //     <h1>Hello, I’m Akhil!</h1>
    //     <p>Welcome to my life</p>
    //   <img src={myPhoto1} alt="Profile" style={{ width: "300px", borderRadius: "75px" }} />
    //   </section>

    //   {/* --- About Section --- */}
    //   <section id="about" style={{ marginBottom: "50px" }}>
    //     <h2>About Me</h2>
    //     <p>
    //       I’m a software developer with a passion for creating projects and
    //       solving problems. I enjoy learning frameworks (I think there's a framework for everything in life), designing UI/UX, and
    //       building practical solutions. Problem solving is my forte, and I thrive
    //       in collaborative environments where I can contribute my skills and
    //       learn from others. 
    //       </p>
    //         <div className='photo-row'> {/* Optimize with array */}
    //         <img src={myPhoto2} alt="Profile" style={{ width: "300px", borderRadius: "75px" }} />
    //         <img src={myPhoto3} alt="Profile" style={{ width: "300px", borderRadius: "75px" }} />
    //         <img src={myPhoto4} alt="Profile" style={{ width: "300px", borderRadius: "75px" }} />
    //         <img src={myPhoto5} alt="Profile" style={{ width: "300px", borderRadius: "75px" }} />
    //         </div>
    //       <p>
    //       When I’m not coding, I love to read, game, draw, L2M, explore new technologies, and skateboard. 
    //       I do non-profit work as a skate coach (placing 2nd in my first competition at 14 years old) as it is a great way to give back to the community, and relieve stress in a healthy way,
    //        while keeping the youth out of trouble and facilitating positivity. I'm also learning how to play the guitar and ride a motorbike!
    //        I come from a small town in Durban called Phoenix,
    //       and I am determined to show people that your environment does not define you. I beleive that everybody 
    //       has the potential to achieve greatness with the right mindset and dedication. 
    //     </p>
    //   </section>

    //   {/* --- Certifications --- */}
    //   <section id="stories" style={{ marginBottom: "50px" }}>
    //     <h2>Academics</h2>
    //     <p>
    //       B.Tech in Computer Science and Engineering from Varsity CollegE, Durban North (2024).
    //       <br/>
    //       Honors in Bachelor of Science in IT at Richfield Graduate Institute of Technology, Durban (2025).
    //     </p>
    //   </section>

    //   {/* --- Projects Section --- */}
    //   <section id="projects" style={{ marginBottom: "50px" }}>
    //     <h2>Projects</h2>
    //     <ul>
    //       <li>CMCS - Claim management system with clean UI and asynchronous processes</li>
    //       <li>Municipal Service App - Uses various data structures, like trees and linked lists, to analyze service data & gain awareness around events</li>
    //       <li>Payment Gateway - Worked with a team to employ cybersecurity techniques, like SSL, bycrypt, XSS, Jason Web Tokens & rate limiting</li>
    //       <li>Flyte - A social android application that works with real time DB and was made for bird watchers to record their experiences</li>
    //     </ul>
    //   </section>

    //   {/* --- Stories / Media Section --- */}
    //   <section id="stories" style={{ marginBottom: "50px" }}>
    //     <h2>Quotably Yours</h2>
    //     <p>
    //       Curiosity killed the cat, but it made me who I am today. If I 
    //       had any advice for somebody trying to make their dreams come true
    //       it would be to commit yourself, keep learning, adapting and NEVER GIVE UP!
    //       <br/>
    //       “The future belongs to those who believe in the beauty of their dreams.” – Eleanor Roosevelt 
    //     </p>
    //   </section>


    //   {/* --- Contact Section --- */}
    //   <section id="contact" style={{ marginBottom: "50px" }}>
    //     <h2>Reach out</h2>
    //     <p>Email: ahkillspc@gmail.com</p>
    //     <p>LinkedIn: 
    //       <a href="https://www.linkedin.com/in/akhil-proothveerajh-41a88b2bb" target="_blank" rel="noopener noreferrer">Akhil Proothveerajh</a></p>
    //     <p>GitHub: 
    //       <a href="https://github.com/Akhil0999" target="_blank" rel="noopener noreferrer">Akhil0999</a></p>
    //   </section>
    // </div>
  );
}

export default App;
