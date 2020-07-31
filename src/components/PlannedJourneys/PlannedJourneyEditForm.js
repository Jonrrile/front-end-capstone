import React, { useState, useEffect } from "react"
import PlannedJourneyManager from "../../modules/PlannedJourneyManager"

const PlannedJourneyEditForm = props => {
    const [plannedjourney, setPlannedJourney] = useState({ destination: "", description: ""});
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
                        

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="destination"
                            value={plannedjourney.destination}
                        />
                        <label htmlFor="destination">Journey destination</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="description"
                            value={plannedjourney.description}
                        />
                        <label htmlFor="description">Description</label>

                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingPlannedJourney}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default PlannedJourneyEditForm