import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className='list-group list-group-flush'>
            {todos.map(elm => (
                <TodoListItem key={elm.id} elm={elm} handleDelete={handleDelete} handleToggle={handleToggle} />
            )
            )}
        </ul>
    )
}
