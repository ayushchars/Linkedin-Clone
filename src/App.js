import React,{useEffect} from 'react'
import Header from './container/Header'
import Sidebar from './container/Sidebar'
import "./App.css"
import Feed from './container/Feed'
import {login, logout, selectUser} from "./container/redux/userReducer"
import {useDispatch, useSelector} from "react-redux"
import Login from './container/Login'
import { auth } from './container/Firebase'
import Wiget from './container/Wiget'
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch(); 
  useEffect(() => {
   
    auth.onAuthStateChanged(userArth =>{
      if(userArth){
        dispatch(login({
          email : userArth.email,
          uid : userArth.uid,
          displayName: userArth.displayName,
          photoURL :userArth.photoURL, 
        }))
      }
      else{
          dispatch(logout())
      }
    });
  }, [])
  
  return (
    <div className='app'>
    {/* header */}
    <Header/>
    {!user ? <Login/> : (

      <div className='app_body'>
    {/* app body */}
    <Sidebar/>
    <Feed/>
    {/* feed */}
    <Wiget/> 
    
    </div>

) }
    </div>

    
  )
}

export default App