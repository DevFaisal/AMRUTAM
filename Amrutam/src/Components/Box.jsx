import React from 'react'
import Button from './Button'
import sc from '../assets/social.svg'

function Box() {
    return (
        <div className='rounded-lg border max-h-96'>
            <div className='flex justify-between items-center bg-gradient-to-r from-[#F4F7EC] p-3'>
                <h1 className='text-xl'>A Little About me</h1>
                <Button>Follow +</Button>
            </div>
            <div className='py-5'>
                <div>
                    <p className='text-sm text-gray-400 px-10 pt-10 pb-5'>Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the </p>
                </div>
                <div className='flex items-center gap-3 pl-10'>
                    <p className='h-[1px] bg-gray-400 w-[70%]'></p>
                    <button className='underline text-sm'>Read More</button>
                </div>
                <div className='flex justify-start items-center pl-10 pt-10'>
                    <h1 className='text-lg'>Language Spoken</h1>
                    <div className='flex gap-3 pl-10'>
                        <div className='bg-blue-100 px-5 py-2 rounded-lg'>
                            <p className='text-md text-[#505050]'>English</p>
                        </div>
                        <div className='bg-blue-100 px-5 py-2 rounded-lg'>
                            <p className='text-md text-[#505050]'>Hindi</p>
                        </div>
                        <div className='bg-blue-100 px-5 py-2 rounded-lg'>
                            <p className='text-md text-[#505050]'>Telugu</p>
                        </div>
                    </div>
                </div>
                <div className='flex pl-10 pt-10'>
                    <img src={sc} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Box