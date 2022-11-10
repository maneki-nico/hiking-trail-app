import React from "react"

const UserReviewTile = (props) => {
  const { review } = props

  return (
    <div className="grid-x grid-margin-x">
      <div className="cell small-24 card">
        <div className="card-divider">
          {review.trail.name}
        </div>
        <div className="card-section no-shadow">
          <h4>Rating: {review.rating}</h4>
          <p>{review.body}</p>
        </div>
      </div>
    </div>
  )
}

export default UserReviewTile