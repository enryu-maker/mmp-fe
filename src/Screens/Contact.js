import React from 'react'
import { Images } from '../Constants/Images'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { submitContact } from '../Store/actions'
import { Oval } from 'react-loader-spinner'
export default function Contact() {
    const [data, setData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: ''
    })
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    const dispatch = useDispatch()
    return (
        <div className='bg-[#ebf3eb60] pt-20 font-nunito'>
            <Helmet>
                <title>Get in Touch with MakeMyProperty - Your Real Estate Partners</title>
                <meta name="description" content="Contact MakeMyProperty for personalized assistance in your property journey. Reach out to our dedicated team for inquiries, consultations, and expert guidance." />
            </Helmet>
            <img className='object-contain' src={Images[4]} />
            <div className='flex flex-col lg:flex-row justify-evenly items-start py-10'>
                <div className='flex flex-wrap justify-evenly items-center w-full lg:w-[60%]'>
                    <input
                        value={data.name}
                        onChange={(text) => {
                            setData({ ...data, name: text.target.value })
                        }}
                        className='w-[92%] border-gray-300 font-semibold outline-none lg:w-[44%]  h-[50px] bg-white rounded-lg mb-2 lg:mb-5 px-2' placeholder='Name*' />
                    <input
                        value={data.email}
                        onChange={(text) => {
                            setData({ ...data, email: text.target.value })
                        }}
                        className='w-[92%] border-gray-300 font-semibold outline-none lg:w-[44%] h-[50px] bg-white rounded-lg mb-2 lg:mb-5 px-2' placeholder='Email*' />
                    <input value={data.phone}
                        onChange={(text) => {
                            setData({ ...data, phone: text.target.value })
                        }} className='w-[92%] border-gray-300 font-semibold outline-none lg:w-[44%] h-[50px] bg-white rounded-lg mb-2 lg:mb-5 px-2' placeholder='Phone*' />
                    <input value={data.subject}
                        onChange={(text) => {
                            setData({ ...data, subject: text.target.value })
                        }} className='w-[92%] border-gray-300 font-semibold outline-none lg:w-[44%] h-[50px] bg-white rounded-lg mb-2 lg:mb-5 px-2' placeholder='Subject*' />
                    <textarea value={data.message}
                        onChange={(text) => {
                            setData({ ...data, message: text.target.value })
                        }} className='w-[92%] border-gray-300 font-semibold outline-none lg:w-[92%] h-[100px] px-2 bg-white rounded-lg mb-2 lg:mb-5' placeholder='Message*' />
                    <button
                        onClick={() => {
                            dispatch(submitContact(data, setLoading))
                        }}
                        className='w-[92%] flex justify-center items-center lg:w-[34%] h-[50px] bg-[#145e45] text-lg rounded-lg text-white font-bold my-5 lg:mb-5 '>
                        {
                            loading ? <Oval color='#fff' height={20} width={20} /> : 'Submit Enquiry'
                        }
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center w-full lg:w-[40%]'>
                    <h1 className='lg:text-4xl w-[88%] text-start text-3xl font-black text-[#145e45] tracking-widest'>Get In Touch</h1>
                    <p className='text-start w-[88%] mt-5 text-gray-500'>Drop your requirments we will get back to you as soon as possible.</p>
                    <div className='flex flex-row items-start justify-start w-[88%] mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <div className='flex flex-col items-start justify-start ml-2'>
                            <h1 className='text-start font-black text-gray-500'>Drop A Mail</h1>
                            <button
                                onClick={() => {
                                    window.open('mailto:info@makemyproperties.co.in')
                                }}
                                className='text-start ml-2 text-gray-500'>info@makemyproperties.co.in</button>
                        </div>
                    </div>
                    <div className='flex flex-row items-start justify-start w-[88%] mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div className='flex flex-col items-start justify-start ml-2'>
                            <h1 className='text-start font-black text-gray-500'>Call Us</h1>
                            <button
                                onClick={() => {
                                    window.open('tel:+919029263511')
                                }}
                                className='text-start ml-2 text-gray-500'>+91 9029263511</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center self-center justify-center pb-8'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.958146718312!2d73.76152907520806!3d20.010271221979554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb91ba094e0f%3A0x4db062f92da39292!2sKBT%20Circle!5e0!3m2!1sen!2sin!4v1704819032832!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-[95%] self-center  h-[400px] lg:h-[500px]'></iframe>
            </div>
        </div>
    )
}
