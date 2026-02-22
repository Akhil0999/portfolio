import { Link } from 'react-router-dom';
import { useState } from 'react';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="nav-logo">Akhil</div>

//       <div className="nav-links">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#academics">Academics</a>
//         <a href="#projects">Projects</a>
//         <a href="#contact">Contact</a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-logo">Akhil  </div>

      <div 
        className="hamburger" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/academics" onClick={() => setMenuOpen(false)}>Academics</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;