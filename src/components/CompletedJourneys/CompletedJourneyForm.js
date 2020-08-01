import React, { useState } from 'react';
import CompletedJourneyManager from '../../modules/CompletedJourneyManager';
import { Form, FormGroup, FormControl, FormContent, FormFile } from "react-bootstrap";
import { Button } from "react-bootstrap";

const CompletedJourneyForm = props => {
  const [completedjourney, setCompletedJourney] = useState({ destination: "", description: "", url: "", date: "", userId: ""});
  const [isLoading, setIsLoading] = useState(false);
  completedjourney.userId = parseInt(sessionStorage.getItem("activeUser"))
  const handleFieldChange = evt => {
      const stateToChange = { ...completedjourney};
      stateToChange[evt.target.id] = evt.target.value;
      setCompletedJourney(stateToChange);
  };

  const constructNewJourney = evt => {
      evt.preventDefault();
      if (completedjourney.destination === "" || completedjourney.description === "" || completedjourney.date === "") {
          window.alert("Please fill out all fields!");
      } else {
          setIsLoading(true);
          CompletedJourneyManager.post(completedjourney)
          .then(() => props.history.push("/completedjourneys"))
      }

  };

  return (
    <div className="journey_form_container">
   <Form className="journey_form">
  <FormGroup>
    <Form.Label>Destination</Form.Label>
      <FormControl
        type="text"
        required
        onChange={handleFieldChange}
        id="destination"
        placeholder="Where did you go?"
      />
      </FormGroup>
      <FormGroup>
      <Form.Label>Description</Form.Label>
      <FormControl
        as="textarea"
        rows="3"
        required
        onChange={handleFieldChange}
        id="description"
        placeholder="What did you do?"
      />
      </FormGroup>
      <FormGroup>
        <Form.Label>Travel Date</Form.Label>
      <FormControl
        type="date"
        rows="3"
        required
        onChange={handleFieldChange}
        id="date"
        placeholder="When did you go?"
      />
      </FormGroup>
      <FormGroup>
      <Form.Label>Picture</Form.Label>
      <FormControl
        type="text"
        required
        onChange={handleFieldChange}
        id="url"
        placeholder="What did you see?"
      />
      </FormGroup>
      <Button
        variant="outline-primary"
        type="submit"
        disabled={isLoading}
        onClick={constructNewJourney}
      >Document it!
      </Button>
    </Form>
    </div>

);
};

export default CompletedJourneyForm