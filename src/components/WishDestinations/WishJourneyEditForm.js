import React, { useState, useEffect } from "react";
import WishJourneyManager from "../../modules/WishJourneyManager";
import { Form, FormControl, FormGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const WishJourneyEditForm = props => {
    const [wishjourney, setWishJourney] = useState({ destination: "", description: "", budget: "", userId: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...wishjourney};
        stateToChange[evt.target.id] = evt.target.value;
        setWishJourney(stateToChange);
    };
    
    const updateExistingWishJourney = evt => {
        evt.preventDefault()
        setIsLoading(true);
    
        const editedWishJourney = {
            id: props.match.params.wishjourneyId,
            destination: wishjourney.destination,
            description: wishjourney.description,
            budget: wishjourney.budget,
            userId: wishjourney.userId
        };

        WishJourneyManager.update(editedWishJourney)
            .then(() => props.history.push("/wishlist"))
    }

    useEffect(() => {
        WishJourneyManager.get(props.match.params.wishjourneyId)
        .then(wishjourney => {
            setWishJourney(wishjourney);
            setIsLoading(false);
        });
    }, []);

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
          onClick={updateExistingWishJourney}
        >Edit</Button>
      </div>
  </form>
  </div>
  
);
};

export default WishJourneyEditForm