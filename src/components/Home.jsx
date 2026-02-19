import myPhoto1 from '../assets/Graduation-pic.jpg';

function Home() {
  return (
    <section id="home" className="section">
      <h1>Hello, I’m Akhil!</h1>
      <p>Welcome to my life</p>
      <img 
        src={myPhoto1} 
        alt="Profile" 
        className="profile-image"
      />
    </section>
  );
}

export default Home;