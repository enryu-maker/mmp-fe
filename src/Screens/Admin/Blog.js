import React from 'react'
import FlatList from 'flatlist-react/lib'
import BlogCard from '../../Components/BlogCard'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
export default function AdminBlog() {
    const navigate = useNavigate();
    const blogs = useSelector(state => state.Reducers.blog)
    return (
        <div className='bg-white mt-20'>
            <div className='flex flex-row justify-evenly items-center'>
                <h1 className='text-center text-4xl font-bold text-[#5444e4] tracking-widest'>Active Blogs</h1>
                <button
                    onClick={() => navigate('/addblogs')}
                    className='ml-5 bg-[#5444e4] text-white px-5 py-2 rounded-md'>Add Blog</button>
            </div>
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
