import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


function Rating() {

  const [rating, setRating] = useState(0)

  const handleClick = (value) => {
    setRating(value)
  }
  
  useEffect(() => {
    setRating(rating)
  }, [rating])


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