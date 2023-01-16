export const getAllCompsReducer = (state = { compsarr: [] }, action) => {
    switch (action.type) {
        case 'GET_COMPS_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_COMPS_SUCCESS': return {
            loading: false,
            compsarr: action.payload
        }
        case 'GET_COMPS_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}

export const addCompReducer = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_COMP_REQUEST': return {
            loading: true,
            ...state
        }
        case 'ADD_COMP_SUCCESS': return {
            loading: false,
            success: true,
        }
        case 'ADD_COMP_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }

}

export const getCompByIdReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_COMPYID_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_COMPBYID_SUCCESS': return {
            loading: false,
            comp: action.payload
        }
        case 'GET_COMPBYID_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }

}



export const editCompReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_COMP_REQUEST': return {
            editloading: true,
            ...state
        }
        case 'EDIT_COMP_SUCCESS': return {
            editloading: false,
            editsuccess: true,
        }
        case 'EDIT_COMP_FAILED': return {
            editerror: action.payload,
            editloading: false
        }
        default: return state
    }
}