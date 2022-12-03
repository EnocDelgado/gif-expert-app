import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"

describe('Test in <AddCategory />', () => {


     test('should change text box value', () => {

        render( <AddCategory onNewValue={ () => {} }/>)
        // this our reference of our mian props
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Ichigo'}} );

        expect( input.value ).toBe('Ichigo');
        // screen.debug();
     });

     test('should call onNewValue if input has a value', () => {

        const inputValue = 'Ichigo';
        const onNewValue = jest.fn() // jestmock is func simulation
        render( <AddCategory onNewValue={ onNewValue }/>)

        // this are references to our form
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue} } );
        fireEvent.submit( form ); // this evaluates the behavior of our component
        // screen.debug();
        expect( input.value ).toBe('');

        expect( onNewValue ).toHaveBeenCalled();
        expect( onNewValue ).toHaveBeenCalledTimes(1);
        expect( onNewValue ).toHaveBeenCalledWith( inputValue );
     });

    //  test('should not call onNewValue if input value is empty', () => {

    //  })
})