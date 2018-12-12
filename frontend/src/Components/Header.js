import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <header id = 'jumboHeader' className="jumbotron row align-items-center justify-content-center">
        <div id='headerCard' className='col-4 align-self-center shadow-sm p-3 rounded'>
          <h2>Child Care? Don't Care!</h2>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/help'>Help/FAQ</Link>
          </div>
      </header>
    )
  }

export default Header;