import { Avatar } from '@material-ui/core'
import React,{forwardRef} from 'react'
import Inputoption from './Inputoption'
import "./Post.css"
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpSharp"
import ChatOutlined from "@material-ui/icons/ChatOutlined"
import ShareOutlined from "@material-ui/icons/ShareOutlined"
import SendOutlined from "@material-ui/icons/SendOutlined"

const Post = forwardRef(({name,discription,message,photoUrl} , ref)=> {

  return (
    <div ref={ref} className='post'>
        <div className='post_header'>
        <Avatar src={photoUrl}></Avatar>
        <div className='post_info'>
            <h2>{name}</h2>
            <p>{discription}</p>
        </div>
        </div> 
        <div className='post_body'>
            <p>{message}</p>
            <img src={photoUrl} alt=""/>
        </div>
        <div className='post_button'>
            <Inputoption Icon={ThumbUpAltOutlined} title="Like" color="grey"/>
            <Inputoption Icon={ChatOutlined} title="Comment" color="grey"/>
            <Inputoption Icon={ShareOutlined} title="Share" color="grey"/>
            <Inputoption Icon={SendOutlined} title="Send" color="grey"/>
        </div>
    </div>
  )
})

export default Post