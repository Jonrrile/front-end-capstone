import React from 'react';
import NavBar from "./components/Nav/NavBar"
import './App.css';
import ApplicationViews from './components/ApplicationViews'



function App() {
  // const clearUser = () => {
  //   sessionStorage.clear();
  //   setHasUser(isAuthenticated());
  // }

  return (
    <div className="App">
      <NavBar />
      {/* <NavBar hasUser={hasUser} clearUser={clearUser} /> */}
      <ApplicationViews />




    </div>


  );
}

export default App;