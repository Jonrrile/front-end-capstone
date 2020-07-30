import React from "react";
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap'
import { CardGroup} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'


const CompletedJourneyCard = props => {
    return (
        <Container>
        <CardGroup>
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={props.completedjourney.img}/>
            <Card.Body>
                <Card.Title>{props.completedjourney.destination}</Card.Title>
                <Card.Text>{props.completedjourney.date}</Card.Text>
                <Link to={`/completedjourneys/${props.completedjourney.id}`}>
                    <Button>Details</Button>
                </Link>
                <Button type="button" onClick={() => props.deleteJourney(props.completedjourney.id)}>Delete</Button>
                </Card.Body>
                </Card>
                </CardGroup>
                </Container>
    )
}

export default CompletedJourneyCard