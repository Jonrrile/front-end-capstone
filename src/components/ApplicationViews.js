import { Route } from "react-router-dom";
import React from "react";
import Home from './Home'
import WishJourneyList from './WishDestinations/WishJourneyList'
import WishJourneyDetail from './WishDestinations/WishJourneyDetail'
import WishJourneyForm from './WishDestinations/WishJourneyForm'
import CompletedJourneyList from './CompletedJourneys/CompletedJourneyList'
import CompletedJourneyForm from './CompletedJourneys/CompletedJourneyForm'
import CompletedJourneyDetail from './CompletedJourneys/CompletedJourneyDetail'

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
       <Route
        exact
        path="/completedjourneys"
        render={props => {
          return <CompletedJourneyList />;
        }}
      /> 
      <Route path="/completedjourneys/:completedjourneyId(\d+)" render={(props) => {
      return <CompletedJourneyDetail completedjourneyId={parseInt(props.match.params.completedjourneyId)}
      {...props}
      />
      }} />
      <Route path="/completedjourneys/new" render={(props) => {
        return <CompletedJourneyForm {...props} />
      }} />
      
    </React.Fragment>
  );
};

export default ApplicationViews;