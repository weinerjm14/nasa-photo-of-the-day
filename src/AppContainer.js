import React from "react";
import styled from "styled-components";

let ContainerApp = styled.section`
    width: 50vw;
    height: auto;
    margin: 2% auto; 
    border: 3px inset royalblue;
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
    margin: 2% auto;
    
`;
const AppContainer = props => {
    
  return (
      
    <ContainerApp className="app_container">
      
      <ContainerTitle>{props.title}</ContainerTitle>
      <ImgStyled src={props.hdurl} alt={props.title}></ImgStyled>
      <StyledP>{props.explanation}</StyledP>
    </ContainerApp>
   
    
  );
};
export default AppContainer;
