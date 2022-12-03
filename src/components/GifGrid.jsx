import { useFetchGifts } from "../hooks/useFetchGifts";
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifts( category );

    return (
        <>
            <h3>{ category }</h3>

            {
                // ternary Operator
                isLoading && ( <h2>Loading...</h2> )
            }

            <div className="card-grid">
                {
                    images.map( ( image )=> (
                        <GifItem 
                            key={ image.id } 
                            // propagation properties
                            { ...image }
                        />
                    ))
                }
            </div>
          
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
