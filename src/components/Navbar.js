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
    <nav className='nav-bar nav0-bar light p-3 text-white sticky-top' style={{backgroundColor:"#B76618"}}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">

          <span className='navbar-text text-black' style={{marginRight: "16px"}}>Grace's Coffee</span>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                {/* <li><Link className='nav-link px-2 text-black' to='/'>Home</Link></li> */}
                <li><Link className="nav-link px-2 text-black" to="/products">Coffee</Link></li>
                {token && <li><Link className="nav-link px-2 text-black" to="/profile">My Account</Link></li>}
              </ul>

                {token && <span className='navbar-text text-black' style={{marginRight:"32px"}}>Welcome {userInfo?.firstName}</span>}

                {token ? 
                  <div className="text-end">
                    <button 
                    type="button"
                    className="btn btn-dark btn-md btn-block"
                    onClick={(e)=>{
                      localStorage.removeItem("jwt");
                      setToken(null)
                      setUserInfo(null)}}>
                      <Link to="/login" style={{textDecoration:"none", color:"white"}}>Logout</Link>
                    </button>
                  </div>
              :
              <div className="text-end">
                <button type="button" className="btn btn-dark btn-md btn-block" 
                style={{marginRight:"8px"}}><Link to="/login" style={{textDecoration:"none", color:"white"}}>Login</Link></button>
                <button
                type="button" className="btn btn-dark btn-md btn-block" style={{marginLeft:"8px"}}>
                  <Link to="/register" style={{textDecoration:"none", color:"white"}}>Register</Link>
                </button>
              </div>}

            </div>
          </div>
    </nav>
  );
}

export default Navbar;
