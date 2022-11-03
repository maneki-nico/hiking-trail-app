import React from "react";

const ReviewTile = (props) => {
    return (
        <div>
            Rating: {props.rating}
            Review: {props.body}
        </div>
    )
}

export default ReviewTile