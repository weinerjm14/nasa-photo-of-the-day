import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function NeoApp () {
    let [neoData, setNeoData] = useState([]);
    return (
        useEffect(() => {
            axios.get("https://ssd-api.jpl.nasa.gov/cad.api?dist-max=10LD&date-min=2020-01-01&sort=dist&limit=10&fullname=true").then(response => {
              setData(response.data);
            });
        }, [])
        
    )
    
}
export default NeoApp;