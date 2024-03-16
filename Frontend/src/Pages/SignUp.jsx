import React, { useState, useEffect } from 'react'
import './CSS/SignUp.css'
import { Link } from "react-router-dom"

const SignUp = () => {

    const [formData,setFormData] = useState({
      username:"",
      password:"",
      email:"",
      password2:"",
      check:""
    })
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formData))
      setIsSubmit(true)
    }

    useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formData);
      }
    }, );

    const validate = (values) => {
      const errors = {};
      let errorsCount = [0]
      const regex = /^[^\s@]+@[^\s@]+.\.[^\s@]{2,}$/i;
      if(!values.username) {
        errors.username = "Your name is required!";
        errorsCount +=1;
      }
      if(!values.email) {
        errors.email = "Email is required!";
        errorsCount +=1;
      }else if(!regex.test(values.email)) {
        errors.email = "Enter an valid Email adress";
        errorsCount +=1;
      }
      if(!values.password) {
        errors.password = "Password is required!";
        errorsCount +=1;
      }else if(values.password <4) {
        errors.password = "Password must be more than 3 characters";
        errorsCount +=1;
      }else if (values.password != values.password2){
        errors.password = "Passwords don't match";
        errorsCount +=1
      }
      if(!values.password2) {
        errors.password2 = "Please Verify your second password!";
        errorsCount +=1
      }else if(values.password2 <4) {
        errors.password2 = "Password must be more than 3 characters";
        errorsCount +=1;
      }
      if(values.check === false) {
        errors.check = "U must agree with the term of use & privacy policy ";
        errorsCount +=1
      }
      if(errorsCount < 1 ){
        signup(values);
      }
      return errors; 
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
      <form className='loginsignup' onSubmit={handleSubmit}>
          <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
              <input name='username' value={formData.username} onClick={changeHandler} type="text" placeholder='Your Name' />
              <p className='formDataError'>{formErrors.username}</p>
              <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Adress' />
              <p className='formDataError'>{formErrors.email}</p>
              <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
              <p className='formDataError'>{formErrors.password}</p>
              <input name='password2' value={formData.password2} onChange={changeHandler} type="password" placeholder='Repeat Password'/>
              <p className='formDataError'>{formErrors.password2}</p>
            </div>
            <div className="loginsignup-agree">
              <input type="checkbox" name='check' id=''value={formData.check} onChange={changeHandler}/>
              <p >By continuing, i agree to the term of use & privacy policy</p>
              <p className='formDataError'>{formErrors.check}</p>
            </div>
              <button  >Continue</button>
              <p className='loginsignup-login' >Already have an Account? <Link to='/Login'style={{textDecoration: 'none'}}><span> Login Here</span></Link></p>
          </div>  
      </form>
    )
  }
  export default SignUp
