import React from 'react'
import { Images } from '../Constants/Images'
import BlogCard from '../Components/BlogCard'

export default function Blog() {
    return (
        <div className='bg-[#EEEEEE] mt-20'>
            <img className='object-cover w-full h-[200px] lg:h-[350px]' src={Images.city} />
            <div className='flex flex-col lg:flex-row w-full  justify-evenly items-center py-10'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}
