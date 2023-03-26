import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from '../components/03-examples'
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en  <MultipleCustomHook />', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render( <MultipleCustomHook />);

        expect( screen.getByText('Loading...'));
        expect( screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        expect(nextButton.disabled).toBeTruthy();
    });

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Simon', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHook />);

        expect( screen.getByText('Hola Mundo')).toBeTruthy();
        expect( screen.getByText('Simon')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        expect(nextButton.disabled).toBeFalsy();
    });

    test('debe de llamar a la funcion incrementar', () => {

        
        useFetch.mockReturnValue({
            data: [{ author: 'Simon', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });
        


        

        render( <MultipleCustomHook />);

        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        fireEvent.click(nextButton);


        expect(mockIncrement).toHaveBeenCalled();

    });

});