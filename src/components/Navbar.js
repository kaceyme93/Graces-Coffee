import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import '../style/BootstrapButtons.css';

function Navbar(props) {
  const { token, setToken, userInfo, setUserInfo } = props;
  return (
    <nav
      className='nav-bar nav0-bar light p-3 text-white sticky-top'
      style={{ backgroundColor: '#C6AB80' }}
    >
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start'>
          <span
            className='navbar-text text-black'
            style={{ marginRight: '16px' }}
          >
            Grace's Coffee
          </span>

          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li>
              <Link className='nav-link px-2 text-black' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='nav-link px-2 text-black' to='/products'>
                Coffee
              </Link>
            </li>
            {token && (
              <li>
                <Link className='nav-link px-2 text-black' to='/profile'>
                  My Account
                </Link>
              </li>
            )}
          </ul>

          {token && (
            <span
              className='navbar-text text-black'
              style={{ marginRight: '32px' }}
            >
              Welcome {userInfo?.firstName}
            </span>
          )}
          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            {/* <li><Link className='nav-link px-2 text-black' to='/'>Home</Link></li> */}
            <li>
              <Link className='nav-link px-2 text-black' to='/products'>
                Coffee
              </Link>
            </li>
            <li>
              <Link className='nav-link px-2 text-black' to='/cart'>
                Cart
              </Link>
            </li>

            {token && (
              <li>
                <Link className='nav-link px-2 text-black' to='/profile'>
                  My Account
                </Link>
              </li>
            )}
          </ul>

          {token && (
            <span
              className='navbar-text text-black'
              style={{ marginRight: '32px' }}
            >
              Welcome {userInfo?.firstName}
            </span>
          )}

          {token ? (
            <div className='text-end'>
              <button
                type='button'
                className='btn btn-dark btn-md btn-block'
                onClick={(e) => {
                  localStorage.removeItem('jwt');
                  setToken(null);
                  setUserInfo(null);
                }}
              >
                <Link
                  to='/login'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Logout
                </Link>
              </button>
            </div>
          ) : (
            <div className='text-end'>
              <button
                type='button'
                className='btn btn-dark btn-md btn-block'
                style={{ marginRight: '8px' }}
              >
                <Link
                  to='/login'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Login
                </Link>
              </button>
              <button
                type='button'
                className='btn btn-dark btn-md btn-block'
                style={{ marginLeft: '8px' }}
              >
                <Link
                  to='/register'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Register
                </Link>
              </button>
            </div>
          )}

          {token ? (
            <div className='text-end'>
              <button
                type='button'
                className='btn btn-light-moon btn-rounded'
                onClick={(e) => {
                  localStorage.removeItem('jwt');
                  setToken(null);
                  setUserInfo(null);
                }}
              >
                <Link to='/'>Logout</Link>
              </button>
            </div>
          ) : (
            <div className='text-end'>
              <button
                type='button'
                className='btn btn-light-moon btn-rounded'
                style={{ marginRight: '8px' }}
              >
                <Link to='/login'>Login</Link>
              </button>
              <button
                type='button'
                className='btn btn-light-moon btn-rounded'
                style={{ marginLeft: '8px' }}
              >
                <Link to='/register'>Register</Link>
              </button>
            </div>
          )}

          <button
            type='button'
            className='btn btn-light-moon btn-rounded'
            style={{ marginLeft: '16px' }}
          >
            <Link to='/cart'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-cart'
                viewBox='0 0 16 16'
              >
                <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
              </svg>
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
