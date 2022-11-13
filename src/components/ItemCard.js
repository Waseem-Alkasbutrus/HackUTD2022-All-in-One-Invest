import React from "react";
import "./ItemCard.css"

export default function ItemCard(props) {
    return (
        <div className="card-div">
            <p className="ticker">({props.ticker})</p>
            <p className="name">{props.name}</p>
            <p className="price">${props.price}</p>
            <p className={props.change > 0? "positive change": "negative change"}>{props.change}%</p>
        </div>
    )
}