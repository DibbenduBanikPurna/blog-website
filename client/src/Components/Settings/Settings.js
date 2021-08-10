import React, { useContext,  useEffect,  useState } from 'react';
import { userContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar'
import './Settings.css'
const Settings = () => {
    const [unique,setUnique]=useContext(userContext) 
    const [user,setUser]=useState({})
    //const [profileImage,setProfileImage]=useState(null)
    const [userInfo,setUserInfo]=useState({})
   // console.log(userInfo)
  //console.log(unique)
    //console.log(profileImage)

    useEffect(()=>{
        fetch(`http://localhost:4000/user/${sessionStorage.getItem("id")}`)
     .then(res=>res.json())
     .then(data=>{
         //console.log(data[0])
         setUserInfo(data[0])
     
  })

    },[sessionStorage.getItem("id")])
      

    const handleBlur=(e)=>{
        const newUser={...unique,
        [e.target.name]:e.target.value
    }
    setUser(newUser)
    }


    const handleSubmit=(e)=>{
        e.preventDefault()

     fetch(`http://localhost:4000/user/${sessionStorage.getItem("id")}`,{
         method:"PUT",
         headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
     })
     .then(res=>res.json())
     .then(data=>console.log(data,unique.id))
    }


    const handleDelete=(id)=>{
        fetch(`http://localhost:4000/user/${sessionStorage.getItem}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    // const handleChange=(e)=>{
     
        
    //    const filepreview=URL.createObjectURL(e.target.files[0])
    //     setProfileImage(filepreview)
    // }
    return (
        <div className="container">
        <div className="row ">
            <div className="col-md-8 mt-5">
                <h2 className="text-warning line">Update Your Account <span onClick={()=>handleDelete(unique.id)} style={{float:'right',fontSize:'12px', cursor:'pointer'}} className="text-danger">Delete Account</span></h2>

                <form className="form" onSubmit={handleSubmit}>

                    <label >Proile Picture</label>
                    <br/>
                    <br/>
                    <input   type="file" id="profile-pic" style={{display:'none'}} />

                    <img  className="i" src={`http://localhost:4000/${userInfo.profilePic}`} alt=""/>
                    
                    <label htmlFor="profile-pic"> <i className="icon m-2 far fa-user-circle"></i> </label>
                    <br/>
                    <br/>
                    <label>UserName</label>
                    <br/>
                    <input onBlur={handleBlur} name="username" className="form-control" type="text" placeholder="username" defaultValue={unique.username}/>
                    <label>Email</label>
                    <br/>
                    <input name="email" onBlur={handleBlur} className="form-control" type="email" placeholder="email" defaultValue={unique.email}/>
                  
                    <label>Password</label>
                    <br/>
                    <input name="password" onBlur={handleBlur} className="form-control" type="text" placeholder="*****" defaultValue=""/>
                    <br/>
                    <button className="btn btn-lg btn-success" type="submit">update</button>
                   
                </form>
              

            </div>
            <div className="col-md-4">
                <Sidebar/>
            </div>
            
        </div>
        </div>
    );
};

export default Settings;