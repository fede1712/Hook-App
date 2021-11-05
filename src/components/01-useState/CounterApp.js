import React, { useState } from 'react'
import './CounterApp.css'

export const CounterApp = () => {

    const [counter, setCounter] = useState({ counter1: 10, counter2: 20 })

    const { counter1, counter2 } = counter

    const addCounter1 = () => {
        setCounter({
            ...counter,
            counter1: counter1 + 1
        })
    }
    const substractCounter1 = () => {
        setCounter({
            ...counter,
            counter1: counter1 - 1
        })
    }


    return (
        <div>
            <h1>Counter1 {counter1}</h1>
            <h1>Counter2 {counter2}</h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={addCounter1}
            >
                +1
            </button>
            <button
                className='btn btn-warning'
                onClick={substractCounter1}
            >-1
            </button>


        </div >
    )
}
