import React, { useState } from 'react';
import CompletedJourneyManager from '../../modules/CompletedJourneyManager';
import { Form, FormGroup, FormControl, FormContent, FormFile } from "react-bootstrap";
import { Button } from "react-bootstrap";

const CompletedJourneyForm = props => {
    const [completedjourney, setCompletedJourney] = useState({ destination: "", description: "", budget: "", img: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...completedjourney};
        stateToChange[evt.target.id] = evt.target.value;
        setCompletedJourney(stateToChange);
    };

    const constructNewJourney = evt => {
        evt.preventDefault();
        if (completedjourney.destination === "" || completedjourney.description === "" || completedjourney.budget === "") {
            window.alert("Please fill out all fields!");
        } else {
            setIsLoading(true);
            CompletedJourneyManager.post(completedjourney)
            .then(() => props.history.push("/completedjourneys"))
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
            <label htmlFor="date">Dates Traveled</label>
            <FormControl
              type="date"
              required
              onChange={handleFieldChange}
              id="date"
              placeholder="Dates Traveled"
            />
            </FormGroup>
            <FormGroup>
            <FormFile
              required
              onChange={handleFieldChange}
              id="image"
              placeholder="Select an Image"
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

export default CompletedJourneyForm