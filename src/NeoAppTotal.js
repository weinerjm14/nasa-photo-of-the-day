import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";


function NeoTotal (){
    let [total, setTotal] = useState('');
    return (
        useEffect(() => {
            axios.get("https://ssd-api.jpl.nasa.gov/cad.api?dist-max=10LD&date-min=2020-01-01").then(response => {
              setTotal(response.count);
            });
        }, [])
    )
}
export default NeoTotal;