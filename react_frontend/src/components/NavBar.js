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
            <a href="/"><h4 className="navLink" >Home</h4></a>
        </Col>

        <Col xs={1}>
            <a href="/projects"><h4 className="navLink" >Projects</h4></a>
        </Col>
        <Col xs={1}>
            <a href="/art"><h4 className="navLink" >Art</h4></a>
        </Col>
        <Col xs={1}>
            <a href="/contact"><h4 className="navLink" >Contact</h4></a>
        </Col>
    </Row>
</Container>

);
}

export default NavBar;