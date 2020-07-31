import React, { useState, useEffect } from "react"
import CompletedJourneyManager from "../../modules/CompletedJourneyManager"
import { Button } from 'react-bootstrap';

const CompletedJourneyEditForm = props => {
    const [completedjourney, setCompletedJourney] = useState({ destination: "", description: "", userId: "", date: "", budget: ""});
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
        id: props.match.params.completedjourneyid,
        destination: completedjourney.destination,
        description: completedjourney.description,
        userId: completedjourney.userId = parseInt(sessionStorage.getItem("activeUser")),
        date: completedjourney.date,
        budget: completedjourney.budget
    };

    CompletedJourneyManager.update(editedCompletedJourney)
        .then(() => props.history.push("/completedjourneys"))
    }

    useEffect(() => {
        CompletedJourneyManager.get(props.match.params.completedjourneyid)
            .then(completedjourney => {
                setCompletedJourney(completedjourney);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        
                    <label htmlFor="destination">Journey destination</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="destination"
                            value={completedjourney.destination}
                        />
                        
                        <label htmlFor="description">Description</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="description"
                            value={completedjourney.description}
                        />
                        <label htmlFor="description">Dates</label>

                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="date"
                            value={completedjourney.date}
                        />
                        
                    </div>
                    <div className="alignRight">
                        <Button
                            type="button" disabled={isLoading}
                            onClick={updateExistingCompletedJourney}
                            className="btn btn-primary"
                        >Submit</Button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default CompletedJourneyEditForm