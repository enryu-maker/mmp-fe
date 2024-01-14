import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { useDispatch } from 'react-redux'
import { PostReview } from '../../../Store/actions'
import { Oval } from 'react-loader-spinner'
export default function AddReview() {
    const [data, setData] = React.useState({
        id: "",
        name: '',
        link:''
    })
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <div className="flex flex-col lg:flex-row w-full  justify-evenly items-start">
            <div className="flex min-h-full flex-1 flex-col w-full justify-center px-6 py-6  bg-[#ebf3eb60]lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-4xl font-bold leading-9 text-gray-900 tracking-widest">
                        Add Review
                    </h2>
                </div>

                <div className="mt-10 space-y-2  sm:mx-auto sm:max-w-sm w-full">
                <div>
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                            Review ID
                        </label>
                        <div className="mt-2">
                            <input
                                value={data?.id}
                                onChange={(e) => setData({ ...data, id: e.target.value })}
                                id="title"
                                name="title"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                            Review Title
                        </label>
                        <div className="mt-2">
                            <input
                                value={data?.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                id="title"
                                name="title"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="link" className="block text-sm font-medium leading-6 text-gray-900">
                            Review Link
                        </label>
                        <div className="mt-2">
                            <input
                                value={data?.link}
                                onChange={(e) => setData({ ...data, link: e.target.value })}
                                id="link"
                                name="link"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            onClick={() => {
                                dispatch(PostReview(data, setLoading))
                            }}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#145e45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                                "Add Review"
                           }
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full lg:w-[50%] justify-center items-center px-6 py-6  bg-[#ebf3eb60] lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <h2 className="mt-10 text-center text-4xl font-bold leading-9 text-gray-900 tracking-widest">
                        Preview
                    </h2>
                </div>
                <div className="mt-10 space-y-2.5 w-full lg:w-[400px] flex flex-col rounded-sm justify-center items-center">
                <ReactPlayer url={data.link}/>
                <h1 className='text-center text-2xl font-bold text-[#5444e4] tracking-widest'>{data.name}</h1>
                </div>
            </div>
        </div>
  )
}
