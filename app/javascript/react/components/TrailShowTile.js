import React from "react";

const TrailShowTile = (props) => {
    const trail = [...props]
    debugger
    return(
        <div>
            <h1>{trail.name}</h1>
            <h3>{trail.city}</h3>
            <p>{trail.zip}</p>
            <ul>
                <li>
                    Route Type: {trail.route_type}
                </li>
                <li>
                    Elevation: {trail.elevation}
                </li>
                <li>
                    Difficulty: {trail.difficulty}
                </li>
                <li>
                    Length: {trail.length}
                </li>
            </ul>
            <p>Description: {trail.description}</p>
        </div>
    )
}

export default TrailShowTile