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
            className='h-[240px] font-nunito mb-5 shadow-lg lg:mb-0 lg:h-[300px] w-[180px] lg:w-[250px] bg-white rounded-lg flex flex-col items-center justify-between py-1 lg:py-2'>
            <img src={"https://api-nerdtech.makemyproperties.co.in/" + item?.propertyImages[0]} className='h-[120px] lg:h-[150px] w-[92%] mt-2 rounded-lg' />
            <h3 className='text-xs lg:text-lg w-[90%] font-nunito font-black self-center text-start '>{item?.name}</h3>
            <h3 className='text-xs w-[90%] font-nunito overflow-hidden font-bold self-center text-start text-[#145e45]'>RERA No : {item?.reraNo.length > 20 ? item?.reraNo.slice(0, 15) + '...' : item?.reraNo}</h3>
            <div className='flex w-[90%] justify-between items-start'>
                <div className='flex items-center'>
                    <TbBed className='text-[#145e45]' />
                    <h3 className='text-[10px] lg:text-xs font-nunito  font-medium self-center text-start ml-1'>{item?.appartmentDetails}</h3>
                </div>
            </div>
            <div className='flex w-[90%] justify-between items-start'>
                <div className='flex items-center'>
                    <TbLocation className='text-[#145e45]' />
                    <h3 className='text-[10px] lg:text-xs font-nunito  font-medium self-center text-start ml-1'>{item?.address.length > 20 ? item?.address.slice(0, 20) + '...' : item?.address}</h3>
                </div>
            </div>
            <div className='flex w-[90%] justify-between items-center'>
                <div className='flex items-center justify-center'>
                    <TbBuildingBank className='text-[#145e45]' />
                    <h3 className='text-[10px] lg:text-xs font-nunito  font-medium self-center text-start ml-1'>{item?.type}</h3>
                </div>
                <div className='flex items-center'>
                    <button className='text-xs lg:text-sm font-nunito font-black self-center text-start ml-1 text-[#145e45]'>View Details</button>
                </div>
            </div>
        </button>
    )
}
