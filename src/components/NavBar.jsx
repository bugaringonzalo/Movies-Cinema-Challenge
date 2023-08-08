import React from 'react'

function NavBar() {
  return (
        <nav className="navbar">
          <div className="navbar__search">
            <input type="text" placeholder="Search" />
            <button type='button'>Search</button>
          </div>
        </nav>
  )
}

export default NavBar