import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const TrailsTile = (props) => {
    const { trail }  = props

    const [redirect, setRedirect] = useState(false)

    const tileClick = () => {
        setRedirect(true)
    }

    return (
            <div className="cell small-6 card" onClick={tileClick}>
                {redirect && <Redirect to={`/trails/${trail.id}`}/>}
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
                        {`${trail.city}`}
                    </h4>
                    <p>
                        {`${trail.zip}`}
                    </p>
                </div>
            </div>
    )
}

export default TrailsTile