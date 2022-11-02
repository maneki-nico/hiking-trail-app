import React from 'react'

const UserShowTile = (props) => {
  return (
    <div>
      <h1>{props.username}</h1>
      <h3>{props.zip}</h3>
      <h3>Reviews by {props.username}:</h3>
      <ul>
        <li>Review goes here</li>
      </ul>
    </div>
  )

}

export default UserShowTile