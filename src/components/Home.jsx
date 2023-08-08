import React, { useEffect } from 'react'
import { useState } from 'react';
import Carousel from './Carousel'
import Cards from './Cards'
import { getAllMovies, getMovieById} from '../utils/utils'

function Home() {
  
  const [items, setItems] = useState([])
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getAllMovies()
      .then((data) => {
        setItems(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  

  return (
    <div>
        <h1>Home</h1>
        <div>
          <Carousel items={items} />
        </div>
        <div>
          <Cards movies={movies} />
        </div>
    </div>

  )
}

export default Home