import React from "react";

const TrailShowTile = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <h3>{props.city}</h3>
            <p>{props.zip}</p>
            <ul>
                <li>
                    Route Type: {props.route_type}
                </li>
                <li>
                    Elevation: {props.elevation}
                </li>
                <li>
                    Difficulty: {props.difficulty}
                </li>
                <li>
                    Length: {props.length}
                </li>
            </ul>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default TrailShowTile