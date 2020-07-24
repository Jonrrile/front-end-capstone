import React, { useState, useEffect } from 'react';
import WishJourneyCard from './WishJourneyCard';
import WishJourneyManager from '../../modules/WishJourneyManager'

const WishJourneyList = (props) => {
    const [wishjourneys, setWishJourneys] = useState([]); //initial declaration utilizing state for empty array
    console.log("why")
    const getWishJourneys = () => {
        return WishJourneyManager.getAll().then(wishjourneysFromAPI => {
            setWishJourneys(wishjourneysFromAPI) //fetch call from API
        });
    };
    console.log("test1")
    useEffect(() => {
        getWishJourneys();  //look into effect more here
    }, []);

    return (
        <div className="container-cards">
            {wishjourneys.map(wishjourney => 
            <WishJourneyCard key={wishjourney.id} wishjourney={wishjourney}
           destination={wishjourney.destination}
            {...props} />)}
        </div> //mapping my data and placing into cards for html representation
    );
};

export default WishJourneyList