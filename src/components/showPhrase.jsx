import React, { useState } from 'react'
//oara desustructurar se pone llaves
const ShowPhrase = ({randomPhrase}) => {
    console.log(randomPhrase)

//destructurando objeto
    const {phrase, author} = randomPhrase

  return (
    <div className='app__container'>
       <p className='app__phrase'>{phrase}</p>
       <span className='app__author'>{author}</span>
    </div>
  )
}

export default ShowPhrase
