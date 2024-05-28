
import { useState } from 'react';
import './App.css'
import ShowButton from './components/showButton';
import ShowPhrase from './components/showPhrase';
import randomArr from './services/randomArr';
import arr from './utils/phrases.json';
import imagesArr from './utils/images.json'


function App() {
  //con esta linea de codigo 

  const quote = randomArr(arr)
  const [randomPhrase, setRandomPhrase] = useState(quote);
  const photo = randomArr(imagesArr)
  const [image, setfImage] = useState(photo)
  
  console.log(randomPhrase)

const appStyle = {

  backgroundImage: `url(../img/fortuna-2/fondo${image}.png)`,
}

  return (
    <div className='app' style={appStyle}>
      <h1 className='app__title'>Galletas de la fortuna</h1>      
      
      <ShowButton
      setRandomPhrase={setRandomPhrase}
      setfImage={setfImage}
      />

      <ShowPhrase
      randomPhrase={randomPhrase}
      />
    </div>
  )
}

export default App
