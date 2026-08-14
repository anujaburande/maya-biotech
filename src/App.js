import React, { useEffect, useState } from 'react';
import './App.css';
import './assets/styles/landing.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Team from './components/Team';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';

// Root App: assembles the landing page sections and provides theme + smooth scroll
function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Apply theme class to document element for CSS variables
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  }

  // Smooth scroll helper called from Header menu clicks
  function handleNavigate(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="App">
      <Header onNavigate={handleNavigate} theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <WhyUs />
        <Team />
        <Contact />
      </main>
    </div>
  );
}

export default App;
