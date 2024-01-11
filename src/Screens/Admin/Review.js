import FlatList from 'flatlist-react/lib';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player/lazy'
import { useSelector } from 'react-redux';
export default function AdminReview() {
    const navigate = useNavigate();
    const reviews = useSelector(state => state.Reducers.reviews)
    return (
        <div className='bg-white mt-20'>
            <div className='flex flex-row justify-evenly items-center'>
                <h1 className='text-center text-4xl font-bold text-[#5444e4] tracking-widest'>Active Reviews</h1>
                <button
                    onClick={() => navigate('/addreview')}
                    className='ml-5 bg-[#5444e4] text-white px-5 py-2 rounded-md'>Add Review</button>
            </div>
            <div className='flex flex-wrap w-full justify-evenly items-center snap-y mt-8'>
                <FlatList
                    list={reviews}
                    renderItem={(item, index) => <ReactPlayer width={300} height={180} className="w-full lg:w-[220px]" url={item.link} />
                    }
                    renderWhenEmpty={() =>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-center text-xl font-bold text-red-500 tracking-widest'>No Reviews Found!</h1>
                        </div>
                    }
                />
            </div>
        </div>
    )
}
