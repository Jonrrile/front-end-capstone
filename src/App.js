import React from 'react';
import NavBar from "./components/Nav/NavBar"
import './App.css';
import ApplicationViews from './components/ApplicationViews'
import Footer from './components/Footer/Footer'




function App() {
  // const clearUser = () => {
  //   sessionStorage.clear();
  //   setHasUser(isAuthenticated());
  // }

  return (
    <div className="page-container">
      <div className="content-wrap">
        <NavBar />
        {/* <NavBar hasUser={hasUser} clearUser={clearUser} /> */}
        <ApplicationViews />
        </div>
        <Footer />
    


 
  
  
    </div>


  );
}

export default App;