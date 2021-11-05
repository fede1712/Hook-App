import React, { useRef } from 'react'
import '../02-useEffect/SimpleForm.css'

export const FocusScreen = () => {

    const inputRef = useRef()
    const handleClik = () => {
        inputRef.current.select()
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input
                ref={inputRef}
                className='form-control'
                placeholder='Your Name'
            />
            <button
                className='btn btn-outline-primary mt-5'
                onClick={handleClik}
            >
                Focus

            </button>

        </div>
    )
}
