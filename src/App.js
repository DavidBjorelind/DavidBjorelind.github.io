import Navbar from './components/Navbar/Navbar';
import React from './components/React/react';
import Game from './components/Games/games';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <div>
          <Navbar />
          <Route path="/react" component={React}/>
          <Route path="/game" component={Game}/>
          </div>
  
        </Switch>
    </Router>
    </div>
    
  );
}


export default App;
