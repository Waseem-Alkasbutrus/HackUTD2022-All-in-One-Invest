import React, { useState } from "react";
import "./Definition.css"

export default function Definition(props) {
    const [status, setStatus] = useState(-1)

    return (
        <div onClick={() => setStatus(status * -1)} className={status === 1? "activated definition-card" : "inactive definition-card"}>
            <h1 className="definition-term">{props.term}</h1>
            <p className="definition-def">{props.definition}</p>
        </div>
    );
}