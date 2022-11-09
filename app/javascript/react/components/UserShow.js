import React, { useEffect, useState } from "react"

const UserShow = (props) => {
  const [user, setUser] = useState({})
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
      setUser(fetchedUser.user)
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

  return (
    <div className="grid-x">
      <div className="cell small-4">
        <h2>{user.username}</h2>
        <h4>Joined {joinDate}</h4>
        <h4>Location: {user.zip}</h4>
      </div>
      <div className="cell auto">
        <h2>Reviews by {user.username}</h2>
        <div className="grid-x grid-margin-x">
          <div className="cell small-6 card">
            <div className="card-divider">
              This is a header
            </div>
            <img src="https://www.wta.org/site_images/hikes/photo-1.jpg/@@images/fb36ccfc-e929-4520-adf3-408680ac1831.jpeg"></img>
            <div className="card-section">
              <h4>This is a card.</h4>
              <p>It has an easy to override visual style, and is appropriately subdued.</p>
            </div>
          </div>
          <div className="cell small-6 card">
            <div className="card-divider">
              This is a header
            </div>
            <img src="https://www.wta.org/site_images/hikes/photo-1.jpg/@@images/fb36ccfc-e929-4520-adf3-408680ac1831.jpeg"/>
            <div className="card-section">
              <h4>This is a card.</h4>
              <p>It has an easy to override visual style, and is appropriately subdued.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserShow