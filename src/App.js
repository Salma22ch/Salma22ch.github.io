import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Footer, NavBar, Aboutme, Home, Skills, Projects } from './components';
import Title from 'react-vanilla-tilt'
import './index.css';

const App = () => (
  <div className='body'>
    {/* nav bar section ------------------ */}
    <NavBar />

    {/* main section ------------------- */}

    <Home/>
    <Aboutme />
    <Skills/>
    <Projects/>




    {/* footer section ------------------------- */}
    <Footer />
  </div>
);

export default App;