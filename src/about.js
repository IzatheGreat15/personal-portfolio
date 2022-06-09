import Profile from './profile-white.png'

function About() {
    return (
      <section id="about" className="App-header" style={{textAlign: "center"}}>
      <div style={{padding: "25px"}}>
          <img src={Profile} className="profile"></img>
          <h1 className="title">
            KATHLEEN IZA MONZALES
          </h1>

          <p>
          Hi! I am a Computer Science student based on the Philippines. I am an aspiring full-stack developer. I believe in creating impact through technology. I am mostly interested in web and mobile development, algorithms, UX/UI design and many more!
          </p>

          <br></br>

          <blockquote class="blockquote">
            <p>
              “Intelligence without ambition is a bird without wings.”
            </p>
          </blockquote>
          <figcaption class="blockquote-footer" style={{color: "white"}}>
            <cite title="Source Title">Salvador Dali</cite>
          </figcaption>

      </div>
      </section>
    );
  }
  
  export default About;