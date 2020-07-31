import React, { useState, useEffect } from "react"
import PlannedJourneyManager from "../../modules/PlannedJourneyManager"
import { Button } from 'react-bootstrap';

const PlannedJourneyEditForm = props => {
    const [plannedjourney, setPlannedJourney] = useState({ destination: "", description: "", userId: "", date: "", budget: ""});
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
        date: plannedjourney.date,
        budget: plannedjourney.budget
    };

    PlannedJourneyManager.update(editedPlannedJourney)
        .then(() => props.history.push("/plannedjourneys"))
    }

    useEffect(() => {
        PlannedJourneyManager.get(props.match.params.plannedjourneyId)
            .then(plannedjourney => {
                setPlannedJourney(plannedjourney);
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
                            value={plannedjourney.destination}
                        />
                        
                        <label htmlFor="description">Description</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="description"
                            value={plannedjourney.description}
                        />
                        <label htmlFor="description">Dates</label>

                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="date"
                            value={plannedjourney.date}
                        />
                        <label htmlFor="description">Budget</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="date"
                            value={plannedjourney.budget}
                        />
                        
                    </div>
                    <div className="alignRight">
                        <Button
                            type="button" disabled={isLoading}
                            onClick={updateExistingPlannedJourney}
                            className="btn btn-primary"
                        >Submit</Button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default PlannedJourneyEditForm