import React from "react";
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap'
import { CardDeck} from 'react-bootstrap'
import { Button } from 'react-bootstrap'


const CompletedJourneyCard = props => {
    return (
        <Card >
        <Card.Img variant="top"
         width={171}
         height={180} 
         src={props.completedjourney.url}/>
            <Card.Body>
                <Card.Title>{props.completedjourney.destination}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Journey Description:</Card.Subtitle>
                <Card.Text>{props.completedjourney.description}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Dates Traveled</Card.Subtitle>
                <Card.Text>{props.completedjourney.date}</Card.Text>     
                <Button className="btn" variant="outline-primary" type="button" onClick={() => props.deleteJourney(props.completedjourney.id)}>Delete</ Button>
               <Button className="btn"  variant="outline-primary" type="button" onClick={() => props.history.push(`/completedjourneys/${props.completedjourney.id}/edit`)}>Edit</Button>           
                </Card.Body>
                </Card>
    )
}

export default CompletedJourneyCard