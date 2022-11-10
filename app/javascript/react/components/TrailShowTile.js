import React from "react";

const TrailShowTile = (props) => {
    const trail = props.trail
    
    return(
        <div className="trail-show grid-x">
            <div className="cell small-6">
                <h1>{trail.name}</h1>
                <h3>{trail.city}</h3>
                <h4>{trail.zip}</h4>
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
            <div className="cell small-6">
                <img src={trail.image_url} alt={`image of ${trail.name}`} />
            </div>
        </div>
    )
}

export default TrailShowTile