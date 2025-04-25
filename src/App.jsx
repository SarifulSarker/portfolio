import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import CPProfiles from './components/CPProfiles';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="ml-15 mr-15 pt-24">
      <NavBar />
      <Home />
      <Skills />
      <CPProfiles />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
