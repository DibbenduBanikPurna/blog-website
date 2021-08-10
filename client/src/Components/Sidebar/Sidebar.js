import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Purna from '../../image/pic.jpg'
import './Sidebar.css'
const Sidebar = () => {
    const [cat,setCat]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/category')
        .then(res=>res.json())
        .then(data=>{
            setCat(data)
           
        })
    },[])

    return (
        <div>
            <h5 className="sidebarTitle">About Me</h5>
            <img
            style={{height:'180px'}}
          src={Purna}
          alt=""
        />
        <p className="text mt-3">Hello I am Purna, I have been developing websites for over 2 years.I am Fullstack web developer. Technologies I use is MERN(Mongodb, Express, React, Node-js) I create responsive websites that are displayed in all devices.</p>

        <h5 className="sidebarTitle">Categories</h5>
     
            <ul>
               {cat.map((cat)=>{
                  
                   return <Link to={`/?cat=${cat.name}`}><li key={cat._id}>{cat.name}</li></Link> 
                   
                   
               })}
            </ul>
           
            
            <h5 className="sidebarTitle">Follow Us</h5>

            <a  rel="noreferrer"  target="_blank" href="https://www.facebook.com/purno.banik.79"><i style={{fontSize:'28px'}} className="topIcon fab fa-facebook-square text-info"></i></a> 

        <a href="https://www.instagram.com/purnobanik/" rel="noreferrer" target="_blank"><i style={{fontSize:'28px'}} className="topIcon fab fa-instagram-square text-danger"></i></a>
      
        <a href="https://github.com/DibbenduBanikPurna" rel="noreferrer" target="_blank"><i  style={{fontSize:'28px'}} className="topIcon fab fa-github text-dark"></i></a>
        <a href="https://twitter.com/?lang=en" rel="noreferrer" target="_blank"><i style={{fontSize:'28px'}} className="topIcon fab fa-twitter-square text-primary"></i></a>

            
       
        </div>
    );
};

export default Sidebar;