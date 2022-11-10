import React from "react";
import { Link } from "react-router-dom";

const TrailsTile = (props) => {
    const { trail }  = props

    return (
            <div className="cell small-4 card">
                <Link to={`/trails/${trail.id}`}>
                    <div className="card-divider">
                        <h2>
                            {trail.name}
                        </h2>
                    </div>
                    <div className="card-section">
                        <div className="trail-image">
                            <img src={trail.image_url} alt={`Image of ${trail.name}.`}/>
                        </div>
                        <h4>
                            {trail.city}
                        </h4>
                        <p>
                            {trail.zip}
                        </p>
                    </div>
                </Link>
            </div>
    )
}

export default TrailsTile