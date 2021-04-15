import React from 'react'
import './MainBoard.css'

const MainBoard = ({ handleclick , toogle }) =>{


    return(
        
  <div className = "mainBoard">

   <div className = "field-space">
      <label className="label-subtitles">Busque por:</label>
      <div className = "select-container">
      <select>
        <option>Passagem</option>     
        <option>Carros</option>     
        <option>Hoteis</option>     
        <option>Pacotes</option> 
      </select>
      </div>
   </div>

    <div className = "field-space">
      <label className="label-subtitles">Onde você está?</label>
      <input  className ="input-line"type ="text" id="name" placeholder="Localização"/>
    </div>

 

    <div className = "toogle-position">
      <label className = {toogle ? 'milhas-active' : 'toogle'} onClick ={()=>handleclick(!toogle)}></label>
      <img className ="milhas" src= "/image/milhas.svg" alt="Logo empresa"/> 
      <img className ="cifrao" src= "/image/cifrao.svg" alt="Logo empresa"/>  
    </div>
  

    <div className = "field-space-tags">
      <label className="label-subtitles">Etiquetas</label>
      <div className = "select-container">
      <select className="ticks"> 
        <option>Promoções</option>     
        <option>Novos</option>     
        <option>Ultimos dias</option>          
      </select>
    </div>
    </div>
 
</div>
  )
}

  export default MainBoard;