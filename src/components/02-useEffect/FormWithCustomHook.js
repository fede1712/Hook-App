import React, { useEffect } from 'react'
import './SimpleForm.css'
import { useForm } from '../../hooks/useForm'

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange, handleSubmit] = useForm({ name: '', email: '', password: '' })
    const { name, email, password } = formValues

    useEffect(() => {
        console.log('Email cambió')
    }, [email])

    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr />
            <form onSubmit={e => handleSubmit(e)}>
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
                <hr />
                <div className='form-group'>
                    <input
                        type='password'
                        name='password'
                        className='form-control'
                        placeholder='**********'
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Send</button>
            </form>


        </>
    )
}
