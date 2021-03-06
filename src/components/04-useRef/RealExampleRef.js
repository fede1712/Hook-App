import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-Examples/MultipleCustomHooks'
import '../02-useEffect/SimpleForm.css'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button className='btn btn-outline-secondary mt-5' onClick={() => setShow(!show)}>Show / Hide</button>

        </div >
    )
}
