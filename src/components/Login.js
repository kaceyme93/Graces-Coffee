import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { tokenLogin } from '../axios-services/index';

export default function Login(props) {
    const {setToken} = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const profilePage = ()=>{
    //   history.push('/profile')
    // }

    return (
          <form style={{width: "23rem"}} onSubmit={(e)=>{
            e.preventDefault();
            tokenLogin(username, password, setToken);
            setPassword("");
            setUsername("");
            // profilePage();
          }}>

            <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing : '1px'}}>Log in</h3>

            <div className="form-outline mb-4">
              <input type="text" id="username" className="form-control form-control-lg" value={username} onChange={(e)=>{setUsername(e.target.value)}} required/>
              <label className="form-label" htmlFor="username">Username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="password" className="form-control form-control-lg" minLength="7" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
              <label className="form-label" htmlFor="password">Password</label>
            </div>

            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block" type="submit">Login</button>
            </div>

            <p>Don't have an account? <a href="#!" className="link-info"><Link to="/users/register">Register here</Link></a></p>

          </form>
    )
}