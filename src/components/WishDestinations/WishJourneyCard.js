import React from "react";
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap'
import { CardDeck } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const WishJourneyCard = props => {



    return (
        <CardDeck>
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={props.wishjourney.img}/>
            <Card.Body>
                <Card.Title>Destination: {props.wishjourney.destination}</Card.Title>
                <Card.Text>{props.wishjourney.description}</Card.Text>
                <Link to={`/wishlist/${props.wishjourney.id}`}>
                    <Button>Details</ Button>
                </Link>
                <Button type="button" onClick={() => props.deleteJourney(props.wishjourney.id)}>Delete</ Button>
               <Button type="button" onClick={() => props.history.push(`/wishlist/${props.wishjourney.id}/edit`)}>
                   Edit
               </Button>
                </Card.Body>
                </Card>
                </CardDeck>
    )
}

export default WishJourneyCard