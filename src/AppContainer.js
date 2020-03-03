import React, { useState } from "react";

const AppContainer = props => {
    let [date, setDate]= useState('');
  return (
      
    <section className="app_container">
      
      <h2>{props.title} </h2>
      <img src={props.hdurl} alt={props.title} />
      <p>{props.explanation}</p>
      <section className='pick_date'>
        <p>See Another Day's APOC By Choosing A Date</p>
        <input type='date' required pattern="\d{4}-\d{2}-\d{2}"></input>
        <input type="submit"></input>
    </section>
    </section>
    
  );
};
export default AppContainer;
