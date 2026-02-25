import myPhoto1 from '../assets/travel-pic.jpg';
import myPhoto2 from '../assets/study.jpg';
import myPhoto3 from '../assets/skate.jpg';
import myPhoto4 from '../assets/drawing.jpg';
import myPhoto5 from '../assets/biking.jpg';
import myPhoto6 from '../assets/face.jpg';

function About() {
  return (
    <section id="about" className="section theme-blue-red">
      <h2>About Me</h2>

      <p>
        I’m a software developer with a passion for creating projects and
        solving problems. I enjoy learning new frameworks (I beleive there's a framework for almost everything in life), designing UI/UX, and
        building practical solutions. Problem solving is my forte, and I thrive
        in collaborative environments where I can contribute my skills and
        learn from others.
      </p>

      <div className="photo-row">
        <img src={myPhoto2} alt="Study" />
        <img src={myPhoto1} alt="Travel" />
        <img src={myPhoto3} alt="Skate" />
        <img src={myPhoto4} alt="Drawing" />
        <img src={myPhoto6} alt="Face" />
        <img src={myPhoto5} alt="Biking" />
      </div>

<h3 className="about-subheading">Beyond Code</h3>

<div className="about-grid">
  <div>
    <h4>Creative & Curious</h4>
    <p>
      I enjoy reading, gaming, drawing, exploring emerging technologies,
      and constantly learning new skills — including guitar and motorbike riding.
    </p>
  </div>

  <div>
    <h4>Skateboarding & Community</h4>
    <p>
      As a non-profit skate coach, I use skateboarding as a way to give back,
      mentor youth, and promote positivity. I placed 2nd in my first competition
      at 14 — and the discipline I learned still shapes who I am today.
    </p>
  </div>

  <div>
    <h4>Mindset</h4>
    <p>
      I come from a small town in Durban called Phoenix, and I strongly believe
      that your environment does not define your future. With the right mindset,
      discipline, and dedication — growth is inevitable.
    </p>
  </div>
</div>

<div className="quote-section">
  <h2 className="about-subheading">Quotably Yours</h2>

  <blockquote className="quote-card">
    <p className="quote-main">
      “Curiosity may have killed the cat, but it made me who I am today.”
    </p>

    <p className="quote-advice">
      Commit yourself. Keep learning. Keep adapting. Never give up.
    </p>

    <footer className="quote-footer">
      Remember that life is exactly what YOU think it is. Your mindset is the most powerful tool you have — use it wisely.
    </footer>
  </blockquote>
</div>

    </section>
  );
}

export default About;