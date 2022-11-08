import React from "react";
import { Link } from "react-router-dom";

const TrailsTile = (props) => {
    return (
        <div className="cell small-6 card">
            <div className="card-divider">
                <h2>
                    <Link to={`/trails/${props.id}`}> {props.name} </Link>
                </h2>
            </div>
            <div className="card-section">
                <h4>
                    {`${props.city}`}
                </h4>
                <p>
                    {`${props.zip}`}
                </p>
            </div>
        </div>
    )
}

export default TrailsTile