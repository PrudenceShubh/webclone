import React from 'react'

const CaseStudy = () => {
  return (
    <div id='casestudy'>
      <div className=' pt-50 overflow-hidden w-full'>
        <div className='flex w-[100%]  item-cemter justify-center text-5xl font-samibold p-5 text-[#53d364]'><h1 className='text-center font-bold '>Case Study</h1></div>
        {/* Banner for case study */}
        <div className=' flex pt-10 gap-10 w-600'>
            <div className='w-150 cursor-pointer'> <img src="src\assets\webphotos\Wassup Media Co.png" alt="" /></div>
            <div className=' pt-15 w-150 cursor-pointer'> <img src="src\assets\webphotos\Spain Academy.png" alt="" /></div>
            <div className='w-150 cursor-pointer'> <img src="src\assets\webphotos\Prestige.png" alt="" /></div>
            {/* <div> <img src="src\assets\webphotos\Nexchain AI.png" alt="" /></div> */}
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
