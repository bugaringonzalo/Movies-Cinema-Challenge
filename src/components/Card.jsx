import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Card({ movie }) {




  return (
    <div>
      <img src={movie.poster} alt={movie.title} />
      <div>
        <Link to={`/detail/${movie.id}`}>
          <h3>{movie.title}</h3>
        </Link>
        <p>{movie.release_date}</p>
        <p>{movie.rating}/10</p>
        <Rating />
      </div>
    </div>
  )
}

export default Card