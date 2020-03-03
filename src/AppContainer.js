import React from "react";
import data from "./dummydata"

const AppContainer = (props) => {
    return (
        <section className="app_container">
        <h2>{props.title} </h2>
        <img src = {props.hdurl}  alt= {props.title}/>
        </section>
    )

}
export default AppContainer;