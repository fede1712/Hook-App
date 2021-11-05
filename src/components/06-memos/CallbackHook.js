import React, { useCallback, useEffect, useState } from 'react'
import '../02-useEffect/SimpleForm.css'
import { ShowAddBtn } from './ShowAddBtn'


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const add = useCallback((num) => {
        setCounter(c => c + num)
    },
        [setCounter]
    )

    return (
        <div>
            <h1>Use Callback Hook: {counter}</h1>
            <hr />

            <ShowAddBtn add={add} />

        </div>
    )
}
