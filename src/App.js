import React from "react";
import "./App.css";
import axios from "axios";

import AppContainer from "./AppContainer";
import styled from "styled-components";
import { useState, useEffect } from "react";

// axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(response => {
//      console.log(response.data);
//     });

let StyledH1 = styled.h1 `
   font-family: "Oxygen";
   font-size: 2rem;
   color: cornflowerblue;
`;


function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=4nGv4LzKfyBkis8utldeK9CNmYOpdOtHOHHIxa41&date=2020-03-02").then(response => {
      setData(response.data);
    });
  }, []);
    
    return (
    
    <div className="App">

     
      <StyledH1>Your Nasa APOD And NEO APP</StyledH1>
      <AppContainer 
        title={data.title}
        hdurl={data.hdurl}
        explanation={data.explanation}
      />
     
    </div>
    )
    
 
}

    export default App;
