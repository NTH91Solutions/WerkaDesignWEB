import React, { useState } from 'react'
import './CSS/SignUp.css'
import { Link } from "react-router-dom"

const SignUp = () => {

    const [formData,setFormData] = useState({
      username:"",
      password:"",
      email:""
    })

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const signup = async () =>{
        console.log("Signup Function Executed",formData)
        let responseData;
        await fetch('http://localhost:4000/signup',{
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
        <div className='loginsignup'>
            <div className="loginsignup-container">
              <h1>Sign Up</h1>
              <div className="loginsignup-fields">
                <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />
                <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Adress' />
                <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
                <input name='password2' value={formData.password} onChange={changeHandler} type="password" placeholder='Repeat Password'/>
              </div>
              <div className="loginsignup-agree">
                <input type="checkbox" name='' id=''/>
                <p>By continuing, i agree to the term of use & privacy policy</p>
              </div>
                <button onClick={()=>{signup()}} >Continue</button>
                <p className='loginsignup-login'>Already have an Account? <Link to='/Login'style={{textDecoration: 'none'}}><span> Login Here</span></Link></p>
            </div>  
        </div>
      )
    }
    
    export default SignUp
