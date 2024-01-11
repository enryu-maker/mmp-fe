import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Images } from '../Constants/Images';
import Horizontal from '../Components/Horizontal';
import Vertical from '../Components/Vertical';
import { useNavigate } from 'react-router-dom';
import FlatList from 'flatlist-react/lib';
import BlogCard from '../Components/BlogCard';
import { useSelector } from 'react-redux';

export default function Home() {
    const navigate = useNavigate();
    const blogs = useSelector(state => state.Reducers.blog)
    const banner = useSelector(state => state.Reducers.banner)

    return (
        <div className='bg-white mt-20'>
            <Carousel
                labels={false}
                showThumbs={false}
                showStatus={false}
                // infiniteLoop={true}
                // autoPlay={true}
                interval={3000}
                transitionTime={500}
                stopOnHover={false}
                showArrows={false}
                showIndicators={false}
            >
                <div>
                    <img className='object-cover w-full h-[250px] lg:h-[450px]' src={Images.city} />
                    <button className='flex justify-evenly items-center absolute bottom-5 right-5  lg:right-10 font-poppins font-medium  bg-white  px-2 py-1 rounded-lg text-[#5444e4]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span className='ml-2 font-poppins font-extrabold tracking-widest text-xs lg:text-base'>View Property</span>
                    </button>
                </div>
            </Carousel>
            <div className=' p-2 flex flex-col items-center justify-center'>
                <h1 className='text-xl lg:text-4xl font-poppins font-black my-5 text-center'>Find your Prefect <span className='text-[#5444e4] tracking-widest'>HOME</span> </h1>
                <div className='flex w-full flex-row lg:flex-row items-center justify-evenly lg:justify-center'>
                    <input type='text' placeholder='Search for your dream home now!' className=' bg-white w-[70%] h-[40px] lg:w-[500px] lg:h-[50px] rounded-lg px-2 lg:my-5' />
                    <button className='flex justify-center items-center bg-[#5444e4] text-white font-poppins font-medium h-[40px] w-[12%] lg:h-[50px] lg:w-[50px] rounded-lg lg:ml-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <button className='flex justify-center items-center bg-[#5444e4] text-white font-poppins font-medium h-[40px] w-[12%] lg:h-[50px] lg:w-[50px] rounded-lg lg:ml-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='flex flex-col items-center self-center justify-center'>
                <div className='flex flex-row w-[88%] lg:w-[98%] justify-between items-center'>
                    <h1 className='text-xl  lg:text-4xl font-bold my-5 text-start text-[#5444e4] tracking-widest'>Near Me . </h1>
                    <button className='text-xs lg:text-base lg:hidden font-poppins font-bold my-5 text-start text-black tracking-widest'>See More</button>
                </div>
                <div className='flex flex-wrap w-full lg:w-[88%] items-center justify-evenly lg:justify-between'>
                    <FlatList
                        list={[1, 2, 3, 4]}
                        renderItem={(item, index) => <Horizontal key={index} />}
                        renderWhenEmpty={() => <div>List is empty!</div>}
                    />
                </div>
            </div>
            <div className='flex flex-col items-center self-center justify-center pb-8 bg-white'>
                <h1 className='text-xl  lg:text-3xl font-poppins font-black my-5 text-center text-[#5444e4] tracking-widest'>Reviews By Customers . </h1>
                <button className='text-ms lg:text-base font-poppins font-bold my-5 text-start bg-[#5444e4] text-white tracking-widest p-2.5 rounded-md'>
                    View All
                </button>
            </div>
            <div className='flex flex-col items-center self-center justify-center py-8'>
                <div className='flex flex-row w-[88%] lg:w-[98%] justify-between items-center'>
                    <h1 className='text-xl  lg:text-4xl font-bold my-5 text-start text-[#5444e4] tracking-widest'>Suggestions . </h1>
                    <button className='text-xs lg:text-base lg:hidden font-poppins font-bold my-5 text-start text-black tracking-widest'>See More</button>
                </div>
                <div className='flex flex-wrap w-full justify-evenly items-center snap-y'>
                    <FlatList
                        list={[1, 2, 3]}
                        renderItem={(item, index) => <Vertical key={index} />}
                        renderWhenEmpty={() => <div>List is empty!</div>}
                    />
                </div>
            </div>

            <div className='flex flex-col items-center self-center justify-center pb-8'>
                <h1 className='text-xl  lg:text-3xl font-poppins font-black my-5 text-center text-[#5444e4] tracking-widest'>Blogs . </h1>
                <div className='flex flex-wrap w-full justify-evenly items-center snap-y mt-8'>
                    <FlatList
                        list={blogs}
                        renderItem={(item, index) => <BlogCard item={item} />}
                        renderWhenEmpty={() =>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-center text-xl font-bold text-red-500 tracking-widest'>No Blogs Found!</h1>
                            </div>
                        }
                    />
                </div>
                <button className='text-ms lg:text-base font-poppins font-bold my-5 text-start bg-[#5444e4] text-white tracking-widest p-2.5 rounded-md'>
                    View All
                </button>
            </div>
            <div className='flex flex-col lg:flex-row items-center self-center justify-evenly pb-8 bg-white'>
                <div className='flex flex-col items-center lg:items-start '>
                    <h1 className='text-xl  lg:text-3xl font-poppins font-black my-2 text-center text-[#5444e4] tracking-widest'>Didn't Find What You Are Looking For?</h1>
                    <p className='text-xs lg:text-base font-poppins font-medium my-2 text-center text-black tracking-widest'>Contact us and we will help you find your dream home!</p>
                    <button
                        onClick={() => {
                            navigate('/contact')
                        }}
                        className='text-ms lg:text-base font-poppins font-bold my-5 text-start bg-[#5444e4] text-white tracking-widest p-2.5 rounded-md'>
                        Contact Us
                    </button>
                </div>
                <img className='object-cover w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]' src={Images.contact} />
            </div>
        </div>
    )
}
