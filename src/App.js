import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Footer, NavBar, Aboutme, Home } from './components';
import Title from 'react-vanilla-tilt'
import './index.css';

const App = () => (
  <div className='body'>
    {/* nav bar section ------------------ */}
    <NavBar />

    {/* main section ------------------- */}
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> 
            <Home />
        </Route>
        <Route exact path="/aboutme">
          <Aboutme />
        </Route>
      </Switch>
    </BrowserRouter>



    {/* footer section ------------------------- */}
    <Footer />
  </div>
);

export default App;