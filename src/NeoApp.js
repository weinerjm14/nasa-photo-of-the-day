import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import NeoAppContainer from "./NeoAppContainer"
import styled from "styled-components";
//styles


//APP
function NeoApp () {
    let [data, setData] = useState([]);
    let [newDate, setNewDate] = useState("2020-01-30")
    console.log(document.getElementById('newdate'.value));
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=4nGv4LzKfyBkis8utldeK9CNmYOpdOtHOHHIxa41&date=${newDate}`).then(response => {
          setData(response.data);
        })
        .then(error => {
            console.log(error);
        })
    }, [])
    return (
        <section className="neo_app">
      
      <NeoAppContainer 
        title={data.title}
        hdurl={data.hdurl}
        explanation={data.explanation}
        url={data.url}
        media_type = {data.media_type}
      />
        </section>
    )
    
}
export default NeoApp;