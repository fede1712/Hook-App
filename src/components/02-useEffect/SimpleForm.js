import React, { useEffect, useState } from 'react'
import { Message } from './Message'
import './SimpleForm.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({ name: '', email: '' })
    const { name, email } = formState

    useEffect(() => {

    }, [])

    useEffect(() => {

    }, [formState])

    useEffect(() => {

    }, [email])

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value

        })
    }

    return (
        <>
            <h1>UseEffect</h1>
            <hr />
            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Enter your name'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <hr />
            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='Enter your email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name === '123') && <Message />}

        </>
    )
}
