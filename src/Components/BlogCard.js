import React from 'react'

export default function BlogCard() {
    return (
        <div
            className='bg-white shadow-lg flex flex-col justify-evenly items-center rounded-lg w-[88%] lg:w-[300px] h-[450px] mb-5 lg:mb-0'
        >
            <div className='h-[220px] w-[95%] bg-black rounded-lg' />
            <h1 className='text-sm text-start w-[95%] font-light text-gray-500'>12/01/2024</h1>
            <h1 className='text-xl text-start w-[95%] font-bold'>Nashik From The POV Of Real-Estate Investment</h1>
            <p className='text-start w-[95%] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
            <button className='text-lg w-[95%]  flex justify-start items-center lg:text-base  font-poppins text-[#5444e4] font-bold text-start tracking-widest p-2.5 rounded-md'>
                Continue
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
    )
}
