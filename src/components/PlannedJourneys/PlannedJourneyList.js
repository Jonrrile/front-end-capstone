import React, { useState, useEffect } from 'react';
import PlannedJourneyCard from './PlannedJourneyCard';
import PlannedJourneyManager from '../../modules/PlannedJourneyManager'
import { Button, Container, CardColumns } from 'react-bootstrap';

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
           <div className="wish_list_header">
               <h1>Your Planned Journeys: 
                     <Button type="button"
                   variant="outline-primary"
                    onClick={() => { props.history.push("/plannedjourneys/new") }}>
                    Add to Plans!
                    </ Button>
                    </h1>
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
                    </div>
    );
};

export default PlannedJourneyList