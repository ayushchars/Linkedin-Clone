import React, { useState } from 'react'
import "./Login.css"
import {useDispatch} from "react-redux"
import {auth} from "./Firebase"
import {login} from "./redux/userReducer"
function Login() {
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const [name,setname] = useState("")
   const [profilepic,setprofilepic] = useState("")
   const dispatch = useDispatch()
   const register = ()=>{
    if(!name){
    return alert('please enter your name :)')
      }
      auth.createUserWithEmailAndPassword(email,password)
      .then((userAuth)=>{
        userAuth.user.updateProfile({
          displayName : name,
          photoURL : profilepic,
        })
        .then(()=>{
          dispatch(login({
            email : userAuth.user.email,
            uid : userAuth.user.uid,
            displayName: name,
            photoURL :profilepic, 
          }))
        })
         
      })
      .catch(err => alert(err))
    }
  const loginToApp =(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth=>{
      dispatch(login({
        email : userAuth.user.email,
        uid : userAuth.user.uid,
        displayName: userAuth.user.displayName,
        ProfileUrl : userAuth.user.photoURL,
      }))
    })
    .catch(err=> alert(err))

  }
  return (
    <div className='login'>
     <img src="https://www.veloceinternational.com/wp-content/uploads/2022/04/Linkedin-Logo.png " alt='logo'/>
      <form>
        <input value={name} type="text"  placeholder='Full name (requried if registering)' onChange={e=> setname(e.target.value)}/>
        <input value={profilepic} type="text"  placeholder='Profile picture Url (optional)' onChange={e=> setprofilepic(e.target.value)}/>
        <input value={email} type="Email"  placeholder='Email' onChange={e=> setemail(e.target.value)}/>
        <input value={password} type="password"  placeholder='Password' onChange={e=> setpassword(e.target.value)}/>

        <button type='submit' onClick={loginToApp}>Sign in</button>
      </form>
    <p>Not a member ? {""}
      <span className='login_register' onClick={register}>Register Now</span>
    </p>
    </div>
  )
}

export default Login