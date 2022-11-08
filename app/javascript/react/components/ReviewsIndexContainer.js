import React, { useState, useEffect } from "react";
import ReviewTile from "./ReviewTile";

const ReviewsIndexContainer = (props) => {

    const reviewsList = props.reviews.map((review) => {
        return (
            <ReviewTile
                key={review.id}
                body={review.body}
                rating={review.rating}
                username={review.user.username}
                created_at={review.created_at}
            />
        )
    })

    return(
        <div className="column-x review-list">
            {reviewsList}
        </div>
    )
}

export default ReviewsIndexContainer