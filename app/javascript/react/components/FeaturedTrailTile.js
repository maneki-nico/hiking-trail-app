import React from "react"
import { Link } from "react-router-dom"

const FeaturedTrailTile = (props) => {
  return (
    <div className="head">
      <h3 className="slogan">Featured Trail</h3>
      <div className="featured-trail-image">
        <img src={props.featuredTrail.image_url} alt={`Image of ${props.featuredTrail.name}.`} />
      </div>
        <Link to={`/trails/${props.featuredTrail.id}`}> {`${props.featuredTrail.name} - `} </Link>
        {`${props.featuredTrail.city}, ${props.featuredTrail.zip}`}
    </div>
  )
}

export default FeaturedTrailTile