import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='flex flex flex-col items-center justify-center'>
            <div className='flex flex flex-col items-center justify-center  '>
            <div className='pt-60 '>
                <h1 className=' text-center  font-bold text-7xl text-[#53d364]'>We build websites that turn <br/>
    visitors into paying customers.</h1>
             </div>
        </div>
        <div>
            <p className='text-center pt-15  text-xl'>High-converting websites designed with strategic copy and seamless <br/>  development to attract ready-to-buy customers—helping brands worldwide turn <br/> visitors into loyal clients and drive growth.</p>
        </div>
        <div className='pt-20'><button className=' p-3 pt hover:bg-gray-300 bg-[#53d364] cursor-pointer  text-black border rounded-xl font-bold '>Book a call with Shubham</button></div>
        </div>
    </div>
  )
}

export default Hero
