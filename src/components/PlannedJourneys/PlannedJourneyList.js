import React, { useState, useEffect } from 'react';
import PlannedJourneyCard from './PlannedJourneyCard';
import PlannedJourneyManager from '../../modules/PlannedJourneyManager'
import { Button, Container, CardColumns } from 'react-bootstrap';
import SimpleMap from '../Map/Map'
import Footer from '../Footer/Footer'

const PlannedJourneyList = (props) => {
    const [plannedjourneys, setPlannedJourneys] = useState([]); //initial declaration utilizing state for empty array

    const getPlannedJourneys = () => {
        return PlannedJourneyManager.getAll().then(plannedjourneysFromAPI => {
            setPlannedJourneys(plannedjourneysFromAPI) //fetch call from API
        });
    };

    useEffect(() => {
        getPlannedJourneys();  //look into effect more here
    }, []);

    const deleteJourney = id => {
        PlannedJourneyManager.delete(id)
            .then(() => PlannedJourneyManager.getAll().then(setPlannedJourneys));
    };

    return (
        <div>
           <div>
                 <div className="wish_list_header">
                     <h3>Current Planned Journeys: </h3>
                     </div>
                     <div className="wish_button"> 
                         <Button variant="outline-primary" type="button"
                    className="btn"
                    onClick={() => { props.history.push("/plannedjourneys/new") }}>
                    Add to Plans!
                </ Button> 
                </div>
                 </div>
    
            <Container>
                <CardColumns>
                {plannedjourneys.map(plannedjourney => {
                if (plannedjourney.userId === parseInt(sessionStorage.getItem("activeUser"))) {
                    return (
                    <PlannedJourneyCard className="cards" key={plannedjourney.id} plannedjourney={plannedjourney}
                        deleteJourney={deleteJourney}
                        {...props} />
                        )
                    }
                })}
                      </CardColumns>
                      </Container>
                      <Container>
                <SimpleMap />
                </Container>
                <Footer />
                    </div>
    );
};

export default PlannedJourneyList