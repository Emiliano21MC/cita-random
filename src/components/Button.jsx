import React from 'react'
import "./styles/Button.css"

const Button = ({handleNewQuote, handleNewVgImage}) => {
  return (
    <button  className = "button" onClick={()=>{handleNewQuote();handleNewVgImage()}} >Ver otro</button>
  )
}

export default Button