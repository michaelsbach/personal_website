import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import React from 'react';
import Container from 'react-bootstrap/Container'
import './components.css';


function Display(){
return(
<Container fluid id="home" className="main pt-5">
    <Row className="justify-content-md-center">
        <Col>
        <Jumbotron id="intro">
        <p>{window.token}</p>
        <h1>Hi, I'm Michael.</h1>
        <div id="me" className="pt-3">
        </div>

        </Jumbotron>
        </Col>
    </Row>
    <Row className="justify-content-md-center">
        <Col xs={6}>
        <Jumbotron>
        <h1>Insert a cool dynamic component here.</h1>
        </Jumbotron>
        </Col>
</Row>
    <Row className="justify-content-md-center">
        <Col xs={6}>
        <Jumbotron>
        <h1>Insert a cool dynamic component here.</h1>
        </Jumbotron>
        </Col>
</Row>
    <Row className="justify-content-md-center">
        <Col xs={6}>
        <Jumbotron>
        <h1>Insert a cool dynamic component here.</h1>
        </Jumbotron>
        </Col>
</Row>
    <Row className="justify-content-md-center">
        <Col xs={6}>
        <Jumbotron>
        <h1>Insert a cool dynamic component here.</h1>
        </Jumbotron>
        </Col>
</Row>
</Container>

);
}

export default Display;

