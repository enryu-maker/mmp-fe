import React from 'react'
import { Images } from '../Constants/Images'
import { useSelector } from 'react-redux'
import FlatList from 'flatlist-react/lib'
import ReactPlayer from 'react-player'

export default function Reviews() {
    const reviews = useSelector(state => state.Reducers.reviews)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className='bg-[#ebf3eb60] py-20'>
            <img alt='header' className='object-cover w-full h-[200px] lg:h-[350px]' src={Images.city} />
            <h1 className='text-xl lg:text-3xl font-poppins font-black my-5 text-center tracking-wider'>Real Homes, Real Stories: <span className='text-[#145e45] tracking-widest'> Hear What Our Happy Homeowners Have to Say!</span> </h1>
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
