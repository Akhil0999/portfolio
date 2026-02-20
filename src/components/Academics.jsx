import myPhoto1 from '../assets/degree-pic.jpg';

function Academics() {
  return (
    <section id="academics" className="section">
      <h2>Academics</h2>

      <div className="academics-content">
        <p>
           B.Tech in Computer Science and Engineering from Varsity College, Durban North (2024).
        </p>
          <img 
            src={myPhoto1} 
            alt="Degree Certificate" 
            className="academics-image"
          />

        <p>
           Honors in Bachelor of Science in IT at Richfield Graduate Institute of Technology, Durban (2025).
          <br/>
          (Picture pending)
        </p>
      </div>
         
    </section>
  );
}

export default Academics;