import React from 'react'

function FormField (props){
    return (
        <div>
            {props.inputLabel} <br></br>
            <input 
            type={props.inputType} name={props.inputName}>
            </input>
        </div>

    )
}

export default FormField;