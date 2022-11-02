import React, { useEffect, useState } from "react"
import TrailShowTile from "./TrailShowTile"

const TrailShowContainer = (props) => {
    const [trail, setTrail] = useState({})

    const getTrail = async () => {
        try {
            const trailId = props.match.params.trailId
            const response = await fetch(`/api/v1/trails/${trailId}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const fetchedTrail = await response.json()
            setTrail(fetchedTrail)
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    useEffect(() => {
        getTrail()
    }, [])

    return (
        <TrailShowTile
            id={trail.id}
            name={trail.name}
            city={trail.city}
            zip={trail.zip}
            route_type={trail.route_type}
            length={trail.length}
            elevation={trail.elevation}
            difficulty={trail.difficulty}
            description={trail.description}
        />
    )
}

export default TrailShowContainer