import React from 'react'
import BoxWrapper from './BoxWrapper'
import Button from './Button'

function ConcernsBox() {
    return (
        <BoxWrapper title={"The Concerns I Treat"}>
            <div className='grid grid-cols-4 gap-3'>
                <MinuteBox>Skin Treatment</MinuteBox>
                <MinuteBox>Pregnancy</MinuteBox>
                <MinuteBox>Period Doubts</MinuteBox>
                <MinuteBox>Endometriosis</MinuteBox>
                <MinuteBox>Pelvic Pain</MinuteBox>
                <MinuteBox>Ovarian Cysts</MinuteBox>
                <Button>+5 More</Button>
            </div>
        </BoxWrapper >
    )
}

export default ConcernsBox


export function MinuteBox({ children }) {
    return <div className='bg-[#F7F7FC] px-3 text-center py-3 rounded-lg'>
        <p className='text-md text-[#3A643B]'>{children}</p>
    </div>
}