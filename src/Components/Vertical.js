import React from 'react'
import { TbBath, TbBed, TbRulerMeasure } from "react-icons/tb";

export default function Vertical() {
    return (
        <button className='h-[180px] w-[92%] lg:w-[350px] lg:h-[200px] bg-white rounded-lg shadow-lg flex flex-row justify-evenly items-center mb-5 '>
            <div className='h-[95%] w-[40%] bg-black rounded-lg' />
            <div className='flex flex-col h-[95%] w-[55%] justify-between items-start p-2'>
                <h3 className='text-ms w-[90%] font-poppins font-black self-start text-start'>Nowhow Haiz Mansion</h3>
                <h3 className='text-xs w-[90%] font-poppins font-bold self-start text-start text-[#5444e4]'>$770/Month</h3>
                <div className='flex w-[90%] justify-between items-center'>
                    <div className='flex items-center'>
                        <TbBed className='text-[#5444e4]' />
                        <h3 className='text-[10px] lg:text-xs font-poppins  font-medium self-center text-start ml-1'>2 Bedrooms</h3>
                    </div>
                    <div className='flex items-center'>
                        <TbBath className='text-[#5444e4]' />
                        <h3 className='text-[10px] lg:text-xs font-poppins  font-medium self-center text-start ml-1'>2 Baths</h3>
                    </div>
                </div>
                <div className='flex w-[90%] justify-between items-center'>
                    <div className='flex items-center'>
                        <TbRulerMeasure className='text-[#5444e4]' />
                        <h3 className='text-[10px] lg:text-xs font-poppins  font-medium self-center text-start ml-1'>1200 sqft</h3>
                    </div>
                    <div className='flex items-center'>
                        <h3 className='text-xs font-poppins font-black self-center text-start ml-1 text-[#5444e4]'>For Rent</h3>
                    </div>
                </div>
                <button className='text-xs w-[90%]  flex justify-evenly items-center lg:text-base font-poppins text-[#5444e4] font-bold text-start border-2 border-[#5444e4] tracking-widest p-1 rounded-md'>
                    View
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </button>
    )
}
