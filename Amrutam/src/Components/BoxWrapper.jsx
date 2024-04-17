import React from 'react'

function BoxWrapper({ children, title }) {
    return (
        <div className='rounded-lg border max-h-auto'>
            <div className='flex justify-between items-center bg-gradient-to-r from-[#F4F7EC] p-3'>
                <h1 className='text-xl'>{title}</h1>
            </div>
            <div className='flex justify-center items-center py-5'>
                {children}
            </div>
        </div>
    )
}

export default BoxWrapper