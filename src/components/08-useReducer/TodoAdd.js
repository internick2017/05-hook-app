import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handeSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset()
    }
    return (
        <>
            <h4>Agregar TODO 4</h4>
            <hr />
            <form onSubmit={handeSubmit}>
                <input
                    type="text"
                    name="description"
                    className='form-control'
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />

                <button
                    className='mt-1 btn btn-primary w-100'
                >
                    Agregar
                </button>

            </form>
        </>
    )
}
