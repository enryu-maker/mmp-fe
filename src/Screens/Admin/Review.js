import FlatList from 'flatlist-react/lib';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player/lazy'
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview } from '../../Store/actions';
import { Oval } from 'react-loader-spinner';
export default function AdminReview() {
    const navigate = useNavigate();
    const reviews = useSelector(state => state.Reducers.reviews)
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false)
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
                    renderItem={(item, index) =>
                        <div className='flex flex-col bg-white shadow-md justify-center items-center'>
                            <ReactPlayer width={300} height={180} className="w-full lg:w-[220px]" url={item.link} />
                            <button
                                onClick={() => {
                                    dispatch(deleteReview(item.id, setLoading))
                                }}
                                className='bg-red-500 font-nunito text-white px-2 py-1 self-end'>
                                    {
                                        loading?
                                        <div className='flex flex-row justify-center items-center'>
                                            <Oval
                                                height={20}
                                                width={20}
                                                color="white"
                                                className='mr-2'
                                            />
                                            <p>Deleting</p>
                                        </div>
                                        :
                                        "Delete"
                                    }
                                </button>
                        </div>
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
