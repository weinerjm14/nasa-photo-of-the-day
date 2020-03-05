import React from "react";
import styled from "styled-components";
// import BbImage from "./milky-way.jpg"

//styles
let ContainerApp = styled.section`
    width: 50vw;
    height: auto;
    border: 3px inset PowderBlue;
    background-color: SeaShell;
    padding-bottom: 2%;
    margin: 0 auto;
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
let CreditsStyle = styled.p `
  font-size: .5rem;
  font-family: "Monaco";
`;


//Component
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
      <CreditsStyle>Background image by <a href="https://pixabay.com/users/Hans-2/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1654074">Hans Braxmeier</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1654074">Pixabay</a></CreditsStyle>
    </ContainerApp>
   
    
  );
};

export default AppContainer;
