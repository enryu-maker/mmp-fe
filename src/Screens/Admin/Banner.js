import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FlatList from 'flatlist-react/lib';
export default function Banner() {
    const navigate = useNavigate();
    const banner = useSelector(state => state.Reducers.banner)
    return (
        <div className='bg-white mt-20'>
            <div className='flex flex-row justify-evenly items-center'>
                <h1 className='text-center text-4xl font-bold text-[#5444e4] tracking-widest'>Active Banner</h1>
                <button
                    onClick={() => navigate('/addbanner')}
                    className='ml-5 bg-[#5444e4] text-white px-5 py-2 rounded-md'>Add Banner</button>
            </div>
            <div className='flex flex-wrap w-full justify-evenly items-center snap-y mt-8'>
                <FlatList
                    list={banner}
                    renderItem={(item, index) => <img className="w-full border rounded-lg lg:w-[350px]" src={'http://127.0.0.1:8080/'+item.bannerImage} alt="" />}
                    renderWhenEmpty={() =>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-center text-xl font-bold text-red-500 tracking-widest'>No Banner Found!</h1>
                        </div>
                    }
                />
            </div>
        </div>
    )
}