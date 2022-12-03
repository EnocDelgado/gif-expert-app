import { render, screen } from "@testing-library/react"
import { GifItem } from "../../components/GifItem"

describe('Testing on GifItem', () => {

    const title = 'Saitama';
    const url   = 'https://one-punch.com/saitama.jpg';

    test('should do match with snapshot', () => {

        const { container } = render( <GifItem title={ title} url={ url }/>)
        expect( container ).toMatchSnapshot();
    })

    test('should display the image and url specified', () => {

        render( <GifItem title={ title} url={ url }/>)
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url )
        // expect( screen.getByRole('img').alt ).toBe( title )
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('should display the title in the component', () => {
        render( <GifItem title={ title} url={ url }/>);
        expect( screen.getByText( title ) ).toBeTruthy();
    })
})