import React from "react";
import { Link } from "react-router-dom"
import { Card, Carousel } from 'react-bootstrap'
import { CardDeck} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Figure } from 'react-bootstrap'

const GalleryCard = props => {
  const currentUser = parseInt(sessionStorage.getItem("activeUser"))
  if (props.picture.userId == currentUser) {
    return (
      <Card>
      <Card.Img variant="top" src={props.picture.url} 
      width={200}
      height={200}/>
      <Card.Body>
        <Card.Text>
          {props.picture.caption}
        </Card.Text>
        <Card.Text>
         Uploaded by: {props.picture.username}
        </Card.Text>
        <Button className="btn" variant="outline-primary" type="button" onClick={() => props.deletePicture(props.picture.id)}>Delete</ Button>

      </Card.Body>
    </Card>
    )
} else {
  return (
    <Card>
    <Card.Img variant="top" src={props.picture.url} 
    width={100}
    height={180}/>
    <Card.Body>
      <Card.Text>
        {props.picture.caption}
      </Card.Text>
      <Card.Text>
       Uploaded by: {props.picture.username}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}}

export default GalleryCard