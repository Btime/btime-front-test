import React from 'react';
import Ranking from './pages/Ranking';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import './style/Header.css';

function App() {
  return (
    <div className="App-header">
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route exact path="/ranking" component={ Ranking } />
      </BrowserRouter>
    </div>
  );
}

export default App;
