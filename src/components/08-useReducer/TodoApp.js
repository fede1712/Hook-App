import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './TodoApp.css'

const initialState = [{
    id: new Date().getTime(),
    description: 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState)


    return (
        <div>
            <h1>TODO App ({todos.length})</h1>
            <hr />
            <ul className='list-group list-group-flush'>
                {todos.map(elm => (
                    <>
                        <li key={elm.id} className='list-group-item'>
                            <p className='text-center'>{elm.description}</p>
                        </li>
                        <button className='btn btn-outline-danger'>Delete</button>
                    </>
                )
                )}
            </ul>
        </div>
    )
}
