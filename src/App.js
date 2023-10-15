import React from 'react';
import { Footer, NavBar, Aboutme, Home, Skills, Projects, Resume } from './components';
import './index.css';

const App = () => (
  <div className='body'>
    {/* nav bar section ------------------ */}
    <NavBar />
    {/* main section ------------------- */}
    <div className='main'>
      <Home />
      <Aboutme />
      <Skills />
      <Projects />
    </div>

    {/* footer section ------------------------- */}
    <Footer />
  </div>
);

export default App;