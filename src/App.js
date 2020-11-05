import Navbar from './components/Navbar/Navbar';
import React from './components/React/react';
import Game from './components/Games/games';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          
          <Route path="/react" component={React}/>
          <Route path="/game" component={Game}/>
        </Switch>
        
    </div>
    </Router>
  );
}

export default App;
