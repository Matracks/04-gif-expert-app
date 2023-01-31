import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGift } from "../../src/hooks/useFetchGift"

jest.mock('../../src/hooks/useFetchGift')

describe('Test in <GifGrid />', () => { 

    const category = 'One Punch'

    test('should be show loading...', () => { 

        useFetchGift.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={ category } />)

        expect (screen.getAllByText('Cargando...'))

        screen.debug()
    })


    test('should be show item when iamges charges', () => { 

        const gifs = [
            {
                id: 'abc',
                title: 'saitama',
                url: 'http://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'goku',
                url: 'http://localhost/goku.jpg'
            }
        ]

        useFetchGift.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={ category } />)

        expect( screen.getAllByRole('img').length).toBe(2)
        

        screen.debug()

    })

})