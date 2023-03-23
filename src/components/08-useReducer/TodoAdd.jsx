import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({handleNewTodo}) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();

        if( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description
        }

        handleNewTodo(newTodo);
        onResetForm();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                name='description'
                placeholder="Que hay que hacer?"
                className="form-control"
                value={description}
                onChange={onInputChange}
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}
