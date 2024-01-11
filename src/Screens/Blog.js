import React from 'react'
import { Images } from '../Constants/Images'
import BlogCard from '../Components/BlogCard'
import { useSelector } from 'react-redux'
import FlatList from 'flatlist-react/lib'

export default function Blog() {
    const blogs = useSelector(state => state.Reducers.blog)
    return (
        <div className='bg-white mt-20'>
            <img className='object-cover w-full h-[200px] lg:h-[350px]' src={Images.city} />
            <div className='flex flex-wrap w-full justify-evenly items-center snap-y mt-8'>
                <FlatList
                    list={blogs}
                    renderItem={(item, index) => <BlogCard item={item} />}
                    renderWhenEmpty={() =>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-center text-xl font-bold text-red-500 tracking-widest'>No Blogs Found!</h1>
                        </div>
                        }
                />
            </div>
        </div>
    )
}