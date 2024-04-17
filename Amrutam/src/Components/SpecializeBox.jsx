import React from 'react'
import BoxWrapper from './BoxWrapper'
import specialize from '../assets/specialize.svg'

function SpecializeBox() {
    return (
        <BoxWrapper title={"I Specialize In"}>
            <div className='flex justify-start'>
                <img src={specialize} alt="specialize" />
            </div>
        </BoxWrapper>
    )
}

export default SpecializeBox