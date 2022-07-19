import React, {useState} from "react";
import { Link } from 'react-router-dom';
import {tokenRegister} from '../axios-services/index';

export default function Register(props){
    const {setToken} = props;

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    return (
        <form style={{width: "23rem"}} onSubmit={(e)=>{
            e.preventDefault();
            console.log("Registering");
            if(password===confirmPassword){
                tokenRegister(userName, password, setToken)
                setPassword("");
                setUsername("");
                setConfirmPassword("");
                return
            } alert("Passwords must match one another")
            setPassword("");
            setUsername("");
            setConfirmPassword("");
          }}>

            <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing : '1px'}}>Register new account</h3>

            <div className="form-outline mb-4">
              <input type="text" id="username" className="form-control form-control-lg" value={userName} onChange={(e)=>{setUsername(e.target.value)}} required/>
              <label className="form-label" htmlFor="username">Username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="password" className="form-control form-control-lg" minLength="7" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
              <label className="form-label" htmlFor="password">Password</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="checkPassword" className="form-control form-control-lg" minLength="7" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} required/>
              <label className="form-label" htmlFor="checkPassword">Confirm password</label>
            </div>

            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block" type="submit">Confirm</button>
            </div>

            <p>Already have an account? <a href="#!" className="link-info"><Link to="/users/login">Login here</Link></a></p>

          </form>
    )
};