import React from 'react';
import './components.css';


function AboutMe(props){
return(
    <div className="section" id={props.id}>
        <h1 className="header"> About Me </h1>
        <div className="section-content">
            <h5> Hello! I'm Michael, a recent grad based in Central Texas with a passion for challenges and solving problems using technology. 
                    I started learning to code about a year ago and found loving the process that went into writing even the smallest programs. 
                    I strive to always grow and improve, and learn as much as I can.

                    I am working on developing applications that provide intuitive user interfaces paired with efficient backend architecture. 
            </h5>
        </div>
    </div>
);
}

export default AboutMe;