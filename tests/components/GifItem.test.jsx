import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Tests in GifItem', () => {

  const title = 'Soy el titulo'
  const url = 'https://dragon-ball/otra.jpg'

  test('should match with the snapshot', () => { 

    const { container } = render( <GifItem title={title} url={url}/> )
    expect(container).toMatchSnapshot()

  })


  test('should be show a img with URL and ALT', () => { 

    render( <GifItem title={title} url={url}/> )
    // screen.debug()
    // expect( screen.getByRole('img').alt ).toBe( title )
    const { src, alt} = screen.getByRole('img')
    expect( src ).toBe( url )
    expect( alt ).toBe( title )

   })


   test('should be show the title in the component', () => { 

    render( <GifItem title={title} url={url}/> )
    expect( screen.getByText( title )).toBeTruthy()

    })

})