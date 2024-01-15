import React from 'react'
import { Images } from '../Constants/Images'
import Vertical from '../Components/Vertical'
import { useLocation } from 'react-router-dom'
import Horizontal from '../Components/Horizontal';
import FlatList from 'flatlist-react/lib';
import { useDispatch, useSelector } from 'react-redux';
import { Getbytype, SearchProperties, getLocation } from '../Store/actions';
import { Oval } from 'react-loader-spinner';
export default function Properties() {
    const [search, setSearch] = React.useState('');
    const nearBy = useSelector(state => state.Reducers.nearBy)
    const [property, setProperty] = React.useState(nearBy)
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
    function searchProperty() {
        dispatch(SearchProperties(search, setProperty, setLoading))
    }
    const type = [
        {
            name: 'All',
            type: 'All'
        },
        {
            name: 'Residential',
            type: 'Residential'
        },
        {
            name: 'Commercial',
            type: 'Commercial'
        },
        {
            name: 'Na Plots',
            type: 'Na Plots'
        },
    ]
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        dispatch(getLocation())
    }, [])
    return (
        <div className='bg-[#ebf3eb60] pt-20 flex flex-col justify-center items-center'>
            <img className='object-cover w-full h-[200px] lg:h-[350px]' src={Images.city} />
            <div className=' p-2 flex flex-col items-center justify-center w-full'>
                <h1 className='text-xl lg:text-4xl font-poppins font-black my-5 text-center'>Find your Prefect <span className='text-[#145e45] tracking-widest'>HOME</span> </h1>
                <div className='flex w-full flex-row lg:flex-row items-center justify-evenly lg:justify-center space-x-2'>
                    <input type='text' value={search}
                        onChange={(text) => {
                            setSearch(text.target.value)
                        }}
                        placeholder='Search for your dream home now!' className=' bg-white w-[80%] h-[40px] lg:w-[500px] lg:h-[50px] rounded-lg px-2 lg:my-5 border-gray-300' />
                    <button
                        onClick={() => {
                            searchProperty()
                        }}
                        className='flex justify-center items-center bg-[#145e45] text-white font-poppins font-medium h-[40px] w-[15%] lg:h-[50px] lg:w-[50px] rounded-lg lg:ml-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='flex py-5 flex-wrap w-full lg:w-[88%] items-center justify-evenly '>
                {
                    loading ?
                        <Oval
                            className='mt-5'
                            color="#145e45"
                            height={50}
                            width={50}
                        />
                        :
                        <FlatList
                            list={property}
                            renderItem={(item, index) => <Horizontal item={item} key={index} />}
                            renderWhenEmpty={() =>
                                <div className='flex flex-col items-center justify-center'>
                                    <h1 className='text-center text-ms font-light text-red-500 tracking-widest'>No Properties Found Near you!</h1>
                                </div>
                            }
                        />
                }
            </div>
        </div>
    )
}
