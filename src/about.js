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
          I am a highly motivated Full-Stack Developer specializing in PHP with Laravel and JavaScript with React.js. Constantly striving to stay at the forefront of the industry, I am dedicated to continuous learning and personal growth. In addition to my expertise in PHP and JavaScript, I have a strong interest in Mobile and Software Development, as well as UX/UI design. I thoroughly enjoy solving problems that require algorithmic thinking and believe that technology holds immense potential to make a positive impact on the world. With my passion for creating innovative solutions and my commitment to staying current with industry advancements, I am eager to contribute to transformative projects that shape the future.
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