import React, { useState, useEffect } from "react"
import PlannedJourneyManager from "../../modules/PlannedJourneyManager"
import { Button, FormGroup } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap'
import TransferPlannedManager from '../../modules/TransferPlannedManager'


const PlannedJourneyEditForm = props => {
    const [plannedjourney, setPlannedJourney] = useState({ destination: "", description: "", userId: "", date: "", url: "", budget: ""});
    const [isLoading, setIsLoading] = useState(false);
    
    const handleFieldChange = evt => {
        const stateToChange = { ...plannedjourney };
        stateToChange[evt.target.id] = evt.target.value;
        setPlannedJourney(stateToChange);
    };

    const updateExistingPlannedJourney = evt => {
        evt.preventDefault()
        setIsLoading(true);

    // This is an edit, so we need the id
    const editedPlannedJourney = {
        id: props.match.params.plannedjourneyId,
        destination: plannedjourney.destination,
        description: plannedjourney.description,
        userId: plannedjourney.userId = parseInt(sessionStorage.getItem("activeUser")),
        url: plannedjourney.url,
        date: plannedjourney.date,
        budget: plannedjourney.budget
    };

    PlannedJourneyManager.update(editedPlannedJourney)
        .then(() => props.history.push("/plannedjourneys"))
    }

    const transferJourney = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const transferedPlannedJourney = {
            id: props.match.params.plannedjourneyId,
            destination: plannedjourney.destination,
            description: plannedjourney.description,
            userId: plannedjourney.userId = parseInt(sessionStorage.getItem("activeUser")),
            url: plannedjourney.url,
            date: plannedjourney.date,
            budget: plannedjourney.budget
        };
    
        TransferPlannedManager.post(transferedPlannedJourney)
        .then(() => props.history.push("/completedjourneys"))
    
    }
    
        useEffect(() => {
        PlannedJourneyManager.get(props.match.params.plannedjourneyId)
            .then(plannedjourney => {
                setPlannedJourney(plannedjourney);
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
                     value={plannedjourney.destination}
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
                            value={plannedjourney.description}
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
                            value={plannedjourney.budget}
                        />
                        </FormGroup>
                        <Button
                            variant="outline-primary" 
                            type="button" disabled={isLoading}
                            onClick={updateExistingPlannedJourney}
                            
                        >Submit</Button>
                        <Button
                            variant="outline-primary" 
                            type="button" disabled={isLoading}
                            onClick={transferJourney}
                          
                        >Move to Completed</Button>
                    </Form>
                
            </div>
        
    );
}

export default PlannedJourneyEditForm