import React from 'react'
import './styles/reset.css';
import CardSource from './Components/cards/CardSource'
import MainBoard from './Components/board/MainBoard'
import Button from './Components/buttons/button'

const App = () => {

  return (
    <>
      <CardSource/>
      <MainBoard/>
      <div className = "button-homepage">
      <Button/>
      </div>
    </>
  );
}

export default App;
