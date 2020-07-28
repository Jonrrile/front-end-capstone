import React from "react";
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap'
import { CardDeck } from 'react-bootstrap'


const CompletedJourneyCard = props => {
    return (
        <CardDeck>
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={props.completedjourney.img}/>
            <Card.Body>
                <Card.Title>{props.completedjourney.destination}</Card.Title>
                <Card.Text>{props.completedjourney.date}</Card.Text>
                <Link to={`/completedjourneys/${props.completedjourney.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button" onClick={() => props.deleteJourney(props.completedjourney.id)}>Delete</button>
                </Card.Body>
                </Card>
                </CardDeck>
    )
}

export default CompletedJourneyCard