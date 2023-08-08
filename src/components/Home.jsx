import React, { useEffect } from 'react'
import { useState } from 'react';
import Carousel from './Carousel'
import Cards from './Cards'
import { getPopularMovies, getMovieById, getMovieByTitle, getAllMovies } from '../utils/utils'
import NavBar from './NavBar';

function Home() {
  
  const [popular, setPopular] = useState([])
  const [movies, setMovies] = useState([])

  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };


  
  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        setPopular(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  
  useEffect(() => {
    getAllMovies()
      .then((data) => {
        setMovies(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <div>
        <NavBar updateMovies={updateMovies} movies={movies} />

        
        <h1>Home</h1>
        <div>
          <Carousel popular={popular} />
        </div>
        <div>
          <Cards movies={movies} />
        </div>
    </div>

  )
}

export default Home