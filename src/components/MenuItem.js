import React from "react";

export function Item(props) {
    return (
        <div className="item-container">
            <img className="item-icon" src={props.icon} />
            <h1 className="item-label">{props.label}</h1>
        </div>
    )
}

export function SubItem(props) {
    return (
        <div className="sub-item-container">
            <h1 className="sub-item-label">{props.label}</h1>
        </div>
    )
}