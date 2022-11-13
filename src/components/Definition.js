import React from "react";
import "./Definition.css"

export default function Definition(props) {
    return (
        <div className="definition-card">
            <h1 className="definition-term">{props.term}</h1>
            <p className="definition-def">{props.definition}</p>
        </div>
    );
}