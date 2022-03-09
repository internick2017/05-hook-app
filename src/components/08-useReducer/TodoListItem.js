import React from 'react'

export const TodoListItem = ({ todo, i, handeDelete, handeToggle }) => {
    return (
        <li
            key={todo.id}
            className="list-group-item"
        >
            <p
                className={`${todo.done && 'complete'}`}
                onClick={() => handeToggle(todo.id)}
            > {i + 1}. {todo.desc}</p>
            <button
                className='btn btn-danger'
                onClick={() => handeDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}
