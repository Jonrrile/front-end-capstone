import React, { useState, useEffect } from 'react';
import CompletedJourneyCard from './CompletedJourneyCard';
import CompletedJourneyManager from '../../modules/CompletedJourneyManager'
import { Button, Container, CardColumns } from 'react-bootstrap';

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
           <div className="wish_list_header">
               <h1>Your Completed Journeys: 
                     <Button type="button"
                   variant="outline-primary"
                    onClick={() => { props.history.push("/completedjourneys/new") }}>
                    Add to Plans!
                    </ Button>
                    </h1>
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
                    </div>
    );
};

export default CompletedJourneyList