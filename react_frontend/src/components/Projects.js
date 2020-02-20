import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components.css';
import Project from './Project';



function Projects(){

    const [projects, setProjects] = useState([]);

    // Takes over functionality of {componentDidMount, componentDidUpdate}
    useEffect(() => {
            const fetchData = async() => {
                const result = await axios("/api/projects");
                setProjects(result.data.projects);
            };
            fetchData();
    }, []);
    
    return (
        <div>
            {projects.map(proj => (
                <Project data={proj}></Project>
            ))}
        </div>
    );
        }
export default Projects;