import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Navbar.css'
import Blog from '../../image/blogs.jpg'
const Navbar = () => {
 
  console.log(sessionStorage.getItem("id"))
  const [userInfo,setUserInfo]=useState({})
  useEffect(()=>{
     fetch(`http://localhost:4000/user/${sessionStorage.getItem("id")}`)
  .then(res=>res.json())
  .then(data=>{
      //console.log(data[0])
      setUserInfo(data[0])
 
 })

},[sessionStorage.getItem("id")])
  let user;
  const handleLog=()=>{
    Cookies.remove("token")
    window.location.replace("/login");
  }
  { Cookies.get('token') ? user=true : user=false   }
  
    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/">
    
      <img style={{height:'55px'}} src={Blog} alt=""/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">CONTACT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/write">WRITE</Link>
        </li>
       
        {user &&   <li onClick={handleLog} className="nav-item ">
        <Link className="nav-link" to="/logout">LOGOUT</Link> 
        </li> }
      
        {
          user ? 
        
          <li className="nav-item topListItem" >
            <Link to="/settings">

         
          <img className="topImg" src={`http://localhost:4000/${userInfo.profilePic}`} alt=""/>
          </Link>
        </li>
       
        : <> 
         <li className="nav-item">
        <Link className="nav-link" to="/login">LogIn</Link>
      </li>
       <li className="nav-item">
       <Link className="nav-link" to="/register">Register</Link>
     </li>
     </>


        }
        {/* <li className="nav-item">
        <i className="topSearchIcon mt-2 fas fa-search"></i>
        </li> */}
        
     
      </ul>
   
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;