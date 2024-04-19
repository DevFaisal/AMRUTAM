import React from 'react'

function Button({
    children,
    onClick,
    className,
    type,
    disabled,

}) {
    return (
        <button onClick={(onClick)} className={`px-4 py-1.5 ring-1 ${className} ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg`}>
            {children}
        </button>
    )
}

export default Button