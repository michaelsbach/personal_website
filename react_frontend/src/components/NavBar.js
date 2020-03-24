import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Link, animateScroll as scroll } from "react-scroll";
import './components.css';



function NavBar(){
return (
    
<Container fluid id="navbar">
    <Row className="justify-content-center py-2"> 
        <Col xs={5} className="text-left">
            <h4><a href="/" className="navLink" >Home</a></h4>
        </Col>

        <Col xs={3}>
            <Link to="contact" smooth={true} duration= {500}>
                <h4 className="navLink">Contact</h4>
            </Link>
        </Col>
        <Col xs={3}>
            <Link to="projects" smooth={true} duration= {500}>
                <h4 className="navLink">Projects</h4>
            </Link>
        </Col>
    </Row>
</Container>

);
}

export default NavBar;