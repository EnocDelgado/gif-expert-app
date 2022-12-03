import { getGifs } from "../../helpers/getGifs"

describe('Test on getGifs', () => {

    test('should return a gif array', async() => {

        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBeGreaterThan( 0 );
        // another more specific way
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })
    })
})