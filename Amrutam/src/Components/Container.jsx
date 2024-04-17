import React from 'react'

function Container({ children }) {
    return (
        <div className='max-w-auto h-[140rem] mx-32 overflow-hidden flex flex-col items-center gap-3'>
            {children}
        </div>
    )
}

export default Container