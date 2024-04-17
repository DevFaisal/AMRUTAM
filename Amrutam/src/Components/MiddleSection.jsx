import React from 'react'
import Box from './Box'
import BoxTwo from './BoxTwo'
import SpecializeBox from './SpecializeBox'
import ConcernsBox from './ConcernsBox'
import WorkExp from './WorkExp'
import FeaturesBox from './FeaturesBox'

function MiddleSection() {
    return (
        <div className='flex gap-3 text-sm'>
            <div className='flex flex-col gap-3'>
                <Box />
                <SpecializeBox />
                <ConcernsBox />
                <WorkExp />
                <FeaturesBox />
            </div>
            <div>
                <BoxTwo />
            </div>
        </div>
    )
}

export default MiddleSection