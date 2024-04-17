import React from 'react'
import BoxWrapper from './BoxWrapper'
import home from '../assets/home.svg'

function WorkExp() {
    return (
        <BoxWrapper title={"My Work Experience"}>
            <div className='flex flex-col justify-start gap-4 w-full p-4'>
                <h1 className='text-[#3A643B] text-[1.2em] font-semibold'>{("I have been in practice for : 7+ Years").toUpperCase()}</h1>
                <p className='h-[1px] w-2/3 bg-gray-300'></p>
                <div className='flex flex-col items-start'>
                    <SmallHomeBox title={"Midtown Medical Clinic"} subtext={"Senior doctor"} date={"2016-PRESENT"} />
                    <SmallHomeBox title={"Midtown Medical Clinic"} subtext={"Senior doctor"} date={"2010-2015"} />
                </div>
            </div>
        </BoxWrapper>
    )
}

export default WorkExp

export function SmallHomeBox({ title, subtext, date }) {
    return <>
        <div className='flex justify-center gap-2 items-center p-4 rounded-lg'>
            <div className='flex items-center gap-2'>
                <img src={home} alt="home-icon" />
                <div className='w-96'>
                    <h2 className='text-[1.2em] font-light'>{title}</h2>
                    <p className='text-gray-400 font-thin'>{subtext}</p>
                </div>
            </div>
            <div>
                <p className='text-[1.2em] text-gray-500'>{date}</p>
            </div>
        </div>
    </>
}