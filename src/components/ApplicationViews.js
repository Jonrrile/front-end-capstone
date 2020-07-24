import { Route } from "react-router-dom";
import React from "react";
import Home from './Home'
import WishJourneyList from './WishDestinations/WishJourneyList'
import WishJourneyCard from "./WishDestinations/WishJourneyCard";


const ApplicationViews = (props) => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/home"
        render={props => {
          return <Home />;
        }}
      />
      <Route exact path="/wishlist" render={(props) => {
      return <WishJourneyList />
      }} />
      
    </React.Fragment>
  );
};

export default ApplicationViews;