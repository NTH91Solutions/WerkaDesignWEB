import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { Link } from "react-router-dom"

const LoginSignup = () => {

  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () =>{
    console.log("Login Function Executed",formData)
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }
  
  return (
    <div className='loginsign-up'>
        <div className="loginsign-up-container">
          <h1>Login</h1>
          <div className="loginsign-up-fields">
            <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Adress' />
            <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
          </div>
          <button onClick={()=>{login()}} >Login</button>
         <p className='loginsign-up-login'>Create an account? <Link to='/SignUp' style={{textDecoration: 'none'}}><span> Click Here</span></Link></p>
        </div>  
    </div>
  )
}

export default LoginSignup