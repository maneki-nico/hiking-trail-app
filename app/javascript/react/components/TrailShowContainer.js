import React, { useEffect, useState } from "react"
import ReviewsIndexContainer from "./ReviewsIndexContainer"
import TrailShowTile from "./TrailShowTile"

const TrailShowContainer = (props) => {
    const [trail, setTrail] = useState({})
    const [reviews, setReviews] = useState([])

    const getReviews = async () => {
        try {
            const trailId = props.match.params.trailId
            const response = await fetch(`/api/v1/trails/${trailId}/reviews`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const fetchedReviews = await response.json()
            setReviews(fetchedReviews)
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

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
            getReviews()
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    useEffect(() => {
        getTrail()
    }, [])
    
    return ( 
        <div>
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

            <ReviewsIndexContainer
                reviews={reviews}
            />
        </div>
    )
}

export default TrailShowContainer