import React from "react";
import Graph from "./Graph";
import "./ItemCard.css"

export default function ItemCard(props) {
    return (
        <div className="card-div">
            <div className="info">
                <p className="ticker">({props.ticker})</p>
                <p className="name">{props.name}</p>
                <p className="price">${props.price}</p>
                <p className={props.change > 0? "positive change": "negative change"}>{props.change}%</p>
            </div>

            <div>
                <Graph companyFile={props.file} />
            </div>
        </div>
    )
}