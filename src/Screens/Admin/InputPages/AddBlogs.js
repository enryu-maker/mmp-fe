import React from 'react'
import { useDispatch } from 'react-redux';
import { PostBlogs } from '../../../Store/actions';
import { Oval } from 'react-loader-spinner';

export default function AddBlogs() {
    const [selectedFile, setSelectedFile] = React.useState("No file chosen");
    const [data, setData] = React.useState({
        id: "",
        date: "",
        title: "",
        description: "",
    })
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
    const [file, setFile] = React.useState();
    function handleChange(e) {
        setSelectedFile(e.target.files[0])
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="flex flex-col lg:flex-row w-full  justify-evenly items-start">
            <div className="flex min-h-full flex-1 flex-col w-full justify-center px-6 py-6 bg-[#ebf3eb60] lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-4xl font-bold leading-9 text-gray-900 tracking-widest">
                        Add Blog
                    </h2>
                </div>

                <div className="mt-10 space-y-2  sm:mx-auto sm:max-w-sm w-full">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Blog ID
                        </label>
                        <div className="mt-2">
                            <input
                                value={data?.id}
                                onChange={(e) => setData({ ...data, id: e.target.value })}
                                id="id"
                                name="id"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#145e45] sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                            Blog Date
                        </label>
                        <div className="mt-2">
                            <input
                                value={data?.date}
                                onChange={(e) => setData({ ...data, date: e.target.value })}
                                id="date"
                                name="date"
                                type="date"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#145e45] sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Blog Title
                        </label>
                        <div className="mt-2">
                            <input
                                value={data?.title}
                                onChange={(e) => setData({ ...data, title: e.target.value })}
                                id="email"
                                name="title"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#145e45] sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Blog Description
                            </label>
                        </div>
                        <div className="mt-2">
                            <textarea
                                id="description"
                                name="description"
                                value={data?.description}
                                onChange={(e) => setData({ ...data, description: e.target.value })}
                                type="text"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#145e45] sm:text-sm sm:leading-6 h-[180px]"
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
                                        rounded-md border-0  font-semibold bg-[#145e45]
                                        cursor-pointer"
                            >
                                Choose file
                            </label>
                            <label class="text-sm text-black">{selectedFile?.name}</label>
                        </div>
                    </div>
                    <div className="mt-2">
                        <button
                            type="submit"
                            onClick={() => {
                                data.image = selectedFile
                                dispatch(PostBlogs(data, setLoading))
                            }}
                            className="flex w-full justify-center rounded-md bg-[#145e45] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#145e45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#145e45]"
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
                                    "Add Blog"
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
                <div className="mt-10 space-y-2.5 w-full lg:w-[400px] flex justify-center items-center">
                    <div className='flex flex-col shadow-xl rounded-lg items-center justify-center space-y-2'>
                        <img
                            src={file}
                            alt='blog'
                            className='h-[220px] w-[100%] rounded-lg' />
                        <h1 className='text-sm text-start w-[95%] font-light text-gray-500'>{data?.date}</h1>
                        <h1 className='text-xl text-start w-[95%] font-bold'>{data?.title}</h1>
                        <p className='text-start w-[95%] text-gray-500'>{data?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
