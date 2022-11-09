import React from "react"
import { Link } from "react-router-dom"


const FeaturedTrailTile = (props) => {
  return (
    <div class="head">
      <h3 class="slogan">Featured Trail</h3>
      <Link to={`/trails/${props.featuredTrail.id}`}> {`${props.featuredTrail.name} - `} </Link>
      {`${props.featuredTrail.city}, ${props.featuredTrail.zip}`}
    </div>
  )
}

export default FeaturedTrailTile