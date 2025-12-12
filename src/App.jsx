
import React, { useEffect } from 'react';
import Banner from './components/Banner';
import LoveStory from './components/LoveStory';
import OurJourney from './components/OurJourney';
import Gallery from './components/Gallery';
import IncidentsSection from './components/IncidentsSection';

import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="app">
      <Banner />
      <LoveStory />
      <OurJourney />
      <Gallery />
      <IncidentsSection/>
    </div>
  );
}

export default React.memo(App);