import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/SimpleForm.css'
import { Small } from './Small'

export const Memorize = () => {

    const { counter, add, substract } = useCounter(10)
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Counter: <Small value={counter} /></h1>

            <button className='btn btn-outline-primary' onClick={add}>+1</button>
            <button className='btn btn-outline-warning' onClick={substract}>-1</button>

            <button className='btn btn-outline-secondary' onClick={() => setShow(!show)}>
                SHOW / HIDE{JSON.stringify(show)}
            </button>

        </div>
    )
}
