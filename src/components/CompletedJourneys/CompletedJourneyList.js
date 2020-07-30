import React, { useState, useEffect } from 'react';
import CompletedJourneyCard from './CompletedJourneyCard';
import CompletedJourneyManager from '../../modules/CompletedJourneyManager'
import { Button } from 'react-bootstrap';

const CompletedJourneyList = (props) => {
    const [completedjourneys, setCompletedJourneys] = useState([]); //initial declaration utilizing state for empty array

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
            <section className="section-content">
                <Button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/completedjourneys/new") }}>
                    Add a Journey
  </Button>
            </section>
            <div className="container">
                {completedjourneys.map(completedjourney => {
                    if (completedjourney.userId === parseInt(sessionStorage.getItem("activeUser"))) {
                    return (
                    <CompletedJourneyCard className="cards" key={completedjourney.id} completedjourney={completedjourney}
                        deleteJourney={deleteJourney}
                        {...props} />
                        )
                    }
                })}
        
            </div>
        </div>
        </div>
    );
};

export default CompletedJourneyList