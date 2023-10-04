import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../style/Navbar.css';
import '../style/BootstrapButtons.css';
import logo from '../images/logo2.png'
import smallMenu from '../images/hamburger-menu.svg'

function Navbar({ token, setToken, userInfo, setUserInfo, cart }) {
  const history = useHistory();

  function menuDisplay() {
    // console.log("CLICKED")
    // const nav = document.getElementById("navbar-link-list-id");
    // const menuIcon = document.getElementById("menu-icon")
    // if(nav.className==="navbar-link-list") {
    //   nav.className += " responsive"
    //   menuIcon.className += " responsive"
    // } else {
    //   nav.className = "navbar-link-list"
    // }
  }


  return (
    <nav
      className='nav-bar nav0-bar light text-white sticky-top'
      style={{ backgroundColor: '#4f2b1f' }}
    >
      <div className='container'>
        <div className='navbar'>
          <span>
            <div className='site-icon'>
              <Link to='/'>
                <img className='main-logo' src={logo}/>
              </Link>
            </div>
          </span>
          <ul className='navbar-link-list' id="navbar-link-list-id">
            <li>
              <Link className='nav-link px-2 text-white nav-links' to='/products'>
                Shop
              </Link>
            </li>
            <li>
            {token && (
              <Link
                className='nav-link px-2 text-white nav-links'
                to='/profile'
                style={{ marginRight: '32px', fontSize: '24px' }}
              >
                My Account
              </Link>
            )}
            </li>
            <li>
            {!token && (
              <div className='text-end'>
                <Link to='/login' className='navbar-links'>
                  Login
                </Link>
                <Link to='/register' className='navbar-links'>
                  Register
                </Link>
              </div>
            )}
            </li>
            <li>            
              <Link to='/orders/cart' className='navbar-links cart-icon-with-quantity'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  w
                  idth='35'
                  height='35'
                  fill='currentColor'
                  className='bi bi-cart'
                  viewBox='0 0 16 16'
                >
                  <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
                </svg>
                <span className='cart-quantity' id="cart-quantity-id">{cart.length}</span>
              </Link>           
            </li>
            {/* </li>
            {cart.length===0 && (
              <Link to='/orders/cart' className='navbar-links'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='35'
                height='35'
                fill='currentColor'
                className='bi bi-cart'
                viewBox='0 0 16 16'
              >
                <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
              </svg>
            </Link>
            )}
            <li> */}
            <li>
            {token && (
              <div className='text-end'>
                <Button
                  type='button'
                  variant='danger'
                  className='logout-button'
                  onClick={(e) => {
                    localStorage.removeItem('jwt');
                    setToken(null);
                    setUserInfo(null);
                    history.push(`/`);
                  }}
                >
                  Logout
                </Button>
              </div>
            )}
            </li>
            <li>
              <a id="menu-icon" className="small-screen-menu" onClick={menuDisplay}>
              <img className="small-screen-menu-icon" src={smallMenu}></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
