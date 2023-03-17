import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {

    const { 
        formState, 
        onInputChange, 
        username, 
        email, 
        password, 
        onResetForm 
    } = useForm({
        username: '',
        email: '',
        password: ''
    });

    return (
        <>
            <div>SimpleForm</div>
            <hr />
            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username" 
                value={username}
                onChange={onInputChange}
            />

            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password" 
                value={password}
                onChange={onInputChange}
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="simon@gmail.com"
                name="email" 
                value={email}
                onChange={onInputChange}
            />
        
            <button onClick={onResetForm} className="btn btn-primary mt-2" >Borrar</button>
        </>
    )
}
