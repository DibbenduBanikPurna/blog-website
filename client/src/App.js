import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import SinglePost from './Components/SinglePost/SinglePost';
import Write from './Components/Write/Write';
import Settings from './Components/Settings/Settings';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import Cookies from 'js-cookie';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';


export const userContext=createContext()

function App() {
  const [unique,setUnique]=useState({})
  //console.log(unique)
  let user;
  { Cookies.get('token') ? user=true : user=false }
  
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Switch>
         <userContext.Provider value={[unique,setUnique]}>
         <Route exact path="/"> <Home/> </Route>
         <Route path="/post/:id">{user? <SinglePost/> : <Register/> }  </Route>
         <Route path="/write"> {user? <Write/> : <Register/> }  </Route>
         <Route path="/settings"> <Settings/> </Route>
         <Route path="/login"> {user ? <Home/> : <LogIn/>}   </Route>
         <Route path="/register"> {user ? <Home/> :<Register/> }  </Route>
         <Route path="/contact"> <Contact/></Route>
         <Route path="/about"> <About/></Route>
         </userContext.Provider>
        
       </Switch>
     </Router>
    </div>
  );
}

export default App;
