import React, { useState } from 'react'
import {Rating} from 'react-simple-star-rating'

 function Ratings() {
  const [rating, setRating] = useState(0) 

 
  const handleRating = (rate) => {
    setRating(rate)
    
  }

  return (
    <div className='Ratings'>
      <Rating
        onClick={handleRating}
        ratingValue={rating} 
        size={50}
        label
        transition
        fillColor='orange'
        emptyColor='gray'
        className='foo' 
      />
    
      {rating}
    </div>
  )

}
export default Ratings