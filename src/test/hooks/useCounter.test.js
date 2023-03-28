import { act, renderHook } from "@testing-library/react";
import { useCounter } from '../../src/hooks';

describe('Pruebas en el useCounter', () => {
  
    test('debe de retornar los valores por defecto', () => {
        const { result: { current } } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = current;

        expect(counter).toBe(1);
        expect(decrement).toEqual( expect.any( Function ) );
        expect(increment).toEqual( expect.any( Function ) );
        expect(reset).toEqual( expect.any( Function ) );

    });

    test('debe de incrementar el contador', () => {

        const defaultValue = 100;

        const { result } = renderHook( () => useCounter(defaultValue) );
        const { increment } = result.current;

        act(
            ()=> {
                increment(2);
            }
        );

        expect(result.current.counter).toBe(102);


    });

    test('debe de decrementar el contador', () => {

        const defaultValue = 100;

        const { result } = renderHook( () => useCounter(defaultValue) );
        const { decrement } = result.current;

        act(
            ()=> {
                decrement(5);
            }
        );

        expect(result.current.counter).toBe(95);

    });

    test('debe de realizar el reset', () => {

        const defaultValue = 100;

        const { result } = renderHook( () => useCounter(defaultValue) );
        const { decrement, reset } = result.current;

        act(
            ()=> {
                decrement(5);
                reset();
            }
        );

        expect(result.current.counter).toBe(100);

    });
    
})
