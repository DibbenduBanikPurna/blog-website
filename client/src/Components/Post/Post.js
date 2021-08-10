import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Post.css'
import PostDetail from './PostDetail';
const Post = () => {
    const [data,setData]=useState([])
    const {search}=useLocation()

    useEffect(()=>{
        fetch('http://localhost:4000/post'+ search)
        .then(res=>res.json())
        .then(data=>{
           // console.log(data)
            setData(data)
        })
    },[search])
    return (
     

       
        <div className="row">
            {
                data.map((data)=>{
                    return <PostDetail key={data._id} data={data}/>
                })
            }
            
        </div>
       
    );
};

export default Post;