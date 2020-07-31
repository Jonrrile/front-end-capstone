import React, { useState, useEffect } from "react"
import WishJourneyManager from "../../modules/WishJourneyManager"
import { Button } from 'react-bootstrap';

const WishJourneyEditForm = props => {
    const [wishjourney, setWishJourney] = useState({ destination: "", description: "", userId: "", date: "", budget: ""});
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
        date: wishjourney.date,
        budget: wishjourney.budget
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
                            value={wishjourney.destination}
                        />
                        
                        <label htmlFor="description">Description</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="description"
                            value={wishjourney.description}
                        />
                        <label htmlFor="description">Dates</label>

                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="date"
                            value={wishjourney.date}
                        />
                        <label htmlFor="description">Budget</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="date"
                            value={wishjourney.budget}
                        />
                        
                    </div>
                    <div className="alignRight">
                        <Button
                            type="button" disabled={isLoading}
                            onClick={updateExistingWishJourney}
                            className="btn btn-primary"
                        >Submit</Button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default WishJourneyEditForm