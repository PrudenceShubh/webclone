import React from 'react'
// icons
import { MdOutlineGridOn } from "react-icons/md";
import { FiZap } from "react-icons/fi";
import { LuPuzzle } from "react-icons/lu";
import { LuCreditCard } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { IoMdInfinite } from "react-icons/io";




const Benifits = () => {
  return (
    <div id='benifits'>
        <div className='w-full'>
            <div className='flex flex-col  items-center justify-center min-h-screen'>
                <div className='flex flex-col items-center'>
                    <div className='font-bold text-3xl'>Benifits</div>
                    <div className=' text-5xl font-bold p-5 text-[#53d364] text-[35px]'>We run behind results</div>
                </div>


                <div className='grid grid-cols-3 gap-10 p-5'>
                    <div className=' border border-transparent hover:border-white rounded-2xl  p-5 flex flex-col '>
                        <div className='text-center font-bold '><MdOutlineGridOn className='w-16 h-16 text-[#53d364]'/></div>
                        <div className=' flex flex-col gap-2 pt-10'>
                        <p className='font-bold text-3xl pb-5'>Responsive Design</p>
                        <p>Flawless experiences across all devices and screen sizes.</p>
                        </div>
                    </div>
                    <div className=' border border-transparent hover:border-white rounded-2xl  p-5 flex flex-col '>
                        <div className='text-center font-bold '><FiZap className='w-16 h-16 text-[#53d364]'/></div>
                        <div className=' flex flex-col gap-2 pt-10'>
                        <p className='font-bold text-3xl pb-5'>Responsive Design</p>
                        <p>Flawless experiences across all devices and screen sizes.</p>
                        </div>
                    </div>
                    <div className=' border border-transparent hover:border-white rounded-2xl  p-5 flex flex-col '>
                        <div className='text-center font-bold '><LuPuzzle className='w-16 h-16 text-[#53d364]'/></div>
                        <div className=' flex flex-col gap-2 pt-10'>
                        <p className='font-bold text-3xl pb-5'>Responsive Design</p>
                        <p>Flawless experiences across all devices and screen sizes.</p>
                        </div>
                    </div>
                    <div className=' border border-transparent hover:border-white rounded-2xl  p-5 flex flex-col '>
                        <div className='text-center font-bold '><LuCreditCard className='w-16 h-16 text-[#53d364]'/></div>
                        <div className=' flex flex-col gap-2 pt-10'>
                        <p className='font-bold text-3xl pb-5'>Responsive Design</p>
                        <p>Flawless experiences across all devices and screen sizes.</p>
                        </div>
                    </div>
                    <div className=' border border-transparent hover:border-white rounded-2xl  p-5 flex flex-col '>
                        <div className='text-center font-bold '><FaRegUser className='w-16 h-16 text-[#53d364]'/></div>
                        <div className=' flex flex-col gap-2 pt-10'>
                        <p className='font-bold text-3xl pb-5'>Responsive Design</p>
                        <p>Flawless experiences across all devices and screen sizes.</p>
                        </div>
                    </div>
                    <div className=' border border-transparent hover:border-white rounded-2xl  p-5 flex flex-col '>
                        <div className='text-center font-bold '><IoMdInfinite className='w-16 h-16 text-[#53d364]'/></div>
                        <div className=' flex flex-col gap-2 pt-10'>
                        <p className='font-bold text-3xl pb-5'>Responsive Design</p>
                        <p>Flawless experiences across all devices and screen sizes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benifits
