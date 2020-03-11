import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Splash from './components/Splash';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import { BrowserRouter as Router, Route } from "react-router-dom"
// import ReactGA from "react-ga"





function App() {
  return (
      <div className="App">
        <NavBar/>
        <Splash/> 
        <div id="app-content">
          <Projects id="projects"/> 
          <Contact id="contact"/> 
        </div>
          
      </div>
  );
}

export default App;
