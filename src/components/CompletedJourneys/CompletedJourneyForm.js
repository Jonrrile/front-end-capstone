import React, { useState } from 'react';
import CompletedJourneyManager from '../../modules/CompletedJourneyManager';

const CompletedJourneyForm = props => {
    const [completedjourney, setCompletedJourney] = useState({ destination: "", description: "", budget: ""});
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
        <>
         <form>
        <fieldset>
          <div className="formgrid">
          <label htmlFor="destination">Destination</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="destination"
              placeholder="Desired Destination"
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="description"
              placeholder="Description or Itinerary"
            />
            <label htmlFor="budget">Budget</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="budget"
              placeholder="Estimated Budget"
            />
            
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewJourney}
            >Add!</button>
          </div>
        </fieldset>
      </form>
      </>
    );
};

export default CompletedJourneyForm