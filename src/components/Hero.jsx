import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex  flex-col items-center justify-center  '>
            <div className='pt-60 flex items-center justify-center '>
                <h1 className=' wrap  text-center  font-bold text-2xl sm:text-7xl text-[#53d364]'>We build websites that turn <br/>
    visitors into paying customers.</h1>
             </div>
        </div>
        <div className='w-full flex items-center justify-center text-xl '>
            <p className=' w-[60%] text-center pt-15 text-m sm:ext-xl'>High-converting websites designed with strategic copy and seamless <br/>  development to attract ready-to-buy customers—helping brands worldwide turn <br/> visitors into loyal clients and drive growth.</p>
        </div>
        <div className='pt-20'><button className=' p-3 pt hover:bg-gray-300 bg-[#53d364] cursor-pointer  text-black border rounded-xl font-bold '>Book a call with Shubham</button></div>
        </div>
    </div>
  )
}

export default Hero
