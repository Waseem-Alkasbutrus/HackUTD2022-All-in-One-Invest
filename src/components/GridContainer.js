import React from "react";
import "./GridContainer.css"
import { useState } from "react";

import Search from "./Search";

export default function GridContainer({children}) {
    const [searchTerm, setSearchTerm] = useState("")

    console.log(children)
    return (
        <div className="outer-container">
            {/* <Search content={children} updateFilter={filterResults} placeholder="Search for defenitions..."></Search> */}
            <input onChange={(event) => {setSearchTerm(event.target.value)}} className="search" type="text" placeholder="Search for defenitions..."></input>
            <div className="content-container">
                {children.filter((definition) => definition.props.term.toLowerCase().includes(searchTerm.toLowerCase()))}
            </div>
        </div>
    )
}
