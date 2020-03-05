import React from "react";
import "./App.css";
import axios from "axios";

import AppContainer from "./AppContainer";
import styled from "styled-components";
import { useState, useEffect } from "react";
import bgImage from "./starry-sky.jpg";
import NeoApp from "./NeoApp";
// axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(response => {
//      console.log(response.data);
//     });

//styles

let ContainerAll = styled.div`
  background-image: url(${bgImage});
  padding-bottom: 2%;
`;

let StyledH1 = styled.h1`
  font-family: "Oxygen";
  font-size: 2rem;
  width: 50vw;
  color: cornflowerblue;
  margin: 0 auto 2%;
  padding: 2% 0;
  background-color: SeaShell;
  border: 3px inset PowderBlue;
`;
let CreditsStyle = styled.p`
  font-size: 0.5rem;
  font-family: "Monaco";
  background-color: SeaShell;
`;
let FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

//APP
function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=4nGv4LzKfyBkis8utldeK9CNmYOpdOtHOHHIxa41"
      )
      .then(response => {
        setData(response.data);
      });
  }, []);

  return (
    <div className="App">
      <ContainerAll>
        <StyledH1>Your Nasa APOD App</StyledH1>
        <FlexContainer>
          <AppContainer
            title={data.title}
            hdurl={data.hdurl}
            explanation={data.explanation}
            url={data.url}
            media_type={data.media_type}
          />
          <NeoApp />
        </FlexContainer>
        <CreditsStyle>
          Background image by{" "}
          <a href="https://pixabay.com/users/Hans-2/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1654074">
            Hans Braxmeier
          </a>{" "}
          from{" "}
          <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1654074">
            Pixabay
          </a>
        </CreditsStyle>
      </ContainerAll>
    </div>
  );
}

export default App;
