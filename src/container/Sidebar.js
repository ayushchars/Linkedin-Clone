import React from 'react'
import {Avatar} from "@material-ui/core"
import "./Sidebar.css"
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userReducer';

function Sidebar() {    

const user = useSelector(selectUser)

const Recentitem =(topics)=>{

return (
<div className='sidebar_rectentitems'>
        <span className='sidebar_hastag'>#</span>
        <p>{topics}</p>
</div>
)};

  return (
    <div className='sidebar'>
       
        <div className='sidebar_top'>
        <img src='https://i.pinimg.com/originals/97/7c/2f/977c2fd92dfc1c8462e42f2b3d706fdc.jpg
        ' alt=''/>
        <Avatar src={user.photoURL} className='sidebar_avtar'>
            {user.email[0]}    
        </Avatar> 
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>

        </div>
        <div  className='sidebar_stats'>
        <div  className='sidebar_stat'>
            <p>Who viwed you</p>
            <p className='sidebar_stats_num'>
                2,534
            </p>
        </div>
        <div  className='sidebar_stat'>
            <p>Viwes on post</p>
            <p className='sidebar_stats_num'>3,432</p>
        </div>
        </div>
        <div className='sidebar_bottom'> 
            <p>Recent</p>
            {Recentitem("modi")}
            {Recentitem("yogi")}
            {Recentitem("virat")}
            {Recentitem("ayush")}
        
        </div>
    </div>
  )
}

export default Sidebar