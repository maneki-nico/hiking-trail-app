import React, { useState, useEffect } from "react"
import TrailsTile from "./TrailTile"

const TrailsIndexContainer = (props) => {
    const [trails, setTrails] = useState([])

    const getTrails = async () => {
        try {
            const response = await fetch("api/v1/trails")
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const fetchedTrails = await response.json()
            setTrails(fetchedTrails.trails)
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    useEffect(() => {
        getTrails()
    }, [])

    const trailsList = trails.map((trail) => {
        return (
            <TrailsTile 
                key={trail.id}
                id={trail.id}
                name={trail.name}
                city={trail.city}
                zip={trail.zip}
            />
        )
    })

    return (
        <div className="grid-x grid-margin-x">
            {trailsList}
        </div>
    )
}

export default TrailsIndexContainer