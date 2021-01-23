import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__name">
          Genshin Impact
        </Link>
      </div>
    </header>
  )
}

export default Header
