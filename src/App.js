import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import PetShop from './PetShop'

function App () {
  return(
    <PetShop
    dogs={2}
    customerName='Marcos Vinicius'
    />
  )
}
export default App