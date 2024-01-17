import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Images } from '../Constants/Images';
import Horizontal from '../Components/Horizontal';
import Vertical from '../Components/Vertical';
import { useNavigate } from 'react-router-dom';
import FlatList from 'flatlist-react/lib';
import BlogCard from '../Components/BlogCard';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player/lazy';
import { GetPropertiesByCity, getLocation } from '../Store/actions';
import { Helmet } from 'react-helmet';
export default function Home() {
    const navigate = useNavigate();
    const blogs = useSelector(state => state.Reducers.blog)
    const banner = useSelector(state => state.Reducers.banner)
    const reviews = useSelector(state => state.Reducers.reviews)
    const suggestions = useSelector(state => state.Reducers.suggestions)
    const city = useSelector(state => state.Reducers.city)
    const nearBy = useSelector(state => state.Reducers.nearBy)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getLocation())
        dispatch(GetPropertiesByCity(city))
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className='bg-[#ebf3eb60] pt-20 font-nunito'>
            <Helmet>
                <title>Welcome to MakeMyProperty - Your Premier Real Estate Destination</title>
                <meta name="description" content="Discover the perfect property with MakeMyProperty. Explore a range of listings, expert insights, and personalized services to find your dream home." />
            </Helmet>
            <Carousel
                infiniteLoop
                autoPlay
                swipeable={true}
                showThumbs={false}
                showIndicators={false}
                showArrows={false}
                showStatus={false}
                interval={3500}
                transitionTime={2500}
            >
                {
                    banner?.map((item, index) => (
                        <div>
                            <img className='object-cover w-full h-[250px] lg:h-[450px]' src={"http://localhost:8080/" + item?.bannerImage} />
                            <button
                                onClick={() => {
                                    navigate('/propertyinfo/' + item?._id, {
                                        state: item
                                    })
                                }}
                                className='flex justify-evenly items-center absolute bottom-5 right-5  lg:right-10 font-nunito font-medium  bg-white  px-2 py-1 rounded-lg text-[#145e45]'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <span className='ml-2 font-nunito font-extrabold tracking-widest text-xs lg:text-base'>View Property</span>
                            </button>
                        </div>
                    ))
                }

            </Carousel>
            <div className=' py-8 flex flex-col items-center justify-center'>
                <h1 className='text-xl lg:text-3xl font-nunito font-black my-5 text-center tracking-wider'>Explore Your Home Sweet Home:  <span className='text-[#145e45] tracking-widest'> Click to Find Your Perfect Property Now!</span> </h1>
                <button 
                onClick={()=>{
                    navigate('/properties')
                }}
                className='flex justify-center items-center bg-[#145e45] text-white font-nunito tracking-wider font-bold px-5 py-2  rounded-lg '>
                    Explore Now
                </button>
                {/* <div className='flex w-full flex-row lg:flex-row items-center justify-evenly lg:justify-center'>
                    <input type='text' placeholder='Search for your dream home now!' className=' bg-white w-[80%] h-[40px] lg:w-[500px] lg:h-[50px] rounded-lg px-2 lg:my-5' />
                    <button className='flex justify-center items-center bg-[#145e45] text-white font-nunito font-medium h-[40px] w-[12%] lg:h-[50px] lg:w-[50px] rounded-lg lg:ml-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button> */}
                {/* <button className='flex justify-center items-center bg-[#145e45] text-white font-nunito font-medium h-[40px] w-[12%] lg:h-[50px] lg:w-[50px] rounded-lg lg:ml-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                        </svg>
                    </button> */}
                {/* </div> */}
            </div>
            <div className='flex flex-col items-center self-center justify-center'>
                <div className='flex flex-row lg:flex-col w-[88%] lg:w-[98%] justify-between lg:justify-center items-center'>
                    <h1 className='text-xl  lg:text-4xl font-bold my-5 text-center text-black tracking-widest'>Project Near <span className='text-[#145e45]'>You</span>  </h1>
                    <hr className='hidden lg:block w-[88%] lg:w-[20%] h-[2px] bg-[#145e45]' />
                    <button className='text-xs lg:text-base lg:hidden font-nunito font-bold my-5 text-start text-black tracking-widest'>See More</button>
                </div>
                <div className='flex my-5 flex-wrap w-full lg:w-[88%] items-center justify-evenly '>
                    <FlatList
                        list={nearBy.slice(0, 4)}
                        renderItem={(item, index) => <Horizontal item={item} key={index} />}
                        renderWhenEmpty={() =>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-center text-ms font-light text-red-500 tracking-widest'>No Properties Found!</h1>
                            </div>
                        }
                    />
                </div>
            </div>
            <div className='flex flex-col items-center self-center justify-center pt-10 '>
                <h1 className='text-xl  lg:text-3xl font-nunito font-black my-5 text-center text-[#145e45] tracking-widest'>Reviews By Customers . </h1>
                <div className='flex flex-wrap w-full justify-evenly items-center snap-y mt-8'>
                    <FlatList
                        list={reviews}
                        renderItem={(item, index) => <ReactPlayer width={300} height={180} className="w-full lg:w-[220px]" url={item.link} />
                        }
                        renderWhenEmpty={() =>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-center text-ms font-light text-red-500 tracking-widest'>No Reviews Found!</h1>
                            </div>
                        }
                    />
                </div>
                <button 
                onClick={()=>{
                    navigate('/reviews')
                }}
                className='text-ms lg:text-base font-nunito font-bold my-5 text-start bg-[#145e45] text-white tracking-widest p-2.5 rounded-md'>
                    View All
                </button>
            </div>
            <div className='flex flex-col items-center self-center justify-center py-8'>
                <div className='flex flex-row lg:flex-col w-[88%] lg:w-[98%] justify-between lg:justify-center items-center'>
                    <h1 className='text-xl  lg:text-3xl font-bold my-5 text-start text-black tracking-widest'>Top Property <span className='text-[#145e45]'>Collections For You</span> </h1>
                    <hr className='hidden lg:block w-[88%] lg:w-[20%] h-[2px] bg-[#145e45]' />
                </div>
                <div className='flex mt-5 flex-wrap w-full justify-evenly items-center snap-y'>
                    <FlatList
                        list={suggestions.slice(0, 4)}
                        renderItem={(item, index) => <Vertical item={item.data} key={index} />}
                        renderWhenEmpty={() => <div className='text-center text-ms font-light text-red-500 tracking-widest' >No Properties Found!</div>}
                    />
                </div>
            </div>

            <div className='flex flex-col items-center self-center  justify-center pb-8'>
                <h1 className='text-xl  lg:text-3xl font-nunito font-black my-5 text-center text-[#145e45] tracking-widest'>Blogs . </h1>
                <div className='flex flex-wrap w-full justify-evenly items-center snap-y mt-8'>
                    <FlatList
                        list={blogs.slice(0, 4)}
                        renderItem={(item, index) => <BlogCard item={item} />}
                        renderWhenEmpty={() =>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-center text-ms font-light text-red-500 tracking-widest'>No Blogs Found!</h1>
                            </div>
                        }
                    />
                </div>
                <button
                    onClick={() => {
                        navigate('/blog')
                    }}
                    className='text-ms lg:text-base font-nunito font-bold my-5 text-start bg-[#145e45] text-white tracking-widest p-2.5 rounded-md'>
                    View All
                </button>
            </div>
            <div className='flex flex-col lg:flex-row items-center self-center justify-evenly pb-8 '>
                <div className='flex flex-col items-center lg:items-start '>
                    <h1 className='text-xl  lg:text-3xl font-nunito font-black my-2 text-center text-[#145e45] tracking-widest'>Didn't Find What You Are Looking For?</h1>
                    <p className='text-xs lg:text-base font-nunito font-medium my-2 text-center text-black tracking-widest'>Contact us and we will help you find your dream home!</p>
                    <button
                        onClick={() => {
                            navigate('/contact')
                        }}
                        className='text-ms lg:text-base font-nunito font-bold my-5 text-start bg-[#145e45] text-white tracking-widest p-2.5 rounded-md'>
                        Contact Us
                    </button>
                </div>
                <img className='object-cover w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]' src={Images.contact} />
            </div>
        </div>
    )
}
