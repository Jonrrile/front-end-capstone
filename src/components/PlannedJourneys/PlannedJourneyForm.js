import React, { useState } from 'react';
import PlannedJourneyManager from '../../modules/PlannedJourneyManager';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup, FormControl, FormFile } from 'react-bootstrap';

const PlannedJourneyForm = props => {
    const [plannedjourney, setPlannedJourney] = useState({ destination: "", description: "", budget: "", url: "", date: "", userId: ""});
    const [isLoading, setIsLoading] = useState(false);
    plannedjourney.userId = parseInt(sessionStorage.getItem("activeUser"))
    const handleFieldChange = evt => {
        const stateToChange = { ...plannedjourney};
        stateToChange[evt.target.id] = evt.target.value;
        setPlannedJourney(stateToChange);
    };

    const constructNewJourney = evt => {
        evt.preventDefault();
        if (plannedjourney.destination === "" || plannedjourney.description === "" || plannedjourney.budget === "") {
            window.alert("Please fill out all fields!");
        } else {
            setIsLoading(true);
            PlannedJourneyManager.post(plannedjourney)
            .then(() => props.history.push("/plannedjourneys"))
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
          placeholder="Planned Destination"
        />
        </FormGroup>
        <FormGroup>
        <Form.Label>Itinerary</Form.Label>
        <FormControl
          as="textarea"
          rows="3"
          required
          onChange={handleFieldChange}
          id="description"
          placeholder="Description or itinerary"
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
          placeholder="Travel Date"
        />
        </FormGroup>
        <FormGroup>
        <Form.Label>Expected Budget</Form.Label>
        <FormControl
          type="text"
          required
          onChange={handleFieldChange}
          id="budget"
          placeholder="Expected Budget"
        />
        </FormGroup>
        <FormGroup>
        <Form.Label>Picture</Form.Label>
        <FormControl
          type="text"
          required
          onChange={handleFieldChange}
          id="url"
          placeholder="Choose Image"
        />
        </FormGroup>
        <Button
          variant="outline-primary"
          type="submit"
          disabled={isLoading}
          onClick={constructNewJourney}
        >Plan it!
        </Button>
      </Form>
      </div>
  
);
};

export default PlannedJourneyForm