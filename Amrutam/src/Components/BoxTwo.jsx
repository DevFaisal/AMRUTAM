import React from 'react'
import Button from './Button'
import sc from '../assets/social.svg'


function BoxTwo() {
    return (
        <div className='flex flex-col px-10  justify-start gap-2 rounded-lg border'>
            <div className='flex  justify-between items-center border my-5 px-4 py-3 rounded-lg'>
                <h1>Appointment Fee</h1>
                <p className='font-bold text-[#3A643B]'>₹699.00</p>
            </div>
            <div className='flex justify-center items-center gap-1'>
                <button className='font-semibold'>Select your mode of session</button>
                <p className='h-[1px] bg-gray-400 w-[50%]'></p>
            </div>
            <div className='flex justify-center gap-4 p-4'>
                <SmallBox text={"In-Clinic"} time={"45 min"} />
                <SmallBox text={"Video"} time={"45 min"} />
                <SmallBox text={"Chat"} time={"10 min"} />
            </div>
            <div className='flex justify-center items-center gap-2'>
                <button className='font-semibold'>Pick a Time slot</button>
                <p className='h-[1px] bg-gray-400 w-[40%]'></p>
                <input type="date" />
            </div>
            <div className='flex  justify-between items-center border mt-5 px-4 py-3 rounded-lg'>
                <SmallBox text={"Mon, 10 Oct"} time={"10 Slot"} />
                <SmallBox text={"Tue, 11 Oct"} time={"02 Slot"} />
                <SmallBox text={"Wed, 12 Oct"} time={"05 Slot"} />
            </div>
            <div className='flex flex-col items-start justify-between  my-5 px-4 py-3 rounded-lg gap-2'>
                <h1 className='text-md font-semibold'>Morning</h1>
                <div className='grid grid-cols-4 gap-2'>
                    <ExtraSmallBox text={"09:00 AM"} />
                    <ExtraSmallBox text={"09:30 AM"} />
                    <ExtraSmallBox text={"10:00 AM"} />
                    <ExtraSmallBox text={"10:30 AM"} />
                    <ExtraSmallBox text={"11:00 AM"} />
                    <ExtraSmallBox text={"11:30 AM"} />
                </div>
            </div>
            <div className='flex flex-col items-start justify-between px-4 py-3 rounded-lg gap-2'>
                <h1 className='text-md font-semibold'>Evening</h1>
                <div className='grid grid-cols-4 gap-2'>
                    <ExtraSmallBox text={"09:0000 PM"} />
                    <ExtraSmallBox text={"09:30 PM"} />
                    <ExtraSmallBox text={"10:00 PM"} />
                    <ExtraSmallBox text={"10:30 PM"} />
                    <ExtraSmallBox text={"11:00 PM"} />
                    <ExtraSmallBox text={"11:30 PM"} />
                </div>
            </div>
            <div className='flex justify-center py-5 '>
                <button className={"px-7 w-96 rounded-lg bg-[#3A643B] text-white font-semibold py-3.5"}>
                    <p className='font-lighter text-[1.2em]'>Make an Appointment</p>
                </button>
            </div>
        </div>
    )
}

export default BoxTwo



export function SmallBox({ text, time }) {
    return <div className='flex flex-col justify-center w-32 items-center border border-lg  py-2 rounded-lg hover:bg-green-800 hover:text-white'>
        <h2 className='font-semibold'>{text}</h2>
        <p className='text-gray-400 font-thin'>{time}</p>
    </div>
}

export function ExtraSmallBox({ text, onClick, className }) {
    return <div className={`flex flex-col justify-center w-24 items-center ${className} border border-lg py-4 rounded-lg hover:bg-green-800 hover:text-white`}>
        <button className='font-lighter'>{text}</button>
    </div>
}