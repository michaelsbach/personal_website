import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Topic from './Topic';
import './index.css';
import '../components.css';


function Learning(props){

    const [learning, setLearning] = useState([]);

    // Takes over functionality of {componentDidMount, componentDidUpdate}
    useEffect(() => {
            const fetchData = async() => {
                const result = await axios("/api/learning");
                setLearning(result.data.learning);
            };
            fetchData();
    }, []);

return(
    <div className="section" id={props.id}>
       <h1 className="header"> Learning </h1>
       <div className="section-content">
            {learning.map(topic => (
                <Topic
                    title={topic.title}
                    children={topic.children}
                />
            ))}
        </div>
    </div>
);
}

export default Learning;