import React from 'react'
import FlatList from 'flatlist-react/lib'
import BlogCard from '../../Components/BlogCard'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
export default function AdminBlog() {
    const navigate = useNavigate();
    const blogs = useSelector(state => state.Reducers.blog)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className='bg-[#ebf3eb60] pt-8'>
            <div className='flex flex-row justify-evenly items-center'>
                <h1 className='text-center text-xl lg:text-4xl font-bold text-[#145e45] tracking-widest'>Active Blogs</h1>
                <button
                    onClick={() => navigate('/addblogs')}
                    className='ml-5 bg-[#145e45] text-white px-2 py-1 rounded-md'>Add Blog</button>
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
