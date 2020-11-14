import React from "react"
import Recipe from "./Recipe";

function FunctionalComponent(props) {
    return (
        <div> 
            <h1> Type of Component: {props.type} </h1>
            <h2> Parent: {props.parent} </h2>
            <Recipe name="pizza" instructions="put in oven"></Recipe>
        </div>
    
        )
}

export default FunctionalComponent;