import React from "react";
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap'
import { CardDeck } from 'react-bootstrap'


const PlannedJourneyCard = props => {
    return (
        <CardDeck>
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={props.plannedjourney.img}/>
            <Card.Body>
                <Card.Title>{props.plannedjourney.destination}</Card.Title>
                <Card.Text>{props.plannedjourney.dates}</Card.Text>
                <Link to={`/plannedjourneys/${props.plannedjourney.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button" onClick={() => props.deleteJourney(props.plannedjourney.id)}>Delete</button>
                </Card.Body>
                </Card>
                </CardDeck>
    )
}

export default PlannedJourneyCard