import React from 'react'
import { useState } from 'react';



function Carousel({items}) {
  const [index, setIndex] = useState(0)

  const handleNext = () => {
    setIndex(index === 0 ? items.length - 4 : index - 1)
  }

  const handlePrev = () => {
    setIndex(index === items.length - 4 ? 0 : index + 1)
  }


  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
      <div>
        {items.slice(index, index + 4).map((item, index) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} /> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel