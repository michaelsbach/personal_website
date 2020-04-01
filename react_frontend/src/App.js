import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Splash from './components/Splash';
import Projects from './components/Projects/index';
import Learning from './components/Learning/index';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
// import { BrowserRouter as Router, Route } from "react-router-dom"
// import ReactGA from "react-ga"



function App() {
  return (
      <div className="App">
        <NavBar/>
        <Splash/> 
        <Contact id="contact"/> 
        <div id="app-content">
          <Projects id="projects"/> 
          <AboutMe id="about-me"/>
          <Learning id="learning"/>

        </div>
          
      </div>
  );
}

export default App;
