import axios from "axios"
import axiosIns, { baseURL } from "../Constants/Helper"

export const Init = () => {
    const access = localStorage.getItem('access')
    console.log(access)
    return async dispatch => {
        dispatch({ type: 'LOGIN', payload: access })
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

export const GetBlogs = () => {
    return async dispatch => {
        await axios.get(baseURL+'/getblogs/').then(res => {
            if (res.status === 200) {
                console.log(res)
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
        await axios.get(baseURL+'/getcustomerreviews/').then(res => {
            if (res.status === 200) {
                console.log(res)
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
    formData.append('name', data.title)
    formData.append('bannerImage', data.bannerImage)
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
        await axios.get(baseURL+'/getbanners/').then(res => {
            if (res.status === 200) {
                console.log(res)
                dispatch({ type: 'GET_BANNER', payload: res.data })
            }
            else {
                console.log(res)
            }
        })
    }
}