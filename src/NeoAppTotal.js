import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";


function NeoTotal (){
    let [total, setTotal] = useState('');
    useEffect(() => {
        axios.get("https://ssd-api.jpl.nasa.gov/cad.api?dist-max=10LD&date-min=2020-01-01&date-max=2020-12-31").then(response => {
          setTotal(response.data.count);
        });
    }, [])
    return (
        <section className='neo_total_container'>
            <p className="neo_total_text">Total Of Near Earth Orbit Objects For 2020: {total}</p>
        </section>
    )
}
export default NeoTotal;