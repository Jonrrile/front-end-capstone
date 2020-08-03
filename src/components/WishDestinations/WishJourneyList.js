import React, { useState, useEffect } from 'react';
import WishJourneyCard from './WishJourneyCard';
import WishJourneyManager from '../../modules/WishJourneyManager'
import { Button, Container,  CardColumns } from 'react-bootstrap'
import Map from '../Map/Map'





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
                 <div className="wish_list_header">
                     <h1>Your Wish List: <Button variant="outline-primary" type="button"
                    className="btn"
                    onClick={() => { props.history.push("/wishlist/new") }}>
                    Add to Wishlist!
                </ Button> </h1>
                <Map />
                 </div>
                
            <Container>
            <CardColumns>
                {wishjourneys.map(wishjourney => {
                   if (wishjourney.userId === parseInt(sessionStorage.getItem("activeUser"))) {
                    return (
                    <WishJourneyCard className="cards" key={wishjourney.id} wishjourney={wishjourney}
                        deleteJourney={deleteJourney}
                        {...props} />
                        
                         
                        )
                    }
                })}
            </CardColumns>
            </Container>
            </div>
        
    );
};

export default WishJourneyList