import React from 'react'
import { Images } from '../Constants/Images'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
export default function About() {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    const navigate = useNavigate()
    return (
        <div className='bg-[#ebf3eb60] font-nunito pt-20 flex flex-col justify-center items-center'>
            <Helmet>
                <title> About MakeMyProperty - Passionate Experts in Real Estate</title>
                <meta name="description" content="Learn about MakeMyProperty - a team dedicated to making your property dreams a reality. Discover our mission, values, and the people behind our exceptional service." />
            </Helmet>
            <img className='object-contain' src={Images[3]} />
            <div className='flex flex-col w-[92%] justify-evenly items-start py-10'>
                <h1 className="text-3xl text-[#145e45] font-bold">Make My Property</h1>
                <p className='font-light py-5 text-justify'>Welcome to MakeMyProperty, your trusted partner in the realm of real estate. At MakeMyProperty, we believe that finding the perfect home is more than a transaction, it's about creating a seamless and memorable experience. Our dedicated team of experts is committed to guiding you through every step of your property journey, making your dreams a reality.</p>
                <h2 className='text-2xl font-bold'>Our Mission</h2>
                <p className='font-light py-5 text-justify'>At the core of MakeMyProperty's mission is the unwavering commitment to helping you find not just a house, but a place you can truly call home. We strive to exceed your expectations by delivering personalized service, valuable insights, and a diverse range of property options tailored to your unique preferences and needs.</p>
                <h2 className='text-2xl font-bold'>Who We Are</h2>
                <p className='font-light py-5 text-justify'>MakeMyProperty is more than a real estate agency; we are a community of passionate professionals united by a common goal – to simplify and enrich the process of buying and selling properties. Our team brings together expertise in real estate, market trends, and client service to provide you with a comprehensive and unparalleled experience.</p>
                <h2 className='text-2xl font-bold'>What Sets Us Apart</h2>
                <p className='font-black text-[#145e45] py-5 text-justify'>Personalized Approach:<span className='font-light text-black py-5 text-justify'> We understand that each client is unique, and so are their needs. Our personalized approach ensures that your property journey is tailored to match your individual requirements.</span></p>
                <p className='font-black text-[#145e45] pb-5 text-justify'>Expert Guidance:<span className='font-light text-black py-5 text-justify'> Backed by years of industry experience, our team offers expert guidance on market trends, property valuation, and the entire real estate landscape. We keep you informed and empowered throughout the process.</span></p>
                <p className='font-black text-[#145e45] pb-5 text-justify'>Transparency and Integrity:<span className='font-light text-black py-5 text-justify'> Transparency is the foundation of our interactions. We prioritize clear communication and ethical practices, building trust with our clients at every stage.</span></p>
                <h2 className='text-2xl font-bold'>Meet Our Team</h2>
                <p className='font-light py-5 text-justify'>Behind MakeMyProperty's success is a team of dedicated professionals who are passionate about real estate. Get to know the faces that drive our commitment to excellence and meet the experts ready to assist you on your property journey.</p>
                <h2 className='text-2xl font-bold'>Contact Us</h2>
                <p className='font-light py-5 text-justify'>Ready to embark on your property adventure with MakeMyProperty? Whether you are buying, selling, or seeking expert advice, our team is here for you. Contact us today to experience the difference of working with a real estate partner that truly cares about your aspirations.
                    <button
                        onClick={() => {
                            navigate('/contact')
                        }}
                        className='bg-transparent text-[#145e45]'> &nbsp; Contact Now</button>
                </p>
            </div>
        </div>
    )
}
