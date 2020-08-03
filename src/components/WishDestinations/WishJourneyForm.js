import React, { useState } from 'react';
import WishJourneyManager from '../../modules/WishJourneyManager';
import { Button, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup, FormControl, FormFile } from 'react-bootstrap';

const WishJourneyForm = props => {
    const [wishjourney, setWishJourney] = useState({ destination: "", description: "", budget: "", url: "", userId: "", date: ""});
    const [isLoading, setIsLoading] = useState(false);
    wishjourney.userId = parseInt(sessionStorage.getItem("activeUser"))
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
      <div className="journey_form_container">
     <Form className="journey_form">
    <FormGroup>
      <Form.Label>Destination</Form.Label>
        <FormControl
          type="text"
          required
          onChange={handleFieldChange}
          id="destination"
          placeholder="Desired Destination"
        />
        </FormGroup>
        <FormGroup>
        <Form.Label>Description</Form.Label>
        <FormControl
          as="textarea"
          rows="3"
          required
          onChange={handleFieldChange}
          id="description"
          placeholder="Description or Itinerary"
        />
        </FormGroup>
        <FormGroup>
        <Form.Label>Expected Budget</Form.Label>
        <FormControl
          type="text"
          required
          onChange={handleFieldChange}
          id="budget"
          placeholder="Expected Budget"
        />
        </FormGroup>
        <FormGroup>
        <Form.Label>Wishlist Picture</Form.Label>
        <FormControl
          type="text"
          required
          onChange={handleFieldChange}
          id="url"
          placeholder="Choose Image"
        />
        </FormGroup>
        <Button
          variant="outline-primary"
          type="submit"
          disabled={isLoading}
          onClick={constructNewJourney}
        >Add to Wishlist
        </Button>
      </Form>
      </div>
  
);
};

export default WishJourneyForm