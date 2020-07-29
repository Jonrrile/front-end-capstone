import React, { useState } from 'react';
import PlannedJourneyManager from '../../modules/PlannedJourneyManager';

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

export default PlannedJourneyForm