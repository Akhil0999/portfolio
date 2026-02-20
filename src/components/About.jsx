import myPhoto1 from '../assets/travel-pic.jpg';
import myPhoto2 from '../assets/study.jpg';
import myPhoto3 from '../assets/skate.jpg';
import myPhoto4 from '../assets/drawing.jpg';
import myPhoto5 from '../assets/biking.jpg';
import myPhoto6 from '../assets/face.jpg';

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>

      <p>
        I’m a software developer with a passion for creating projects and
        solving problems. I enjoy learning frameworks (I think there's a framework for everything in life), designing UI/UX, and
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

      <p>
        When I’m not coding, I love to read, game, draw, L2M, explore new technologies, and skateboard. 
        I do non-profit work as a skate coach (placing 2nd in my first competition at 14 years old) as it is a great way to give back to the community, and relieve stress in a healthy way,
        while keeping the youth out of trouble and facilitating positivity. I'm also learning how to play the guitar and ride a motorbike!
        I come from a small town in Durban called Phoenix,
        and I am determined to show people that your environment does not define you. I beleive that everybody 
        has the potential to achieve greatness with the right mindset and dedication.
      </p>

      <h2>Quotably Yours</h2>
        <p>
          Curiosity killed the cat, but it made me who I am today. If I 
          had any advice for somebody trying to make their dreams come true
          it would be to commit yourself, keep learning, adapting and NEVER GIVE UP!
          <br/>
          “The future belongs to those who believe in the beauty of their dreams.” – Eleanor Roosevelt 
        </p>

    </section>
  );
}

export default About;