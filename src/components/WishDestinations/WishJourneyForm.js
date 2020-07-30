import React, { useState } from 'react';
import WishJourneyManager from '../../modules/WishJourneyManager';
import { Form, FormControl, FormGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const WishJourneyForm = props => {
    const [wishjourney, setWishJourney] = useState({ destination: "", description: "", budget: "", userId:""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...wishjourney};
        stateToChange[evt.target.id] = evt.target.value;
        setWishJourney(stateToChange);
    };
    wishjourney.userId = sessionStorage.getItem("activeUser")
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
        >Add to Wish List</Button>
      </div>
  </form>
  </div>
  
);
};

export default WishJourneyForm