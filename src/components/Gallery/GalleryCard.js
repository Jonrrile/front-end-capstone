import React from "react";
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap'
import { CardDeck} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Figure } from 'react-bootstrap'

let username = sessionStorage.getItem("credentials")
    username = JSON.parse(username);
    console.log(username.user)

const GalleryCard = props => {
    return (
        <Figure>
  <Figure.Image
    width={200}
    height={200}
    alt="171x180"
    src={props.picture.url}
  />
  <Figure.Caption>
    {props.picture.caption}
    Photo creds to: {username.user}
  </Figure.Caption>
  <Button className="btn" variant="outline-primary" type="button" onClick={() => props.deletePicture(props.picture.id)}>Delete</ Button>
</Figure>
    )
}

export default GalleryCard