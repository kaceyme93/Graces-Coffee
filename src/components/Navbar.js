import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import '../style/BootstrapButtons.css';

function Navbar(props) {
  const {
    token,
    setToken,
    userInfo,
    setUserInfo
  } = props
  return (
    <nav className='nav-bar nav0-bar light p-3 text-white sticky-top' style={{backgroundColor:"#C6AB80"}}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">

          <span className='navbar-text text-black' style={{marginRight: "16px"}}>Grace's Coffee</span>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link className='nav-link px-2 text-black' to='/'>Home</Link></li>
                <li><Link className="nav-link px-2 text-black" to="/products">Coffee</Link></li>
                {token && <li><Link className="nav-link px-2 text-black" to="/profile">My Account</Link></li>}
              </ul>

                {token && <span className='navbar-text text-black' style={{marginRight:"32px"}}>Welcome {userInfo?.firstName}</span>}

                {token ? 
                  <div className="text-end">
                    <button 
                    type="button" 
                    className="btn btn-light-moon btn-rounded"
                    onClick={(e)=>{
                      localStorage.removeItem("jwt");
                      setToken(null)
                      setUserInfo(null)}}>
                      <Link to="/">Logout</Link>
                    </button>
                  </div>
              :
              <div className="text-end">
                <button type="button" className="btn btn-light-moon btn-rounded" style={{marginRight:"8px"}}><Link to="/login">Login</Link></button>
                <button type="button" 
                className="btn btn-light-moon btn-rounded" style={{marginLeft:"8px"}}>
                  <Link to="/register">Register</Link>
                </button>
              </div>}

            </div>
          </div>
    </nav>
  );
}
{/* <Link className='navbar-links' to='/'>
  Home
</Link>
<Link className='navbar-links' to='/products'>
  Products
</Link>
<Link className='navbar-links' to='/users/login'>
  Login
</Link>
<Link className='navbar-links' to='/users/register'>
  Register
</Link> */}

export default Navbar;
