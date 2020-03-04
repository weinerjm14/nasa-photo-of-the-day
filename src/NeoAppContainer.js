import React from "react";
import { useEffect, useState } from "react";

const NeoContainer = props => {
    return (
        <section className="neo_app_container">
            <h2>NEO name: {props.name}</h2>
        </section>
    )
}

export default NeoContainer;