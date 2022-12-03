import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifts } from "../../hooks/useFetchGifts"

describe('Test on useFetchGifts', () => { 

    test('should return initial state', () => {

        // renderHook allow us to invoke to a custom hook(hooks just exist by react components )
        const { result } = renderHook( () => useFetchGifts('Ichigo'))
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0)
        expect( isLoading ).toBeTruthy();
    });

    test('should return an images array and isLoading in false', async() => {

        // renderHook allow us to invoke to a custom hook(hooks just exist by react components )
        const { result } = renderHook( () => useFetchGifts('Ichigo'))
        //  this method allow us to make promises
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        const { images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan(0)
        expect( isLoading ).toBeFalsy();
    });
})