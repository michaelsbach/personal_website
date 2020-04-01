import React from 'react';
import './index.css';


function Topic(props){
    console.log(props)
return(
    <div>
       <h2 className="topic"> {props.title} </h2>  
            <ul>
                {props.children.map(child => (
                    <li className={ child.completed ? 'strikethru' : 'child'}>
                        {child.title}
                    </li>
                ))}
            </ul>
    </div>
);
}

export default Topic;