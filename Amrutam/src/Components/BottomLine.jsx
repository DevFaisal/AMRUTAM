import React from 'react'
import SearchInput from './SearchInput'

function BottomLine() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className="flex justify-around items-center h-20 w-2/3">
        <SearchInput className=" bg-gray-200" placeholder="Expertise" />
        <SearchInput className=" bg-gray-200" placeholder="Gender" />
        <SearchInput className=" bg-gray-200" placeholder="Fees" />
        <SearchInput className=" bg-gray-200" placeholder="Language" />
        <SearchInput className="  bg-green-100" placeholder="All Filters" />
      </div>
      <p className='h-[1px] w-full bg-gray-200'></p>
    </div>
  )
}

export default BottomLine