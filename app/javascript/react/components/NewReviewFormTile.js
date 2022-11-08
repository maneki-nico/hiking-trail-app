import React, { useState } from 'react';

const NewReviewFormTile = (props) => {
    const [newReview, setNewReview] = useState({
        rating: '',
        body: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        const holdRating = newReview.rating
        const holdBody = newReview.body
        if (!['1', '2', '3', '4', '5'].includes(newReview.rating)) {
            setNewReview({
                ...newReview,
                rating: null
            })
        }
        if (newReview.body.trim === '') {
            setNewReview({
                ...newReview,
                body: null
            })
        }
        props.postNewReview(newReview)
        if (props.posted) {
            setNewReview({
                rating: '',
                body: ''
            })
            props.setPosted(false)
        } else {
            setNewReview({
                rating: holdRating,
                body: holdBody
            })
        }
    }

    const handleChange = (event) => {
        const updatingField = event.currentTarget.name
        setNewReview({
            ...newReview,
            [updatingField]: event.currentTarget.value
        })
    }

    return (
        <form className="" onSubmit={handleSubmit}>
            <label>
                Rating:
                <select name="rating" id="rating" value={newReview.rating} onChange={handleChange}>
                    <option name="rating" id="rating" value="">Select</option>
                    <option name="rating" id="rating" value="1">1</option>
                    <option name="rating" id="rating" value="2">2</option>
                    <option name="rating" id="rating" value="3">3</option>
                    <option name="rating" id="rating" value="4">4</option>
                    <option name="rating" id="rating" value="5">5</option>
                </select>
            </label>
            <label>
                Review:
                <input 
                    name="body"
                    id="body"
                    type="text"
                    value={newReview.body}
                    onChange={handleChange}
                />
            </label>

            <input type="submit" value="Submit Review"/>
        </form>
    )
}

export default NewReviewFormTile