import React from 'react'
import imgcp from "../assets/image-copy.png"
import SearchInput from './SearchInput'

function SearchSection() {
  return (
    <div className='bg-hero-pattern bg-contain w-screen' >
      <div className='flex gap-5 h-56 flex-col justify-center items-center'>
        <h1 className='text-2xl font-semibold tracking-wider'>Find expert Doctors for an In-clinic session here</h1>
        <div className='flex gap-3'>
          <SearchInput placeholder={"Search Location"} />
          <SearchInput placeholder={"eg. Doctor, specification, clinical name"} className={"w-96"} />
        </div>
      </div>
    </div>
  )
}

export default SearchSection



