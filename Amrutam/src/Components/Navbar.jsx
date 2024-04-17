import React from 'react'
import Button from './Button'

function Navbar() {
    return (
        <nav className='bg-[#FFF7E2] flex justify-between px-20 items-center p-5'>
            <div>
                <h1 className='text-3xl text-[#3A643B] tracking-widest font-semibold'>AMRUTAM</h1>
            </div>
            <div className='flex text-md justify-start gap-4'>
                <button className='text-[#474747]'>Home</button>
                <button className='text-[#3A643B] font-bold'>Find Doctors</button>
                <button className='text-[#474747]'>About Us</button>
            </div>

            <div className='flex gap-2'>
                <Button>Login</Button>
                <Button className={'bg-[#3A643B] text-white'}>Sign-Up</Button>
            </div>
        </nav>
    )
}

export default Navbar