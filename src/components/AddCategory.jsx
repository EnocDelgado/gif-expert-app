import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewValue }) => {

    const [ inputValue, setInputValue] = useState();

    // This function allows us to send a reference
    const handleInputChange = ({ target }) => {
        setInputValue( target.value )
    }

    // handleSubmit allow to avoid updating
    const onSubmit = ( event ) => {
        event.preventDefault();

        // If the input value is less than one character, nothing is done.
        if ( inputValue.trim().length <= 1) return;

        // setCategories adds a new arry that shows the last values added,
        onNewValue( inputValue.trim() ); // trim remove spaces before and after a string
        
        // clean our form after submit a value
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit } aria-label='form'>
            <input 
                type="text"
                placeholder="Search gifs"
                value={ inputValue }
                onChange={ handleInputChange }
            />
           
        </form>
        
    )
}


AddCategory.propTypes = {
    onNewValue: PropTypes.func.isRequired,
}