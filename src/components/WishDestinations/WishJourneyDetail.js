import React, { useState, useEffect } from 'react';
import WishJourneyManager from '../../modules/WishJourneyManager';


const WishJourneyDetail = props => {
  const [wishjourney, setWishJourney] = useState({ destination: "", description: "", budget: "" });

  useEffect(() => {
    //get(id) from WishJourneyManager and hang on to the data; put it into state
    WishJourneyManager.get(props.wishjourneyId)
      .then(wishjourney => {
        setWishJourney({
          destination: wishjourney.destination,
          description: wishjourney.description,
          budget: wishjourney.budget
        });
      });
  }, [props.wishjourneyId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>Destination: {wishjourney.destination}</h3>
        <p>Description:  {wishjourney.description}</p>
        <p>Budget Needed: {wishjourney.budget}</p>
      </div>
    </div>
  );
}

export default WishJourneyDetail;