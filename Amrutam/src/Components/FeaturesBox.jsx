import React from 'react'
import BoxWrapper from './BoxWrapper'
import girl from "../assets/girl.png"
import stars from "../assets/stars.svg"

function FeaturesBox() {
    return (
        <BoxWrapper title={"Featured Reviews (102)"}>
            <div className='flex flex-col gap-4  m-5'>
                <SmallFeatureBox />
                <SmallFeatureBox />
            </div>
        </BoxWrapper>
    )
}

export default FeaturesBox

function SmallFeatureBox({ title, subtext, date }) {
    return <div className='w-full p-5 rounded-lg bg-[#FAFAFA]'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
                <img width={50} src={girl} alt="girl" />
                <div>
                    <h1 className='text-[1.4em] font-light'>Alicent Hightower</h1>
                    <p className='text-gray-400'>Consulted for Skin care</p>
                </div>
            </div>
            <div>
                <p className='text-[1.2em] text-gray-400 font-light'>20 January 2023</p>
            </div>
        </div>
        <div className='flex flex-col gap-2 p-3'>
            <img width={130} src={stars} alt="" />
            <p className='text-[1.2em] text-gray-400'>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
        </div>
    </div>
}