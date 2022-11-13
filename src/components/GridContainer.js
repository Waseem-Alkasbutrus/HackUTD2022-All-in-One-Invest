import React from "react";
import "./GridContainer.css"
import { useState } from "react";

export default function GridContainer({children}) {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div className="outer-container">
            <input onChange={(event) => {setSearchTerm(event.target.value)}} className="search" type="text" placeholder="Search for defenitions..."></input>
            <div className="content-container">
                {children.filter((definition) => definition.props.term.toLowerCase().includes(searchTerm.toLowerCase()))}
            </div>
        </div>
    )
}
