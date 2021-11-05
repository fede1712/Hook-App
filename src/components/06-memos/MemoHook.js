import React, { useMemo, useState } from 'react'
import { heavyProcess } from '../../helpers/heavyprocess'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/SimpleForm.css'

export const MemoHook = () => {

    const { counter, add, substract } = useCounter(5000)
    const [show, setShow] = useState(true)


    const memoHeavyPorcess = useMemo(() => heavyProcess(counter), [counter])

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />
            <p>{memoHeavyPorcess}</p>

            <button className='btn btn-outline-primary' onClick={add}>+1</button>
            <button className='btn btn-outline-warning' onClick={substract}>-1</button>

            <button className='btn btn-outline-secondary' onClick={() => setShow(!show)}>
                SHOW / HIDE{JSON.stringify(show)}
            </button>

        </div>
    )
}
