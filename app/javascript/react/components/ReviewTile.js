import React from "react";

const ReviewTile = (props) => {
    const { review } = props
    return (
        <div className="cell card review-tile">
            <div className="card-divider">
                <h1>{`${review.user.username}`}<h2>{`Rating: ${review.rating} / 5 Stars`}</h2></h1>
            </div>
            <p>Review: {review.body}</p>
        </div>
    )
}

export default ReviewTile