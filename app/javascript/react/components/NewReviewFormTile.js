import React from "react";

const NewReviewFormTile = (props) => {
    const newReview = props.newReview

    return (
        <form className="" onSubmit={props.handleSubmit}>
            <label>
                Rating:
                <select name="rating" id="rating" onChange={props.handleChange}>
                    <option>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <label>
                Review:
                <input 
                    name="body"
                    id="body"
                    type="text"
                    value={newReview.body}
                    onChange={props.handleChange}
                />
            </label>

            <input type="submit" value="Submit Review"/>
        </form>
    )
}

export default NewReviewFormTile