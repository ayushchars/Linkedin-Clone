import React from 'react'
import "./inputoption.css"
function Inputoption ({Icon,title,color}) {
  return (
    <div  className='inputoption'> 
         <Icon style={{color}}/>
         <h4>{title}</h4>
    </div>
  )
}

export default Inputoption 