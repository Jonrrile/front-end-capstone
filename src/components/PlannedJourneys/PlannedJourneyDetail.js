import React, { useState, useEffect } from 'react';
import PlannedJourneyManager from '../../modules/PlannedJourneyManager';


const PlannedJourneyDetail = props => {
  const [plannedjourney, setPlannedJourney] = useState({ destination: "", description: "" });

  useEffect(() => {
    //get(id) from PlannedJourneyManager and hang on to the data; put it into state
    PlannedJourneyManager.get(props.plannedjourneyId)
      .then(plannedjourney => {
        setPlannedJourney({
          destination: plannedjourney.destination,
          description: plannedjourney.description
        });
      });
  }, [props.plannedjourneyId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>Destination: {plannedjourney.destination}</h3>
        <p>Description:  {plannedjourney.description}</p>
      </div>
    </div>
  );
}

export default PlannedJourneyDetail;