import React, { useState } from 'react';
import WishJourneyManager from '../../modules/WishJourneyManager';

const WishJourneyForm = props => {
    const [wishjourney, setWishJourney] = useState({ destination: "", description: "", budget: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...wishjourney};
        stateToChange[evt.target.id] = evt.target.value;
        setWishJourney(stateToChange);
    };

    const constructNewJourney = evt => {
        evt.preventDefault();
        if (wishjourney.destination === "" || wishjourney.description === "" || wishjourney.budget === "") {
            window.alert("Please fill out all fields!");
        } else {
            setIsLoading(true);
            WishJourneyManager.post(wishjourney)
            .then(() => props.history.push("/wishlist"))
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

export default WishJourneyForm