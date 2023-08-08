import React from 'react'
import { useState } from 'react';



function Carousel({popular}) {
  const [index, setIndex] = useState(0)

  const handleNext = () => {
    setIndex(index === 0 ? popular.length - 4 : index - 1)
  }

  const handlePrev = () => {
    setIndex(index === popular.length - 4 ? 0 : index + 1)
  }


  return (
    <div style={{marginTop: '2rem'}}>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {popular.slice(index, index + 4).map((item, index) => (
          <div key={item.id}>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} style={{maxHeight:200, maxWidth:150}}/>
            <p>{item.title}</p>
             
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel