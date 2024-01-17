import React from 'react'
import { Images } from '../Constants/Images'
import BlogCard from '../Components/BlogCard'
import { useSelector } from 'react-redux'
import FlatList from 'flatlist-react/lib'
import { Helmet } from 'react-helmet'

export default function Blog() {
    const blogs = useSelector(state => state.Reducers.blog)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className='bg-[#ebf3eb60] pt-20'>
            <Helmet>
                <title>Stay Informed with MakeMyProperty's Real Estate Insights</title>
                <meta name="description" content="Read our latest blogs for valuable insights into the real estate market, property trends, and expert advice. Stay informed with MakeMyProperty's informative and engaging content." />
            </Helmet>
            <img className='object-contain' src={Images[1]} />
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
