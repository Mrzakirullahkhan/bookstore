import React from 'react'

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container m-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='md:w-1/2 w-full '>left</div>
        <div className='md:w-1/2 w-full '>right</div>
    </div>
    </>
  )
}

export default Banner