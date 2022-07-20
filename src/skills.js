import Design from './skills/design';
import Mobdev from './skills/mobdev';
import Other from './skills/other';
import Webdev from './skills/webdev';

function Skills() {
    return (
      <section id="skills" className="App" style={{backgroundColor: "white", color: "#116889"}}>
      <div style={{padding: "25px"}}>
        <br></br><br></br>
        
        <div className="skills reveal">
          <h1>
            Skills
          </h1>
        </div>

        <br></br> <br></br>

        <Design />

        <br></br> <br></br>

        <Webdev />

        <br></br> <br></br>

        <Mobdev />
          
        <br></br> <br></br>
        
        <Other />

        <br></br> <br></br> <br></br> <br></br>

      </div>
      </section>
    );
  }
  
  export default Skills;