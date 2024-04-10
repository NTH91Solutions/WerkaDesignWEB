import React, { useState, useEffect, } from 'react'
import './CSS/Account.css'
import Sidebar from '../Components/Sidebar/Sidebar.jsx'
import { Routes,Route} from 'react-router-dom'
import Accountdetails from '../Components/Accountdetails/Accountdetails.jsx'
import Shippingadress from '../Components/Shippingadress/Shippingadress.jsx'
import Changepassword from '../Components/Changepassword/Changepassword.jsx'
import { Link } from "react-router-dom"

const Account = () => {

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
            <div className='Account'>
            <Sidebar/>
            <Routes>
              <Route path='/accountdetails' element={<Accountdetails/>}/>
              <Route path='/shippingadress' element={<Shippingadress/>}/>
              <Route path='/changepassword' element={<Changepassword/>}/>
            </Routes>
            </div>
          )
}
export default Account