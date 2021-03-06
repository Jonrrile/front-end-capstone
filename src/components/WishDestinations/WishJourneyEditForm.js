import React, { useState, useEffect } from "react"
import WishJourneyManager from "../../modules/WishJourneyManager"
import { Button, FormGroup } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap'
import TransferJourneyManager from '../../modules/TransferJourneyManager'


const WishJourneyEditForm = props => {
    const [wishjourney, setWishJourney] = useState({ destination: "", description: "", userId: "", date: "", url: "", budget: ""});
    const [isLoading, setIsLoading] = useState(false);
    
    const handleFieldChange = evt => {
        const stateToChange = { ...wishjourney };
        stateToChange[evt.target.id] = evt.target.value;
        setWishJourney(stateToChange);
    };

    const updateExistingWishJourney = evt => {
        evt.preventDefault()
        setIsLoading(true);

    // This is an edit, so we need the id
    const editedWishJourney = {
        id: props.match.params.wishjourneyId,
        destination: wishjourney.destination,
        description: wishjourney.description,
        userId: wishjourney.userId = parseInt(sessionStorage.getItem("activeUser")),
        url: wishjourney.url,
        date: wishjourney.date,
        budget: wishjourney.budget
    };

    WishJourneyManager.update(editedWishJourney)
        .then(() => props.history.push("/wishlist"))
    }

    const transferJourney = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const transferedJourney = {
            // id: props.match.params.plannedjourneyId,
            destination: wishjourney.destination,
            description: wishjourney.description,
            userId: wishjourney.userId = parseInt(sessionStorage.getItem("activeUser")),
            url: wishjourney.url,
            date: wishjourney.date,
            budget: wishjourney.budget
        };
        
        console.log(transferedJourney);
        TransferJourneyManager.post(transferedJourney)
        // .then(() => TransferJourneyManager.delete(transferedJourney))
        .then(() => props.history.push("/plannedjourneys"))
    
    }
    
        useEffect(() => {
        WishJourneyManager.get(props.match.params.wishjourneyId)
            .then(wishjourney => {
                setWishJourney(wishjourney);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="journey_form_container">
            <Form className="journey_form">
                <FormGroup>
                    <Form.Label>Destination</Form.Label>
                    <FormControl
                     type="text"
                     required
                     className="form-control"
                     onChange={handleFieldChange}
                     id="destination"
                     value={wishjourney.destination}
                     />
                    </FormGroup>
                    <FormGroup>
                     <Form.Label>Description</Form.Label>
                    <FormControl
                        
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="description"
                            value={wishjourney.description}
                        />
                        </FormGroup>
                        
                        <FormGroup>
                        <Form.Label>Budget</Form.Label>
                        <FormControl
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="budget"
                            value={wishjourney.budget}
                        />
                      
                        </FormGroup>
                        <Button
                            variant="outline-primary" 
                            type="button" disabled={isLoading}
                            onClick={updateExistingWishJourney}
                            
                        >Submit</Button>
                        <Button
                            variant="outline-primary" 
                            type="button" disabled={isLoading}
                            onClick={transferJourney}
                            >
                          
                        Move to Planned</Button>
                    </Form>
                
            </div>
        
    );
}

export default WishJourneyEditForm