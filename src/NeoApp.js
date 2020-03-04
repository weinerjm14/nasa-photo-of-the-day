import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import NeoTotal from "./NeoAppTotal";
import NeoContainer from "./NeoAppContainer"
function NeoApp () {
    let [neoData, setNeoData] = useState([]);
    useEffect(() => {
        axios.get("https://ssd-api.jpl.nasa.gov/cad.api?dist-max=10LD&date-min=2020-01-01&sort=dist&limit=10&fullname=true").then(response => {
          setNeoData(response.data);
        });
    }, [])
    return (
        <section className="neo_app">
        <NeoContainer 
            name = {neoData[10]}
        />
        <NeoTotal />
        </section>
    )
    
}
export default NeoApp;