import React, { useRef } from 'react'

function App () {
  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.focus()
    console.log('inputRef.current', inputRef.current)
  }

  return(
    <>  
      Foco: <input ref={inputRef}/>
      <br /><br /><br />
      <button onClick = {handleClick}>Focar</button>  
    </>
  )
}
export default App