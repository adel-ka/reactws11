import React from 'react'
import { Section1 } from '../Data'

const Introduction = () => {
  return (
    <div className='intro'>
       <img src= {Section1.imgURL} alt="Docstar" />
       <h1>{Section1.title}</h1>
       <div style={{display:"flex"}}>
        <p style={{width:"477.5px",height:"112px",margin:"50px",float:'left'}}>{Section1.para1}</p>
        <p style={{width:"477.5px",height:"112px",margin:"50px",float:'left'}}>{Section1.para2}</p>
       </div>
    </div>
  )
}

export default Introduction