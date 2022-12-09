import React from "react";
import "./DefinitionContainer.css"
import { useState } from "react";

export default function DefinitionContainer(props) {
    const [searchTerm, setSearchTerm] = useState("")

    let searchBar = <input onChange={(event) => {setSearchTerm(event.target.value)}} className="search" type="text" placeholder={"Search for " + props.placeholder + "..."}></input>

    return (
        <div className="definition-container">
            {props.noSearch? "" : searchBar}
            <div className="def-container">
                {props.noSearch? props.children : props.children.filter((item) => item.props.searchKey.toLowerCase().includes(searchTerm.toLowerCase()))}
            </div>
        </div>
    )
}
