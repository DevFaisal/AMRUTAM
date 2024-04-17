import React from 'react'
import Button from './Button'
import bg from '../assets/bg.svg'
import verified from '../assets/verified.svg'
import stars from '../assets/stars.svg'
import image from '../assets/image.png'

function TopSection() {
    return (
        <div className='flex flex-col justify-center items-center '>
            <div className=' relative top-10 rounded-lg overflow-hidden z-0'>
                <img src={bg} alt="bg" />
            </div>
            <div className='bg-[#FFFBF2] w-[1205px] h-10 p-20 z-10 border-x border-b border-gray-200'>
                <div className='flex items-center relative bottom-40'>
                    <img width={180} className='rounded-full border border-white  mt-10' src={image} alt="" />
                    <div className='flex mt-24 justify-evenly  w-full'>
                        <div>
                            <div className='flex items-center gap-2'>
                                <h1 className='text-2xl font-lighter'>Dr. Bruce Willis</h1>
                                <img src={verified} alt="" />
                            </div>
                            <div className='flex justify-start gap-3 flex-col'>
                                <p className='text-md text-[#3A643B]'>Gynecologist</p>
                                <img width={120} src={stars} alt="" />
                            </div>

                        </div>
                        <div className='flex p-5 items-end justify-evenly w-1/2'>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-sm text-[#3A643B] '>Followers</h1>
                                <p className='text-xl font-bold'>850</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-sm text-[#3A643B] '>Followings</h1>
                                <p className='text-xl font-bold'>18K</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-sm text-[#3A643B] '>Posts</h1>
                                <p className='text-xl font-bold'>250</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <Button className={'bg-[#3A643B] px-5 py-2.5 text-white'}>
                                Book an Appointment
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSection