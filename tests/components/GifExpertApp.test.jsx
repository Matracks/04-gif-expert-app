import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../../src/GifExpertApp"


describe('test in GifExpertApp', () => { 

    test('should match with the snapshot', () => { 

        const { container } = render( <GifExpertApp /> )
        expect(container).toMatchSnapshot()

    })

    test('should be retun initial state', () => { 

        render( <GifExpertApp /> )

        expect( screen.getByText('Cargando...')).toBeTruthy()

    })

    test('should be add a new category', () => { 

        render( <GifExpertApp/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: 'Dragon ball' } } )
        fireEvent.submit( form )
        
        expect( screen.getAllByRole('heading', {level:2} ).length ).toBe(2)

    }) 

})