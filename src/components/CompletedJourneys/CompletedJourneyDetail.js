import React, { useState, useEffect } from 'react';
import CompletedJourneyManager from '../../modules/CompletedJourneyManager';


const CompletedJourneyDetail = props => {
  const [completedjourney, setCompletedJourney] = useState({ destination: "", description: "", budget: "", img: "" });

  useEffect(() => {
    //get(id) from CompletedJourneyManager and hang on to the data; put it into state
    CompletedJourneyManager.get(props.completedjourneyId)
      .then(completedjourney => {
        setCompletedJourney({
          destination: completedjourney.destination,
          description: completedjourney.description,
          budget: completedjourney.budget,
          img: completedjourney.img
        });
      });
  }, [props.completedjourneyId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>Destination: {completedjourney.destination}</h3>
        <p>Description:  {completedjourney.description}</p>
        <p>Budget: {completedjourney.budget}</p>
      </div>
    </div>
  );
}

export default CompletedJourneyDetail;