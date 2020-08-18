import React, { useState, useEffect } from 'react';
import GalleryCard from './GalleryCard';
import GalleryManager from '../../modules/GalleryManager'
import { Button, Container, CardColumns, CardDeck, Card, CardGroup, Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer'


const GalleryList = (props) => {
    const [pictures, setPictures] = useState([]); 

    const getPictures = () => {
        return GalleryManager.getAll().then(picturesFromAPI => {
            setPictures(picturesFromAPI) //fetch call from API
        });
    };

    useEffect(() => {
        getPictures();  //look into effect more here
    }, []);

    const deletePicture = id => {
        GalleryManager.delete(id)
            .then(() => GalleryManager.getAll().then(setPictures));
    };

    return (
        <div>
           
            <Container>
                <CardColumns>
                {pictures.map(picture => 
                    <GalleryCard className="cards" key={picture.id} picture={picture}
                        deletePicture={deletePicture}
                        {...props} />
                        )
                    }
                
                      </CardColumns>
                      </Container>
                      <div className="wish_button"> 
                         <Button variant="outline-primary" type="button"
                    className="btn"
                    onClick={() => { props.history.push("/gallery/new") }}>
                   Add to Gallery 
                </ Button> 
                
                </div>
                     
                <Footer />
                    </div>
    );
};

export default GalleryList