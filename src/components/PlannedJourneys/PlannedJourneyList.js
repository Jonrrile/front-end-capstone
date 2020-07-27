import React, { useState, useEffect } from 'react';
import PlannedJourneyCard from './PlannedJourneyCard';
import PlannedJourneyManager from '../../modules/PlannedJourneyManager'

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
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/plannedjourneys/new") }}>
                    Add to Plans!
  </button>
            </section>
            <div className="container">
                {plannedjourneys.map(plannedjourney =>
                    <PlannedJourneyCard className="cards" key={plannedjourney.id} plannedjourney={plannedjourney}
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

export default PlannedJourneyList