import { render, screen } from "@testing-library/react"
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

})