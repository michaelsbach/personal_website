import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Link, animateScroll as scroll } from "react-scroll";
import './components.css';



function NavBar(props){
    
    let scrollToTop = () => scroll.scrollToTop();
    
    const [scrolled, setScrolled] = useState(false);

    // Takes over functionality of {componentDidMount, componentDidUpdate}
    useEffect(() => {
        window.addEventListener('scroll', navOnScroll)
        return function cleanup() {
            window.removeEventListener('scroll', navOnScroll)
        };
    }, []);

    let navOnScroll = () => {
        if (window.scrollY > 20) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    let links = [
        {
            name: 'Contact',
            to: 'contact',
            offset: -300,
        },
        {
            name: "Projects",
            to: "projects",
            offset: -75,
        }
    ];

    return (
        
    <Container fluid className={scrolled ? 'nav scroll' : 'nav'}>
        <div className="nav-container">
            <div className="home-nav">
                <h4 className="navLink" onClick={scrollToTop}> Home </h4>
            </div>
            <div className="links">
                {links.map(link => (
                    <Link 
                        to={link.to}
                        offset={link.offset}
                        smooth={true}
                        duration={500}
                    >
                        <h4 className="navLink"> {link.name} </h4>
                    </Link>
                ))}
            </div>
        </div>
            
        

    </Container>

    );
}

export default NavBar;