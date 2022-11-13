import React from "react";
import "./GridContainer.css"

export default function GridContainer({children}) {
    return (
        <div className="container">{children}</div>
    )
}