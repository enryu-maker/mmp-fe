import React from 'react'
import { TbBed, TbLocation, TbBuildingBank } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
export default function Horizontal({
    item
}) {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => {
                navigate('/propertyinfo/' + item?._id, {
                    state: item
                })
            }}
            className='h-[240px] mb-5 shadow-lg lg:mb-0 lg:h-[300px] w-[180px] lg:w-[250px] bg-white rounded-lg flex flex-col items-center justify-between py-1 lg:py-2'>
            <img src={"http://localhost:8080/" + item?.propertyImages[0]} className='h-[120px] lg:h-[150px] w-[92%] mt-2 rounded-lg' />
            <h3 className='text-xs lg:text-sm w-[90%] font-poppins font-black self-center text-start '>{item?.name}</h3>
            <h3 className='text-xs w-[90%] font-poppins font-bold self-center text-start text-[#145e45]'>RERA No : {item?.reraNo}</h3>
            <div className='flex w-[90%] justify-between items-start'>
                <div className='flex items-center'>
                    <TbBed className='text-[#145e45]' />
                    <h3 className='text-[10px] lg:text-xs font-poppins  font-medium self-center text-start ml-1'>{item?.appartmentDetails}</h3>
                </div>
            </div>
            <div className='flex w-[90%] justify-between items-start'>
                <div className='flex items-center'>
                    <TbLocation className='text-[#145e45]' />
                    <h3 className='text-[10px] lg:text-xs font-poppins  font-medium self-center text-start ml-1'>{item?.address}</h3>
                </div>
            </div>
            <div className='flex w-[90%] justify-between items-center'>
                <div className='flex items-center justify-center'>
                    <TbBuildingBank className='text-[#145e45]' />
                    <h3 className='text-[10px] lg:text-xs font-poppins  font-medium self-center text-start ml-1'>{item?.type}</h3>
                </div>
                <div className='flex items-center'>
                    <button className='text-xs lg:text-sm font-poppins font-black self-center text-start ml-1 text-[#145e45]'>View Details</button>
                </div>
            </div>
        </button>
    )
}
