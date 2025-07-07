import React from 'react'

const CaseStudy = () => {
  return (
    <div id='casestudy'>
      <div className='pt-50 overflow-hidden w-full'>
        <div className='flex w-[100%] items-center justify-center text-5xl font-semibold p-5 text-[#53d364]'>
          <h1 className='text-center font-bold'>Case Study</h1>
        </div>
        {/* Banner for case study */}
        <div className='pt-10 px-4 md:px-0'>
          {/* Desktop view */}
          <div className='hidden md:flex justify-center gap-10 w-full max-w-6xl mx-auto'>
            <div className='w-150 cursor-pointer hover:scale-105 transition-transform duration-300'>
              <img src="/webphotos/Wassup Media Co.png" alt="Wassup Media Co" className='w-full h-auto rounded-lg shadow-lg' />
            </div>
            <div className='pt-15 w-150 cursor-pointer hover:scale-105 transition-transform duration-300'>
              <img src="/webphotos/Spain Academy.png" alt="Spain Academy" className='w-full h-auto rounded-lg shadow-lg' />
            </div>
            <div className='w-150 cursor-pointer hover:scale-105 transition-transform duration-300'>
              <img src="/webphotos/Prestige.png" alt="Prestige" className='w-full h-auto rounded-lg shadow-lg' />
            </div>
          </div>
          
          {/* Mobile swipe view */}
          <div className='md:hidden'>
            <div className='flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide' 
                 style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              <div className='flex-shrink-0 w-80 snap-center cursor-pointer'>
                <img src="/webphotos/Wassup Media Co.png" alt="Wassup Media Co" 
                     className='w-full h-auto rounded-lg shadow-lg' />
              </div>
              <div className='flex-shrink-0 w-80 snap-center cursor-pointer'>
                <img src="/webphotos/Spain Academy.png" alt="Spain Academy" 
                     className='w-full h-auto rounded-lg shadow-lg' />
              </div>
              <div className='flex-shrink-0 w-80 snap-center cursor-pointer'>
                <img src="/webphotos/Prestige.png" alt="Prestige" 
                     className='w-full h-auto rounded-lg shadow-lg' />
              </div>
              <div className='flex-shrink-0 w-80 snap-center cursor-pointer'>
                <img src="/webphotos/Nexchain AI.png" alt="Nexchain AI" 
                     className='w-full h-auto rounded-lg shadow-lg' />
              </div>
            </div>
            
            {/* Swipe indicator */}
            <div className='text-center mt-4 text-sm text-gray-400'>
              <span>← Swipe to see more →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
