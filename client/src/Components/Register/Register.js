import React, {  useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const history=useHistory()
    const [profileImage,setProfileImage]=useState(null)
    const [userData,setUserData]=useState({})
    const [file,setFile]=useState(null)
    //console.log(file)
    //console.log(userData)
    
   
    const handleBlur=(e)=>{
        const newUser={...userData,
        [e.target.name]:e.target.value
     }
     setUserData(newUser)
    }

    const handleChange=(e)=>{
     
        const newFile=e.target.files[0]
        setFile(newFile)
        const filepreview=URL.createObjectURL(e.target.files[0])
         setProfileImage(filepreview)
     }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData = new FormData()
  
         formData.append('file', file);
         formData.append('username', userData.username)
         formData.append('email', userData.email)
         formData.append('password', userData.password)
         formData.append('profilePic', file.name)
            fetch('http://localhost:4000/register',{
                method:"POST",
               
        body:formData
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.err){
                    alert(data.err)
                }
                else{
                    //history.push('/login')
                }
                console.log(data)})
            }

           
    return (
        <div className="register">
            <div className="col-md-2">
                <h2 className="text-center">Register</h2>
            <form onSubmit={handleSubmit}>
            <label >Proile Picture</label>
           <br/>
                   <input  onChange={handleChange} type="file" id="profile-pic" style={{display:'none'}} />
                    <img  className="i" src={profileImage} alt=""/>
                    
                    <label htmlFor="profile-pic"> <i className="icon m-2 far fa-user-circle"></i> </label>
                  <br/>
                <label>Username</label>
                <br/>
                <input onBlur={handleBlur} name="username" className="form-control" type="text" placeholder="Enter Your username"/>
                <br/>
                <label>Email</label>
                <br/>
                <input onBlur={handleBlur} name="email" className="form-control" type="email" placeholder="Enter Your email"/>
                <br/>
                <label>Password</label>
                <br/>
                <input name="password"  onBlur={handleBlur} className="form-control"  type="password" placeholder="Enter Your Password"/>
                <br/>
                <button  className="form-control btn btn-info" type="submit" >Register</button>
            </form>
            <br/>
            <Link className="text-secondary" to="/login">Already Registered???</Link>
            </div>
           
        </div>
    );
};

export default Register;