import React, { useState, useEffect } from 'react';
import WishJourneyCard from './WishJourneyCard';
import WishJourneyManager from '../../modules/WishJourneyManager'
import { Button, Container } from 'react-bootstrap'




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
                 
            
                <Button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/wishlist/new") }}>
                    Add to Wishlist!
                </ Button>
                
            
            <Container>
                {wishjourneys.map(wishjourney => {
                   if (wishjourney.userId === parseInt(sessionStorage.getItem("activeUser"))) {
                    return (
                    <WishJourneyCard className="cards" key={wishjourney.id} wishjourney={wishjourney}
                        deleteJourney={deleteJourney}
                        {...props} />
                        
                         
                        )
                    }
                })}
            </Container>
        
        </div>
    );
};

export default WishJourneyList