import { Link } from 'react-router-dom';

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
  return (
    <nav className="navbar">
      <div className="nav-logo">Akhil  </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/academics">Academics</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;