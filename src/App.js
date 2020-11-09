import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import React from './components/React/react';
import Game from './components/Games/games';

import './App.css';
import {Switch, Route } from 'react-router-dom';
import { HashRouter as Router } from "react-router-dom";
import styled from 'styled-components'

const Wrapper = styled.section`
  background: rgb(12,27,41);
`;


function App() {
  return (
    <> 

      <Router>
        <Switch>
          <Wrapper>
            <Navbar />

            <Route path="/" exact component={About}/>
            <Route path="/react" component={React}/>
            <Route path="/game" component={Game}/>

            <Footer />
          </Wrapper>
          
  
        </Switch>
      </Router>
    </>
    
  );
}


export default App;
