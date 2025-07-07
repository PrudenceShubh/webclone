import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='flex items-center justify-center pt-30 '>
        <div className='border rounded-xl bg-[#0d0d0d] sm:w-[60%] p-15 flex flex-col items-center '>
        <div>
            <p className='text-center max-sm:text-m text-xl '>only 3 slots left for july</p>
            <p className='text-4xl max-sm:text-xl font-bold p-4 text-[#53d364]'>ready to levelup your business</p>
        </div>
        <div className=''><button className=' p-3 pt hover:bg-gray-300 bg-[#53d364] cursor-pointer  text-black border rounded-xl font-bold '>Book a call with Shubham</button></div>
      </div>
      </div>
    </div>
  )
}

export default Contact
// className=' text-5xl font-samibold p-5 text-[#53d364]'