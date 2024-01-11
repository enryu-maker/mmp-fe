import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AdminProperties() {
    const navigate = useNavigate();
    return (
        <div className='bg-white mt-20'>
            <div className='flex flex-row justify-evenly items-center'>
                <h1 className='text-center text-4xl font-bold text-[#5444e4] tracking-widest'>Active Properties</h1>
                <button
                    onClick={() => navigate('/addproperty')}
                    className='ml-5 bg-[#5444e4] text-white px-5 py-2 rounded-md'>Add Property</button>
            </div>
        </div>
    )
}
