import React from 'react'
import FlatList from 'flatlist-react';
import Vertical from '../../Components/Vertical';
import { useSelector } from 'react-redux';
export default function Admin() {
    const blogs = useSelector(state => state.Reducers.blog)
    const reviews = useSelector(state => state.Reducers.reviews)
    const properties = useSelector(state => state.Reducers.properties)
    const banner = useSelector(state => state.Reducers.banner)
    const suggestions = useSelector(state => state.Reducers.suggestions)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className='bg-[#ebf3eb60] pt-5 lg:pt-20'>
            {/* Section which shows count foe active properties banner  */}
            <div className='flex flex-col lg:flex-row w-full  justify-evenly items-center space-y-3 '>
                <div className='flex flex-col items-start justify-evenly w-[92%] lg:w-[280px] bg-white rounded-lg shadow-lg p-5'>
                    <h3 className='text-gray-400 w-[88%] self-start text-md font-poppins font-normal'>Active Properties</h3>
                    <div className='flex items-center justify-between w-[88%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                        </svg>
                        <h1 className='text-3xl font-poppins text-[#145e45] font-bold'>{properties.length}</h1>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-evenly w-[92%] lg:w-[280px] bg-white rounded-lg shadow-lg p-5'>
                    <h3 className='text-gray-400 w-[88%] self-start text-md font-poppins font-normal'>Active Banners</h3>
                    <div className='flex items-center justify-between w-[88%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <h1 className='text-3xl font-poppins text-[#145e45] font-bold'>{banner.length}</h1>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-evenly w-[92%] lg:w-[280px] bg-white rounded-lg shadow-lg p-5'>
                    <h3 className='text-gray-400 w-[88%] self-start text-md font-poppins font-normal'>Active Blog</h3>
                    <div className='flex items-center justify-between w-[88%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                        </svg>
                        <h1 className='text-3xl font-poppins text-[#145e45] font-bold'>{blogs.length}</h1>
                    </div>

                </div>
                <div className='flex flex-col items-start justify-evenly w-[92%] lg:w-[280px] bg-white rounded-lg shadow-lg p-5'>
                    <h3 className='text-gray-400 w-[88%] self-start text-md font-poppins font-normal'>Active Reviews</h3>
                    <div className='flex items-center justify-between w-[88%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                        <h1 className='text-3xl font-poppins text-[#145e45] font-bold'>{reviews.length}</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full  justify-evenly items-center pt-10 '>
                <h1 className='text-3xl font-poppins text-[#145e45] font-bold py-10'>Suggested Properties</h1>
                <div className='flex flex-wrap w-full justify-evenly items-center snap-y'>
                    <FlatList
                        list={suggestions}
                        renderItem={(item, index) => <Vertical item={item.data} key={index} />}
                        renderWhenEmpty={() => <div>List is empty!</div>}
                    />
                </div>
                <button className='text-ms lg:text-base font-poppins font-bold my-5 text-start bg-[#145e45] text-white tracking-widest p-2.5 rounded-md'>
                    Add Suggested Property
                </button>
            </div>
        </div>
    )
}
