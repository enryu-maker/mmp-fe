import FlatList from 'flatlist-react/lib';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Horizontal from '../../Components/Horizontal';
import { useSelector } from 'react-redux';

export default function AdminProperties() {
    const navigate = useNavigate();
    const properties = useSelector(state => state.Reducers.properties)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className='bg-[#ebf3eb60] pt-8'>
            <div className='flex flex-row justify-evenly items-center'>
                <h1 className='text-center text-lg lg:text-4xl font-bold text-[#145e45] tracking-widest'>Active Properties</h1>
                <button
                    onClick={() => navigate('/addproperty')}
                    className='ml-5 bg-[#145e45] text-white px-2 py-1 rounded-md'>Add Property</button>
            </div>
            <div className='flex mt-5 flex-col items-center self-center justify-center'>
                <div className='flex flex-wrap w-full lg:w-[88%] self-center items-center justify-evenly lg:justify-between'>
                    <FlatList
                        list={properties}
                        renderItem={(item, index) => <Horizontal item={item} key={index} />}
                        renderWhenEmpty={() => <div>List is empty!</div>}
                    />
                </div>
            </div>
        </div>
    )
}
