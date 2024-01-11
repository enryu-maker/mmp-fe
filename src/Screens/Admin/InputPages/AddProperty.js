import React from 'react'
import ReactPlayer from 'react-player/lazy'
export default function AddProperty() {
    const [data, setData] = React.useState({
        name: '',
        address: '',
        type: '',
        developer: '',
        rera: '',
        possesion: '',
        map: '',
        images: '',
        apparement: '',
        amenities: '',
        builder: '',
        city: '',
    })
    const [selectedFile, setSelectedFile] = React.useState("No file chosen");
    const [file, setFile] = React.useState("");
    function handleChange(e) {
        setSelectedFile(e.target.files.length > 1 ? `${e.target.files.length} files selected` : e.target.files[0].name)
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div className="flex flex-col  w-full  justify-evenly items-start">
            <div className="flex min-h-full flex-1 flex-col w-full justify-center px-6 py-6  bg-white lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-4xl font-bold leading-9 text-gray-900 tracking-widest">
                        Add Property
                    </h2>
                </div>

                <div className="mt-10 space-y-2 flex w-[100%] flex-wrap justify-evenly items-start">
                    <div className='lg:w-[40%] w-full'>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Property Name
                        </label>
                        <div className="mt-2">
                            <input
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-full'>
                        <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                            Property Address
                        </label>
                        <div className="mt-2">
                            <textarea
                                value={data.address}
                                onChange={(e) => setData({ ...data, address: e.target.value })}
                                id="address"
                                name="address"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-full'>
                        <label htmlFor="link" className="block text-sm font-medium leading-6 text-gray-900">
                            Property Type
                        </label>
                        <div className="mt-2">
                            <select
                                value={data.type}
                                onChange={
                                    (e) => setData({ ...data, type: e.target.value })
                                } className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="">Select Property Type</option>
                                <option value="Residental">Residental</option>
                                <option value="Commercial">commercial</option>
                                <option value="NA Plots">NA Plots</option>
                            </select>
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-full'>
                        <label htmlFor="developer" className="block text-sm font-medium leading-6 text-gray-900">
                            Property Developer Name
                        </label>
                        <div className="mt-2">
                            <input
                                value={data.developer}
                                onChange={(e) => setData({ ...data, developer: e.target.value })}
                                id="developer"
                                name="developer"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-full'>
                        <label htmlFor="rera" className="block text-sm font-medium leading-6 text-gray-900">
                            RERA Number
                        </label>
                        <div className="mt-2">
                            <input
                                value={data.rera}
                                onChange={(e) => setData({ ...data, rera: e.target.value })}
                                id="rera"
                                name="rera"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-full'>
                        <label htmlFor="link" className="block text-sm font-medium leading-6 text-gray-900">
                            Possesion Type
                        </label>
                        <div className="mt-2">
                            <select
                                value={data.possesion}
                                onChange={(e) => setData({ ...data, possesion: e.target.value })}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="">Select Possesion Type</option>
                                <option value="Ready to move">Ready to move</option>
                                <option value="Under Construction">Under Construction</option>
                            </select>
                        </div>
                    </div>
                    {/* Appartment Details */}
                    <div className='lg:w-[40%] w-full'>
                        <label htmlFor="map" className="block text-sm font-medium leading-6 text-gray-900">
                            Google Map Link
                        </label>
                        <div className="mt-2">
                            <input
                                value={data.map}
                                onChange={(e) => setData({ ...data, map: e.target.value })}
                                id="map"
                                name="map"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-full'>
                        <label htmlFor="link" className="block text-sm font-medium leading-6 text-gray-900">
                            Property Images
                        </label>
                        <div class="flex flex-row items-center mt-2">
                            <input
                                type="file"
                                id="custom-input"
                                onChange={handleChange}
                                hidden
                                multiple
                            />
                            <label
                                for="custom-input"
                                className="block text-sm text-white mr-4 py-2 px-4
                                        rounded-md border-0  font-semibold bg-indigo-600
                                        cursor-pointer"
                            >
                                Choose file
                            </label>
                            <label class="text-sm text-black">{selectedFile}</label>
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-full'>
                        <label htmlFor="link" className="block text-sm font-medium leading-6 text-gray-900">
                            Appartment Details
                        </label>
                        <div className="mt-2">
                            <input
                                value={data.apparement}
                                onChange={(e) => setData({ ...data, apparement: e.target.value })}
                                id="apparement"
                                name="apparement"
                                type="text"
                                placeholder='2 BHK | 3 BHK'
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-full'>
                        <label htmlFor="amenities" className="block text-sm font-medium leading-6 text-gray-900">
                            Amenities
                        </label>
                        <div className="mt-2">
                            <input
                                value={data.amenities}
                                onChange={(e) => setData({ ...data, amenities: e.target.value })}
                                id="amenities"
                                name="amenities"
                                type="text"
                                placeholder='Water | Electricity | Parking'
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-full'>
                        <label htmlFor="link" className="block text-sm font-medium leading-6 text-gray-900">
                            About Builder
                        </label>
                        <div className="mt-2">
                            <input
                                value={data.builder}
                                onChange={(e) => setData({ ...data, builder: e.target.value })}
                                id="builder"
                                name="builder"
                                type="text"
                                placeholder='Name | Contact | Email | Website'
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-full'>
                        <label htmlFor="link" className="block text-sm font-medium leading-6 text-gray-900">
                            City
                        </label>
                        <div className="mt-2">
                            <input
                                value={data.city}
                                onChange={(e) => setData({ ...data, city: e.target.value })}
                                id="city"
                                name="city"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-full'>
                        <button
                            type="submit"
                            className="flex w-full m-5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Add Review
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center px-6 py-6  bg-white lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <h2 className="text-center text-4xl font-bold leading-9 text-gray-900 tracking-widest">
                        Preview
                    </h2>
                </div>
                <div className="mt-4 space-y-2.5 w-full flex flex-col rounded-sm justify-center items-center">
                    <img src={file} className='w-full h-[350px]' />
                    <div className=' mt-5 rounded-lg flex flex-col justify-start items-start w-full border p-2 space-y-2'>
                        <h1 className='text-start text-3xl font-bold text-black tracking-widest'>Overview</h1>
                        <hr className='w-full' />
                        <p className='text-start text-lg font-medium text-black'>Property Name:<span className='text-gray-500'> {data.name}</span></p>
                        <p className='text-start text-lg font-medium text-black'>Property Address:<span className='text-gray-500'> {data.address}</span></p>
                        <p className='text-start text-lg font-medium text-black'>Property Type:<span className='text-gray-500'> {data.type}</span></p>
                        <p className='text-start text-lg font-medium text-black'>Possesion Type:<span className='text-gray-500'> {data.possesion}</span></p>
                        <p className='text-start text-lg font-medium text-black'>RERA No:<span className='text-gray-500'> {data.rera}</span></p>

                    </div>
                    <div className=' mt-20 rounded-lg flex flex-col justify-start items-start w-full border p-2 space-y-2'>
                        <h1 className='text-start text-3xl font-bold text-black tracking-widest'>Apartment Details</h1>
                        <hr className='w-full' />
                        {
                            data.apparement.split('|').map((item) => {
                                return (
                                    <div className='flex flex-row items-center justify-start space-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                                        </svg>
                                        <p className='text-start text-lg font-medium text-black'>{item}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className=' mt-20 rounded-lg flex flex-col justify-start items-start w-full border p-2 space-y-2'>
                        <h1 className='text-start text-3xl font-bold text-black tracking-widest'>Google Maps</h1>
                        <hr className='w-full' />
                        <iframe src={data.map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-[95%] self-center  h-[400px] lg:h-[500px]'></iframe>
                    </div>
                    <div className=' mt-20 rounded-lg flex flex-col justify-start items-start w-full border p-2 space-y-2'>
                        <h1 className='text-start text-3xl font-bold text-black tracking-widest'>Amenities</h1>
                        <hr className='w-full' />
                        {
                            data.amenities.split('|').map((item) => {
                                return (
                                    <div className='flex flex-row items-center justify-start space-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={"#008000"} className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>

                                        <p className='text-start text-lg font-medium text-black'>{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className=' mt-20 rounded-lg flex flex-col justify-start items-start w-full border p-2 space-y-2'>
                        <h1 className='text-start text-3xl font-bold text-black tracking-widest'>About Builder</h1>
                        <hr className='w-full' />
                        {
                            data.builder.split('|').map((item) => {
                                return (
                                    <div className='flex flex-row items-center justify-start space-x-2'>
                                        <p className='text-start text-lg font-medium text-black'>{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}