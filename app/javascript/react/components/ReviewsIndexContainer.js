import React from "react";
import ReviewTile from "./ReviewTile";
import NewReviewFormContainer from "./NewReviewFormContainer";

const ReviewsIndexContainer = (props) => {

    const reviewsList = props.reviews.map((review) => {
        return (
            <ReviewTile
                key={review.id}
                review={review}
            />
        )
    })

    return(
        <div>
            {reviewsList}
            <NewReviewFormContainer
                postNewReview={props.postNewReview}
            />
        </div>
    )
}

export default ReviewsIndexContainer