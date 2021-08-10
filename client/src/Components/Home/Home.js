import React from 'react';
import Post from '../Post/Post'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    return (
        <div className="container">
            <Header/>
            <div className="row mt-2">
                <div className="col-md-8 mt-5">
                    <Post/>

                </div>
                <div className="col-md-3 ">
                <Sidebar/>
            </div>
            </div>
            
        </div>
    );
};

export default Home;