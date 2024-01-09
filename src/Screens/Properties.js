import React from 'react'
import { Images } from '../Constants/Images'
import Vertical from '../Components/Vertical'
export default function Properties() {
    return (
        <div className='bg-[#EEEEEE] mt-20'>
            <img className='object-cover w-full h-[200px] lg:h-[350px]' src={Images.city} />
            <div className='flex flex-col lg:hidden items-center py-5'>
                <button
                    className='text-ms w-[88%]  flex justify-evenly items-center lg:text-base font-poppins text-[#5444e4] font-bold text-start border-2 border-[#5444e4] tracking-widest p-2.5 rounded-md'>
                    Search Properties
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                    </svg>
                </button>
                <div className='flex flex-col items-center justify-center w-[95%] py-5'>
                    <Vertical />
                    <Vertical />
                    <Vertical />
                    <Vertical />
                </div>
            </div>
        </div>
    )
}
