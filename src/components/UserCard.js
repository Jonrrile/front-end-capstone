import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';


const UserCard = props => {
  return (
      
    <div>
<Jumbotron fluid>
  <Container>
    <h1>Welcome {props.user.user} </h1>
  </Container>
</Jumbotron>
</div>
  );
};

export default UserCard;




