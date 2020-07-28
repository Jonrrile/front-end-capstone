import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel'



const Home = () => {
  return (
    <div>
    <Jumbotron fluid>
      <Container>
        <h1>Welcome Traveler</h1>
        {/* <iframe
        width="450"
        height="250"
        frameBorder="0" 
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBTTF5EV5xKOas6sp5POi7JdWf3BlKCeyU&q=Nashville+Tennessee" allowFullScreen>
      </iframe> */}
      </Container>
    </Jumbotron>
    <Carousel className="home_carousel">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1516503424803-708327384b90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1932&q=80"
        />
      <Carousel.Caption>
        <p>“Travel makes one modest, you see what a tiny place you occupy in the world"</p>
        <h3>- Gustave Flaubert</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
  
      <Carousel.Caption>
      <p>“Live with no excuses and travel with no regrets."</p>
        <h3>- Osca Wilde</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1537820839152-7e0df898c5a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
      <Carousel.Caption>
      <p>“I'm in love with cities I've never been to and people I've never met."</p>
        <h3>- John Green</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>

  )
}

export default Home