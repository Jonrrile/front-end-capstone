import React from "react";
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap'
import { CardDeck} from 'react-bootstrap'
import { Button } from 'react-bootstrap'


const BlogCard = props => {
    return (
        <Card >
            <Card.Header>{props.blog.title}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>{' '} {props.blog.text} {' '}</p>
                    <footer className="blockquote-footer">
                        {props.blog.date}
                    </footer>
                    </blockquote>  
                <Button className="btn" variant="outline-primary" type="button" onClick={() => props.deleteBlog(props.blog.id)}>Delete</ Button>
               <Button className="btn"  variant="outline-primary" type="button" onClick={() => props.history.push(`/blogs/${props.blog.id}/edit`)}>Edit</Button>           
                </Card.Body>
                </Card>
    )
}

export default BlogCard