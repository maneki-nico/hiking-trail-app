import React from "react";

const ReviewTile = (props) => {
    const { review } = props
    return (
        <div className="cell small-4 card review-tile">
            <h5>{props.username}</h5>
            <p>Rating: {props.rating}</p>
            <p>Review: {props.body}</p>
        </div>
    )
}

export default ReviewTile