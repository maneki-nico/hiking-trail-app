import React from 'react';
import NewReviewFormTile from './NewReviewFormTile';

const NewReviewFormContainer = (props) => {

    return (
        <div>
            {props.errors}
            <NewReviewFormTile
                posted={props.posted}
                setPosted={props.setPosted}
                postNewReview={props.postNewReview}
            />
        </div>
    )
}

export default NewReviewFormContainer