import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { GetPropertiesById, deleteProperty, submitContact } from '../../Store/actions'
import { Oval } from 'react-loader-spinner'
export default function PropertyInfo() {
    const { state } = useLocation()
    const [index, setIndex] = React.useState(0)
    const [data, setData] = React.useState({
        name: "",
        propertyname: state?.name,
        email: "",
        phone: "",
        message: ""
    })
    const [property, setProperty] = React.useState()
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
    const access = useSelector(state => state.Reducers.access)
    React.useEffect(() => {
        dispatch(GetPropertiesById(state?.id, setProperty, setLoading))
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className='bg-[#ebf3eb60] py-20 flex flex-col justify-center items-center'>
            <div className='flex bg-[#ebf3eb60] flex-row w-full ml-4 lg:ml-0 lg:w-[88%] justify-start items-start space-x-2'>
                <button
                    onClick={() => {
                        window.history.back()
                    }}
                    className='text-xs  font-nunito font-light my-5 text-start text-black tracking-widest hover:text-[#5444e4] hover:font-bold'>Property</button>
                <p className='text-xs  font-light my-5 text-start text-[#5444e4] tracking-widest'>/</p>
                <p className='text-xs font-light my-5 text-start tracking-widest'>{property?.id}</p>
            </div>
            {
                loading ?
                    <div className='flex h-full flex-col justify-center items-center'>
                        <Oval
                            className='mt-5'
                            color="#5444e4"
                            height={50}
                            width={50}
                        />
                    </div>
                    :
                    <>
                        <img className='object-cover w-full h-[220px] lg:h-[350px]' src={"http://127.0.0.1:8080/" + property?.propertyImages[index]} />
                        <div className='flex flex-row w-full self-center items-start justify-start'>
                            {
                                property?.propertyImages.map((item, index) => {
                                    return (
                                        <img
                                            onClick={() => {
                                                setIndex(index)
                                            }}
                                            key={index} className='object-cover w-[50px] h-[50px] lg:w-[120px] lg:h-[120px] m-2 lg:m-5' src={"http://127.0.0.1:8080/" + item} />
                                    )
                                })
                            }
                        </div>
                        <div className='flex flex-col lg:flex-row w-full self-center items-center lg:items-start justify-evenly'>
                            <div className='w-[92%] lg:w-[65%]'>
                                <div className="mt-4 space-y-2.5 w-full flex flex-col rounded-sm justify-center items-center">
                                    <div className=' mt-5 rounded-lg flex flex-col justify-start items-start w-full border p-2 space-y-2'>
                                        <h1 className='text-start lg:text-3xl font-bold text-black tracking-widest'>Overview</h1>
                                        <hr className='w-full' />
                                        <p className='text-start text-sm lg:text-lg font-medium text-black'>Property Name:<span className='text-black font-light'> {property?.name}</span></p>
                                        <p className='text-start text-sm lg:text-lg font-medium text-black'>Property Address:<span className='text-black font-light'> {property?.address}</span></p>
                                        <p className='text-start text-sm lg:text-lg font-medium text-black'>Property Type:<span className='text-black font-light'> {property?.type}</span></p>
                                        <p className='text-start text-sm lg:text-lg font-medium text-black'>Possesion Type:<span className='text-black font-light'> {property?.possesionType}</span></p>
                                        <p className='text-start text-sm lg:text-lg font-medium text-black'>RERA No:<span className='text-black font-light'> {property?.reraNo}</span></p>
                                        <p className='text-start text-sm lg:text-lg font-medium text-black'>City:<span className='text-black font-light'> {property?.city}</span></p>
                                    </div>
                                </div>
                                <div className=' mt-5 rounded-lg flex flex-col justify-start items-start w-full border p-2 space-y-2'>
                                    <h1 className='text-start lg:text-3xl font-bold text-black tracking-widest'>Property Description</h1>
                                    <hr className='w-full' />
                                    <p className='text-justify text-sm lg:text-lg font-light text-black'>{property?.description}</p>
                                </div>
                                <div className=' mt-5 rounded-lg flex flex-col justify-start items-start w-full border p-2 space-y-2'>
                                    <h1 className='text-start lg:text-3xl font-bold text-black tracking-widest'>Apartment Details</h1>
                                    <hr className='w-full' />
                                    {
                                        property?.appartmentDetails.split('|').map((item) => {
                                            return (
                                                <div className='flex flex-row items-center justify-start space-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                                                    </svg>
                                                    <p className='text-start text-lg font-light text-black tracking-widest '>{item}</p>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <div className=' mt-5 rounded-lg flex flex-col justify-start items-start w-full border p-2 space-y-2'>
                                    <h1 className='text-start lg:text-3xl font-bold text-black tracking-widest'>Google Maps</h1>
                                    <hr className='w-full' />
                                    <iframe src={property?.googleMapLink} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-[95%] self-center  h-[400px] lg:h-[500px]'></iframe>
                                </div>
                                <div className=' mt-5 rounded-lg flex flex-col justify-start items-start w-full border p-2 space-y-2'>
                                    <h1 className='text-start lg:text-3xl font-bold text-black tracking-widest'>Amenities</h1>
                                    <hr className='w-full' />
                                    {
                                        property?.amenities.split('|').map((item) => {
                                            return (
                                                <div className='flex flex-row items-center justify-start space-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={"#008000"} className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                    </svg>

                                                    <p className='text-start text-lg font-medium text-black'>{item}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className=' mt-5 rounded-lg flex flex-col justify-start items-start w-full border p-2 space-y-2'>
                                    <h1 className='text-start lg:text-3xl font-bold text-black tracking-widest'>About Builder</h1>
                                    <hr className='w-full' />
                                    {
                                        property?.aboutBuilder.split('|').map((item) => {
                                            return (
                                                <div className='flex flex-row items-center justify-start space-x-2'>
                                                    <p className='text-start text-lg font-medium text-black'>{item}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="space-y-2.5 w-[92%] mb-5 lg:w-[30%] flex flex-col rounded-sm justify-center items-center">
                                <div className="mt-4 space-y-2.5 w-full flex flex-col rounded-sm justify-center items-center">
                                    <div className=' mt-5 rounded-lg flex flex-col justify-start items-start w-full border p-2 space-y-2'>
                                        <h1 className='text-start lg:text-3xl font-bold text-black tracking-widest'>Inquire this Property</h1>
                                        <p className='text-start text-xs lg:text-lg font-medium text-gray-500'>Call us now or send us your information</p>
                                        <hr className='w-full' />
                                        <input
                                            type='text'
                                            value={data.name}
                                            onChange={(text) => {
                                                setData({ ...data, name: text.target.value })
                                            }}
                                            placeholder='Name'
                                            className='w-full outline-none   lg:h-[50px] bg-white rounded-lg mb-2 lg:mb-5 px-2'
                                        />
                                        <input
                                            type='text'
                                            disabled
                                            value={data.propertyname}
                                            onChange={(text) => {
                                                setData({ ...data, propertyname: text.target.value })
                                            }}
                                            placeholder='Name'
                                            className='w-full outline-none   lg:h-[50px] bg-white rounded-lg mb-2 lg:mb-5 px-2'
                                        />
                                        <input
                                            type='text'
                                            value={data.email}
                                            onChange={(text) => {
                                                setData({ ...data, email: text.target.value })
                                            }}
                                            placeholder='Email'
                                            className='w-full outline-none   lg:h-[50px] bg-white rounded-lg mb-2 lg:mb-5 px-2'
                                        />
                                        <input
                                            type='text'
                                            value={data.phone}
                                            onChange={(text) => {
                                                setData({ ...data, phone: text.target.value })
                                            }}
                                            placeholder='Phone'
                                            className='w-full outline-none   lg:h-[50px] bg-white rounded-lg mb-2 lg:mb-5 px-2'
                                        />
                                        <textarea
                                            type='text'
                                            value={data.message}
                                            onChange={(text) => {
                                                setData({ ...data, message: text.target.value })
                                            }}
                                            placeholder='Message'
                                            className='w-full outline-none   lg:h-[50px] bg-white rounded-lg mb-2 lg:mb-5 px-2'
                                        />
                                        <button
                                            onClick={() => {
                                                dispatch(submitContact(data, setLoading))
                                            }}
                                            className='w-full  h-[50px] bg-[#145e45] text-lg rounded-lg text-white font-bold  px-5 hover:bg-[#5444e490]'>
                                            {
                                                loading ? <Oval color='#fff' height={20} width={20} /> : 'Submit Enquiry'
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
            {
                access != null?
                <button 
                onClick={() => {
                    dispatch(deleteProperty(property?.id, setLoading))
                }}
                className='my-5 right-5 bg-red-500 text-white font-nunito font-bold text-lg rounded-lg px-5 py-2 hover:bg-[#5444e490]'>Delete Property</button>
                :
                null
            }
        </div>
    )
}
