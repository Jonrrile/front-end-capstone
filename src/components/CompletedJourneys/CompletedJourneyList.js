import React, { useState, useEffect } from 'react';
import CompletedJourneyCard from './CompletedJourneyCard';
import CompletedJourneyManager from '../../modules/CompletedJourneyManager'
import { Button, Container, CardColumns } from 'react-bootstrap';
import SimpleMap from '../Map/Map'
const CompletedJourneyList = (props) => {
    const [completedjourneys, setCompletedJourneys] = useState([]); 

    const getCompletedJourneys = () => {
        return CompletedJourneyManager.getAll().then(completedjourneysFromAPI => {
            setCompletedJourneys(completedjourneysFromAPI) //fetch call from API
        });
    };

    useEffect(() => {
        getCompletedJourneys();  //look into effect more here
    }, []);

    const deleteJourney = id => {
        CompletedJourneyManager.delete(id)
            .then(() => CompletedJourneyManager.getAll().then(setCompletedJourneys));
    };

    return (
        <div>
           <div>
                 <div className="wish_list_header">
                     <h3>Completed Journeys: </h3>
                     </div>
                     <div className="wish_button"> 
                         <Button variant="outline-primary" type="button"
                    className="btn"
                    onClick={() => { props.history.push("/completedjourneys/new") }}>
                    Document a Journey!
                </ Button> 
                </div>
                 </div>
    
            <Container>
                <CardColumns>
                {completedjourneys.map(completedjourney => {
                if (completedjourney.userId === parseInt(sessionStorage.getItem("activeUser"))) {
                    return (
                    <CompletedJourneyCard className="cards" key={completedjourney.id} completedjourney={completedjourney}
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
                    </div>
    );
};

export default CompletedJourneyList