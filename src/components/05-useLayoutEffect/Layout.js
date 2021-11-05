import React, { useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './Layout.css'

export const Layout = () => {

    const { counter, add } = useCounter(1)

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { quote } = !!data && data[0]

    const pTag = useRef()

    return (
        <>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className='blockquote text-right'>
                <p className='mb-0' ref={pTag}>{quote}</p>
            </blockquote>

            <button className='btn btn-secondary' onClick={add}>Next Qoute</button>
        </>
    )
}
