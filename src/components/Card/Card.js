import React from "react";
import "./Card.css";


const Card = props => (
    <div className="card">
        <div key={props.Works.id}>
        <p>{props.Works.name} </p>
            {/* <a href={props.Works.url}> */}
            {/* <img src={props.Works.image} alt="works"/> */}
           {/* </a> */}
        </div>
    </div>

);

export default Card;
