import React from 'react'
import girlImage from '../assets/drgirl.png'
import Button from './Button'

function MidSection() {
    return (
        <div className='p-4'>
            <div className='flex mt-3 justify-end gap-6'>
                <button className='rounded-lg px-3 py-2 bg-[#EAF2EA]'>Hair care <span className='text-gray-400'>X</span></button>
                <button className='rounded-lg px-3 py-2 bg-[#EAF2EA]'>Female <span className='text-gray-400'>X</span></button>
                <button className='rounded-lg px-3 py-2 bg-[#EAF2EA]'>Rs.0-Rs.500 <span className='text-gray-400'>X</span></button>
                <button className='rounded-lg px-3 py-2 bg-[#EAF2EA]'>Hindi <span className='text-gray-400'>X</span></button>
            </div>
            <div className='flex my-10 p-5 gap-10 justify-center'>
                <Card name={"Dr. Dr. Bruce Willis"} />
                <Card name={"Dr. Prerna Narang"} />
                <Card name={"Dr. Prerna Narang"} />
            </div>
        </div>
    )
}

export default MidSection


function Card({ name }) {
    return (
        <div className=' bg-[#FFF7E2] shadow-md shadow-gray-300 border rounded-xl p-4 w-1/4'>
            <div className='flex flex-col justify-center items-center p-4 gap-4'>
                <div className='flex flex-col items-center'>
                    <div>
                        <img className='relative z-0' width={100} src={girlImage} alt="" />
                        <span className='bg-black relative bottom-5 left-8 z-10 text-sm text-white rounded-lg p-1'>4.2 ⭐️  </span>
                    </div>
                    <h1 className='text-xl font-bold'>{name}</h1>
                    <p className='text-gray-400'>Male-Female Infertility</p>
                    <p className='text-gray-400'>7 years of Experience</p>
                    <p className='text-gray-400'>Speaks: English, Hindi, Marathi</p>
                </div>
                <div className='flex gap-4'>
                    <div className='flex flex-col justify-center items-center border border-gray-400 rounded-lg p-2'>
                        <h1 className='text-xs'>Video Consultation</h1>
                        <p className='text-green-700 font-bold'>₹600</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border  border-gray-400 rounded-lg p-2'>
                        <h1 className='text-xs '>Chat Consultation</h1>
                        <p className='text-green-700 font-bold'>Free</p>
                    </div>
                </div>
                <div className='flex gap-3 w-full flex-col'>
                    <Button
                        onClick={(e) => window.location.href = "/doc"}
                    >
                        View Profile
                    </Button >
                    <Button
                        className={"bg-[#3A643B] text-white rounded-md "}>
                        Book a Consultation
                    </Button>
                </div>
            </div>
        </div>
    )
}