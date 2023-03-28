import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../components/08-useReducer/TodoApp";
import { useTodo } from "../../hooks/useTodo";

jest.mock('../hooks/useTodo');

describe('Pruebas <TodoApp />', () => {

    test('debe de mostrar el componente correctamente', () => {

        useTodo.mockReturnValue(
            {
                state: [
                    {
                        id: 1, description: 'Todo #1', done: false
                    },
                    {
                        id: 1, description: 'Todo #2', done: true
                    }
                ],
                todosCount: 2,
                pendingTodosCount: 1,
                handleNewTodo: jest.fn(),
                handleRemoveTodo: jest.fn(),
                handleToggleTodo: jest.fn()
            }
        )

        render(
            <TodoApp />
        );
        

        expect(screen.getByText("Todo #1")).toBeTruthy();
        expect(screen.getByText("Todo #2")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();


    });

    
})
