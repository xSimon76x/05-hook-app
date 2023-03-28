import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../components/09-useContext/LoginPage";
import { UserContext } from "../components/09-useContext/context/UserContext";

describe('Pruebas al <LoginPage />', () => {

    test('debe de mostrarse el componente sin el usuario', () => {
        
        const setUser = jest.fn()

        render(
            <UserContext.Provider value={{user: null, setUser}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const pre = screen.getByLabelText('pre');
        
        expect(pre.innerHTML).toBe("null");
    });

    test('debe de mostrarse el componente con el usuario', () => {
        
        const setUser = jest.fn();
        const userTest = {
            id:123,
            name: 'Juan',
            email: 'juan@gmail.com'
        }

        render(
            <UserContext.Provider value={{user: null, setUser}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const mostrarUsuario = screen.getByRole('button');
        fireEvent.click(mostrarUsuario);

        expect(setUser).toHaveBeenCalledWith(userTest);


    });
    
});
