import React from 'react'
import { baseURL } from '../Constants/Helper'

export default function BlogCard({
    item
}) {
    return (
        <div
            className='bg-white shadow-lg flex flex-col justify-evenly items-center rounded-lg w-[88%] lg:w-[300px] h-[450px] mb-5 lg:mb-3'
        >
            <img src={'http://127.0.0.1:8080/'+item?.blogImage} className='h-[220px] w-[95%] rounded-lg' />
            <h1 className='text-sm text-start w-[95%] font-light text-gray-500'>{item?.date}</h1>
            <h1 className='text-xl text-start w-[95%] font-bold'>{item?.title}</h1>
            <p className='text-start w-[95%] text-gray-500'>{item?.description.length > 100 ? item?.description.slice(0, 100) + '...' : item?.description}</p>
            <button className='text-lg w-[95%]  flex justify-start items-center lg:text-base  font-poppins text-[#5444e4] font-bold text-start tracking-widest p-2.5 rounded-md'>
                Continue
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
    )
}
