const SET_FILTERED_DATA = 'SET_FILTERED_DATA'

let initialstate = {
    filteredData: [],
}


const resultReducer =(state = initialstate, action) => {
    switch(action.type) {
        case SET_FILTERED_DATA: {
            return {...state, filteredData: [...action.filteredData]}
        }
        default: {
            return state
        }
    }
}

export default resultReducer

export const setFilteredDataActionCreator = (filteredData) => {
    return {
        type: SET_FILTERED_DATA, filteredData
    }
}