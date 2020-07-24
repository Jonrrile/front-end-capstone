import { Route } from "react-router-dom";
import React from "react";
import Home from './Home'
import WishJourneyList from './WishDestinations/WishJourneyList'
import WishJourneyDetail from './WishDestinations/WishJourneyDetail'
import WishJourneyForm from './WishDestinations/WishJourneyForm'

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
      return <WishJourneyList {...props}/>
      }} />
      <Route path="/wishlist/:wishjourneyId(\d+)" render={(props) => {
      return <WishJourneyDetail wishjourneyId={parseInt(props.match.params.wishjourneyId)}
      {...props}
      />
      }} />
      <Route path="/wishlist/new" render={(props) => {
        return <WishJourneyForm {...props} />
      }} />
      
    </React.Fragment>
  );
};

export default ApplicationViews;