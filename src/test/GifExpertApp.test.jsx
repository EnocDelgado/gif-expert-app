import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../GifExpertApp"

describe('Test on GifExpertApp', () => {

    test('should do match with snapshot', () => {

        const { container } = render( <GifExpertApp />)
        expect( container ).toMatchSnapshot();
    })

})