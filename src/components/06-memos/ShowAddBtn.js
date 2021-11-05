import React from 'react'

export const ShowAddBtn = React.memo(({ add }) => {

    console.log('Me volví a generar :(')
    return (
        <button
            className='btn btn-primary'
            onClick={() => {
                add(5)
            }}
        >+1</button>
    )
}
)