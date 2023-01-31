import React from "react"
import { Link } from "react-router-dom"


function DogList({dogs}){
    return(
        <>
            <h1>All doggos:</h1>
            <div>
                {dogs.map(d => (
                    <div key={d.name}>
                        <img src={d.src} alt={d.name}/>
                        <h3><Link to={`/dogs/${d.name.toLowerCase()}`}/>{d.name}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DogList