import React, { useEffect, useState } from "react"
import ReviewsIndexContainer from "./ReviewsIndexContainer"
import TrailShowTile from "./TrailShowTile"

const FeaturedTrailShow = (props) => {
  return (
    <div>
        <Link to={`/trails/${props.id}`}> {props.name} </Link>
        {`${props.city} ${props.zip}`}
    </div>
  )
}