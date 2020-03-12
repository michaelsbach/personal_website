import React from 'react';
import Container from 'react-bootstrap/Container'
import './components.css';

function Splash(){
return(
<Container fluid className="main">
    <div id="intro">
        <h1 className="intro_greeting">Hi, I'm Michael.</h1>
        <h3 className="intro_subtitle"> 
            I'm a recent computer science graduate looking for a great place to start my career in software engineering.
        </h3>
    </div>
</Container>

);
}

export default Splash;

