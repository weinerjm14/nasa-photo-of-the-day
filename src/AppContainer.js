import React from "react";
import styled from "styled-components";
// import BbImage from "./milky-way.jpg"
let ContainerApp = styled.section`
    width: 50vw;
    height: auto;
    margin: 2% auto; 
    border: 3px inset royalblue;
    background-color: SeaShell;
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
const AppContainer = props => {
    
  return (
      
    <ContainerApp className="app_container">
      
      <ContainerTitle>{props.title}</ContainerTitle>
      
      {props.media_type === "image" ? (
        <ImgStyled src={props.hdurl} alt={props.title}></ImgStyled>
       ) : (<
        VideoStyle 
      src={props.url} title={props.title} />
            
       )}
      
      
      <StyledP>{props.explanation}</StyledP>
    </ContainerApp>
   
    
  );
};
export default AppContainer;
