import React, { useState } from "react";
import NewReviewFormTile from "./NewReviewFormTile";

const NewReviewFormContainer = (props) => {

    const [newReview, setNewReview] = useState({
        rating: "",
        body: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        props.postNewReview(newReview)
    }

    const handleChange = (event) => {
        const updatingField = event.currentTarget.name
        setNewReview({
            ...newReview,
            [updatingField]: event.currentTarget.value
        })
    }

    return (
        <NewReviewFormTile
            newReview={newReview}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
        />
    )
}

export default NewReviewFormContainer