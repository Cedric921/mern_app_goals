import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
     <header>
        <div className="log">
           <Link to='/'>Goal setters</Link>
        </div>
    </header>
  )
}

export default Header