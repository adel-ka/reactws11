import React from 'react'
import { DepartmentInfo } from '../Data'

const Departments = () => {
  return (
    <div style={{display:"flex",color:"white"}}>
        {DepartmentInfo.map(el=>
            <div key={el.id} style={{background:el.bgColor,width:"311.625px",height:"345px",display:"flex",margin:"30px",flexDirection: "column",justifyContent:"space-between",borderRadius:"10px",overflow:"hidden"}}>
                <img src={el.iconURL} alt="docicon" style={{height:"24px",width:"24px"} }/>
                <h3>{el.title}</h3>
                <p>{el.discription}</p>
                <select style={{background:"transparent"}}>
                    {el.country.map(cointri=>( 
                    <option> { cointri } </option> ))}
                </select>
                {el.country2? <select style={{background:"transparent"}}>
                    {el.country2.map(cointri2=><option> {cointri2}</option>)}
                </select>:null}
                
            </div>)}
    </div>
  )
}

export default Departments