import React, { useContext, useRef, useState, useEffect } from 'react'
import './Navbar.css'

import logo from '../Assets/WDlogo2.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom"
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/DropDown-menuIcon.png'

const Navbar = () => {

    const [menu, setMenu] = useState("Shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0,1);
    });
  });

  

  return (
    <header className={`headerMain ${scroll ? "sticky" : ""}`}>
    <nav >
    <><div className='navbar'>
      <div className="nav-logo">
       <img src={logo} alt=""   />
        <p></p>
      </div>
        <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Fashion")}}><Link style={{textDecoration: 'none', color:'black'}} to='/fashion'>Fashion</Link>{menu==="fashion"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Homestuff")}}><Link style={{textDecoration: 'none', color:'black'}} to='/homestuff'>HomeStuff</Link>{menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none', color:'black'}} to='/art'>Art</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <div className='nav-cart-dropdownmenu'><img className='nav-dropdown' onClick={dropdown_toggle} src= {nav_dropdown} alt="" /></div>
      </div>
      
    </div></>
    </nav>
  </header>
  )
  
}

export default Navbar
