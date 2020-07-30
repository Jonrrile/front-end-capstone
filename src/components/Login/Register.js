import React, { useState } from "react"
import UserManager from "./../../modules/UserManager"
import { FormControl, FormGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Login.css"

const Register = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "", user: ""});

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };



const handleRegister = evt => {
  evt.preventDefault();
  if (credentials.email === "" || credentials.password === "" || credentials.user === "") {
    window.alert("Please input a username, password, and email");
  } else {
    
    
    // Create the credentials and redirect user to credentials list
    UserManager.createUser(credentials)
    .then(() => {
      sessionStorage.setItem("credentials", JSON.stringify(credentials))
      props.history.push("/login")
}
          );
    }
};


  /* This is representing our sign in and registration forms. 
  We can adjust the visualization and functionality as needed */

  return (
    <div className="Login">
      <form onSubmit={handleRegister}>
        <FormGroup controlId="email" bsSize="large">
        <label htmlFor="inputEmail">Email address</label>
          <FormControl
          autoFocus
          type="email"
          onChange={handleFieldChange}
          id="email"
          placeholder="Email"
          />
          </ FormGroup>
          <FormGroup controlId="password" bsSize="large">
          <label htmlFor="inputPassword">Password</label>
          <FormControl
            onChange={handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="inputUserName">Create Username</label>
          <FormControl
          onChange={handleFieldChange} 
          type="user"
          id="user"
          placeholder="Username"
            />
          </FormGroup>

          <Button block bsSize="large" type="submit">Create Account</ Button>
      </form>
    </div>
  );
};

export default Register;