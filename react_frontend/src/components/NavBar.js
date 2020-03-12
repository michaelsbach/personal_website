import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './components.css';



function NavBar(){
return (
    
<Container fluid id="navbar">
    <Row className="justify-content-center py-2"> 
        <Col xs={5} className="text-left">
            <h4><a href="/" className="navLink" >Home</a></h4>
        </Col>

        <Col xs={3}>
            <h4><a href="#contact" className="navLink" >Contact</a></h4>
        </Col>
        <Col xs={3}>
            <h4><a href="#projects" className="navLink" >Projects</a></h4>
        </Col>
    </Row>
</Container>

);
}

export default NavBar;