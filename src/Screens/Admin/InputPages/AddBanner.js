import React from 'react'
import { useDispatch } from 'react-redux'
import { PostBanner } from '../../../Store/actions'
import { Oval } from 'react-loader-spinner'
export default function AddBanner() {
    const [selectedFile, setSelectedFile] = React.useState("No file chosen");
    const [data, setData] = React.useState({
        title: "",
    })
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
    const [file, setFile] = React.useState();
    function handleChange(e) {
        setSelectedFile(e.target.files[0])
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <div className="flex flex-col lg:flex-row w-full  justify-evenly items-start">
            <div className="flex min-h-full flex-1 flex-col w-full justify-center px-6 py-6  bg-white lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-4xl font-bold leading-9 text-gray-900 tracking-widest">
                        Add Banner
                    </h2>
                </div>

                <div className="mt-10 space-y-2  sm:mx-auto sm:max-w-sm w-full">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                            Banner Title
                        </label>
                        <div className="mt-2">
                            <input
                                value={data?.title}
                                onChange={(e) => setData({ ...data, title: e.target.value })}
                                id="title"
                                name="title"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-row items-center">
                            <input
                                type="file"
                                id="custom-input"
                                onChange={handleChange}
                                hidden
                            />
                            <label
                                for="custom-input"
                                className="block text-sm text-white mr-4 py-2 px-4
                                        rounded-md border-0  font-semibold bg-indigo-600
                                        cursor-pointer"
                            >
                                Choose file
                            </label>
                            <label class="text-sm text-black">{selectedFile?.name}</label>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            onClick={() => {
                                data.bannerImage = selectedFile
                                dispatch(PostBanner(data, setLoading))
                            }}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                                "Add Banner"
                           }
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full lg:w-[50%] justify-center items-center px-6 py-6  bg-white lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <h2 className="mt-10 text-center text-4xl font-bold leading-9 text-gray-900 tracking-widest">
                        Preview
                    </h2>
                </div>
                <div className="mt-10 space-y-2.5 w-full lg:w-[400px] flex flex-col rounded-sm justify-center items-center">
                <img src={file} className='w-full' />
                <h1 className='text-center text-2xl font-bold text-[#5444e4] tracking-widest'>{data.title}</h1>
                </div>
            </div>
        </div>
  )
}
