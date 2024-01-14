import FlatList from 'flatlist-react/lib';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player/lazy'
import { useSelector } from 'react-redux';
export default function AdminReview() {
    const navigate = useNavigate();
    const reviews = useSelector(state => state.Reducers.reviews)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className='bg-[#ebf3eb60] pt-8'>
            <div className='flex flex-row justify-evenly items-center'>
                <h1 className='text-center text-lg lg:text-4xl font-bold text-[#145e45] tracking-widest'>Active Reviews</h1>
                <button
                    onClick={() => navigate('/addreview')}
                    className='ml-5 bg-[#145e45] text-white px-2 py-1 rounded-md'>Add Review</button>
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
