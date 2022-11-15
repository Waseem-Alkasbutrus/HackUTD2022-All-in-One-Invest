import React from "react";
import "./GridContainer.css"
import { useState } from "react";

export default function GridContainer(props) {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div className="outer-container">
            
            <div className={"content " + props.flexStyle}>
                <input onChange={(event) => {setSearchTerm(event.target.value)}} className="search" type="text" placeholder={"Search for " + props.placeholder + "..."}></input>
                {props.children.filter((item) => item.props.searchKey.toLowerCase().includes(searchTerm.toLowerCase()))}
            </div>
        </div>
    )
}
