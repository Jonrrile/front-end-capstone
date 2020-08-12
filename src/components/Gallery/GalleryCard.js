import React from "react";
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap'
import { CardDeck} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Figure } from 'react-bootstrap'


const GalleryCard = props => {
    return (
        <Figure>
  <Figure.Image
    width={300}
    height={500}
    alt="171x180"
    src={props.picture.url}
  />
  <Figure.Caption>
    {props.picture.caption}
  </Figure.Caption>
  <Button className="btn" variant="outline-primary" type="button" onClick={() => props.deletePicture(props.picture.id)}>Delete</ Button>
</Figure>
    )
}

export default GalleryCard