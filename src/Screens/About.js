import React from 'react'
import { Images } from '../Constants/Images'

export default function About() {
    return (
        <div className='bg-[#EEEEEE] mt-20'>
            <img className='object-cover w-full h-[200px] lg:h-[350px]' src={Images.city} />
            <div className='flex flex-col items-center mt-5'>
                <h1 className='lg:text-4xl w-[88%] text-start text-xl font-bold text-[#5444e4] tracking-widest'>Who we are?</h1>
                <p className='text-center mt-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
            </div>
        </div>
    )
}
