import axios from "axios";

export const getAllComps = () => async dispatch => {
    dispatch({ type: 'GET_COMPS_REQUEST' })
    try {
        const response = await axios.get('/api/comps/getallcomps')
        console.log(response);
        dispatch({ type: 'GET_COMPS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_COMPS_FAILED', payload: error })

    }

}


export const filterComps = (searchkey, categorie) => async dispatch => {


    dispatch({ type: 'GET_COMPS_REQUEST' })

    try {
        var filteredComps;
        const response = await axios.get('/api/comps/getallcomps')
        filteredComps = response.data.filter(comp => comp.nom.toLowerCase().includes(searchkey))

        if (categorie !== 'all') {
            filteredComps = response.data.filter(comp => comp.categorie === categorie)

        }


        dispatch({ type: 'GET_COMPS_SUCCESS', payload: filteredComps })
    } catch (error) {
        dispatch({ type: 'GET_COMPS_FAILED', payload: error })
        console.log(error)
    }

}

export const filterCompsbyPrice = (isActive) => async dispatch => {


    dispatch({ type: 'GET_COMPS_REQUEST' })

    try {
        var filteredComps;
        const response = await axios.get('/api/comps/getallcomps')

        if (isActive) {
            filteredComps = response.data.sort((a, b) => parseInt(a.prix) - parseInt(b.prix))

        }

        if (!isActive) {
            filteredComps = response.data.sort((a, b) => parseInt(b.prix) - parseInt(a.prix))

        }

        dispatch({ type: 'GET_COMPS_SUCCESS', payload: filteredComps })
    } catch (error) {
        dispatch({ type: 'GET_COMPS_FAILED', payload: error })
        console.log(error)
    }

}


export const addComp = (comp) => async dispatch => {
    dispatch({ type: 'ADD_COMP_REQUEST' })
    try {
        const response = await axios.post('/api/comps/addcomp', { comp })
        console.log(response);
        dispatch({ type: 'ADD_COMP_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'ADD_COMP_FAILED', payload: error })
    }
}

export const getCompById = (compid) => async dispatch => {

    dispatch({ type: 'GET_COMPBYID_REQUEST' })

    try {
        const response = await axios.post('/api/comps/getcompbyid', { compid })
        console.log(response);
        dispatch({ type: 'GET_COMPBYID_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_COMPBYID_FAILED', payload: error })
    }

}



export const editComp = (editedcomp) => async dispatch => {
    dispatch({ type: 'EDIT_COMP_REQUEST' })
    try {
        const response = await axios.post('/api/comps/editcomp', { editedcomp })
        console.log(response);
        dispatch({ type: 'EDIT_COMP_SUCCESS' })

    } catch (error) {
        dispatch({ type: 'EDIT_COMP_FAILED', payload: error })
    }

}

export const deleteComp = (compid) => async dispatch => {
    try {
        const response = await axios.post('/api/comps/deletecomp', { compid })
        alert('Produit supprimé avec succès')
        console.log(response);
        window.location.reload()
    } catch (error) {
        alert('Something went wrong')
        console.log(error);
    }
}