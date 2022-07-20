import Profile from './profile-white.png'

function About() {
    return (
      <section id="about" className="App-header" style={{textAlign: "center"}}>
      <div style={{padding: "25px"}}>
          <img src={Profile} className="profile reveal"></img>
          <h1 className="title reveal">
            KATHLEEN IZA MONZALES
          </h1>

          <p className='reveal'>
          Hi! I am a Computer Science student based on the Philippines. 
          I am an aspiring full-stack developer. 
          I believe in creating impact through technology.
          I am mostly interested in web and mobile development, algorithms, UX/UI design and many more!
          I am open to work freelance, contact me so we can talk further.
          </p>

          <br></br>

          <blockquote class="blockquote" className='reveal'>
            <p>
              “Intelligence without ambition is a bird without wings.”
            </p>
          </blockquote>
          <figcaption className="blockquote-footer reveal" style={{color: "white"}}>
            <cite title="Source Title">Salvador Dali</cite>
          </figcaption>

      </div>
      </section>
    );
  }
  
  export default About;