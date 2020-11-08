import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import React from './components/React/react';
import Game from './components/Games/games';

import './App.css';
import {Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Link } from "react-router-dom";
import styled from 'styled-components'

const Wrapper = styled.section`
  background: green;
`;


function App() {
  return (

      <Router>
        <Switch>
          <Wrapper>
            <Navbar />
            <Route path="/react" component={React}/>
            <Route path="/game" component={Game}/>

            <Footer />
          </Wrapper>
          
  
        </Switch>
    </Router>

    
  );
}


export default App;
