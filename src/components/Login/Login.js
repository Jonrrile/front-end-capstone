import React, { useState } from "react"
import UserManager from "./../../modules/UserManager"
import { Link } from "react-router-dom";
import {Button, FormGroup, FormControl, Container } from "react-bootstrap";
import "./Login.css"
import MyComponent from "../globe/Globe";

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




  /* This is representing our sign in and registration forms. 
  We can adjust the visualization and functionality as needed */

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
          <Container>
          <MyComponent />
          </Container>
          </div>
          </form>
    </div>
  );
};

export default Login;