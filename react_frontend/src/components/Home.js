import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import React from 'react';
import Container from 'react-bootstrap/Container'
import './components.css';

import AboutMe from './AboutMe'


function Home(){
return(
<Container fluid id="home" className="main">
    {/* Welcome */}
    <div>
        <Row>
            <Col className="px-0">
                <Jumbotron id="intro">
                    <h1 className="intro_greeting">Hi, I'm Michael.</h1>
                    <div>
                        <h3 className="intro_subtitle"> 
                            I'm a recent computer science graduate looking for software engineering work.
                        </h3>
                    </div>
                </Jumbotron>
            </Col>
        </Row>
    </div>

    {/* <AboutMe/> */}


</Container>

);
}

export default Home;

