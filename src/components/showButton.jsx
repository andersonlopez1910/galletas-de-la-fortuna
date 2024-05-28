import React from 'react'
import arr from '../utils/phrases.json'
import randomArr from '../services/randomArr'
import imagesArr from '../utils/images.json'

const ShowButton = ({setRandomPhrase, setfImage}) => {

console.log(setRandomPhrase)

  const handleClick = () =>{
    const quote = randomArr(arr)
    setRandomPhrase(quote);
    const photo = randomArr(imagesArr)
    setfImage(photo)
     
  }
  return (
    <button className='app__btn' onClick={handleClick}>
        probar mi suerte
    </button>
  )
}

export default ShowButton