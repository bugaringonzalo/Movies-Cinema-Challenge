import React from 'react'
import Card from './Card'

function Cards({ movies }) {
  
  

  return (
    <div>
        {movies?.map((item) => (
          <Card key={item.id} movie={item} />
        ))}
    </div>
  )
}

export default Cards