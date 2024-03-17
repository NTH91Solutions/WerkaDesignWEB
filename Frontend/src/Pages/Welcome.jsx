import React, { useState, useEffect, } from 'react'
import './CSS/Welcome.css'

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
           <h1>Welcome {Username} </h1>
          </div>  

      </div>
    )
}
  export default Welcome