import propTypes from 'prop-types'
import { useState } from "react"


export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ( {target} ) => {
        setInputValue( target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault()

        const inputtrim = inputValue.trim()

        if ( inputtrim.length <= 1 ) {
            return
        }
        onNewCategory( inputtrim )
        setInputValue('')
    }

  return (
    <form onSubmit={ onSubmit } aria-label='form'>
        <input
            type='text'
            placeholder="Search Gif"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: propTypes.func.isRequired
  }