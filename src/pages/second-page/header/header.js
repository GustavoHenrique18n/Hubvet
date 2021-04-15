import React from 'react'
import './header.css'
const Header = () => {
return(
    <header>
        <div>
            <img  className = "logo" src = "./image/logo2.png" alt = "logo empresa"/>
            <img className =" Trip"src= "/image/Viagens.png" alt="Viagem"/> 
        </div>
        <div className = "avatar">
            <img  className = "logo" src = "./image/Avatar.svg" alt = "logo empresa"/> 
        </div>
    </header>
)
}

export default Header