import CardDeck from 'react-bootstrap/CardDeck'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components.css';
import Project from './Project';



function Projects(props){

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
        <div id={props.id} className="section">
            <h1 className="header"> Projects </h1>
                {/* <div className="projectGrid"> */}
                <CardDeck>
                    {projects.map(proj => (
                        <Project 
                            // image={proj.image}
                            url={proj.url}
                            title={proj.title}
                            description={proj.description}
                            tech={proj.tech}
                            date={proj.date}
                        />
                    ))}
                </CardDeck>
                {/* </div> */}
        </div>
    );
        }
export default Projects;