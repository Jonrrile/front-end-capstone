import React, { useState, useEffect } from 'react';
import CompletedJourneyCard from './CompletedJourneyCard';
import CompletedJourneyManager from '../../modules/CompletedJourneyManager'

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
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/completedjourneys/new") }}>
                    Add to Plans!
  </button>
            </section>
            <div className="container">
                {completedjourneys.map(completedjourney =>
                    <CompletedJourneyCard className="cards" key={completedjourney.id} completedjourney={completedjourney}
                        deleteJourney={deleteJourney}
                        {...props} />)}
        
            </div>
            {/* <iframe
        width="450"
        height="250"
        frameBorder="0" 
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBTTF5EV5xKOas6sp5POi7JdWf3BlKCeyU&q=Nashville+Tennessee" allowFullScreen>
      </iframe> */}
        </div>
    );
};

export default CompletedJourneyList