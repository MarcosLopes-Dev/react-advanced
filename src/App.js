import React, { useState } from 'react'
//import Button from './components/button'
//import Calc from './components/calc'
import PhotosGallery from './components/photosGallery'

function App () {

  const photos = [
   'http://placeimg.com/140/60/people',
    'http://placeimg.com/140/60/animals',
    'http://placeimg.com/140/60/food',
    'http://placeimg.com/140/60/music',
  ]

  return(
    <>
      <h1>Galeria de fotos</h1>
      <PhotosGallery 
        photos={photos}
      />
    </>
  )
  
}
export default App