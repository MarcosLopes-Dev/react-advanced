import React from "react";
import PropType from 'prop-types'

function Calc(props) {
    const {min, max, onChange} = props
    
    return(
        <div>
            <p>valor mínimo: {min}</p>
            <p>valor Máximo: {max}</p>
            <input type="text" onChange={onChange}/>
        </div>
    )
}

Calc.propTypes = {
    min: PropType.number.isRequired,
    max: PropType.number.isRequired,
    onChange: PropType.func.isRequired
}

export default Calc