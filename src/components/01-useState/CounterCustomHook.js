import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './CounterApp.css'

export const CounterCustomHook = () => {
    const { state, add, substract, reset } = useCounter()
    return (
        <>
            <h1>Counter with custom Hook: {state}</h1>
            <hr />
            <button className='btn btn-primary' onClick={() => add(2)}>+1</button>
            <button className='btn btn-secondary' onClick={reset}>reset</button>
            <button className='btn btn-warning' onClick={() => substract(1)}>-1</button>
        </>
    )
}