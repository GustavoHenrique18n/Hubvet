import React from 'react'
import './MainBoard.css'

const MainBoard = ({text}) =>{

    return(
        
  <div className = "mainBoard">

   <div className = "field-space">
      <label className="label-subtitles">Busque por:</label>
      <select>
        <option></option>     
        <option></option>     
        <option></option>     
        <option></option> 
      </select>
   </div>

    <div className = "field-space">
      <label className="label-subtitles">Onde você está?</label>
      <input  className ="input-line"type ="text" id="name" placeholder="Localização"/>
    </div>

 

    <div className = "toogle-position">
      <label className = "toogle"></label>
      <img className ="milhas" src= "/image/milhas.svg" alt="Logo empresa"/> 
      <img className ="cifrao" src= "/image/cifrao.svg" alt="Logo empresa"/>  
    </div>
  

    <div className = "field-space-tags">
      <label className="label-subtitles">Etiquetas</label>
      <select className="ticks">     
      </select>
    </div>
 
</div>
  )
}

  export default MainBoard;