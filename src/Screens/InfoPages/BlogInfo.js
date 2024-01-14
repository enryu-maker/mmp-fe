import React from 'react'
import { useLocation } from 'react-router-dom'

export default function BlogInfo() {
    const { state } = useLocation()
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className='bg-[#ebf3eb60] pt-20 flex flex-col justify-center items-center'>
            <div className='flex flex-row w-full ml-4 lg:ml-0 lg:w-[88%] justify-start items-start space-x-2'>
                <button
                    onClick={() => {
                        window.history.back()
                    }}
                    className='text-xs  font-poppins font-light my-5 text-start text-black tracking-widest hover:text-[#5444e4] hover:font-bold'>Blog</button>
                <p className='text-xs  font-light my-5 text-start text-[#5444e4] tracking-widest'>/</p>
                <p className='text-xs font-light my-5 text-start tracking-widest'>{state?.id}</p>
            </div>
            <img className='object-cover w-full h-[200px] lg:h-[350px]' src={"http://localhost:8080/" + state?.blogImage} />
            <div className='flex flex-col w-[88%] self-center items-center justify-center'>
                <h1 className='text-start w-full text-lg font-light mt-5'>{state?.date}</h1>
                <h1 className='text-start w-full text-3xl font-bold mt-2'>{state?.title}</h1>
                <p className='text-justify text-lg font-light py-2'>{state?.description}</p>
            </div>
        </div>
    )
}
