import React from 'react'
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Images } from '../Constants/Images';
export default function Footer() {
    return (
        <div className='bg-[#145e45] flex flex-col justify-center items-center'>
            <div
                className='text-white  p-4 flex flex-col w-full lg:w-[88%] self-center lg:flex-row justify-between items-start'>

                <div className="flex lg:flex-1 flex-col mt-5  ">
                    <Link href="#"
                    >
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
                    </Link>
                    <p className=' lg:text-base text-sm font-poppins font-light lg:font-bold self-start text-start my-5'>Making the world a better place through constructing elegant hierarchies.</p>
                    <div className='flex justify-start items-center space-x-2'>
                        <button className='text-sm lg:text-base font-poppins font-bold text-[#5444e4] tracking-widest rounded-md'>
                            <FaInstagram className='text-white h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]' />
                        </button>
                        <button className='text-sm lg:text-base font-poppins font-bold text-[#5444e4] tracking-widest rounded-md'>
                            <FaFacebookSquare className='text-white h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]' />
                        </button>
                        <button className='text-sm lg:text-base font-poppins font-bold text-[#5444e4] tracking-widest rounded-md'>
                            <FaLinkedin className='text-white h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]' />
                        </button>
                        <button className='text-sm lg:text-base font-poppins font-bold text-[#5444e4] tracking-widest rounded-md'>
                            <FaYoutube className='text-white h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]' />
                        </button>
                    </div>
                </div>

                <div className="flex lg:flex-1 flex-col justify-start mt-5 space-y-2   ">
                    <h1 className='text-xl lg:text-xl font-poppins font-bold self-start text-start'>Properties</h1>
                    <button className='text-sm lg:text-base font-poppins font-medium self-start text-start text-white tracking-widest rounded-md'>Residential</button>
                    <button className='text-sm lg:text-base font-poppins font-medium self-start text-start text-white tracking-widest rounded-md'>Commercial</button>
                    <button className='text-sm lg:text-base font-poppins font-medium self-start text-start text-white tracking-widest rounded-md'>NA Plots</button>
                </div>
                <div className="flex lg:flex-1 flex-col justify-start mt-5 space-y-2  ">
                    <h1 className='text-xl lg:text-xl font-poppins font-bold self-start text-start'>Site Maps</h1>
                    <button className='text-sm lg:text-base font-poppins font-medium self-start text-start text-white tracking-widest rounded-md'>Home</button>
                    <button className='text-sm lg:text-base font-poppins font-medium self-start text-start text-white tracking-widest rounded-md'>Properties</button>
                    <button className='text-sm lg:text-base font-poppins font-medium self-start text-start text-white tracking-widest rounded-md'>About Us</button>
                    <button className='text-sm lg:text-base font-poppins font-medium self-start text-start text-white tracking-widest rounded-md'>Blog</button>
                    <button className='text-sm lg:text-base font-poppins font-medium self-start text-start text-white tracking-widest rounded-md'>Contact Us</button>
                </div>
                <div className="flex lg:flex-1 flex-col justify-start mt-5 space-y-2 ">
                    <h1 className='text-xl lg:text-xl font-poppins font-bold self-start text-start'>Contact Us</h1>
                    <button className='text-sm lg:text-base font-poppins font-medium self-start text-start text-white tracking-widest rounded-md'>+91 1234567890</button>
                    <button className='text-sm lg:text-base font-poppins font-medium self-start text-start text-white tracking-widest rounded-md'>contact@mmp.com</button>
                    <button className='text-sm lg:text-base font-poppins font-medium self-start text-start text-white tracking-widest rounded-md'>some address we have to do in order to fix</button>
                </div>
            </div>
            <h1 className=' w-full lg:w-[88%] text-sm lg:text-base font-poppins font-medium self-center text-center text-white tracking-widest py-5'>© 2021 MMP. All rights reserved.</h1>
            <hr className='w-full lg:w-[88%] border-[#ebf3eb60] border-1' />
            <img
                onClick={() => {
                    window.open("https://nerdtech.in")
                }}
                className='object-cover w-[88%] lg:w-auto cursor-pointer' src={Images.MMP} />
        </div>
    )
}
