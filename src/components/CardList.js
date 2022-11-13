import React from "react";
import "./CardList.css"
import { useState } from "react";

export default function CardList({children}) {
    const [searchTerm, setSearchTerm] = useState("")
    console.log(children)

    return (
        <div className="outer-container">
            <input onChange={(event) => {setSearchTerm(event.target.value)}} className="search" type="text" placeholder="Search..."></input>
            
            <div className="content-container">
                {children}
                {/* {children.filter((card) => { card.props.ticker.toLowerCase().includes(searchTerm.toLowerCase()) || card.props.name.toLowerCase().includes(searchTerm.toLowerCase())})} */}
            </div>
        </div>
    )
}
