import React, { useState } from 'react';
import GalleryManager from '../../modules/GalleryManager';
import { Form, FormGroup, FormControl, FormContent, FormFile } from "react-bootstrap";
import { Button } from "react-bootstrap";

const GalleryForm = props => {
  const [picture, setPicture] = useState({ caption: "", url: "", userId: "", username: ""})
  const [isLoading, setIsLoading] = useState(false);
  picture.userId = parseInt(sessionStorage.getItem("activeUser"))

  let user = sessionStorage.getItem("credentials")
  user = JSON.parse(user)
  picture.username = user.user

  const handleFieldChange = evt => {
      const stateToChange = { ...picture};
      stateToChange[evt.target.id] = evt.target.value;
      setPicture(stateToChange);
  };

  const addNewPicture = evt => {
      evt.preventDefault();
      if (picture.caption === "" || picture.url === "") {
          window.alert("Please fill out all fields!");
      } else {
          setIsLoading(true);
          GalleryManager.post(picture)
          .then(() => props.history.push("/gallery"))
      }

  };

  return (
    <div className="journey_form_container">
   <Form className="journey_form">
  <FormGroup>
    <Form.Label>Image</Form.Label>
      <FormControl
        type="url"
        required
        onChange={handleFieldChange}
        id="url"
        placeholder="Select Image"
      />
      </FormGroup>
      <FormGroup>
      <Form.Label>Caption</Form.Label>
      <FormControl
        as="textarea"
        rows="3"
        required
        onChange={handleFieldChange}
        id="caption"
        placeholder="A Little About The Photo"
      />
      </FormGroup>
     
      
      <Button
        variant="outline-primary"
        type="submit"
        disabled={isLoading}
        onClick={addNewPicture}
      >Upload!
      </Button>
    </Form>
    </div>

);
};

export default GalleryForm