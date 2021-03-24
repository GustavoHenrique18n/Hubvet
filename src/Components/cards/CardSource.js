import React from 'react'
import '../cards/CardSource.css';
const CardSource = () =>{

  return(

    <section>
    <div className ="container-image-Hubvet">
      <img className ="logo-Hubvet"src= "/image/logo2.png" alt="Logo empresa"/> 
      <img className ="image-Trip"src= "/image/Viagens.png" alt="Viagem"/>
    </div>

    <div className="input-Container">
    <label for="name"><img src="/image/Busca.svg" alt="Busca"/></label>
    <input type ="text" id="name" placeholder="Cidade de destino"/>
    </div>
    </section>
  ) 
}
 
export default CardSource