import { useDispatch } from "react-redux"
import React from 'react'
import { LoginAction } from "../../Store/actions"
import { Oval } from "react-loader-spinner"
import { useNavigate } from "react-router-dom"
import { Images } from "../../Constants/Images"
export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = React.useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 mt-20 bg-[#ebf3eb60] lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="flex lg:flex-1 flex-col justify-center items-center space-x-2 ">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="w-auto h-12 " src={Images.logo1} alt="" />
                    </a>
                    <p className='text-lg font-nunito m-0 p-0 font-black text-[#145e45] text-end tracking-widest'>Make <span className='text-sm font-normal'>My</span> Property</p>

                </div>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your admin account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={data.email}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#145e45] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={data.password}
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#145e45] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={() => {
                                    dispatch(LoginAction(data.email, data.password, setLoading,navigate))
                                }}
                                className="mt-5 flex w-full justify-center items-center rounded-md bg-[#145e45] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#145e45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#145e45]"
                            >
                                {
                                    loading ?
                                        <Oval
                                            visible={true}
                                            height="20"
                                            width="20"
                                            color="#ffffff"
                                            ariaLabel="oval-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                        />
                                        :
                                        " Sign in"
                                }
                            </button>
                        </div>
                </div>
            </div>
        </>
    )
}
