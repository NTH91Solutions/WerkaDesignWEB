import React, { useState, useEffect, } from 'react'
import './CSS/Welcome.css'
import acountlogo from '../Components/Assets/acount_symbol.png'
import house_button from '../Components/Assets/homeicon.png'

import { Link } from "react-router-dom"

const Welcome = () => {

    const [Username,setUsername] = useState();

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getname',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setUsername(data));
        }
    


    return (
      <div className='welcome'>
          <div className="welcome-container">
            <div className='welcome-user'><h1>Welcome {Username} </h1></div>
           <div className='welcome-home'>
             <Link className='link' to='/'><img src={house_button} alt="" /></Link>
             <Link to='/' style={{textDecoration:"none", color: 'black'}} ><h2>Home</h2></Link>
           </div>
           <div className='welcome-home'>
           <Link to='/'><img src={acountlogo} alt="" /><p>My Account</p></Link>
           <p className='p1'>Acount information you can add your shipping adress, change your name or password or to delete your acount</p>
           </div>
           <div className='welcome-home'>
             <Link to='/'><img src={acountlogo} alt="" /><p>My Account</p></Link>
             <p className='p1'>Acount information you can add your shipping adress, change your name or password or to delete your acount</p>
           </div>
          </div>  

      </div>
    )
}
  export default Welcome