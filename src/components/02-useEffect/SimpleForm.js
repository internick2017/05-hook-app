import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {




    const [formState, setFormState] = useState(
        {
            name: '',
            email: ''
        }
    );

    const { name, email } = formState;

    useEffect(() => {
        console.log('cambio formulario');
    }, [formState])

    useEffect(() => {
        console.log('cambio email');
    }, [email])


    useEffect(() => {
        console.log('hey');
    }, [])

    const handleInputEvent = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className='form-group'>
                <input
                    type="text"
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputEvent}
                />

            </div>
            <div className='form-group'>
                <input
                    type="text"
                    name='email'
                    className='form-control'
                    placeholder='email@'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputEvent}
                />

            </div>

            {(name === '123') && <Message />}
        </>
    )
}
