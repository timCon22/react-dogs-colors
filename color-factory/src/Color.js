import React from "react";
import { Link } from "react-router-dom"


function Color({hex, color, history}) {
    if(!hex){
        history.push("/colors")
    }

    return (
        <div className="Color" style={{backgroundColor: hex}}>
            <p>this is {color}</p>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Color