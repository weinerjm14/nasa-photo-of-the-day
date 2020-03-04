import React from "react";
import "./App.css";
import axios from "axios";

import AppContainer from "./AppContainer";
import NeoApp from './NeoApp';
import { useState, useEffect } from "react";

// axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(response => {
//      console.log(response.data);
//     });
function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-03-02").then(response => {
      setData(response.data);
    });
  }, []);
    
    return (
    
    <div className="App">

     
      <h1>Your Nasa APOD And NEO APP</h1>
      <AppContainer 
        title={data.title}
        hdurl={data.hdurl}
        explanation={data.explanation}
      />
    </div>
    )
    
 
}

    export default App;
