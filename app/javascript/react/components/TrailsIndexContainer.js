import React, { useState, useEffect } from "react"
import SearchBar from "./SearchBar.js"
import TrailsTile from "./TrailTile"
import FeaturedTrailTile from "./FeaturedTrailTile"


const TrailsIndexContainer = (props) => {
    const [trails, setTrails] = useState([])
    const [featuredTrail, setFeaturedTrail] = useState({})

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
            setFeaturedTrail(fetchedTrails.trails[Math.floor(Math.random() * fetchedTrails.trails.length)])
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
                trail={trail}
            />
        )
    })
    
    return (
        <div>
            <div className="featured card">
                <FeaturedTrailTile
                    featuredTrail={featuredTrail}
                />
            </div>
            <h1 className="slogan head">Get the Ruck Out There</h1>
            <div className="search-bar">
                <SearchBar 
                    setTrails={setTrails}
                />
            </div>
            <div className="grid-x grid-margin-x">
                {trailsList}
            </div>
        </div>
    )
}

export default TrailsIndexContainer