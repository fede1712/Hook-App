import React from 'react'

export const TodoListItem = ({ elm, handleDelete, handleToggle }) => {
    return (
        <li key={elm.id} className='list-group-item'>
            <p className={`${elm.done ? 'complete' : 'not-complete'}`} onClick={() => handleToggle(elm.id)}>{elm.description}</p>
            <button className='btn btn-outline-danger' onClick={() => handleDelete(elm.id)}>Delete</button>
        </li>
    )
}
