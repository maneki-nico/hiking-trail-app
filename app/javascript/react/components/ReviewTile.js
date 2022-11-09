import React from "react";

const ReviewTile = (props) => {
    const { review } = props
    return (
        <div className="cell small-4 card review-tile">
            <h5>{review.user.username}</h5>
            <p>Rating: {review.rating}</p>
            <p>Review: {review.body}</p>
        </div>
    )
}

export default ReviewTile