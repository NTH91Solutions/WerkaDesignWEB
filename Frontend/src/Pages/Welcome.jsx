import React, { useState, useEffect, } from 'react'
import './CSS/Welcome.css'
import acountlogo from '../Components/Assets/acount_symbol.png'
import house_button from '../Components/Assets/homeicon.png'
import cart_button from '../Components/Assets/cart_button.png'

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
             <button><Link to='/'style={{textDecoration:"none", color: 'black'}} ><img src={house_button} alt="" /><p>Home</p></Link></button>
             <button><Link to='/cart'style={{textDecoration:"none", color: 'black'}} ><img src={cart_button} alt="" /><p>Cart</p></Link></button>
             <button><Link to='/'style={{textDecoration:"none", color: 'black'}} ><img src={acountlogo} alt="" /><p>My Account</p></Link></button>
           </div>
          </div>  

      </div>
    )
}
  export default Welcome