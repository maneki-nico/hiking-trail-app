import React, { useEffect, useState } from "react"
import ReviewsIndexContainer from "./ReviewsIndexContainer"
import TrailShowTile from "./TrailShowTile"

const TrailShowContainer = (props) => {
    const [trail, setTrail] = useState({
        reviews: []
    })

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
            setTrail(fetchedTrail.trail)
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }
    
    useEffect(() => {
        getTrail()
    }, [])

    const postNewReview = async (formPayload) => {
        try {
            const trailId = props.match.params.trailId
            const response = await fetch(`/api/v1/trails/${trailId}/reviews`, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formPayload)
            })
            if(!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const postedReview = await response.json()
            setTrail({
                ...trail,
                reviews: [...trail.reviews, postedReview]
            })
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }
    

    return ( 
        <div>
            <TrailShowTile
                trail={trail}
            />
            <ReviewsIndexContainer
                reviews={trail.reviews}
                postNewReview={postNewReview}
            />
        </div>
    )
}

export default TrailShowContainer