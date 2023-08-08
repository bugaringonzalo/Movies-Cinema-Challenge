import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import { useState } from 'react'

function Card({ movie }) {

  const [rating, setRating ] = useState(movie.vote_average)

  const changeRating = (newRating) => {
    setRating(newRating);
  }

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div>
        <Link to={`/detail/${movie.id}`}>
          <h3>{movie.title}</h3>
        </Link>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}/10</p>
        <Rating ratingOrigin={rating} changeRating={changeRating}></Rating>
      </div>
    </div>
  )
}

export default Card