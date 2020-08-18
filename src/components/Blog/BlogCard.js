import React from "react";
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap'
import { CardDeck} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Timestamp from 'react-timestamp';


const BlogCard = props => {
    return (
        <Card >
            <Card.Header><a href={props.blog.url}>{props.blog.title}</a></Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>{' '} {props.blog.text} {' '}</p>
                    <footer className="blockquote-footer">
                        Posted by {props.blog.username} on {props.blog.timestamp} 
                        
                    </footer>
                    </blockquote>  
                <Button className="btn" variant="outline-primary" type="button" onClick={() => props.deleteBlog(props.blog.id)}>Delete</ Button>
               <Button className="btn"  variant="outline-primary" type="button" onClick={() => props.history.push(`/blogs/${props.blog.id}/edit`)}>Edit</Button>           
                </Card.Body>
                </Card>
    )
}

export default BlogCard