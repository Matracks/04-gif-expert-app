import { GifItem } from "./GifItem"
import { useFetchGift } from "../hooks/useFetchGift"


export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGift( category )

    return (
        <>
            
            {
                isLoading
                ? (<h2>Cargando...</h2>)
                : <h2>{ category }</h2>
            }
            
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                            <GifItem
                                key={ image.id }
                                { ...image }
                            />     
                        ))
                }
            </div>
 
        </>
    )
}
