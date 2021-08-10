import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import '../Post/Post.css'
const SinglePost = () => {
    const {id}=useParams()
    const [unique,setUnique]=useState({})
    //console.log(unique)
    
    const [updateMode,setUpdateMode]=useState(false)
    const [info,setInfo]=useState({
      
    })
   // console.log(info)
    useEffect(()=>{
        fetch(`http://localhost:4000/post/${id}`)
        .then(res=>res.json())
        .then(data=>{
           //console.log(data.post)
            setUnique(data.post)
        })
    },[id])

    const handleClick=(id,name)=>{
        fetch(`http://localhost:4000/post/${id}`,{
            method:"DELETE",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username:unique.username}),
        })
    
        .then(res=>res.json())
        .then(data=>console.log(data))
        window.location.replace("/")
    }

    const handleBlur=(e)=>{
        const newInfo={...info,
        [e.target.name]:e.target.value}
        setInfo(newInfo)
    }

    const update=(id)=>{

        fetch(`http://localhost:4000/post/${id}`,{
            method:"PUT",
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({username:unique.username, info}),
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
          window.location.replace('/')
    }
    const handleUpdateMethod=()=>{
        setUpdateMode(true)
    }

    return (
        <div className="container">
        <div className="row">

            <div className="col-md-8">
                {unique.file && (

                <img className="img-fluid" src={`http://localhost:4000/${unique.file}`} alt=""/>)}
                {updateMode ? <input required name="title" onBlur={handleBlur} className="form-control mt-4" defaultValue={unique.title} type="text" placeholder="Title"/>:     <h5>{unique.title} <span style={{float:'right'}} >  <i onClick={handleUpdateMethod} className="text-primary far fa-edit"></i>
                <i onClick={()=>handleClick(unique._id,unique.username)} className="text-danger far fa-trash-alt"></i></span></h5>}
     
                <div className="mt-3 d-flex justify-content-between">
                    
                        <p className="text-muted">Author:<b>{unique.username}</b></p>
                 
                   
                        <p className="text-muted">{new Date(unique.createdAt).toDateString()}</p>
                   
                </div>
                {updateMode ? <textarea required name="description" onBlur={handleBlur} className="form-control" placeholder="update blog" defaultValue={unique.description} /> : <p className="text-muted single-des">{unique.description}</p>}

                {updateMode ? <button type="submit" onClick={()=>update(unique._id)} className="btn btn-warning btn-lg mt-4">Update</button> : " "}
                
            </div>



            <div className="col-md-4">
                <Sidebar/>
            </div>
            
        </div>
        </div>
    );
};

export default SinglePost;