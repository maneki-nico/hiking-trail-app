import React from "react";
import { Link } from "react-router-dom";

const TrailsTile = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`/trails/${props.id}`}> {props.name} </Link>
                    {`${props.city} ${props.zip}`}
                </li>
            </ul>
        </div>
    )
}

export default TrailsTile