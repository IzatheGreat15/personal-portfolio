import './App.css';
import Navigation from './Navigation';
import Home from './home';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contacts from './contacts';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
