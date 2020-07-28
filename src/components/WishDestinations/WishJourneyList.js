import React, { useState, useEffect } from 'react';
import WishJourneyCard from './WishJourneyCard';
import WishJourneyManager from '../../modules/WishJourneyManager'

const WishJourneyList = (props) => {
    const [wishjourneys, setWishJourneys] = useState([]); //initial declaration utilizing state for empty array

    const getWishJourneys = () => {
        return WishJourneyManager.getAll().then(wishjourneysFromAPI => {
            setWishJourneys(wishjourneysFromAPI) //fetch call from API
        });
    };

    useEffect(() => {
        getWishJourneys();  //look into effect more here
    }, []);

    const deleteJourney = id => {
        WishJourneyManager.delete(id)
            .then(() => WishJourneyManager.getAll().then(setWishJourneys));
    };

    return (
        <div>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/wishlist/new") }}>
                    Add to Wishlist!
  </button>
            </section>
            <div className="container">
                {wishjourneys.map(wishjourney =>
                    <WishJourneyCard className="cards" key={wishjourney.id} wishjourney={wishjourney}
                        deleteJourney={deleteJourney}
                        {...props} />)}
            </div>
        
        </div>
    );
};

export default WishJourneyList