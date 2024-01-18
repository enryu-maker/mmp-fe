import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FlatList from 'flatlist-react/lib';
import { deleteBanner } from '../../Store/actions';
import { Oval } from 'react-loader-spinner';
export default function Banner() {
    const navigate = useNavigate();
    const banner = useSelector(state => state.Reducers.banner)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false)
    return (
        <div className='bg-[#ebf3eb60] pt-8'>
            <div className='flex flex-row justify-evenly items-center'>
                <h1 className='text-center text-xl lg:text-4xl font-bold text-[#145e45] tracking-widest'>Active Banner</h1>
                <button
                    onClick={() => navigate('/addbanner')}
                    className=' bg-[#145e45] text-white px-2 py-1 rounded-md'>Add Banner</button>
            </div>
            <div className='flex flex-wrap w-full justify-evenly items-center snap-y mt-8'>
                <FlatList
                    list={banner}
                    renderItem={(item, index) =>
                        <div className='flex flex-col bg-white shadow-md justify-center items-center'>
                            <img className="w-[92%] mb-2 border object-cover h-[220px] rounded-lg lg:w-[350px]" src={'https://api-nerdtech.makemyproperties.co.in/' + item.bannerImage} alt="" />
                            <button
                                onClick={() => {
                                    dispatch(deleteBanner(item.id, setLoading))
                                }}
                                className='bg-red-500 font-nunito text-white px-2 py-1 self-end'>
                                {
                                    loading ?
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
                            <h1 className='text-center text-xl font-bold text-red-500 tracking-widest'>No Banner Found!</h1>
                        </div>
                    }
                />
            </div>
        </div>
    )
}
