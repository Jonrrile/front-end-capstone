import React, { useState } from 'react';
import CompletedJourneyManager from '../../modules/CompletedJourneyManager';
import { Form, FormGroup, FormControl, FormContent, FormFile } from "react-bootstrap";
import { Button } from "react-bootstrap";

const CompletedJourneyForm = props => {
    const [completedjourney, setCompletedJourney] = useState({ destination: "", url: "",description: "", date: "", userId: ""});
    const [isLoading, setIsLoading] = useState(false);
    // const [image, setImage] = useState('')
    // const [loading, setLoading] = useState(false)

    // const uploadImage = async e => {
    //   const files = e.target.files
    //   const data = new FormData()
    //   data.append('file', files[0])
    //   data.append('upload_present', 'jonrrile')
    //   setLoading(true)
    //   const res = await fetch (
    //     '	https://api.cloudinary.com/v1_1/jonrrile',
    //     {
    //       method: 'POST',
    //       body: data
    //     }
    //   )
    //   const file = await res.json()

    //   setImage(file.secure_url)
    //   setCompletedJourney({...completedjourney, url: file.secure_url})
    //   CompletedJourneyManager.getAll()
    //   setLoading(false)
    // }
    completedjourney.userId = parseInt(sessionStorage.getItem("activeUser"))
    
    const handleFieldChange = evt => {
        const stateToChange = { ...completedjourney};
        stateToChange[evt.target.id] = evt.target.value;
        setCompletedJourney(stateToChange);
    };

    const constructNewJourney = evt => {
        evt.preventDefault();
        if (completedjourney.destination === "" || completedjourney.description === "" || completedjourney.date === "") {
            window.alert("Please fill out all fields!");
        } else {
            setIsLoading(true);
            CompletedJourneyManager.post(completedjourney)
            .then(() => props.history.push("/completedjourneys"))
        }

    };

    return (
          <div>
         <form>
        <FormGroup>
          <label htmlFor="destination">Destination</label>
            <FormControl
              type="text"
              required
              onChange={handleFieldChange}
              id="destination"
              placeholder="Desired Destination"
            />
            </FormGroup>
            <FormGroup>
            <label htmlFor="description">Description</label>
            <FormControl
              type="text"
              required
              onChange={handleFieldChange}
              id="description"
              placeholder="Description or Itinerary"
            />
            </FormGroup>
            <FormGroup>
            <label htmlFor="date">Dates Traveled</label>
            <FormControl
              type="date"
              required
              onChange={handleFieldChange}
              id="date"
              placeholder="Dates Traveled"
            />
            </FormGroup>
              <input type="text"
              name="url"
              id="url"
              placeholder="Destination Photo URL"
              onChange={handleFieldChange}
              />
              {/* {loading ? (
              <h3>Loading...</h3>
              ) : (
                <img src={image} />
              )} */}
          <div className="alignRight">
            <Button
              type="button"
              disabled={isLoading}
              onClick={constructNewJourney}
            >Add to Completed Journeys</Button>
          </div>
      </form>
      </div>
      
    );
};

export default CompletedJourneyForm