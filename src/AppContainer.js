import React from "react";

const AppContainer = (props) => {
    return (
        <section className="app_container">
        <h2>{props.title} </h2>
        <img src={props.hdurl}  alt={props.title}/>
        <p>{props.explanation}</p>
        </section>
    )

}
export default AppContainer;