import React from 'react'
import { TbBuildingBank, TbBed, TbLocation } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

export default function Vertical({
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
            className='h-[180px] font-nunito w-[92%] lg:w-[350px] lg:h-[200px] bg-white rounded-lg shadow-lg flex flex-row justify-evenly items-center mb-5 '>
            <img src={"http://localhost:8080/" + item?.propertyImages[0]} className='h-[95%] w-[40%] bg-black rounded-lg' />
            <div className='flex flex-col h-[95%] w-[55%] justify-between items-start p-2'>
                <h3 className='text-ms w-[90%] font-nunito font-black self-start text-start'>{item?.name}</h3>
                <h3 className='text-xs w-[90%] font-nunito font-bold self-start text-start text-[#145e45]'>RERA No : {item?.reraNo}</h3>
                <div className='flex w-[90%] justify-between items-start'>
                    <div className='flex items-center'>
                        <TbBed className='text-[#145e45]' />
                        <h3 className='text-[10px] lg:text-xs font-nunito  font-medium self-center text-start ml-1'>{item?.appartmentDetails}</h3>
                    </div>
                </div>
                <div className='flex w-[90%] justify-between items-start'>
                    <div className='flex items-center'>
                        <TbLocation className='text-[#145e45]' />
                        <h3 className='text-[10px] lg:text-xs font-nunito  font-medium self-center text-start ml-1'>{item?.address}</h3>
                    </div>
                </div>
                <div className='flex w-[90%] justify-between items-center'>
                    <div className='flex items-center justify-center'>
                        <TbBuildingBank className='text-[#145e45]' />
                        <h3 className='text-[10px] lg:text-xs font-nunito  font-medium self-center text-start ml-1'>{item?.type}</h3>
                    </div>
                    <div className='flex items-center'>
                        <button className='text-xs lg:text-sm font-nunito font-black self-center text-start ml-1 text-[#145e45]'>View</button>
                    </div>
                </div>
            </div>
        </button>
    )
}
