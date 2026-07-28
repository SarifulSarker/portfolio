import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CPProfiles from './components/CPProfiles';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-100 overflow-hidden font-sans">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-5%] w-[45%] h-[45%] rounded-full bg-purple-900/15 blur-[130px] pointer-events-none animate-float-slower" />
      <div className="absolute top-[40%] left-[10%] w-[35%] h-[35%] rounded-full bg-indigo-950/25 blur-[120px] pointer-events-none animate-float-slow" />

      {/* Main navigation */}
      <NavBar />

      {/* Main content wrapper */}
      <div className="relative z-10">
        <Home />
        <Skills />
        <Experience />
        <CPProfiles />
        <Achievements />
        <Projects />
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-900/60 relative z-10 bg-slate-950/10 backdrop-blur-sm">
        <p>&copy; {new Date().getFullYear()} Shariful Islam. Built with passion & speed.</p>
      </footer>
    </div>
  );
}

export default App;
