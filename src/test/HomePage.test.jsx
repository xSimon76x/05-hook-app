import { render, screen } from "@testing-library/react";
import { HomePage } from '../components/09-useContext'
import { UserContext } from "../components/09-useContext/context/UserContext";

describe('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: "simon"
    }

    test('debe de mostrar el componente sin el usuario', () => {
        
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        );
        
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
        // screen.debug();

    });

    test('debe de mostrar el componente CON el usuario', () => {
        
        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        );
        
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.id.toString());
        expect(preTag.innerHTML).toContain(user.name);

    });
    

});


