import React from 'react'
import { baseURL } from '../Constants/Helper'
import { useNavigate } from 'react-router-dom'

export default function BlogCard({
    item
}) {
    const navigate = useNavigate()
    return (
        <div
            className='bg-white font-nunito shadow-lg flex flex-col justify-evenly items-center rounded-lg w-[88%] lg:w-[300px] h-[450px] mb-5 lg:mb-3'
        >
            <img src={'https://api-nerdtech.makemyproperties.co.in/'+item?.blogImage} className='h-[220px] w-[95%] rounded-lg' />
            <h1 className='text-sm text-start w-[95%] font-light text-gray-500'>{item?.date}</h1>
            <h1 className='text-xl text-start w-[95%] font-bold'>{item?.title}</h1>
            <p className='text-start w-[95%] text-gray-500'>{item?.description.length > 100 ? item?.description.slice(0, 100) + '...' : item?.description}</p>
            <button 
            onClick={()=>{
                navigate('/bloginfo/'+item?._id,{
                    state:item
                })
            }}
            className='text-lg w-[95%]  flex justify-start items-center lg:text-base  font-nunito text-[#145e45] font-bold text-start tracking-widest p-2.5 rounded-md'>
                Continue
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
    )
}
