import React, { useState } from "react"
import UserManager from "./../../modules/UserManager"
import { Link } from "react-router-dom";
import {Button, FormGroup, FormControl, Container, Image } from "react-bootstrap";
import "./Login.css"

const userName = ""
const password = ""
const Login = props => {
  const [credentials, setCredentials] = useState([]);

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };
  
  const tryLogin = (e) => {
    e.preventDefault();
    let loginAccepted = false
    UserManager.getAllUsers()
      .then(users => {
        users.find(user => {
          if (user.user === credentials.user && user.password === credentials.password) {
            loginAccepted = true
            sessionStorage.setItem("credentials", JSON.stringify(credentials))
            sessionStorage.setItem("activeUser", user.id)
            props.setUser(credentials)
            props.history.push("/home")
          }
          

        })
        if(loginAccepted === false) {
          window.alert("Incorrect username or password")
        }
      })


  }

  return (
    
    <div className="Login">
      <form className="login_form" onSubmit={tryLogin}>
        <FormGroup controlId="username" bsSize="large">
        <label htmlFor="username">Username</label>
        <FormControl
          autoFocus
          type="username"
          id="user"
          placeholder="Username"
          onChange={handleFieldChange}
          />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
          <label htmlFor="inputPassword">Password</label>
          <FormControl
          type="password"
          onChange={handleFieldChange}
          id="password"
          placeholder="Password"
          />
          </FormGroup>
          <Button block bsSize="large" type="submit">Sign in</Button>
          <div className="register">New user? &nbsp;
          <Link to="/register"> Register a new account </Link>
          <Image
          src="https://document-export.canva.com/DAEFMQSBPPI/1/thumbnail/0001-9735005906.png"
          width={315}
          height={290} />
          <Container>
          </Container>
          </div>
          </form>
    </div>
  );
};

export default Login;