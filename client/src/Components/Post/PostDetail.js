import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const PostDetail = ({data}) => {
    const [unique,setUnique]=useContext(userContext)
    //console.log(unique)
    return (
        <div className="col-md-6">
             <Link  style={{textDecoration:'none', color:'black'}} to={`/post/${data._id}`}>
            <div  onClick={()=>setUnique(data)} className="card">
                  
             
                    
                <img   className="setimage" src={`http://localhost:4000/${data.file}`} alt=""/>
                <p className="text-muted">{data.brand}</p>
                
                <div className="card-body">
                    <h3>{data.title}</h3>
                    <p className="text-muted">{new Date(data.createdAt).toDateString()}</p>
                    <p>{data.description}</p>
                    <Link/>
                    

                </div>
            </div>
            </Link>
            
        </div>
    );
};

export default PostDetail;