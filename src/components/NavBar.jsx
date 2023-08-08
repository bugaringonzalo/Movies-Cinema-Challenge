import React, { useState } from 'react'
import { getMovieByTitle } from '../utils/utils'

function NavBar({ updateMovies }) {

  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovieByTitle(input)
      .then((data) => {
        updateMovies(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search...' onChange={handleChange} />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}


export default NavBar