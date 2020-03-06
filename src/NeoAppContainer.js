import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// import BbImage from "./milky-way.jpg"

//styles
let ContainerApp = styled.section`
  width: 40vw;
  height: auto;
  border: 3px inset PowderBlue;
  background-color: SeaShell;
  padding-bottom: 2%;
  // margin: 0 auto;
`;
let ContainerTitle = styled.h2`
  font-family: "Oxygen";
  font-size: 1.6rem;
  color: cornflowerblue;
`;
let ImgStyled = styled.img`
  width: 30vw;
  height: auto;
  border: 3px inset cyan;
`;
let StyledP = styled.p`
  font-family: "Roboto";
  width: 75%;
  margin: 3% auto;
`;
let VideoStyle = styled.iframe`
  width: 560px;
  height: 315px;
  border: 3px inset cyan;
`;
let StyledH2 = styled.h2`
  font-family: "Oxygen";
  font-size: 1.8rem;
  color: cornflowerblue;
  text-decoration: underline;
`;

//Component
const NeoAppContainer = props => {
  let [newDate, setNewDate] = useState("2020-01-30");
  let [data, setData] = useState([]);
  // console.log( document.getElementById("newdate").value);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=4nGv4LzKfyBkis8utldeK9CNmYOpdOtHOHHIxa41&date=${newDate}`
      )
      .then(response => {
        setData(response.data);
        
      })
      .then(error => {
        console.log(error);
      });
  }, []);

  return (
    <ContainerApp className="app_container">
      <StyledH2>Pick Another Date To See</StyledH2>
      <form>
        <label for="newdate">Date To See: </label>
        <input type="date" id="newdate" name="new-date"></input>
      </form>
      { 
      document.getElementById("newdate").addEventListener("change", event => {
            setNewDate(Date.parse(document.getElementById("newdate").value))})
      }
      <ContainerTitle>{props.title}</ContainerTitle>

      {props.media_type === "image" ? (
        <ImgStyled src={props.hdurl} alt={props.title}></ImgStyled>
      ) : (
        <VideoStyle src={props.url} title={props.title} />
      )}

      <StyledP>{props.explanation}</StyledP>
    </ContainerApp>
  );
};

export default NeoAppContainer;
