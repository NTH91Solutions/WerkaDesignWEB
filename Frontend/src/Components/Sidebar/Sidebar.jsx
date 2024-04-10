import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/accountdetails'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img  alt="" />
                <p>Account details</p>
            </div>
        </Link>
        <Link to={'/shippingadress'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img  alt="" />
                <p>Shipping Adress</p>
            </div>
        </Link>
        <Link to={'/changepassword'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img alt="" />
                <p>Change Password</p>
            </div>
        </Link>
      
    </div>
  )
}

export default Sidebar
