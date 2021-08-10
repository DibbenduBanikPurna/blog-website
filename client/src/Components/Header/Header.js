import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <>
            <div>
                <h3>React & Node</h3>
                <h1 className="display-1 blog">Blog</h1>
            </div>
            <div>
            <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
            </div>
        </>
    );
};

export default Header;