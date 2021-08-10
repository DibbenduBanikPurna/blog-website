import React, { useContext, useState } from 'react';
import './LogIn.css'
import Cookies from 'js-cookie'
import { userContext } from '../../App';
import { Link } from 'react-router-dom';
const LogIn = () => {
    const [user,setUser]=useState({})
    const [unique,setUnique]=useContext(userContext)
    //console.log(unique)

    const handleBlur=(e)=>{
        const newUser={...user,
        [e.target.name]:e.target.value
    }
    setUser(newUser)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
       
        fetch('http://localhost:4000/login',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.success){
            Cookies.set("token", data.token)
            sessionStorage.setItem("id",data.id)
            setUnique(data)
            }
            else{
                alert(data.err)
            }
            
        
        })
    }
    return (
        <div className="login">
              <div className="col-md-2">
                  <h1 className="text-center">Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <br/>
                <input required onBlur={handleBlur} className="form-control" name="email" type="text" placeholder="Enter Your Email"/>
                <br/>
                <label>Password</label>
                <br/>
                <input required  onBlur={handleBlur} name="password"  className="form-control"  type="password" placeholder="Enter Your Password"/>
                <br/>
                <button  className="form-control btn btn-primary" type="submit" >LOG_In</button>
            </form>
                    <br/>
                <Link className="text-danger" to="/register">Not Registered Yet!!</Link>
        </div>

        </div>
      
    );
};

export default LogIn;