import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route } from "react-router-dom"
// import ReactGA from "react-ga"





function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Route exact path='/' component={Home} /> 
        <Route path='/projects' component={Projects} /> 
        <Route path='/contact' component={Contact} /> 
      </div>
    </Router>
  );
}

export default App;
