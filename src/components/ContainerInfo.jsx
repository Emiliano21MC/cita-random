import React from 'react'
import Button from './Button'
import "./styles/ContainerInfo.css"

const ContainerInfo = ({quote, handleNewQuote, handleNewVgImage}) => {



  return (
    <section className='containerInfo'>
        <h1 className='containerInfo__title'>Fortune Cookies</h1>

        <article className='containerInfo__phrase'>
          <p className='containerInfo__phrase--text'>{quote.quote}</p>
        </article>

        <Button handleNewQuote={handleNewQuote} handleNewVgImage={handleNewVgImage}/>

      </section>
  )
}

export default ContainerInfo