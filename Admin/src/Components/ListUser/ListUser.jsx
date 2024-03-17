import React, {useEffect, useState} from 'react'
import './ListUser.css'
import cross_icon from '../../assets/cross_icon2.png'

const ListUser = () => {

  const [allUsers,setAllUsers] = useState([]);

  const fetchInfo = async ()=>{
    await fetch ('http://localhost:4000/allusers')
    .then((res)=>res.json())
    .then((data)=>{setAllUsers(data)});
  }
  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_User = async (id)=>{
    await fetch('http://localhost:4000/removeuser',{
      method: 'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className="list-product">
      <h1>All Users</h1>
      <div className="listproduct-format-main">
        <p>name</p>
        <p>email</p>
        
        <p>Remove</p>
      </div>
      <div className="listproduct-allProducts">
        <hr />
        {allUsers.map((user,index)=>{
          return <>
          <div key={index} className="listproduct-format-main listproduct-format">
            <p>{user.name}</p>
            <p>{user.email}</p>
            
            <img onClick={()=>{remove_User(user.id)}} className='listproduct-remove-icon' src={cross_icon} alt="" />
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListUser