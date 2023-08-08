import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


function Rating({ratingOrigin, changeRating}) {

  const [rating, setRating] = useState(0)

  const handleClick = (value) => {
    setRating(value)
    changeRating(value*2)
  }

  const addRatingOrigin = () => {
    let result = Math.floor(ratingOrigin/2)
    setRating(result)
  }
  
  useEffect(() => {
    addRatingOrigin(rating)
  }, [])


  return (
    <div>
      {
        [...Array(5)].map((star, index) => {
          index += 1
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              onClick={() => handleClick(index)}
            >
              <span className="star">&#9733;</span>
            </button>
          )
        })
      }
    </div>

  )
}

export default Rating