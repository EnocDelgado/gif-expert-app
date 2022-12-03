import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifts } from "../../hooks/useFetchGifts";

 // do a complete mock in this path
jest.mock('../../hooks/useFetchGifts');

const category = 'Bleach';

describe('Test in <GifGrid />', () => {

    test('should first', () => {

        // we make reference to GifGrid returns
        useFetchGifts.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } />);
        expect( screen.getByText( 'Loading...' ) );
        expect( screen.getByText( category) )
    });

    test('should display items when upload useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Ichigo',
                url: 'https://localhost/ichigo.jpg'
            },
            {
                id: 'EDF',
                title: 'Inou',
                url: 'https://localhost/inoue.jpg'
            },
        ]
        // we make reference to GifGrid returns
        useFetchGifts.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } />);
        // screen.debug();
        // I've put 2 cause they are referring to gifs and there are two objects
        expect( screen.getAllByRole('img').length ).toBe(2);
    });
})