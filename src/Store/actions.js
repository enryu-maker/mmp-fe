import axios from "axios"
import axiosIns, { baseURL } from "../Constants/Helper"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Init = () => {
    const access = localStorage.getItem('access')
    console.log(access)
    return async dispatch => {
        dispatch({ type: 'LOGIN', payload: access })
    }
}

export const getLocation = () => {
    return async dispatch => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                axios.get(baseURL + '/getnearby/'+ position.coords.latitude + '/' + position.coords.longitude).
                    then((res) => {
                        dispatch({
                            type: 'GET_NEAR_BY',
                            payload: res.data,
                        })
                    }
                    )
            });
        } else {
            toast.error("Geolocation is not available in your browser.", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
}

export const LoginAction = (email, password, setLoading, navigate) => {
    setLoading(true)
    return async dispatch => {
        await axios.post(baseURL + '/login/', {
            email: email,
            password: password
        }).then(res => {
            if (res.status === 200) {
                console.log(res)
                localStorage.setItem('access', res.data.access)
                dispatch({ type: 'LOGIN', payload: res.data.access })
                setLoading(false)
                navigate('/admin')
            }
            else {
                console.log(res)
                setLoading(false)
            }
        })
    }
}

export const LogoutAction = () => {
    localStorage.removeItem('access')
    return async dispatch => {
        dispatch({ type: 'LOGOUT' })
    }
}

export const PostBlogs = (data, setLoading) => {
    setLoading(true)
    const formData = new FormData();
    formData.append('id', data.id)
    formData.append('date', data.date)
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('blogImage', data.image)
    console.log(formData)
    return async dispatch => {
        await axiosIns.post('/postblog/', formData).then(res => {
            if (res.status === 201) {
                setLoading(false)
            }
            else {
                console.log(res)
                setLoading(false)
            }
        }
        )
    }
}

export const GetBlogs = () => {
    return async dispatch => {
        await axios.get(baseURL + '/getblogs/').then(res => {
            if (res.status === 200) {
                dispatch({ type: 'GET_BLOG', payload: res.data })
            }
            else {
                console.log(res)
            }
        })
    }
}

export const PostReview = (data, setLoading) => {
    setLoading(true)
    return async dispatch => {
        await axiosIns.post('/postcustomerreview/', data).then(res => {
            if (res.status === 201) {
                console.log(res)
                setLoading(false)
            }
            else {
                console.log(res)
                setLoading(false)
            }
        }
        )
    }
}

export const GetReviews = () => {
    return async dispatch => {
        await axios.get(baseURL + '/getcustomerreviews/').then(res => {
            if (res.status === 200) {
                dispatch({ type: 'GET_REVIEWS', payload: res.data })
            }
            else {
                console.log(res)
            }
        })
    }
}

export const PostBanner = (data, setLoading) => {
    setLoading(true)
    const formData = new FormData();
    formData.append("id", data.id)
    console.log(formData)
    return async dispatch => {
        await axiosIns.post('/postbanner/', formData).then(res => {
            if (res.status === 201) {
                console.log(res)
                setLoading(false)
            }
            else {
                console.log(res)
                setLoading(false)
            }
        }
        )
    }
}

export const GetBanner = () => {
    return async dispatch => {
        await axios.get(baseURL + '/getbanners/').then(res => {
            if (res.status === 200) {
                dispatch({ type: 'GET_BANNER', payload: res.data })
            }
            else {
                console.log(res)
            }
        })
    }
}

export const PostProperty = (data, setLoading) => {
    setLoading(true)
    const formData = new FormData();
    formData.append('id', data.id)
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('address', data.address)
    formData.append('city', data.city)
    formData.append('builder', data.builder)
    formData.append('developer', data.developer)
    formData.append('amenities', data.amenities)
    formData.append('apparement', data.apparement)
    formData.append('map', data.map)
    // formData.append('propertyImages', data.propertyImage)
    formData.append('possesion', data.possesion)
    formData.append('rera', data.rera)
    formData.append('type', data.type)
    Object.values(data.propertyImage).forEach(image => {
        formData.append('propertyImages', image)
    })

    return async dispatch => {
        await axiosIns.post('/postproperty/', formData).then(res => {
            if (res.status === 201) {
                console.log(res)
                // alert(res.data.message)
                setLoading(false)
            }
            else {
                console.log(res)
                setLoading(false)
            }
        }
        )
    }
}


export const GetProperties = () => {
    return async dispatch => {
        await axios.get(baseURL + '/getallproperties/').then(res => {
            if (res.status === 200) {
                dispatch({ type: 'GET_PROPERTIES', payload: res.data })
            }
            else {
                console.log(res)
            }
        })
    }
}

export const GetPropertiesById = (id, setData, setLoading) => {
    setLoading(true)
    return async dispatch => {
        await axios.get(baseURL + '/getbyid/' + id).then(res => {
            if (res.status === 200) {
                console.log(res)
                setData(res.data)
                setLoading(false)
            }
            else {
                console.log(res)
                setLoading(false)
            }
        })
    }
}

export const GetPropertiesByCity = (city) => {
    return async dispatch => {
        await axios.get(baseURL + '/search/' + city).then(res => {
            if (res.status === 200) {
                dispatch({ type: 'GET_NEAR_BY', payload: res.data })
            }
            else {
                console.log(res)
            }
        })
    }
}

export const Getbytype = (data) => {
    console.log(data)
    return async dispatch => {
        await axios.get(baseURL + '/getbytype/' + data).then(res => {
            if (res.status === 200) {
                console.log(res.data)
                dispatch({ type: 'GET_SEARCH', payload: res.data })
            }
            else {
                console.log(res)
            }
        })
    }
}

export const SearchProperties = (data, setProperty, setLoading) => {
    setLoading(true)
    return async dispatch => {
        await axios.get(baseURL + '/search/' + data).then(res => {
            if (res.status === 200) {
                setProperty(res.data)
                setLoading(false)
            }
            else {
                console.log(res)
                setLoading(false)
            }
        })
    }
}


export const GetSuggestedProperties = () => {
    return async dispatch => {
        await axios.get(baseURL + '/getsuggested/').then(res => {
            if (res.status === 200) {
                dispatch({ type: 'GET_SUGGESTIONS', payload: res.data })
            }
            else {
                console.log(res)
            }
        })
    }
}