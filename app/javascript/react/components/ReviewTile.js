import React from "react";

const ReviewTile = (props) => {
    const review = props.review
    return (
        <div>
            {review.user.username}
            Rating: {review.rating}
            Review: {review.body}
        </div>
    )
}

export default ReviewTile