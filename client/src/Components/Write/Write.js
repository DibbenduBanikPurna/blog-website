import React, { useContext, useState } from 'react';

import { userContext } from '../../App';
import './Write.css'
const Write = () => {
  const [info,setInfo]=useState({})
  const [file,setFile]=useState(null)
  const [unique]=useContext(userContext)
  const [pic,setPic]=useState(null)
  //console.log(file)
 
  
 
  const handleBlur=(e)=>{
    const newInfo={...info,
      [e.target.name]:e.target.value,
      username:unique.username
     
    }
    setInfo(newInfo)
  }

  const handleFileChange=(e)=>{
    const newFile = e.target.files[0]
    const pics=URL.createObjectURL(e.target.files[0])
    setPic(pics)
    setFile(newFile);
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    const formData = new FormData()
  
    formData.append('file', file);
    formData.append('username', unique.username)
    formData.append('description', info.description)
    formData.append('title', info.title)
    formData.append('filename', file.name)

  
  
    fetch('http://localhost:4000/api/uploads',{
      method:"POST",
      body:formData
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)
      alert(data)
    })
  
  

    window.location.replace("/");
  
}
    return (
        <div>
          {
            file &&   <img
            className="writeImg "
            src={pic}
            alt=""
          />
          }
         
            
      <form className="writeForm" onSubmit={handleSubmit}>
      <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input onChange={handleFileChange}  id="fileInput" type="file" style={{ display: "none" }} />
          <input
           onBlur={handleBlur}
            name="title"
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
          onBlur={handleBlur}
          name="description"
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
           
      </form>
        </div>
    );
};

export default Write;