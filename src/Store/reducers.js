const initialState = {
    banner: [],
    nearBy: [],
    suggestions: [],
    reviews: [],
    blog: [],
    properties: [],
    access: null,
    city: null,
}

export default (state = initialState, action) => {

    switch (action.type) {
        case "GET_BANNER":
            return {
                ...state,
                banner: action.payload
            }
        case "GET_NEAR_BY":
            return {
                ...state,
                nearBy: action.payload
            }
        case "GET_LOCATION":
            return {
                ...state,
                city: action.payload
            }
        case "GET_SUGGESTIONS":
            return {
                ...state,
                suggestions: action.payload
            }
        case "GET_REVIEWS":
            return {
                ...state,
                reviews: action.payload
            }
        case "GET_BLOG":
            return {
                ...state,
                blog: action.payload
            }
        case "GET_PROPERTIES":
            return {
                ...state,
                properties: action.payload
            }
        case 'LOGIN':
            return {
                ...state,
                access: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                access: null
            }
        default:
            return state;
    }
    return state;
}