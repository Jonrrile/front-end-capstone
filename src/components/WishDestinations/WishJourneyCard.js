import React from "react";
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap'
import { CardColumns } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const WishJourneyCard = props => {



    return (
        
        <Card>
        <Card.Img variant="top" src={props.wishjourney.url}/>
            <Card.Body>
                <Card.Title>{props.wishjourney.destination}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Journey Description:</Card.Subtitle>
                <Card.Text>{props.wishjourney.description}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Budget Required:</Card.Subtitle>
                <Card.Text>{props.wishjourney.budget}</Card.Text>
                <Button type="button" onClick={() => props.deleteJourney(props.wishjourney.id)}>Delete</ Button>
               <Button type="button" onClick={() => props.history.push(`/wishlist/${props.wishjourney.id}/edit`)}>Edit</Button>
               
               
                </Card.Body>
                </Card>
                
    )
}

export default WishJourneyCard