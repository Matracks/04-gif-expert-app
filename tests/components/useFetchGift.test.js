import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGift } from "../../src/hooks/useFetchGift"


describe('Test in custom hook', () => { 

    test('should be retun initial state', () => { 

        const { result } = renderHook( () => useFetchGift('One Punch'))
        const { images, isLoading } = result.current

        expect( images.length ).toBe(0)
        expect( isLoading ).toBeTruthy()
       

        
    
    })


    test('should be retun images and false ', async() => { 

        const { result } = renderHook( () => useFetchGift('One Punch'))

        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        )


        const { images, isLoading } = result.current

        expect( images.length ).toBeGreaterThan(0)
        expect( isLoading ).toBeFalsy()

    })
})