import React, { useState } from 'react';
import NavBar from "./components/Nav/NavBar"
import './App.css';
import ApplicationViews from './components/ApplicationViews'
import Footer from './components/Footer/Footer'




function App() {
  
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;



  //hasUser makes sure the crendentials has a value
  const [hasUser, setHasUser] = useState(isAuthenticated());

//Used to refresh in after login in Login.js
  const setUser = user => {
    setHasUser(isAuthenticated());
  };

//Logout function located in Navbar
  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }

  return (
    <div className="page-container">
      <div className="content-wrap">
        <NavBar hasUser={hasUser} clearUser={clearUser} />
        {/* <NavBar hasUser={hasUser} clearUser={clearUser} /> */}
        <ApplicationViews setHasUser={hasUser} setUser={setUser}/>
        </div>
        <Footer />
    


 
  
  
    </div>


  );
}

export default App;