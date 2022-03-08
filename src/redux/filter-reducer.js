const SET_SORT_BY = 'SET_SORT_BY'
const SET_FILTER_BY = 'SET_FILTER_BY' 
const SET_AIRLINES = 'SET_AIRLINES'
// const SET_AIRLINES_FILTER = 'SET_AIRLINES_FILTER'
// const SET_FILTERED_DATA = 'SET_FILTERED_DATA' 
// const SET_MAX_COST = 'SET_MAX_COST' 
// const SET_MIN_COST = 'SET_MIN_COST' 
// const COST_UP = 'COST_UP' 
// const COST_DOWN = 'COST_DOWN' 
// const TRAVEL_TIME = 'TRAVEL_TIME' 
// const ONE_CHANGE = 'ONE_CHANGE' 
// const NO_CHANGE = 'NO_CHANGE' 


let initialState = {
    sortBy: '',
    filterBy: '',
    airLines: [],

    // filteredData: [],
    // minCost: '',
    // maxCost: '',
   

}

let filterReducer = ( state = initialState, action) => {
    switch(action.type) {
        case SET_SORT_BY: {
            
            return{...state, sortBy: action.sortBy }
        }
        case SET_FILTER_BY: {
            
            return{...state, filterBy: action.filterBy }
        }
        case SET_AIRLINES: {
            return{...state, airLines: [...action.airlines] }
        }
        // case SET_AIRLINES_FILTER: {
        //     return{state, airlinesFilter: [...action.airlinesFilter]}
        // }
        // case SET_MAX_COST: {

            
        //     return{...state, filterBy: action.filterBy }
        // }
        // case SET_MIN_COST: {
            
        //     return{...state, filterBy: action.filterBy }
        // }
        // case COST_UP: {
         
            
        //     return{...state,  }
        // }
        // case COST_DOWN: {
           
            
        //     return{...state, filterBy: action.filterBy }
        // }
        // case TRAVEL_TIME: {
            
        //     return{...state, filterBy: action.filterBy }
        // }
        // case ONE_CHANGE: {
            
        //     return{...state, filterBy: action.filterBy }
        // }
        // case NO_CHANGE: {
        //     return{...state, filterBy: action.filterBy }
        // }
        // case SET_FILTERED_DATA: {
        //     return{...state, filteredData: action.filteredData }
        // }
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
export const setAirlinesActionCreator = (airlines) => {
    return {
        type: SET_AIRLINES, airlines
    }
}
// export const setAirlinesFilterActionCretor = (filteredAirlines) => {
//     return {
//         type: SET_AIRLINES_FILTER, filteredAirlines
//     }
    
// }
// export const setFilteredDataActionCreator = (filteredData) => {
//     return {
//         type: SET_FILTERED_DATA, filteredData
//     }
// }
// export const setCostUpActionCreator = () => {
//     return {
//         type: COST_UP, 
//     }
// }
