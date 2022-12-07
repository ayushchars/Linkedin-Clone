import React, { useEffect, useState} from 'react'
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import "./Feed.css"
import Inputoption from './Inputoption'
import Post from './Post'
import { db } from './Firebase'
// import firebase from "firebase/compat/app"
import { useSelector } from 'react-redux'
import { selectUser } from './redux/userReducer'
import FlipMove from "react-flip-move"
function Feed() {
  const user = useSelector(selectUser);
  const [post,setpost] = useState([])
  const [input,setinput] = useState("")

    useEffect(()=>{
      db.collection("posts").onSnapshot(snapshot=>(
        setpost(snapshot.docs.map(doc=>(
        {
          id : doc.id,
          data : doc.data(),

        }          
        )))
      ));

    },[])

  const sendPost = e =>{
    e.preventDefault();

    db.collection("posts").add({
      name : user.displayName,
      discription : user.email,
      message:  input,
      photoUrl : user.photoUrl || "",
      // timestamp :firebase.firestore.FieldValue.serverTime(),
      
    });
    setinput('');

  }
  return (
    <div className='feed'>
        <div className='input_contanier'>
            <div className='feed_input'>
                <CreateIcon/>
                <form>
                    <input type="text"
                    placeholder='Say Something :)'
                    value={input}
                    onChange={e=> setinput(e.target.value)}
                      />
                    <button type="submit" onClick={sendPost}>send</button>
                </form>
            </div>
          <div className='feed_inputoption'>
            <Inputoption Icon={ImageIcon} title={"photo"} color="#70b5f9"/>
            <Inputoption Icon={SubscriptionsIcon} title={"video"} color="#e7a33e"/>
            <Inputoption Icon={EventNoteIcon} title={"event"} color="#c0cbcd"/>
            <Inputoption Icon={CalendarViewDayIcon} title={"write articale"} color="#7fc15e"/>
          </div>
        </div>
       <FlipMove>

        {post.map(({id,data: {name,discription,message,photoUrl}})=>
       
       (<Post
          key=  {id}
          name = {name}
          discription = { discription}
          message = {message}
          photoUrl = {photoUrl}
          />)
          )} 
          </FlipMove>

    </div>
  )
}

export default Feed