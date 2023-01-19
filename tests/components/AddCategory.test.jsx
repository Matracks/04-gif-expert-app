import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Test in <AddCategory />', () => { 

    test('should be change valor of the input', () => { 

        render( <AddCategory onNewCategory={ () => {} }/>)
        const input = screen.getByRole('textbox')

        fireEvent.input( input, { target: {value: 'Saitama'}} )

        expect( input.value ).toBe( 'Saitama' )

     })


    test('should be call onNewCategory if the input has a value', () => { 

        const inputValue = 'Saitama'


        render( <AddCategory onNewCategory={ () => {} }/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: {value: inputValue}} )
        fireEvent.submit( form )

        expect( input.value ).toBe('')


        screen.debug()

     })

 })