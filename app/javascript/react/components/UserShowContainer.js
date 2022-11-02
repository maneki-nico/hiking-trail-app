import React, { useEffect, useState } from "react"
import UserShowTile from "./UserShowTile"

const UserShowContainer = (props) => {
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
      setUser(fetchedUser)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <UserShowTile
      id={user.id}
      name={user.username}
      zip={user.zip}
    />
  )
}

export default UserShowContainer