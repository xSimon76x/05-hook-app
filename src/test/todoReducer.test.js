import { todoReducer } from "../components/08-useReducer/todoReducer";


describe('Pruebas en el todoReducer', () => {

    const initialState = [
        {
            id: 1,
            description: "todo initial",
            done: false
        }
    ];

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);
    });

    test('debe de agregar un nuevo todo', () => {
        const action = {
            type: '[TODO] add todo',
            payload: {
                id: 2,
                description: "nuevo initial",
                done: false
            }
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('debe de eliminar un todo', () => {
        const action = {
            type: '[TODO] add todo',
            payload: {
                id: 2,
                description: "nuevo initial",
                done: false
            }
        }

        const newState = todoReducer(initialState, action);

        const newAction = {
            type: '[TODO] remove todo',
            payload: 2
        }

        const newStateRemove = todoReducer(newState, newAction);
        
        expect(newStateRemove.length).toBe(1);
        expect(newStateRemove).toEqual(initialState);

    });

    test('debe de realizar una modificación en un todo', () => {
        const action = {
            type: '[TODO] toggle todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);

        expect(newState[0].done).toBe(true);
    });
    
    





});
