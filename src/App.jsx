import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ValueSection from './components/ValueSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-carbon-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ValueSection />
      <Contact />
      <Footer />
    </div>
  );
}
