import React from 'react'
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Images } from '../Constants/Images';
import { useDispatch } from 'react-redux';
import { Getbytype } from '../Store/actions';
export default function Footer() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className='bg-[#145e45] flex flex-col justify-center items-center font-nunito'>
            <div
                className='text-white  p-4 flex flex-col w-full lg:w-[88%] self-center lg:flex-row justify-between items-start'>

                <div className="flex lg:flex-1 flex-col mt-5  ">
                    <div className="flex lg:flex-1 flex-row justify-start items-end space-x-2 ">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="w-auto h-8 " src={Images.logo1} alt="" />
                        </a>
                        <p className='text-lg font-nunito m-0 p-0 font-bold text-white text-end tracking-widest'>Make <span className='text-sm font-normal'>My</span> Properties</p>

                    </div>
                    <p className=' lg:text-base text-sm font-nunito font-light lg:font-bold self-start text-start my-5'>Make My Property: Crafting Dreams into Realities, Your Home Awaits.</p>
                    <div className='flex justify-start items-center space-x-2'>
                        <button
                            onClick={() => {
                                window.open('https://www.instagram.com/make_my_property?igsh=ZXJ1dTIxaWt2enBv')
                            }}
                            className='text-sm lg:text-base font-nunito font-bold text-[#5444e4] tracking-widest rounded-md'>
                            <FaInstagram className='text-white h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]' />
                        </button>
                        <button
                            onClick={() => {
                                window.open('https://www.facebook.com/profile.php?id=61555711885900&mibextid=ZbWKwL')
                            }}
                            className='text-sm lg:text-base font-nunito font-bold text-[#5444e4] tracking-widest rounded-md'>
                            <FaFacebookSquare className='text-white h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]' />
                        </button>
                        <button
                            onClick={() => {
                                window.open('https://youtube.com/@makemyproperty-1234?si=q5qFVOAnkWnzs0LM')
                            }}
                            className='text-sm lg:text-base font-nunito font-bold text-[#5444e4] tracking-widest rounded-md'>
                            <FaYoutube className='text-white h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]' />
                        </button>
                    </div>
                </div>

                <div className="flex lg:flex-1 flex-col justify-start mt-5 space-y-2   ">
                    <h1 className='text-xl lg:text-xl font-nunito font-bold self-start text-start'>Properties</h1>
                    <button
                        onClick={() => {
                            dispatch(Getbytype('Residential'))
                            navigate('/search/residential')
                        }}
                        className='text-sm lg:text-base font-nunito font-medium self-start text-start text-white tracking-widest rounded-md'>Residential</button>
                    <button
                        onClick={() => {
                            dispatch(Getbytype('Commercial'))
                            navigate('/search/commercial')
                        }}
                        className='text-sm lg:text-base font-nunito font-medium self-start text-start text-white tracking-widest rounded-md'>Commercial</button>
                    <button
                        onClick={() => {
                            dispatch(Getbytype('NA Plots'))
                            navigate('/search/NA Plots')
                        }}
                        className='text-sm lg:text-base font-nunito font-medium self-start text-start text-white tracking-widest rounded-md'>NA Plots</button>
                </div>
                <div className="flex lg:flex-1 flex-col justify-start mt-5 space-y-2  ">
                    <h1 className='text-xl lg:text-xl font-nunito font-bold self-start text-start'>Site Maps</h1>
                    <Link
                        to={'/'}
                        className='text-sm lg:text-base font-nunito font-medium self-start text-start text-white tracking-widest rounded-md'>Home</Link>
                    <Link
                        to={'/properties'}
                        className='text-sm lg:text-base font-nunito font-medium self-start text-start text-white tracking-widest rounded-md'>Properties</Link>
                    <Link
                        to={'/about'}
                        className='text-sm lg:text-base font-nunito font-medium self-start text-start text-white tracking-widest rounded-md'>About Us</Link>
                    <Link
                        to={'/blog'}
                        className='text-sm lg:text-base font-nunito font-medium self-start text-start text-white tracking-widest rounded-md'>Blog</Link>
                    <Link
                        to={'/contact'}
                        className='text-sm lg:text-base font-nunito font-medium self-start text-start text-white tracking-widest rounded-md'>Contact Us</Link>
                </div>
                <div className="flex lg:flex-1 flex-col justify-start mt-5 space-y-2 ">
                    <h1 className='text-xl lg:text-xl font-nunito font-bold self-start text-start'>Contact Us</h1>
                    <button
                        onClick={() => {
                            window.open('tel:+919029263511')
                        }}
                        className='text-sm lg:text-base font-nunito font-medium self-start text-start text-white tracking-widest rounded-md'>+91 9029263511</button>
                    <button
                        onClick={() => {
                            window.open('mailto:info@makemyproperties.co.in')
                        }}
                        className='text-sm lg:text-base font-nunito font-medium self-start text-start text-white tracking-widest rounded-md'>info@makemyproperties.co.in</button>
                    <button className='text-sm lg:text-base font-nunito font-medium self-start text-start text-white tracking-widest rounded-md'>KBT circle , Nashik</button>
                </div>
            </div>
            <h1 className=' w-full lg:w-[88%] text-sm lg:text-base font-nunito font-medium self-center text-center text-white tracking-widest py-5'>© 2021 MMP. All rights reserved.</h1>
            <hr className='w-full lg:w-[88%] border-[#ebf3eb60] border-1' />
            <img
                onClick={() => {
                    window.open("https://nerdtech.in")
                }}
                className='object-cover w-[88%] lg:w-auto cursor-pointer' src={Images.MMP} />
        </div>
    )
}
