import React from 'react'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <div>
        <h1>Bienvenido a Cinema App</h1>
        <div>
          <Link to='/home'>
            <button type='button'>Home</button>
          </Link>

          <Link to='/login'>
            <button type='button'>Login</button>
          </Link>
          
          <Link to='/register'>
            <button type='button'>Register</button>
          </Link>
          </div>
    </div>
  )
}

export default Landing