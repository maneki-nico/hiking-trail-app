import React, { useEffect, useState } from "react"
import UserReviewTile from "./UserReviewTile"
import { Link } from "react-router-dom"

const UserShow = (props) => {

  const [user, setUser] = useState({reviews: []})
  const getUser = async () => {
    try {
      const userId = props.match.params.userId
      const response = await fetch(`/api/v1/users/${userId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const fetchedUser = await response.json()
      setUser({...fetchedUser.user, reviews: [...fetchedUser.user.reviews]})
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }
  
  useEffect(() => {
    getUser()
  }, [])

  let joinDate
  if (user.created_at) {
    const date = new Date(user.created_at)
    joinDate = date.toLocaleDateString()
  }



    const userReviews = user.reviews.map((review) => {
      return (
        <Link to={`/trails/${review.trail.id}`}>
          <UserReviewTile
            key={review.id}
            review={review}
          />
        </Link>
      )
    })

  return (
    <div className="grid-x">
      <div className="cell small-4">
        <h2>{user.username}</h2>
        <h4>Joined {joinDate}</h4>
        <h4>Location: {user.zip}</h4>
      </div>
      <div className="cell small-6">
        <h2>Reviews by {user.username}</h2>
        {userReviews}
      </div>
    </div>
  )
}

export default UserShow