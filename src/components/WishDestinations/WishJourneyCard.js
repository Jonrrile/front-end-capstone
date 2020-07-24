import React from "react";
import { Link } from "react-router-dom"


const WishJourneyCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Destination: {props.wishjourney.destination}</h3>
                <h3>Description: {props.wishjourney.description}</h3>
                <h3>Budget: {props.wishjourney.budget}</h3>
                <Link to={`/wishlist/${props.wishjourney.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button" onClick={() => props.deleteJourney(props.wishjourney.id)}>Delete</button>
                
            </div>
        </div>
    )
}

export default WishJourneyCard