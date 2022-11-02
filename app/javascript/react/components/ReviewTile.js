import React from "react";

const ReviewTile = (props) => {
    return (
        <div>
            <h4>
                Rating: {props.rating} <br/>
                Review: {props.body}
            </h4>
        </div>
    )
}

export default ReviewTile