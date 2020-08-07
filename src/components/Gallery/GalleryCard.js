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
    width={171}
    height={180}
    alt="171x180"
    src={props.picture.url}
  />
  <p>Test</p>
  <Figure.Caption>
    {props.picture.caption}
  </Figure.Caption>
</Figure>
    )
}

export default GalleryCard