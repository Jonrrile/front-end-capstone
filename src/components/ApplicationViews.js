import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from './Home'
import WishJourneyList from './WishDestinations/WishJourneyList'
import WishJourneyForm from './WishDestinations/WishJourneyForm'
import CompletedJourneyList from './CompletedJourneys/CompletedJourneyList'
import CompletedJourneyForm from './CompletedJourneys/CompletedJourneyForm'
import CompletedJourneyEditForm from './CompletedJourneys/CompletedJourneyEditForm'
import PlannedJourneyList from './PlannedJourneys/PlannedJourneyList'
import PlannedJourneyForm from './PlannedJourneys/PlannedJourneyForm'
import Login from "./Login/Login"
import Register from "./Login/Register"
import WishJourneyEditForm from "./WishDestinations/WishJourneyEditForm"
import PlannedJourneyEditForm from "./PlannedJourneys/PlannedJourneyEditForm"
import BlogList from "./Blog/BlogList"
import BlogForm from "./Blog/BlogForm"
import GalleryList from "./Gallery/GalleryList"
import GalleryForm from "./Gallery/GalleryForm"
import BlogEditForm from "./Blog/BlogEditForm"
//const hasUser = () => sessionStorage.getItem("credentials") !== null;

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  return (
    <React.Fragment>
      
      <Route
        exact path="/"
        render={props => {
          if (hasUser) {
            return <Home {...props}
            />
          }
          else {
            return <Redirect to="/login" />
          }
        }} />
      <Route path="/login" render={props => {
        return <Login setUser={setUser} {...props} />
      }} />
      <Route path="/register" render={props => {
        return <Register setUser={setUser} {...props} />
      }} />
        <Route
        exact
        path="/home"
        render={(props) => {
          
          return <Home {...props}/>
        
    }}
      /> 
    
      <Route exact path="/wishlist" render={(props) => {
      return <WishJourneyList {...props}/>
      
    }} />
      
      <Route path="/wishlist/new" render={(props) => {
        return <WishJourneyForm {...props} />
      }} />
      <Route
        path="/wishlist/:wishjourneyId(\d+)/edit"
        render={props => {
            return <WishJourneyEditForm {...props} />
        }} />
       <Route
        exact
        path="/completedjourneys"
        render={(props) => {
        
          return <CompletedJourneyList {...props} />;
      }}/> 
      
      <Route path="/completedjourneys/new" render={(props) => {
        return <CompletedJourneyForm {...props} />
      }} />
      <Route
        path="/completedjourneys/:completedjourneyId(\d+)/edit"
        render={props => {
            return <CompletedJourneyEditForm {...props} />
        }} />
       <Route
        exact
        path="/plannedjourneys"
        render={(props) => {
            return <PlannedJourneyList {...props} />
        }}
      /> 
    
      <Route path="/plannedjourneys/new" render={(props) => {
        return <PlannedJourneyForm {...props} />
      }} />
      <Route
        path="/plannedjourneys/:plannedjourneyId(\d+)/edit"
        render={props => {
            return <PlannedJourneyEditForm {...props} />
          
          
        }} />
        <Route
        exact path="/blog"
        render={props => {
          
            return <BlogList {...props}
            />
        }} />
      <Route path="/blogs/new" render={(props) => {
        return <BlogForm {...props} />
      }} />
       <Route
        path="/blogs/:blogId(\d+)/edit"
        render={props => {
            return <BlogEditForm {...props} />
          
          
        }} />
      <Route exact path="/gallery" render={(props) => {
        return <GalleryList {...props} />

      }} />
       <Route path="/pictures/new" render={(props) => {
        return <GalleryForm {...props} />
      }} />
      
  
      
    </React.Fragment>
  );
};

export default ApplicationViews;