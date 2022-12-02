import { useEffect, useState } from "react";
import { getGifs } from "../helpers";


/**
 * Custom Hook is any that returns any
 * @returns any 
 */

export const useFetchGifts = ( category ) => {

    const [ images, setImages] = useState([]);

    // this use state is when calling tha api
    const [ isLoading, setIsLoading] = useState(true);

    // this a async function hath allow to gif whole category object components
    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );

        // when recip api information
        setIsLoading( false )
    }

    // useEffect is used when we want to do a sencondary effect on our function
    useEffect( () => {
        getImages();
    }, [])

    // returning especifict functions
    return {
        images,
        isLoading
    }
}
