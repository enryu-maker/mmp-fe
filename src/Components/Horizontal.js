import React from 'react'
import { TbBath, TbBed, TbRulerMeasure } from "react-icons/tb";
export default function Horizontal() {
    return (
        <button className='h-[240px] mb-5 shadow-lg lg:mb-0 lg:h-[300px] w-[180px] lg:w-[250px] bg-white rounded-lg flex flex-col items-center justify-between py-1 lg:py-2'>
            <div className='h-[120px] lg:h-[150px] w-[92%] bg-black rounded-lg' />
            <h3 className='text-xs lg:text-sm w-[90%] font-poppins font-black self-center text-start '>Nowhow Haiz Mansion</h3>
            <h3 className='text-xs w-[90%] font-poppins font-bold self-center text-start text-[#5444e4]'>$770/Month</h3>
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
                    <h3 className='text-xs lg:text-sm font-poppins font-black self-center text-start ml-1 text-[#5444e4]'>For Rent</h3>
                </div>
            </div>
        </button>
    )
}
