import React, { useState, useEffect } from "react"
import CompletedJourneyManager from "../../modules/CompletedJourneyManager"
import { Button, FormGroup, Form, FormControl } from 'react-bootstrap';

const CompletedJourneyEditForm = props => {
    const [completedjourney, setCompletedJourney] = useState({ destination: "", description: "", userId: "", date: "", url: ""});
    const [isLoading, setIsLoading] = useState(false);
    
    const handleFieldChange = evt => {
        const stateToChange = { ...completedjourney };
        stateToChange[evt.target.id] = evt.target.value;
        setCompletedJourney(stateToChange);
    };

    const updateExistingCompletedJourney = evt => {
        evt.preventDefault()
        setIsLoading(true);

    // This is an edit, so we need the id
    const editedCompletedJourney = {
        id: props.match.params.completedjourneyId,
        destination: completedjourney.destination,
        description: completedjourney.description,
        userId: completedjourney.userId = parseInt(sessionStorage.getItem("activeUser")),
        date: completedjourney.date,
        url: completedjourney.url
    };

    CompletedJourneyManager.update(editedCompletedJourney)
        .then(() => props.history.push("/completedjourneys"))
    }

    useEffect(() => {
        CompletedJourneyManager.get(props.match.params.completedjourneyId)
            .then(completedjourney => {
                setCompletedJourney(completedjourney);
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
                 value={completedjourney.destination}
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
                        value={completedjourney.description}
                    />
                    </FormGroup>
                    <FormGroup>
                    <Form.Label>Date</Form.Label>
                    <FormControl
                        type="date"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="date"
                        value={completedjourney.date}
                    />
                    </FormGroup>
                    <Button
                        variant="outline-primary" 
                        type="button" disabled={isLoading}
                        onClick={updateExistingCompletedJourney}
                        
                    >Submit</Button>
                </Form>
            
        </div>
    
    );
}

export default CompletedJourneyEditForm