import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../style/Navbar.css';
import '../style/BootstrapButtons.css';

function Navbar({ token, setToken, userInfo, setUserInfo }) {
  const history = useHistory();

  return (
    <nav
      className='nav-bar nav0-bar light text-white sticky-top'
      style={{ backgroundColor: '#4f2b1f' }}
    >
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start'>
          <span
            className='navbar-text text-white'
            style={{ marginRight: '16px', fontSize: '30px' }}
          >
            <div className='site-icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                fill='currentColor'
                className='bi bi-cup-hot'
                style={{ marginRight: '5px' }}
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z'
                />
                <path d='m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z' />
              </svg>
              <Link id='logo-script' className='nav-link px-2 text-white' style={{ fontFamily: "Brush Script MT", fontSize: '3rem'}} to='/'>
                Grace's Coffee
              </Link>{' '}
            </div>
          </span>

          <ul
            className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'
            style={{ fontSize: '24px' }}
          >
            <li>
              <Link className='nav-link px-2 text-white' to='/products'>
                Shop
              </Link>
            </li>
          </ul>

          {token && (
            <span
              className='navbar-text text-white'
              style={{ marginRight: '32px', fontSize: '24px' }}
            >
              Welcome {userInfo?.firstName}
            </span>
          )}

          {token && (
            <Link
              className='nav-link px-2 text-white'
              to='/profile'
              style={{ marginRight: '32px', fontSize: '24px' }}
            >
              My Account
            </Link>
          )}

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

          <Link to='/orders/cart' className='navbar-links'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              fill='currentColor'
              className='bi bi-cart'
              viewBox='0 0 16 16'
            >
              <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
            </svg>
          </Link>

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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
