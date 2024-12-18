// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import AboutMe from './components/AboutMe';
// import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import Leadership from './components/Leadership';
import Skills from './components/Skills';
// import ExtraCurricular from './components/ExtraCurricular';
import Contact from './components/Contact';
import Carousel from './components/Carousel';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from './assets/bg.json';

function App() {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('');

  useEffect(() => {
    AOS.init({ duration: 500, offset: 100, once: true });

    // Fetch a random image from Unsplash API
    // const fetchBackgroundImage = async () => {
    //   try {
    //     const response = await axios.get('https://api.unsplash.com/photos/random?query=nature&orientation=landscape', {
    //       headers: {
    //         Authorization: `Client-ID iWdCWewoXSDGAeRz9GfmqM94yV6kyDjaO5dZp2AULf8` // Replace with your Unsplash Access Key
    //       }
    //     });

    //     // Set the fetched image URL as background
    //     setBackgroundImageUrl(response.data.urls.full);
    //   } catch (error) {
    //     console.error("Error fetching background image from Unsplash:", error);
    //     setBackgroundImageUrl('https://picsum.photos/1200/800');
    //   }
    // };
    // document.body.style.backgroundImage = 'url(./assets/grid.jpeg)';
    // document.body.style.backgroundSize = 'cover';
    // document.body.style.backgroundPosition = 'center';
    // document.body.style.backgroundRepeat = 'no-repeat';

    return () => {
      // Cleanup: reset background styles when component unmounts
      document.body.style.backgroundImage = '';
    };
  }, []);

  return (
    <div className="App">
        {/* Background Lottie */}
        <Player
        autoplay
        loop
        src={animationData} // Path to your Lottie JSON file
        className="background-lottie"
      />
  <div className='content'>
      <Navbar /> 
      <HeroBanner />
      <AboutMe />
      <Experience />
      {/* <Achievements /> */}
      
      <Projects />
      {/* <Leadership /> */}
      <Skills />
      {/* <ExtraCurricular />
       */}
      
      <Carousel/>
      <Contact /> 
    </div>
    </div>
  );
}

export default App;