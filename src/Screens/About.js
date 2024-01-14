import React from 'react'
import { Images } from '../Constants/Images'

export default function About() {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className='bg-[#ebf3eb60] pt-20'>
            <img className='object-cover w-full h-[200px] lg:h-[350px]' src={Images.city} />
        </div>
    )
}
