import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Getbytype } from '../Store/actions';
import { useLocation } from 'react-router-dom';
import FlatList from 'flatlist-react/lib';
import { Images } from '../Constants/Images';
import { Oval } from 'react-loader-spinner';
import Horizontal from '../Components/Horizontal';
import axios from 'axios';
import { baseURL } from '../Constants/Helper';

export default function Search() {
    const path = useLocation()

    const [loading, setLoading] = React.useState(false)
    const search = useSelector(state => state.Reducers.search)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className='bg-[#ebf3eb60] pt-20 flex flex-col justify-center items-center'>
            <img className='object-cover w-full h-[200px] lg:h-[350px]' src={Images.city} />
            <div className=' p-2 flex flex-col items-center justify-center w-full'>
                <h1 className='text-xl lg:text-4xl font-poppins font-black my-5 text-center capitalize'>{path.pathname.split('/')[2]}<span className='text-[#145e45] tracking-widest'> Property</span> </h1>
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
                            list={search}
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
