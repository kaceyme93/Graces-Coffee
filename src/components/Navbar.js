import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <Link className='navbar-links' to='/'>
        Home
      </Link>
      <Link className='navbar-links' to='/products'>
        Products
      </Link>
      <Link className='navbar-links' to ='/orders/cart'>
        <img className="navbar-cart" src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png"/>
      </Link>
      <Link className='navbar-links' to='/users/login'>
        Login
      </Link>
      <Link className='navbar-links' to='/users/register'>
        Register
      </Link>
    </nav>
  );
}

export default Navbar;
