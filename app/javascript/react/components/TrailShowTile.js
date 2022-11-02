import React from "react";

const TrailShowTile = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <div>
                <h3>{props.city}</h3>
                <p>{props.zip}</p>
            </div>
            <div>
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
            </div>
            <h4>
                <p>{props.description}</p>
            </h4>
        </div>
    )
}

export default TrailShowTile