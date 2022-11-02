import React from "react";
import { Link } from "react-router-dom";

const TrailsTile = (props) => {
    return (
        <div>
            <Link to={`/trails/${props.id}`}> {props.name} </Link>
            {`${props.city} ${props.zip}`}
        </div>
    )
}

export default TrailsTile