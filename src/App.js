import React, { useState } from 'react'
import Button from './components/button'
import Calc from './components/calc'

function App () {

  const[value, setValue] = useState(0)
  const[min, setMin] = useState(0)
  const[max, setMax] = useState(30)

  const handleClick = () => {
    setMin(10)   
  }

  const handleCalc = ({ target }) => {
    const value = target.value
    setValue( min + max + value )
  }

  return(
    <>
      <div>  
        <Button onClick={handleClick}>
          Adicionar carrinho
        </Button>
      </div>
      <div>
        <h1>Valor Calculado: {value}</h1>
        <Calc 
        min={min}
        max={max}
        onChange={handleCalc}
        />
      </div>  
    </>
  )
  
}
export default App