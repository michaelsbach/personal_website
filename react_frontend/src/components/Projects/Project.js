import Card from 'react-bootstrap/Card'
import React from 'react';
import './index.css';


function Project(props){
  return (
    <React.Fragment>
        <Card>
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title>
                    <h3><a href={props.url}>{props.title}</a></h3>
                </Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Card.Text>
                    {props.tech.map(tech => <small className="text-muted">#{tech} </small>)}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{props.date}</small>
            </Card.Footer>
        </Card>
    </React.Fragment>
  );
}

export default Project;