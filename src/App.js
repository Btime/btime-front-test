import React from 'react';
import Ranking from './Pages/Ranking';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/Header';
import './App.css';

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
