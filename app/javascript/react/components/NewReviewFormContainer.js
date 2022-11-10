import React from 'react';
import NewReviewFormTile from './NewReviewFormTile';

const NewReviewFormContainer = (props) => {

    return (
        <div className="field sign-in">
            {props.errors}
            <NewReviewFormTile
                postNewReview={props.postNewReview}
            />
        </div>
    )
}

export default NewReviewFormContainer