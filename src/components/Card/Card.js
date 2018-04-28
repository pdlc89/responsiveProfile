import React from "react";
import "./Card.css";


const Card = props => (
    <div className="cardy">
        <div key={props.Works.id}>
        <a href={props.Works.url}>
        <p className="work-name">{props.Works.name} </p>
        <img className="img-tag" alt="button" value={props.Works.id} src={props.Works.image} />
        <p className="synopsis">{props.Works.synopsis}</p>
        </a>
        </div>
    </div>

);

export default Card;
