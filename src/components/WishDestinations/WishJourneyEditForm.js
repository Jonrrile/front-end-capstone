import React, { useState, useEffect } from "react"
import WishJourneyManager from "../../modules/WishJourneyManager"
import { Button } from 'react-bootstrap';

const WishJourneyEditForm = props => {
    const [wishjourney, setWishJourney] = useState({ destination: "", description: "", userId: "", url: "", budget: ""});
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
        budget: wishjourney.budget
    };

    WishJourneyManager.update(editedWishJourney)
        .then(() => props.history.push("/wishlist"))
    }

    const transferJourney = evt => {
        evt.preventDefault()
        setIsLoading(true);

    // This is an edit, so we need the id
    const transferedWishJourney = {
        id: props.match.params.wishjourneyId,
        destination: wishjourney.destination,
        description: wishjourney.description,
        userId: wishjourney.userId = parseInt(sessionStorage.getItem("activeUser")),
        url: wishjourney.url,
        budget: wishjourney.budget
    };

    WishJourneyManager.post(transferedWishJourney)
        .then(() => props.history.push("/plannedjourneys"))
        // .then(() => WishJourneyManager.delete(evt)
        // .then(() => WishJourneyManager.getAll().then(setWishJourney)))
        //trying to get it to delete it from the wishlist after sending to planned.
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
                        <label htmlFor="description">Budget</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="budget"
                            value={wishjourney.budget}
                        />
                        
                    </div>
                    <div className="alignRight">
                        <Button
                            type="button" disabled={isLoading}
                            onClick={updateExistingWishJourney}
                            className="btn btn-primary"
                        >Submit</Button>
                        <Button
                            type="button" disabled={isLoading}
                            onClick={transferJourney}
                            className="btn btn-primary"
                        >Move to Planned</Button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default WishJourneyEditForm