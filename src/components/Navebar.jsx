import React from 'react';

const Navebar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50   shadow-xl'>
      <div className='w-full pt-4 flex items-center justify-center'>
        <div className='flex gap-4 w-86 rounded-4xl backdrop-blur p-3 border-2 border-[#53d364] font-bold text-[#53d364] items-center justify-center'>
          <div>
            <img className='w-7.5 cursor-pointer' src="src/assets/webphotos/Uniodessy Logo.png" alt="logo" />
          </div>
          <div className='cursor-pointer'><a href="#benifits">Benefits</a></div>
          <div className='cursor-pointer'><a href="#casestudy">Case Study</a></div>
          <div className='cursor-pointer ' > <a href="#">Book A Call</a></div>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
