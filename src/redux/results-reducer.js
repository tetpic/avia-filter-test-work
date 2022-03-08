const TEST_ACTION = 'TEST_ACTION'
const SET_FILTERED_DATA = 'SET_FILTERED_DATA'

let initialstate = {
    filteredData: [],
    // depInput: '23',
    // arrivalInput: '42',
    results: ['test1', 'test2']

}


const resultReducer =(state = initialstate, action) => {
    switch(action.type) {
        case TEST_ACTION: {
            return null
        }
        case SET_FILTERED_DATA: {
            return {...state, filteredData: [...action.filteredData]}
        }
        default: {
            return state
        }
    }

}

export default resultReducer

export const startSearchActionCreator = (arr) => {
    return {
        type: TEST_ACTION, arr
    }
}

export const setFilteredDataActionCreator = (filteredData) => {
    return {
        type: SET_FILTERED_DATA, filteredData
    }
}