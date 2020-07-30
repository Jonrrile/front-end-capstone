import React, { useState } from 'react';
import PlannedJourneyManager from '../../modules/PlannedJourneyManager';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup, FormControl, FormFile } from 'react-bootstrap';

const PlannedJourneyForm = props => {
    const [plannedjourney, setPlannedJourney] = useState({ destination: "", description: "", budget: ""});
    const [isLoading, setIsLoading] = useState(false);

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
      <div>
     <form>
    <FormGroup>
      <label htmlFor="destination">Destination</label>
        <FormControl
          type="text"
          required
          onChange={handleFieldChange}
          id="destination"
          placeholder="Desired Destination"
        />
        </FormGroup>
        <FormGroup>
        <label htmlFor="description">Description</label>
        <FormControl
          type="text"
          required
          onChange={handleFieldChange}
          id="description"
          placeholder="Description or Itinerary"
        />
        </FormGroup>
        <FormGroup>
        <label htmlFor="date">Projected Dates</label>
        <FormControl
          type="date"
          required
          onChange={handleFieldChange}
          id="date"
          placeholder="Dates Traveled"
        />
        </FormGroup>
        <FormGroup>
        <label htmlFor="date">Expected Budget</label>
        <FormControl
          type="text"
          required
          onChange={handleFieldChange}
          id="budget"
          placeholder="Expected Budget"
        />
        </FormGroup>
        
        
      <div className="alignRight">
        <Button
          type="button"
          disabled={isLoading}
          onClick={constructNewJourney}
        >Add to Completed Journeys</Button>
      </div>
  </form>
  </div>
  
);
};

export default PlannedJourneyForm