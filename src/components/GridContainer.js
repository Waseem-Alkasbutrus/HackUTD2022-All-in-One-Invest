import React from "react";
import "./GridContainer.css"
import { useState } from "react";

export default function GridContainer(props) {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div className="outer-container">
            <input onChange={(event) => {setSearchTerm(event.target.value)}} className="search" type="text" placeholder={"Search for " + props.placeholder + "..."}></input>
            <div className={"content " + props.flexStyle}>
                {props.children.filter((item) => item.props.searchKey.toLowerCase().includes(searchTerm.toLowerCase()))}
            </div>
        </div>
    )
}
