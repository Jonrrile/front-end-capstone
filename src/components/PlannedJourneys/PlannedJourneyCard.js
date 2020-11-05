import React from "react";
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap'
import { CardDeck } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


const PlannedJourneyCard = props => {
    return (
        <Card>
        <Card.Img variant="top" 
        width={171}
        height={180}
        src={props.plannedjourney.url}/>
            <Card.Body>
                <Card.Title>{props.plannedjourney.destination}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Journey Description:</Card.Subtitle>
                <Card.Text>{props.plannedjourney.description}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Planned Dates:</Card.Subtitle>
                <Card.Text>{props.plannedjourney.date}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Budget Needed:</Card.Subtitle>
                <Card.Text>{props.plannedjourney.budget}</Card.Text>     
                <Button variant="outline-primary" type="button" onClick={() => props.deleteJourney(props.plannedjourney.id)}>Delete</ Button>
                <Button variant="outline-primary" type="button" onClick={() => props.history.push(`/plannedjourneys/${props.plannedjourney.id}/edit`)}>Edit</Button>                
                </Card.Body>
                </Card>
               
    )
}

export default PlannedJourneyCard