export const getGifs = async( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=s80JgtLNQqyn6muSB6XqusLcSz5jOEgZ&q=${ category }&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    // we use map to get speciffics api elements 
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}