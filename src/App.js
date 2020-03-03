import React from "react";
import "./App.css";
import axios from "axios";

import AppContainer from "./AppContainer";
import data from "./dummydata"
// axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(response => {
//      console.log(response.data);
//     });
function App() {
  return (
    <div className="App">
      
      <h1>Your Nasa APOD APP</h1>
      <AppContainer 
      title = {data.title}
      hdrul = {data.hdurl}
      />
    </div>
      
  );
}

export default App;
