const SET_SORT_BY = 'SET_SORT_BY'
const SET_FILTER_BY = 'SET_FILTER_BY'


let initialState = {
    sortBy: [],
    filterBy: [],

}

let filterReducer = ( state = initialState, action) => {
    switch(action.type) {
        case SET_SORT_BY: {
            return{...state, sortBy: action.sortBy }
        }
        case SET_FILTER_BY: {
            return{...state, filterBy: action.filterBy }
        }
        default: {
            return state
        }
    }
}

export default filterReducer

export const setSortByActionCreator = (sortBy) => {
    return {
        type: SET_SORT_BY, sortBy
    }
}
export const setFilterByActionCreator = (filterBy) => {
    return {
        type: SET_FILTER_BY, filterBy
    }
}