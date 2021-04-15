import React , { useState }from 'react'
import '../../styles/reset.css';
import CardSource from './LogoSource/CardSource'
import MainBoard from  '../../Components/board/MainBoard'
import Button from '../../Components/buttons/button'
import Footer from '../../Components/footer/footer'

const Home = () => {
const[active , setActive] = useState(false)

const setactive = (active) => {
 setActive(active)
}
    return(
   <>
    <CardSource/>
    <MainBoard  toogle = { active } handleclick = { setactive }/>
    <div className = "button-homepage">
    <Button/>
    </div>
    <Footer/>
  </>
    )

}

export default Home