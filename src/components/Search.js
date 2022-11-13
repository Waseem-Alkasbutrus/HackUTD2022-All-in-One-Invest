import React from "react";
import "./Search.css"

export default function Search(props) {
    return (
        <input onChange={props.updateFilter(props.content, "raj")} className="search" type="text" placeholder={props.placeholder}></input>
    )
}