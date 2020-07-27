import React from "react";
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap'
import { CardDeck } from 'react-bootstrap'


const PlannedJourneyCard = props => {
    return (
        <CardDeck>
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Destination: {props.plannedjourney.destination}</Card.Title>
                <Card.Text>{props.plannedjourney.description}</Card.Text>
                <Link to={`/completedjourneys/${props.plannedjourney.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button" onClick={() => props.deleteJourney(props.plannedjourney.id)}>Delete</button>
                </Card.Body>
                </Card>
                </CardDeck>
    )
}

export default PlannedJourneyCard