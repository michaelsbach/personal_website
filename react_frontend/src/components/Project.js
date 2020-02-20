import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import React from 'react';
import Container from 'react-bootstrap/Container'
import './components.css';


function Project(props){
  console.log(props)
  return (
    <div>
        <Card>
            <Card.Body>
                <Card.Title>
                    <h3><a href={props.data.url}>{props.data.title}</a></h3>
                </Card.Title>
                <Card.Text>
                    {props.data.description}
                </Card.Text>
                <Card.Text>
                    {props.data.tech.map(tech => <small className="text-muted">#{tech} </small>)}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
}

export default Project;