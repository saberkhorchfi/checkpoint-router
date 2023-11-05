import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Description(props) {
    const id=useParams();
    console.log(id)
    const item=props.movies[id.id]
  return (
    <div>
      
      <iframe width="930" height="523" src={item.desc} title="Opening Credits | Game of Thrones | Season 8 (HBO)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      
    </div>
  )
}

export default Description
