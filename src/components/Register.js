import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { tokenRegister } from '../axios-services/index';
import '../style/Register.css';

export default function Register(props) {
  const { setToken } = props;
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors},
  } = useForm();
  
  const productsPage = () => {
    history.push('/products');
  };

  const onSubmit = async (data) => {
    if(data.password===data.confirmPassword){
      await tokenRegister(data.username, data.password, data.email, data.firstName, data.lastName, setToken)
      if(localStorage.getItem('jwt') && localStorage.getItem('jwt')!=undefined) {
        const jwt = localStorage.getItem('jwt')
        console.log(jwt)
        productsPage()
      } 
      return
    }
    alert("Passwords do not match")
  }

  return (
    <section className='vh-50' style={{ backgroundColor: '' }}>
      <div className='container py-5 h-50'>
        <div className='row d-flex justify-content-center align-items-center h-50'>
          <div className='col col-xl-10'>
            <div className='card' style={{ borderRadius: '1rem' }}>
              <div className='row g-0'>
                <div className='col-md-6 col-lg-5 d-none d-md-block'>
                  <img
                    src='https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80'
                    alt='login form'
                    className='img-fluid'
                    style={{ borderRadius: '1rem 0 0 1rem' }}
                  />
                </div>
                <div className='col-md-6 col-lg-7 d-flex align-items-center'>
                  <div className='card-body p-4 p-lg-3 text-black'>
                    <h1 className='fw-normal mb-3 pb-3 register-header'
                    >Register a new account</h1>
                    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                      <input className="register-form-input"  placeholder='First Name'{...register("firstName", {required: true})}/>
                      {errors.firstName && <span>This field is required</span>}
                      <input className="register-form-input"  placeholder="Last Name" {...register("lastName", {required: true})}/>
                      {errors.lastName && <span>This field is required</span>}
                      <input className="register-form-input" placeholder="Email" {...register("email", {required: true})}/>
                      {errors.email && <span>This field is required</span>}
                      <input className="register-form-input" placeholder="Username" {...register("username", {required: true})}/>
                      {errors.username && <span>This field is required</span>}
                      <input className="register-form-input" placeholder="Password" type='password' {...register("password", {required: true})}/>
                      {errors.password && <span>This field is required</span>}
                      <input className="register-form-input" placeholder="Confirm Password" type="password" {...register("confirmPassword", {required: true})}/>
                      {errors.confirmPassword && <span>This field is required</span>}
                      <button className='btn btn-dark btn-md btn-block'
                        type='submit' >Register</button>
                    </form>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
  )
}