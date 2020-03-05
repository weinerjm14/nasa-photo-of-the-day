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
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=4nGv4LzKfyBkis8utldeK9CNmYOpdOtHOHHIxa41").then(response => {
          setData(response.data);
        });
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