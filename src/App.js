// App.js
import React, { useEffect, lazy, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
// import Achievements from './components/Achievements';
// import Leadership from './components/Leadership';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from './assets/bg.json';

// Lazy load components
const AboutMe = lazy(() => import('./components/AboutMe'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const ExtraCurricular = lazy(() => import('./components/ExtraCurricular'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  // const [backgroundImageUrl, setBackgroundImageUrl] = useState('');

  useEffect(() => {
    // Optimize AOS initialization
    AOS.init({ 
      duration: 600,
      offset: 100,
      once: true,
      disable: window.innerWidth < 768, // Disable on mobile
      easing: 'ease-out-cubic',
      mirror: false,
      anchorPlacement: 'top-bottom'
    });

    // Debounce scroll events
    let timeoutId;
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        AOS.refresh();
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      AOS.refresh();
    };
  }, []);

  return (
    <div className="App">
      <Player
        autoplay
        loop
        src={animationData}
        className="background-lottie"
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice',
          clearCanvas: true,
          progressiveLoad: true,
          hideOnTransparent: true
        }}
      />
      <div className='content'>
        <Navbar />
        <HeroBanner />
        <Suspense fallback={<div>Loading...</div>}>
          <AboutMe />
          <Experience />
          {/* <Achievements /> */}
          <Projects />
          {/* <Leadership /> */}
          <Skills />
          <ExtraCurricular />
          <Contact />
        </Suspense>
      </div>
    </div>
  );
}

export default App;