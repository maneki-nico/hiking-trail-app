import React from "react"
import { Link } from "react-router-dom"

const FeaturedTrailTile = (props) => {
  return (
    <div className="featured card">
      <Link to={`/trails/${props.featuredTrail.id}`}>
        <div className="head">
          <h3 className="slogan">Featured Trail</h3>
          <div className="featured-trail-image">
            <img src={props.featuredTrail.image_url} alt={`Image of ${props.featuredTrail.name}.`} />
          </div>
            {`${props.featuredTrail.name} - `}
            {`${props.featuredTrail.city}, ${props.featuredTrail.zip}`}
        </div>
      </Link>
    </div>
  )
}

export default FeaturedTrailTile