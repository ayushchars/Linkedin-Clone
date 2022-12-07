import React from 'react'
import { Avatar  } from '@material-ui/core'
import "./Headeroptions.css"
import { useSelector } from 'react-redux'
import { selectUser } from './redux/userReducer'
function HeaderOptions({ avatar ,Icons, title ,onClick}) {
        const user = useSelector(selectUser)
    
    return (
        <div onClick={onClick} className='headeroption'>
            {Icons && <Icons className="headeroption_icon" />}
            {avatar && (
                <Avatar className="headeroption_icon" src={user?.photoUrl}>{user?.email[0]}</Avatar>
            )
            }
            <h3 className="headeroption_title">{title}</h3>
        </div>
    )
}

export default HeaderOptions