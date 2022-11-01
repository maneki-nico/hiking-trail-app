import React from "react";

const TrailsTile = (props) => {
    return (
        <div>
                    {`${props.name} (to be a clickable link)`}  
                    {`${props.city} ${props.zip}`}
        </div>
    )
}

export default TrailsTile